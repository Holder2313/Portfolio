-- DropForeignKey
ALTER TABLE `AltText` DROP FOREIGN KEY `AltText_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Tag` DROP FOREIGN KEY `Tag_projectId_fkey`;

-- AlterTable
ALTER TABLE `AltText` MODIFY `projectId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Image` MODIFY `projectId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Project` MODIFY `contexte` TEXT NOT NULL,
    MODIFY `approche` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Tag` MODIFY `projectId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AltText` ADD CONSTRAINT `AltText_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
