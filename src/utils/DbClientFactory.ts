import { Row, Prisma, PrismaClient } from "@prisma/client";
import { BaseDbClient } from "./BaseDbClient";

export class RowService extends BaseDbClient<Row, Prisma.RowCreateInput, Prisma.RowUpdateInput> {
    constructor(prisma: PrismaClient) {
        super(prisma, 'row')
    }
}
