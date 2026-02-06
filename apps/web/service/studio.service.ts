import { prisma } from '@pilates-hub/database'

export const StudioService = {
    async getAll() {
        return await prisma.studio.findMany({
            orderBy: { createdAt: 'desc' }
        })
    },

    async create(name: string, contact: string, address: string) {
        return await prisma.studio.create({
            data: { name, contact, address, capacity: 10 }
        })
    }
}