import bcryptjs from 'bcryptjs';
import { SeedBackpack, SeedCaddy, SeedCarry, SeedCoolerpad, SeedCover, SeedData, SeedDocking, SeedHdd, SeedHeadphone, SeedMouse, SeedNetworkCard, SeedNotebook, SeedPad, SeedRam, SeedSource, SeedSsd, SeedSupport, SeedUser, SeedVideoCard, ValidCategories } from '../interfaces/seed';
import { seedDepartments } from './seed-departments';

export const seedUsers: SeedUser[] = [
  {
    name: 'admin',
    email: 'admin@mail.com',
    password: bcryptjs.hashSync('123456'),
    role: 'admin'
  },
  {
    name: 'daniela amin',
    email: 'daniela@mail.com',
    password: bcryptjs.hashSync('123456'),
    role: 'user'
  },
];

export const seedCategories: ValidCategories[] = [
  "backpack",
  "caddy",
  "carry",
  "coolerpad",
  "cover",
  "docking",
  "hdd",
  "headphone",
  "mouse",
  "networkCard",
  "notebook",
  "pad",
  "ram",
  "source",
  "ssd",
  "support",
  "videoCard"
];

export const seedBackpacks: SeedBackpack[] = [
  {
    title: 'mochila klip xtreme',
    slug: 'mochila_klip_xtreme',
    code: 'KN467C',
    brand: 'klip xtreme',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['mochila', 'klip', 'xtreme'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'KNB-467KH',
    model: 'bari',
    materials: ['nylon', 'poliuretano'],
    color: 'caqui',
    compartments: 2,
    lateralPockets: 2,
    superiorPockets: 1,
    frontPockets: 2,
    notebookCompartment: 'si',
    notebookSize: '15,6"'
  }
];

export const seedCarrys: SeedCarry[] = [
  {
    title: 'carry disk 1,0" nisuta',
    slug: 'carry_disk_1,0"_nisuta',
    code: 'GASAM2',
    brand: 'nisuta',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['carry', 'disk'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'NSGASAM2',
    material: 'aluminio',
    type: 'm.2 sata',
    connectionType: 'usb 3.0',
    size: '1,0"'
  }
];

export const seedCaddys: SeedCaddy[] = [
  {
    title: 'caddy para notebook dvd a hd-ssd noganet',
    slug: 'caddy_para_notebook_dvd_a_hd-ssd_noganet',
    code: 'abc125',
    brand: 'noganet',
    images: [
      'no-product-image.png'
    ],
    inStock: 6,
    tags: ['caddy', 'dvd', 'hd'],
    price: 2000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'caddy123',
    thickness: '12,7 mm',
    compatibility: ['windows', 'linux'],
    includes: ['destornillador', 'tornillos']
  }
];

export const seedCoolerpads: SeedCoolerpad[] = [
  {
    title: 'coolerpad para notebook klip xtreme',
    slug: 'coolerpad_para_notebook_klip_xtreme',
    code: 'KNS110',
    brand: 'klip xtreme',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['coolerpad', 'klip', 'xtreme'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'KNS-110B',
    heightLevel: 1,
    fan: 1,
    usbPorts: 4,
    rgbLighting: 'no'
  }
];

export const seedCovers: SeedCover[] = [
  {
    title: 'funda para netbook bags',
    slug: 'funda_para_netbook_bags',
    code: 'FN10NA',
    brand: 'bags',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['funda', 'bags', 'netbook'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'FN10E-A',
    notebookSize: '10"',
    stamp: 'animal print',
    materials: 'neoprene',
    colors: ['gris'],
    otherFeatures: ['solapa y cierre abrojo']
  }
];

export const seedDockings: SeedDocking[] = [
  {
    title: 'docking para notebook usb c 3.1 xtech',
    slug: 'docking_para_notebook_usb_c_3.1_xtech',
    code: 'XTC565',
    brand: 'xtech',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['docking', 'notebook', 'xtech'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'XTC-565',
    compatibility: ['windows', 'ios', 'linux', 'android'],
    connectionType: ['usb a', 'usb c'],
    usbVersion: ['3.0', '3.1']
  }
];

export const seedHdds: SeedHdd[] = [
  {
    title: 'disco duro 2,5" 500GB blue 7mm',
    slug: 'disco_duro_2,5"_500GB_blue_7mm',
    code: 'S35007',
    brand: 'western digital',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['disco duro', 'western digital'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'WD5000LPCX',
    model: 'wd blue',
    format: '2,5"',
    capacity: '500gb',
    rpm: '5400',
    thickness: '7mm'
  }
];

export const seedHeadphones: SeedHeadphone[] = [
  {
    title: 'auricular con microfono 1x3,5mm astro a10 ps4',
    slug: 'auricular_con_microfono_1x3,5mm_astro_a10_ps4',
    code: 'A10BLC',
    brand: 'astro',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['auricular', 'astro', 'ps4'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: '939-001846',
    type: 'out ear',
    connectionType: '1x3,5mm',
    microphone: 'si',
    sensitivity: '104db',
    frequencyRange: '20Hz a 20kHz',
    ledLighting: 'no',
    gamer: 'si',
    colors: ['blanco']
  }
];

export const seedMice: SeedMouse[] = [
  {
    title: 'mouse genius dx-110',
    slug: 'mouse_genius_dx-110',
    code: 'DX110N',
    brand: 'genius',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['mouse', 'genius'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: '31010116106',
    model: 'dx-110',
    connectionType: ['ps2'],
    dpi: 1000,
    colors: ['negro'],
    rgbLighting: 'no',
    buttons: 3,
  }
];

export const seedNetworkCards: SeedNetworkCard[] = [
  {
    title: 'placa de red usb a 2.0 lan',
    slug: 'placa_de_red_usb_a_2.0_lan',
    code: 'USREDC',
    brand: 'nisuta',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['placa de red', 'nisuta'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'NSCOUSREDCH',
    connectionType: 'lan',
    usbConnection: 'a 2.0',
    speed: '100Mbps'
  }
];

export const seedNotebooks: SeedNotebook[] = [
  {
    title: 'Notebook Asus intel core i3 8gb ram 1Tb dd',
    code: 'abc123',
    brand: 'asus',
    price: 10000,
    images: [
      'notebook-1.jpg',
      'notebook-2.webp'
    ],
    inStock: 4,
    slug: 'notebook_asus_intel_core_i3',
    tags: ['laptop', 'home'],
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 'hogar',
    model: 'K513EA',
    upcEan: '12321',
    processor: 'amd ryzen 5 5600h',
    memoryRam: '8gb',
    graphicCard: 'gtx 1650 4gb',
    storage1: 'hdd 500gb',
    storage2: 'no',
    screen: '14" hd',
    keypad: 'ingles',
    numKeypad: 'si',
    os: 'windows 10 pro',
    cardReader: 'si',
    webCam: 'vga',
    usb: ['a 2.0'],
    lan: 'glan',
    wiFi: 'ac',
    bluetooth: '4.0',
    vga: 'si',
    hdmi: 'si',
    displayPort: 'si',
    weight: 800,
    warranty: 'si'
  },
  {
    title: 'Notebook Lenovo intel core i5 16gb ram 500gb dd',
    code: 'xyz123',
    brand: 'asus',
    price: 20000,
    images: [
      'notebook-1.jpg',
      'notebook-2.webp'
    ],
    inStock: 7,
    slug: 'notebook_lenovo_intel_core_i5',
    tags: ['note', 'empresa'],
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    type: 'empresa',
    model: 'K51DS',
    upcEan: '124543',
    processor: 'intel 10ma core i3 1005g1',
    memoryRam: '16gb',
    graphicCard: 'gtx 1650 4gb',
    storage1: 'hdd 500gb',
    storage2: 'no',
    screen: '16" fhd',
    keypad: 'espanol',
    numKeypad: 'si',
    os: 'windows 11 home',
    cardReader: 'si',
    webCam: 'vga',
    usb: ['a 2.0'],
    lan: 'glan',
    wiFi: 'ac',
    bluetooth: '4.0',
    vga: 'si',
    hdmi: 'si',
    displayPort: 'si',
    weight: 800,
    warranty: 'si'
  },
];

export const seedPads: SeedPad[] = [
  {
    title: 'pad cdtek economico',
    slug: 'pad_cdtek_economico',
    code: 'MOPDAU',
    brand: 'cdtek',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['pad', 'cdtek'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: '7798158082292',
    colorStamp: ['auto deportivo'],
    materials: ['superficie de tela con base de goma'],
    extent: '210x190mm',
    size: 'standard',
    rgbLighting: 'no',
  }
];

export const seedRams: SeedRam[] = [
  {
    title: 'ram so-dimm ddr3 4gb',
    slug: 'ram_so-dimm_ddr3_4gb',
    code: '4GSO17',
    brand: 'generica',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['ram', 'ddr3'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: '---',
    type: 'ddr3',
    capacity: '4gb',
    speed: '1600Mhz',
  }
];

export const seedSources: SeedSource[] = [
  {
    title: 'fuente para notebook automatica switching multiples conectores',
    slug: 'fuente_para_notebook_automatica_switching_multiples_conectores',
    code: 'SD1900',
    brand: 'megalite',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['fuente', 'switching', 'notebook'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'SF190034',
    brandsUse: ['acer', 'asus', 'toshiba', 'lenovo', 'samsung'],
    volts: ['19v'],
    pin: 'multi pin',
    amperage: '3,34A',
    watts: '65W',
  }
];

export const seedSsds: SeedSsd[] = [
  {
    title: 'disco solido 2,5" sata 120gb',
    slug: 'disco_solido_2,5"_sata_120gb',
    code: 'GA12SS',
    brand: 'gigabyte',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['disco solido', 'ssd', 'sata'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'GP-GSTFS31120',
    model: '-',
    format: 'sata',
    capacity: '120gb',
    type: '2,5"',
  }
];

export const seedSupports: SeedSupport[] = [
  {
    title: 'soporte para notebook ajustable y plegable 11" a 15"',
    slug: 'soporte_para_notebook_ajustable_y_plegable_11"_a_15"',
    code: 'ITLBNA',
    brand: 'intelaid',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['soporte', 'intelaid'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'IT-BNA',
    model: 'portable e incluye funda de tela',
    maxSupport: '5kg',
    materials: ['aluminio', 'ABS'],
  }
];

export const seedVideoCards: SeedVideoCard[] = [
  {
    title: 'placa de video usb 2.0 usb A a hdmi',
    slug: 'placa_de_video_usb_2.0_usb_A_a_hdmi',
    code: 'OUSHD2',
    brand: 'nisuta',
    images: [
      'no-product-image.png'
    ],
    inStock: 10,
    tags: ['placa de video', 'nisuta'],
    price: 10000,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    idManual: 'NSCOUSHD2',
    connectorType: 'usb A 2.0',
    connectionType: 'hdmi',
    resolution: '1920x1080',
  }
];

export const initialData: SeedData = {
  seedCategories,
  seedUsers,
  seedDepartments,
  // Products
  seedBackpacks,
  seedCaddys,
  seedCarrys,
  seedCoolerpads,
  seedCovers,
  seedDockings,
  seedHdds,
  seedHeadphones,
  seedMice,
  seedNetworkCards,
  seedNotebooks,
  seedPads,
  seedRams,
  seedSources,
  seedSsds,
  seedSupports,
  seedVideoCards
};