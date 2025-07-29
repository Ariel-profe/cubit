export type ValidCategories = 
  "backpack" 
| "caddy" 
| "carry" 
| "coolerpad" 
| "cover" 
| "docking" 
| "hdd" 
| "headphone" 
| "mouse" 
| "networkCard" 
| "notebook" 
| "pad" 
| "ram" 
| "source" 
| "ssd" 
| "support" 
| "videoCard";

export type ValidTypes = 'hogar' | 'empresa' | 'profesional' | 'gamer';

export interface SeedData {
  seedCategories: ValidCategories[];
  seedBackpacks: SeedBackpack[];
  seedCaddys: SeedCaddy[];
  seedCarrys: SeedCarry[];
  seedCoolerpads: SeedCoolerpad[];
  seedCovers: SeedCover[];
  seedDockings: SeedDocking[];
  seedHdds: SeedHdd[];
  seedHeadphones: SeedHeadphone[];
  seedMice: SeedMouse[];
  seedNetworkCards: SeedNetworkCard[];
  seedNotebooks: SeedNotebook[];
  seedPads: SeedPad[];
  seedRams: SeedRam[];
  seedSources: SeedSource[];
  seedSsds: SeedSsd[];
  seedSupports: SeedSupport[];
  seedVideoCards: SeedVideoCard[];
  seedUsers: SeedUser[];
  seedDepartments: SeedDepartments[];
};

export interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'client' | 'user';
};

export interface SeedDepartments {
  id: string;
  name: string;
};

export interface SeedBackpack {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  model: string;
  materials: string[];
  color: string;
  compartments: number;
  lateralPockets: number;
  superiorPockets: number;
  frontPockets: number;
  notebookCompartment: string;
  notebookSize: string;
};

export interface SeedCaddy {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  thickness: string;
  compatibility: string[];
  includes: string[];
};

export interface SeedCarry {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  material: string;
  type: string;
  connectionType: string;
  size: string;
};

export interface SeedCoolerpad {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  heightLevel: number;
  fan: number;
  usbPorts: number;
  rgbLighting: string;
};

export interface SeedCover {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  notebookSize: string;
  stamp: string;
  materials: string;
  colors: string[];
  otherFeatures: string[];
};

export interface SeedDocking {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  compatibility: string[];
  connectionType: string[];
  usbVersion: string[];
};

export interface SeedHdd {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  model: string;
  format: string;
  capacity: string;
  rpm: string;
  thickness: string;
};

export interface SeedHeadphone {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  type: string;
  connectionType: string;
  microphone: string;
  sensitivity: string;
  frequencyRange: string;
  ledLighting: string;
  gamer: string;
  colors: string[];
};

export interface SeedMouse {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  model: string;
  connectionType: string[];
  dpi: number;
  colors: string[];
  rgbLighting: string;
  buttons: number;
};

export interface SeedNetworkCard {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  connectionType: string;
  usbConnection: string;
  speed: string;
};

export interface SeedNotebook {
  // Required
  brand: string;
  code: string;
  images: string[];
  price: number;
  slug: string;
  inStock: number;
  tags: string[];
  title: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  bluetooth: string;
  cardReader: string;
  displayPort: string;
  graphicCard: string;
  hdmi: string;
  keypad: string;
  lan: string;
  memoryRam: string;
  model: string;
  numKeypad: string;
  os: string;
  processor: string;
  screen: string;
  storage1: string;
  storage2: string;
  type: ValidTypes;
  upcEan: string;
  usb: string[];
  vga: string;
  warranty: string;
  webCam: string;
  weight: number;
  wiFi: string;
};

export interface SeedPad {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  colorStamp: string[];
  materials: string[];
  extent: string;
  size: string;
  rgbLighting: string;
};

export interface SeedRam {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  type: string;
  capacity: string;
  speed: string;
};

export interface SeedSource {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  brandsUse: string[];
  volts: string[];
  pin: string;
  amperage: string;
  watts: string;
};

export interface SeedSsd {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  model: string;
  format: string;
  capacity: string;
  type: string;
};

export interface SeedSupport {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  model: string;
  maxSupport: string;
  materials: string[];
};

export interface SeedVideoCard {
  // Required
  code: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  inStock: number;
  tags: string[];
  price: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  // Specific
  idManual: string;
  connectorType: string;
  connectionType: string;
  resolution: string;
};



