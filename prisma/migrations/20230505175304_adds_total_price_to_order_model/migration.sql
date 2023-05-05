/*
  Warnings:

  - Added the required column `TotalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "TotalPrice" TEXT NOT NULL;
