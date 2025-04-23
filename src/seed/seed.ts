interface SeedNotebook {
    brand           : string;
    code            : string;
    images          : string[];
    price           : number;
    slug            : string;
    stock         : number;
    tags            : string[];
    title           : string;
    status          :boolean;
    category        : "notebooks";
    // ---------
    bluetooth       : string;
    cardReader      : string;
    displayPort     : string;
    graphicCard     : string;
    hdmi            : string;
    keypad          : string;
    lan             : string;
    memoryRam       : string;
    model           : string;
    numKeypad       : string;
    os              : string;
    processor       : string;
    screen          : string;
    storage1        : string;
    storage2        : string;
    type            : ValidTypes;
    upcEan          : string;
    usb             : string[];
    vga             : string;
    warranty        : string;
    webCam          : string;
    weight          : number;
    wiFi            : string;
  }
  
  type ValidTypes = 'hogar' | 'empresa' | 'profesional' | 'gamer';



    export const seedNotebooks: SeedNotebook[] = [
        {
            title: 'Notebook Asus intel core i3 8gb ram 1Tb dd',
            code: 'abc123',
            brand: 'asus',
            category: 'notebooks',
            price: 10000,
            images: ['notebook-1.jpg','notebook-2.webp'],
            stock: 4,
            slug: 'notebook_asus_intel_core_i3',
            tags: ['laptop', 'home'],
            status: true,
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
            title: 'Notebook HP',
            code: 'abc234',
            brand: 'hp',
            category: 'notebooks',
            price: 20900,
            images: ['notebook-1.jpg','notebook-2.webp'],
            stock: 10,
            slug: 'notebook_hp',
            tags: ['laptop', 'home', 'hp'],
            status: true,
            type: 'gamer',
            model: 'AXYZ123',
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
    ];