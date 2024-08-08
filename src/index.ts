import extractedData from '../../extract/output/data.json' assert { type: 'json' };

import { PrismaClient } from "@prisma/client";
import { RowService } from './utils/DbClientFactory';

async function main() {
    const prisma = new PrismaClient()
    const rowService = new RowService(prisma);
    const rows = await rowService.findAll();
    for (const row of rows) {
        await rowService.delete(row.id);
    }
    const ops = extractedData.places.map((item: any) => {
        return rowService.create({
            data: JSON.stringify(item)
        });
    })
    await Promise.all(ops);
    await printAll(rowService);
    await prisma.$disconnect();
}

async function printAll(rowService: RowService) {
    const rows = await rowService.findAll();
    console.log("await rowService.findAll()", JSON.stringify(rows, null, 4));
}

import { fileURLToPath } from 'url';
const currentFilePath = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFilePath) {
    main().then().catch(err => console.log(err));
}
