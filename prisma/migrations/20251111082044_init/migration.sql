-- CreateEnum
CREATE TYPE "Digital_EntertainmentContentType" AS ENUM ('movie', 'tv_show');

-- CreateTable
CREATE TABLE "Digital_Entertainment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "Digital_EntertainmentContentType" NOT NULL,
    "director" TEXT NOT NULL,
    "budget" DECIMAL(15,2) NOT NULL,
    "location" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Digital_Entertainment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Digital_Entertainment_title_key" ON "Digital_Entertainment"("title");
