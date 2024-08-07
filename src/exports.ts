import { PrismaClient } from '@prisma/client';
import { RunningShoeStoreService } from './utils/DbClientFactory';

export function createRunningShoeStoreService(){
    const prisma = new PrismaClient();
    const runningShoeStoreServiceService = new RunningShoeStoreService(prisma);
    return runningShoeStoreServiceService;
}
