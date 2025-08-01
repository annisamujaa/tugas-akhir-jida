-- CreateTable
CREATE TABLE "public"."keranjang" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "extraCheese" BOOLEAN NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "keranjang_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."keranjang" ADD CONSTRAINT "keranjang_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."keranjang" ADD CONSTRAINT "keranjang_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "public"."menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
