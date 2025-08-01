// lib/prisma.ts
import { PrismaClient } from '@/app/generated/prisma';


// Extend globalThis to avoid type errors
const globalForPrisma = globalThis as unknown as {
  prismaGlobal?: PrismaClient;
};

export const prisma =
  process.env.NODE_ENV === 'production'
    ? new PrismaClient()
    : globalForPrisma.prismaGlobal ?? (globalForPrisma.prismaGlobal = new PrismaClient());


// let prisma: PrismaClient;

// declare global {
//   // prevent re-declaration in dev hot-reload
//   var prismaGlobal: PrismaClient | undefined;
// }

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prismaGlobal) {
//     global.prismaGlobal = new PrismaClient();
//   }
//   prisma = global.prismaGlobal;
// }

// export { prisma };
