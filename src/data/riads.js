// Catalogo Riad in vendita.
// Per aggiungere un nuovo Riad: crea una cartella /public/riadX con le foto,
// poi aggiungi un nuovo oggetto a questo array seguendo lo stesso schema.
//
// Campi da compilare quando disponibili:
//   price        -> prezzo in EUR (es. 350000) oppure null per "Prezzo su richiesta"
//   sizeSqm      -> superficie totale in mq
//   courtyardSqm -> superficie della corte interna in mq
//   bedrooms     -> numero di camere da letto
//   bathrooms    -> numero di bagni
//   floors       -> numero di piani (es. 2, oppure "2 + terrazza")
//   yearRenovated-> anno dell'ultima ristrutturazione
//   titleDeed    -> tipo di titolo di proprietà (es. "Titre Foncier", "Melkia")
//
// La sezione "Dettagli Tecnici" deve comparire su OGNI pagina Riad: se i
// valori reali non sono ancora noti, stimane di plausibili dalle foto e
// imposta specsIndicative: true (mostra la nota "valori indicativi" in UI).
// Sostituisci con i dati reali e rimuovi specsIndicative appena disponibili.
export const riads = [
  {
    id: 'riad-medina-marrakech-01',
    status: 'available', // available | reserved | sold
    location: 'Medina di Marrakech',
    price: null,
    // Stime indicative dalle foto, in attesa dei dati reali — sostituire appena disponibili.
    specsIndicative: true,
    sizeSqm: 250,
    courtyardSqm: 30,
    bedrooms: 4,
    bathrooms: 4,
    floors: 3,
    yearRenovated: null,
    titleDeed: null,

    titleIt: 'Riad Autentico nella Medina di Marrakech',
    titleEn: 'Authentic Riad in the Marrakech Medina',

    summaryIt: 'Corte interna in zellige verde smeraldo, stucchi intagliati e terrazza panoramica: un Riad storico restaurato con grande cura.',
    summaryEn: 'An emerald zellige courtyard, hand-carved stucco and a rooftop terrace: a historic Riad restored with real care.',

    descriptionIt: `
Nel cuore della Medina di Marrakech, questo Riad tradizionale conserva intatta l'anima architettonica marocchina: una corte interna a doppia altezza rivestita in zellige verde smeraldo a spina di pesce, sovrastata da un arco in stucco scolpito a mano (gebs) e circondata da balconate in legno di mashrabiya color turchese.

Al piano terra, il salone principale si apre sulla corte e conserva un caminetto in tadelakt verde, lanterne marocchine originali e travi a vista dipinte. Ogni ambiente racconta il lavoro artigianale tipico dei Riad storici della Medina: intarsi, ferro battuto e ceramiche smaltate a mano.

La terrazza sul tetto, pavimentata con zellige a chevron verde e bianco e protetta da mura color terracotta, offre uno spazio esterno privato ideale per vivere le serate marocchine, con vista sui tetti della Medina.

Un'opportunità rara per chi cerca un Riad autentico, già restaurato, con un forte potenziale sia come residenza esclusiva sia come struttura ricettiva boutique.
    `,
    descriptionEn: `
In the heart of the Marrakech Medina, this traditional Riad keeps its Moroccan architectural soul fully intact: a double-height inner courtyard clad in emerald green herringbone zellige, crowned by a hand-carved stucco arch (gebs) and framed by turquoise mashrabiya wood balconies.

On the ground floor, the main salon opens onto the courtyard and keeps a green tadelakt fireplace, original Moroccan lanterns and painted exposed beams. Every room reflects the artisanal craft typical of the Medina's historic Riads: inlays, wrought iron and hand-glazed ceramics.

The rooftop terrace, laid with green-and-white chevron zellige and enclosed by terracotta-toned walls, offers a private outdoor space perfect for Moroccan evenings, with views over the Medina rooftops.

A rare opportunity for anyone seeking an authentic, already-restored Riad with strong potential either as an exclusive residence or as a boutique guesthouse.
    `,

    highlightsIt: [
      'Corte interna in zellige verde smeraldo a spina di pesce',
      'Arco in stucco scolpito a mano (gebs) originale',
      'Balconate in legno di mashrabiya',
      'Salone con camino in tadelakt',
      'Terrazza panoramica con zellige a chevron',
    ],
    highlightsEn: [
      'Emerald herringbone zellige inner courtyard',
      'Original hand-carved stucco arch (gebs)',
      'Mashrabiya wood balconies',
      'Salon with tadelakt fireplace',
      'Rooftop terrace with chevron zellige',
    ],

    cover: '/riad1/riad1-01.jpg',
    images: [
      '/riad1/riad1-01.jpg',
      '/riad1/riad1-02.jpg',
      '/riad1/riad1-03.jpg',
      '/riad1/riad1-04.jpg',
      '/riad1/riad1-05.jpg',
    ],
    video: '/riad1/riad1-tour.mp4',
  },
  {
    id: 'riad-medina-marrakech-02',
    status: 'available', // available | reserved | sold
    location: 'Medina di Marrakech',
    price: null,
    // Stime indicative dalle foto, in attesa dei dati reali — sostituire appena disponibili.
    specsIndicative: true,
    sizeSqm: 320,
    courtyardSqm: 25,
    bedrooms: 6,
    bathrooms: 6,
    floors: 3,
    yearRenovated: null,
    titleDeed: null,

    titleIt: 'Riad su Tre Livelli con Corte in Zellige Blu e Bianco',
    titleEn: 'Three-Level Riad with Blue-and-White Zellige Courtyard',

    summaryIt: 'Corte interna su tre livelli aperta al cielo, zellige blu e bianco, soffitti in legno dipinto e ampia terrazza con gazebo.',
    summaryEn: 'A sky-lit inner courtyard rising three levels, blue-and-white zellige, painted wood ceilings and a wide terrace with a gazebo.',

    descriptionIt: `
Questo Riad si sviluppa su tre livelli attorno a un'unica corte interna aperta al cielo, rivestita dal pavimento alle pareti in zellige geometrico blu e bianco. Ogni piano si affaccia sulla corte con balconate in legno e ferro battuto, mentre porte intagliate in legno massiccio conducono alle stanze su tutti e tre i livelli.

I soffitti conservano le travi in legno dipinto a mano secondo la tradizione dello zouak, e lanterne marocchine in ferro battuto illuminano gli spazi comuni. Al centro della corte, una piccola fontana in pietra è circondata da un giardino interno rigoglioso di banani, palme e piante da agrumi in vasi di terracotta.

La terrazza sul tetto è ampia e pavimentata in cotto esagonale, con un gazebo in tessuto per l'ombra, un'area pranzo all'aperto, un pergolato con piante rampicanti e una piccola veranda vetrata. Uno spazio esterno privato ideale per vivere le serate marocchine con vista sui tetti della Medina.

Un Riad di grande carattere, con ampi spazi distribuiti su più livelli, adatto sia come residenza signorile sia come struttura ricettiva boutique.
    `,
    descriptionEn: `
This Riad unfolds over three levels around a single sky-lit inner courtyard, clad from floor to wall height in geometric blue-and-white zellige. Every floor opens onto the courtyard through wood-and-wrought-iron balustrades, while solid carved wood doors lead to the rooms on all three levels.

The ceilings keep their hand-painted wood beams in the traditional zouak style, and wrought-iron Moroccan lanterns light the shared spaces. At the centre of the courtyard, a small stone fountain is surrounded by a lush inner garden of banana palms, palm trees and potted citrus in terracotta pots.

The rooftop terrace is generous and laid with hexagonal terracotta tile, with a fabric gazebo for shade, an outdoor dining area, a climbing-plant pergola and a small glazed pavilion. A private outdoor space perfect for Moroccan evenings, with views over the Medina rooftops.

A Riad of real character, with generous space spread across multiple levels, suited either to a grand residence or a boutique guesthouse.
    `,

    highlightsIt: [
      'Corte interna su tre livelli aperta al cielo',
      'Zellige geometrico blu e bianco su pavimenti e pareti',
      'Soffitti e travi in legno dipinto (zouak)',
      'Fontana centrale e giardino interno',
      'Ampia terrazza con gazebo e veranda vetrata',
    ],
    highlightsEn: [
      'Sky-lit inner courtyard rising three levels',
      'Geometric blue-and-white zellige on floors and walls',
      'Hand-painted wood ceilings and beams (zouak)',
      'Central fountain and inner garden',
      'Wide rooftop terrace with gazebo and glazed pavilion',
    ],

    cover: '/riad2/riad2-09.jpg',
    images: [
      '/riad2/riad2-09.jpg',
      '/riad2/riad2-13.jpg',
      '/riad2/riad2-12.jpg',
      '/riad2/riad2-07.jpg',
      '/riad2/riad2-10.jpg',
      '/riad2/riad2-11.jpg',
      '/riad2/riad2-14.jpg',
      '/riad2/riad2-03.jpg',
      '/riad2/riad2-04.jpg',
      '/riad2/riad2-01.jpg',
      '/riad2/riad2-02.jpg',
      '/riad2/riad2-05.jpg',
      '/riad2/riad2-06.jpg',
      '/riad2/riad2-08.jpg',
    ],
    video: null,
  },
  {
    id: 'riad-medina-marrakech-03',
    status: 'available', // available | reserved | sold
    location: 'Medina di Marrakech',
    price: 520000,
    // Stime indicative dalle foto, in attesa dei dati reali — sostituire appena disponibili.
    specsIndicative: true,
    sizeSqm: 280,
    courtyardSqm: 20,
    bedrooms: 4,
    bathrooms: 3,
    floors: 3,
    yearRenovated: null,
    titleDeed: null,

    titleIt: 'Riad Contemporaneo con Corte in Stucco Scolpito e Lanterne Geometriche',
    titleEn: 'Contemporary Riad with Carved Stucco Courtyard and Geometric Lanterns',

    summaryIt: 'Corte interna monocromatica con stucco gebs scolpito a mano, lanterne geometriche sospese e terrazza panoramica: un Riad ristrutturato con un design contemporaneo raffinato.',
    summaryEn: 'A monochrome inner courtyard with hand-carved gebs stucco, hanging geometric lanterns and a rooftop terrace: a Riad renovated with refined contemporary design.',

    descriptionIt: `
Nascosto dietro un portone in legno intagliato, in un vicolo della Medina, questo Riad rivela un restauro contemporaneo di grande cura: una corte interna che si sviluppa su più livelli, interamente rivestita in stucco scolpito a mano (gebs) con motivi geometrici bianco su bianco, illuminata da una fila di lanterne marocchine sospese e da un medaglione in ottone traforato al centro del soffitto.

Le camere, affacciate sulla corte tramite balconate in ferro battuto e legno, mantengono la stessa cifra stilistica: pannelli scolpiti alle pareti, pavimenti in cotto a spina di pesce e bagni rivestiti in tadelakt con lavabi in ottone e madreperla.

La terrazza sul tetto, pavimentata in pietra chiara, ospita un pergolato in legno per l'ombra, una doccia esterna e uno spazio lounge con vista sui tetti della Medina — l'angolo perfetto per le serate marocchine.

Un Riad che unisce l'anima artigianale marocchina a un linguaggio contemporaneo essenziale, pronto per essere abitato sia come residenza che come struttura ricettiva boutique.
    `,
    descriptionEn: `
Hidden behind a carved wooden door in a Medina alleyway, this Riad reveals a contemporary renovation of real care: an inner courtyard rising through multiple levels, clad entirely in hand-carved stucco (gebs) with white-on-white geometric motifs, lit by a row of hanging Moroccan lanterns and a pierced brass medallion at the centre of the ceiling.

The rooms, opening onto the courtyard through wood-and-wrought-iron balustrades, keep the same design language: carved wall panels, herringbone terracotta floors and tadelakt bathrooms with brass and mother-of-pearl basins.

The rooftop terrace, laid in light stone, holds a wooden pergola for shade, an outdoor shower and a lounge area with views over the Medina rooftops — the perfect corner for Moroccan evenings.

A Riad that pairs Moroccan craftsmanship with an essential contemporary language, ready to be lived in either as a residence or as a boutique guesthouse.
    `,

    highlightsIt: [
      'Corte interna monocromatica in stucco scolpito a mano (gebs)',
      'Fila di lanterne geometriche sospese e medaglione in ottone',
      'Pavimenti in cotto a spina di pesce su più livelli',
      'Bagni in tadelakt con lavabi in ottone e madreperla',
      'Terrazza panoramica con pergolato e doccia esterna',
    ],
    highlightsEn: [
      'Monochrome inner courtyard in hand-carved stucco (gebs)',
      'Row of hanging geometric lanterns and brass ceiling medallion',
      'Herringbone terracotta floors across multiple levels',
      'Tadelakt bathrooms with brass-and-mother-of-pearl basins',
      'Rooftop terrace with pergola and outdoor shower',
    ],

    cover: '/riad3/riad3-17.jpg',
    images: [
      '/riad3/riad3-17.jpg',
      '/riad3/riad3-37.jpg',
      '/riad3/riad3-10.jpg',
      '/riad3/riad3-26.jpg',
      '/riad3/riad3-01.jpg',
      '/riad3/riad3-06.jpg',
      '/riad3/riad3-07.jpg',
      '/riad3/riad3-11.jpg',
      '/riad3/riad3-20.jpg',
      '/riad3/riad3-19.jpg',
      '/riad3/riad3-22.jpg',
      '/riad3/riad3-34.jpg',
      '/riad3/riad3-30.jpg',
    ],
    video: null,
  },
  {
    id: 'riad-medina-marrakech-04',
    status: 'available', // available | reserved | sold
    location: 'Medina di Marrakech',
    price: 500000,
    // Stime indicative dalle foto, in attesa dei dati reali — sostituire appena disponibili.
    specsIndicative: true,
    sizeSqm: 300,
    courtyardSqm: 22,
    bedrooms: 5,
    bathrooms: 5,
    floors: 3,
    yearRenovated: null,
    titleDeed: null,

    titleIt: 'Riad con Balconate in Mashrabiya Accanto a Les Jardin Du Lotus',
    titleEn: 'Riad with Mashrabiya Balconies Next to Les Jardin Du Lotus',

    summaryIt: 'Salone a specchio che moltiplica la luce, balconate in legno intagliato su più livelli e camere con testiere in stucco scolpito: un Riad ben posizionato nel cuore della Medina, proprio accanto al rinomato ristorante Les Jardin Du Lotus.',
    summaryEn: 'A mirrored salon that multiplies the light, carved wood balconies across multiple floors and bedrooms with hand-carved stucco headboards: a well-placed Riad in the heart of the Medina, right next to the renowned Les Jardin Du Lotus restaurant.',

    descriptionIt: `
Questo Riad si trova in un vicolo della Medina, proprio accanto al rinomato ristorante Les Jardin Du Lotus, un punto di riferimento noto agli habitué del quartiere. La corte interna, raccolta e luminosa, è circondata da banani e palme in vasi di terracotta; il salone al piano terra, con pareti interamente specchiate, moltiplica la luce naturale e amplifica visivamente lo spazio.

Ai piani superiori, le camere si affacciano sulla corte tramite balconate in legno intagliato (mashrabiya) e conducono a stanze da letto con pareti in stucco scolpito a mano (gebs) alle spalle del letto. I bagni sono rivestiti in zellige a scacchiera bianco e nero, con lavabi in marmo scuro. La cucina, completamente attrezzata, è rivestita in zellige a spina di pesce.

La terrazza sul tetto, pavimentata in zellige verde e bianco a chevron, ospita un pergolato, vasi di palme e piante aromatiche, con vista sui tetti della Medina — lo spazio ideale per le serate marocchine.

Un Riad in una posizione privilegiata, con un restauro di grande qualità, adatto sia come residenza esclusiva sia come struttura ricettiva boutique.
    `,
    descriptionEn: `
This Riad sits in a Medina alleyway, right next to the renowned Les Jardin Du Lotus restaurant, a well-known reference point for locals in the neighbourhood. The inner courtyard, intimate and bright, is surrounded by banana palms and potted palm trees; the ground-floor salon's fully mirrored walls multiply the natural light and visually expand the space.

On the upper floors, the rooms open onto the courtyard through carved wood balustrades (mashrabiya) and lead to bedrooms with hand-carved stucco (gebs) headboard walls. The bathrooms are clad in black-and-white checkerboard zellige, with dark marble basins. The fully equipped kitchen is lined in herringbone zellige.

The rooftop terrace, laid in green-and-white chevron zellige, holds a pergola, potted palms and aromatic plants, with views over the Medina rooftops — the ideal space for Moroccan evenings.

A Riad in a prime location, with a renovation of real quality, suited either as an exclusive residence or as a boutique guesthouse.
    `,

    highlightsIt: [
      'Proprio accanto al rinomato ristorante Les Jardin Du Lotus',
      'Salone a specchio che moltiplica luce e spazio',
      'Balconate in legno intagliato (mashrabiya) su più livelli',
      'Camere con testiere in stucco scolpito a mano (gebs)',
      'Terrazza panoramica in zellige verde e bianco a chevron',
    ],
    highlightsEn: [
      'Right next to the renowned Les Jardin Du Lotus restaurant',
      'Mirrored salon multiplying light and space',
      'Carved wood mashrabiya balconies across multiple levels',
      'Bedrooms with hand-carved stucco (gebs) headboard walls',
      'Rooftop terrace in green-and-white chevron zellige',
    ],

    cover: '/riad4/riad4-04.jpg',
    images: [
      '/riad4/riad4-04.jpg',
      '/riad4/riad4-03.jpg',
      '/riad4/riad4-05.jpg',
      '/riad4/riad4-06.jpg',
      '/riad4/riad4-07.jpg',
      '/riad4/riad4-09.jpg',
      '/riad4/riad4-08.jpg',
      '/riad4/riad4-11.jpg',
      '/riad4/riad4-12.jpg',
      '/riad4/riad4-13.jpg',
      '/riad4/riad4-15.jpg',
    ],
    video: null,
  },
]
