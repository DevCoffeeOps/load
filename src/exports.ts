import { PrismaClient } from '@prisma/client';
import { RowService } from './utils/DbClientFactory';

export function createRowService() {
    const prisma = new PrismaClient();
    const rowService = new RowService(prisma);
    return rowService;
}
