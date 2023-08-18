require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Bored Apes', sortOrder: 10 },
		{ name: 'Mutant Apes', sortOrder: 20 },
		{ name: 'Pudgy Penguins', sortOrder: 30 },
		{ name: 'Axies', sortOrder: 40 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'BAYC #3103',
			imgPath: 'https://i.imgur.com/d17IPGe.png',
			category: categories[0],
			price: 5.1
		},
		{
			name: 'BAYC #1357',
			imgPath: 'https://i.imgur.com/eSDMNT6.png',
			category: categories[0],
			price: 16.88
		},
		{
			name: 'BAYC #7681',
			imgPath: 'https://i.imgur.com/4HUCJGX.png',
			category: categories[0],
			price: 33.13
		},
		{
			name: 'BAYC #3439',
			imgPath: 'https://i.imgur.com/meBhg5k.png',
			category: categories[0],
			price: 6.5
		},
		{
			name: 'MAYC #3650',
			imgPath: 'https://i.imgur.com/8VfhdLA.png',
			category: categories[1],
			price: 70.1
		},
		{
			name: 'MAYC #6390',
			imgPath: 'https://i.imgur.com/aRBPiAA.png',
			category: categories[1],
			price: 96.2
		},
		{
			name: 'MAYC #3966',
			imgPath: 'https://i.imgur.com/asB5UJX.png',
			category: categories[1],
			price: 1.7
		},
		{
			name: 'MAYC #8568',
			imgPath: 'https://i.imgur.com/Vy8ypcZ.png',
			category: categories[1],
			price: 10.0
		},
		{
			name: 'Pudgy Penguin #1292',
			imgPath: 'https://i.imgur.com/5NU8nX2.png',
			category: categories[2],
			price: 5
		},
		{
			name: 'Pudgy Penguin #7300',
			imgPath: 'https://i.imgur.com/oqWU63M.png',
			category: categories[2],
			price: 4
		},
		{
			name: 'Pudgy Penguin #205',
			imgPath: 'https://i.imgur.com/zWQmTiG.png',
			category: categories[2],
			price: 3.12
		},
		{
			name: 'Axie #39057',
			imgPath: 'https://i.imgur.com/NzWtK8v.png',
			category: categories[3],
			price: 23
		},
		{
			name: 'Axie #65116',
			imgPath: 'https://i.imgur.com/J0tGfKl.png',
			category: categories[3],
			price: 95
		},
		{
			name: 'Axie #99172',
			imgPath: 'https://i.imgur.com/UL39alk.png',
			category: categories[3],
			price: 67
		}
	]);

	console.log(items);

	process.exit();
})();
