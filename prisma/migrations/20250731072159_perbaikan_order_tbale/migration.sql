-- AlterTable
ALTER TABLE "public"."order" ALTER COLUMN "paymentMethod" DROP NOT NULL,
ALTER COLUMN "paymentDetail" DROP NOT NULL;
