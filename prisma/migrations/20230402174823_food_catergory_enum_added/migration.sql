/*
  Warnings:

  - Changed the type of `category` on the `FoodItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('starters', 'mains', 'desert', 'drinks');

-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "category",
ADD COLUMN     "category" "FoodCategory" NOT NULL;
