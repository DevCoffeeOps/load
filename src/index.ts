import extractedData from '../../extract/output/googlemaps_places_running_shoe_stores.json' assert { type: 'json' };

import { PrismaClient } from "@prisma/client";
import { RunningShoeStoreService } from './utils/DbClientFactory';

async function main() {
    const prisma = new PrismaClient()
    const runningShoeStoreService = new RunningShoeStoreService(prisma);
    const runningShoeStores = await runningShoeStoreService.findAll();
    for (const runningShoeStore of runningShoeStores) {
        await runningShoeStoreService.delete(runningShoeStore.id);
    }
    const ops = extractedData.places.map((item: any) => {
        return runningShoeStoreService.create({
            data: JSON.stringify(item)
        });
    })
    await Promise.all(ops);
    await printAll(runningShoeStoreService);
    await prisma.$disconnect();
}

async function printAll(runningShoeStoreService: RunningShoeStoreService) {
    const runningShoeStores = await runningShoeStoreService.findAll();
    console.log("await runningShoeStoreService.findAll()", JSON.stringify(runningShoeStores, null, 4));
}

import { fileURLToPath } from 'url';
const currentFilePath = fileURLToPath(import.meta.url);
if (process.argv[1] === currentFilePath) {
    main().then().catch(err => console.log(err));
}
