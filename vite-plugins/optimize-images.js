import { readdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const RASTER_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  }))
  return files.flat()
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}kB`
}

// Resizes and re-compresses every raster image copied to dist/ so any photo
// dropped into public/ (e.g. a new Riad gallery) ships web-sized without
// needing manual editing before upload.
export function optimizeImages({ maxWidth = 2000 } = {}) {
  return {
    name: 'optimize-images',
    apply: 'build',
    async closeBundle() {
      const outDir = path.resolve('dist')
      const files = (await walk(outDir))
        .filter((f) => RASTER_EXT.has(path.extname(f).toLowerCase()))

      let totalBefore = 0
      let totalAfter = 0

      for (const file of files) {
        const before = (await stat(file)).size
        const ext = path.extname(file).toLowerCase()

        let buffer
        try {
          const image = sharp(file)
          const meta = await image.metadata()
          // EXIF orientation 5-8 means the stored pixels are rotated 90°/270°
          // relative to how the photo should display (common for phone JPEGs).
          // .rotate() with no args bakes that rotation into the pixels so the
          // result displays correctly even after metadata is stripped below.
          const isSideways = meta.orientation >= 5
          const displayWidth = isSideways ? meta.height : meta.width
          let pipeline = image.rotate()
          if (displayWidth > maxWidth) pipeline = pipeline.resize({ width: maxWidth })
          if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true })
          } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 })
          } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: 78 })
          }
          buffer = await pipeline.toBuffer()
        } catch (err) {
          console.warn(`[optimize-images] skipped unreadable file: ${file} (${err.message})`)
          totalBefore += before
          totalAfter += before
          continue
        }

        totalBefore += before
        if (buffer.length < before) {
          await writeFile(file, buffer)
          totalAfter += buffer.length
        } else {
          totalAfter += before
        }
      }

      if (files.length) {
        const saved = totalBefore - totalAfter
        const pct = totalBefore ? ((saved / totalBefore) * 100).toFixed(0) : 0
        console.log(
          `\n[optimize-images] ${files.length} images: ${formatKb(totalBefore)} → ${formatKb(totalAfter)} (-${pct}%)\n`
        )
      }
    },
  }
}
