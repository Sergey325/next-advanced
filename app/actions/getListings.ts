import prisma from "@/app/libs/prismadb"

export default async function getListings() {
    try {
        return await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
    } catch (e: any) {
        throw new Error(e)
    }
}