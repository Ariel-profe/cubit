import { prisma } from '../lib/prisma';
import { initialData, seedBackpacks, seedCarrys, seedCoolerpads, seedCovers, seedDockings, seedHdds, seedHeadphones, seedMice, seedNetworkCards, seedPads, seedRams, seedSources, seedSsds, seedSupports, seedVideoCards } from './seed';

async function main() {

    // 1. Delete all existing data
    
    await prisma.orderAddress.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();

    await prisma.productImage.deleteMany();
    // Products
    await prisma.backpack.deleteMany();
    await prisma.caddy.deleteMany();
    await prisma.carry.deleteMany();
    await prisma.coolerpad.deleteMany();
    await prisma.cover.deleteMany();
    await prisma.docking.deleteMany();
    await prisma.hdd.deleteMany();
    await prisma.headphone.deleteMany();
    await prisma.mouse.deleteMany();
    await prisma.networkCard.deleteMany();
    await prisma.notebook.deleteMany();
    await prisma.pad.deleteMany();
    await prisma.ram.deleteMany();
    await prisma.source.deleteMany();
    await prisma.ssd.deleteMany();
    await prisma.support.deleteMany();
    await prisma.videoCard.deleteMany();
    
    await prisma.category.deleteMany();
    
    await prisma.userAddress.deleteMany();
    await prisma.user.deleteMany(); // Se eliminan los usuarios al final para evitar conflictos con las relaciones de los productos
    await prisma.department.deleteMany();

    const {seedCategories, seedNotebooks, seedCaddys, seedUsers, seedDepartments} = initialData;

    // 2. Create all database information
    // Users
    await prisma.user.createMany({
        data: seedUsers
    });

    // Departments
    await prisma.department.createMany({
        data: seedDepartments
    })

    // Categories
    const categoriesData = seedCategories.map(category => ({ 
        name: category 
    }));

    await prisma.category.createMany({
        data: categoriesData
    });

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map, category) => {

        map[category.name] = category.id;

        return map;

    }, {} as Record<string, string>); // string=label del producto (notebook, headphone), string=categoryID

     // Backpacks
     seedBackpacks.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.backpack.create({
            data: {
                ...rest,
                categoryId: categoriesMap["backpack"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            backpackId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });
     // Carrys
     seedCarrys.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.carry.create({
            data: {
                ...rest,
                categoryId: categoriesMap["carry"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            carryId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });
   
     // Caddys
    seedCaddys.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.caddy.create({
            data: {
                ...rest,
                categoryId: categoriesMap["caddy"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            caddyId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

     // Coolerpads
    seedCoolerpads.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.coolerpad.create({
            data: {
                ...rest,
                categoryId: categoriesMap["coolerpad"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            coolerpadId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

     // Covers
    seedCovers.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.cover.create({
            data: {
                ...rest,
                categoryId: categoriesMap["cover"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            coverId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

     // Dockings
    seedDockings.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.docking.create({
            data: {
                ...rest,
                categoryId: categoriesMap["docking"]
                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            dockingId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // HDDs
    seedHdds.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.hdd.create({
            data: {
                ...rest,
                categoryId: categoriesMap["hdd"]                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            hddId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Headphones
    seedHeadphones.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.headphone.create({
            data: {
                ...rest,
                categoryId: categoriesMap["headphone"]                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            headphoneId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Mice
    seedMice.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.mouse.create({
            data: {
                ...rest,
                categoryId: categoriesMap["mouse"]                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            mouseId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Network Cards
    seedNetworkCards.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.networkCard.create({
            data: {
                ...rest,
                categoryId: categoriesMap["networkCard"]                
            }
        })
        const imagesData = images.map( image => ({
            url: image,
            networkCardId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Notebooks
    seedNotebooks.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.notebook.create({
            data: {
                ...rest,
                categoryId: categoriesMap["notebook"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            notebookId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Pads
    seedPads.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.pad.create({
            data: {
                ...rest,
                categoryId: categoriesMap["pad"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            padId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Rams
    seedRams.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.ram.create({
            data: {
                ...rest,
                categoryId: categoriesMap["ram"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            ramId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Sources
    seedSources.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.source.create({
            data: {
                ...rest,
                categoryId: categoriesMap["source"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            sourceId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // SSDs
    seedSsds.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.ssd.create({
            data: {
                ...rest,
                categoryId: categoriesMap["ssd"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            ssdId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Supports
    seedSupports.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.support.create({
            data: {
                ...rest,
                categoryId: categoriesMap["support"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            supportId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    // Video Cards
    seedVideoCards.forEach( async (product) => {
        const {images, ...rest} = product;

        const dbProduct = await prisma.videoCard.create({
            data: {
                ...rest,
                categoryId: categoriesMap["videoCard"]
                
            }
        })
        // Imagenes de Notebooks
        const imagesData = images.map( image => ({
            url: image,
            videoCardId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        })
    });

    console.log("Database seeded successfully.");
    console.log("Remember that the ID's will be different from the old database, so you will need to update the ID's in the frontend if you want to use the same data.");
}

(()=>{

    if(process.env.NODE_ENV === 'production') return;

    main();
})();