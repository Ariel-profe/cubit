import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true, unique: true}),
    name: column.text(),
    email: column.text({unique: true}),
    password: column.text(),
    createdAt: column.date({default: new Date()}),
    role: column.text({references: () => Role.columns.id}), //admin, user, client
  }
});

const Role = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text()
  }
});

// Categorias
const Category = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text()
  }
});

const ProductImage = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    productId: column.text({references: () => Notebook.columns.id}),
    image: column.text()
  }
});

// Productos
// ---------------

// Notebook
const Notebook = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    brand: column.text(),
    code: column.text({unique: true}),
    stock: column.number(),
    price: column.number(),
    slug: column.text({unique: true}),
    status: column.boolean(),
    tags: column.text(),
    title: column.text(),
    category: column.text({references: () => Category.columns.id}),
    // -----
    type: column.text(),
    bluetooth: column.text(),
    cardReader: column.text(),
    displayPort: column.text(),
    graphicCard: column.text(),
    hdmi: column.text(),
    keypad: column.text(),
    lan: column.text(),
    memoryRam: column.text(),
    model: column.text(),
    numKeypad: column.text(),
    os: column.text(),
    processor: column.text(),
    screen: column.text(),
    storage1: column.text(),
    storage2: column.text(),
    upcEan: column.text(),
    usb: column.text(),
    vga: column.text(),
    warranty: column.text(),
    webCam: column.text(),
    weight: column.number(),
    wiFi: column.text(),

    // References
    user: column.text({references: () => User.columns.id})
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Role,
    Notebook,
    Category,
    ProductImage
  }
});
