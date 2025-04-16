import { db, Role, User, Notebook, Category, ProductImage } from 'astro:db';
import { v4 as UUID } from 'uuid';
import bcrypt from 'bcryptjs';
import { seedNotebooks } from './seed-data';

// https://astro.build/db/seed
export default async function seed() {

	const roles = [
		{ id: 'admin', name: 'Administrador' },
		{ id: 'client', name: 'Cliente' },
		{ id: 'user', name: 'Usuario' },
	];

	const johnDoe = {
		// id: UUID(),
		id: 'ABC-123-JHON',
		name: 'John Doe',
		email: 'johndoe@mail.com',
		password: bcrypt.hashSync('123456'),
		role: 'admin'
	};

	const janeDoe = {
		// id: UUID(),
		id: 'ABC-123-JANE',
		name: 'Jane Doe',
		email: 'janedoe@mail.com',
		password: bcrypt.hashSync('123456'),
		role: 'client'
	};
	const categories = [
		{
			// 0
			id: 'notebooks',
			name: "Notebooks"
		}
	];

	await db.insert(Role).values(roles);
	await db.insert(User).values([johnDoe, janeDoe]);
	await db.insert(Category).values(categories);

	const queries: any = [];

	seedNotebooks.forEach(p => {
		const notebook = {
			id: UUID(),
			brand: p.brand,
			code: p.code,
			stock: p.stock,
			price: p.price,
			slug: p.slug,
			status: p.status,
			tags: p.tags.join(','),
			title: p.title,
			category: categories[0].id,
			// ------
			type: p.type,
			bluetooth: p.bluetooth,
			cardReader: p.cardReader,
			displayPort: p.displayPort,
			graphicCard: p.graphicCard,
			hdmi: p.hdmi,
			keypad: p.keypad,
			lan: p.lan,
			memoryRam: p.memoryRam,
			model: p.model,
			numKeypad: p.numKeypad,
			os: p.os,
			processor: p.processor,
			screen: p.screen,
			storage1: p.storage1,
			storage2: p.storage2,
			upcEan: p.upcEan,
			usb: p.usb.join(','),
			vga: p.vga,
			warranty: p.warranty,
			webCam: p.webCam,
			weight: p.weight,
			wiFi: p.wiFi,

			user: johnDoe.id
		};

		queries.push( db.insert(Notebook).values(notebook));

		p.images.forEach( img => {
			const image = {
				id: UUID(),
				image: img,
				productId: notebook.id
			}

			queries.push( db.insert(ProductImage).values(image));
		})

		
	});

	await db.batch(queries);
};
