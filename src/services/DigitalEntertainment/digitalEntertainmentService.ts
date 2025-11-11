import { Prisma, PrismaClient } from "@prisma/client";
import { PaginatedResult } from "../../types/common";
import { DigitalEntertainment } from "../../types/entertainment";
import { CreateEntertainmentSchemaType, PatchEntertainmentSchemeType, UpdateEntertainmentSchemaType } from "../../validations/entertainmentValidation";
import { BadRequestException } from "../../exceptions/BadRequestException";

const prisma = new PrismaClient();

export const getAllEntertainments = async (): Promise<PaginatedResult<DigitalEntertainment> | DigitalEntertainment[]> => {

    try {

        const data = await prisma.digital_Entertainment.findMany({
            orderBy: { title: "asc" },
        });

        return data;

    } catch (error) {
        console.log("Error : Service : getAllEntertainments");
        throw error;
    }

}
export const getPaginatedEntertainments = async (page: number, limit: number): Promise<PaginatedResult<DigitalEntertainment>> => {
    try {

        const skip = (page! - 1) * limit!;
        const totalRecords = await prisma.digital_Entertainment.count();
        const totalPages = Math.ceil(totalRecords / limit!);

        const data = await prisma.digital_Entertainment.findMany({
            skip,
            take: limit!,
            orderBy: { title: "asc" },
        });

        return {
            data,
            totalPages,
            currentPage: page!,
            pageSize: limit!,
        };
    } catch (error) {
        throw error;
    }
};
export const searchEntertainments = async (title: string): Promise<DigitalEntertainment[]> => {

    try {
        const data = await prisma.digital_Entertainment.findMany({
            where: {
                title: {
                    contains: title, mode: "insensitive"
                }
            },
            orderBy: { title: "asc" },
        });

        return data;

    } catch (error) {
        throw error
    }
}
export const createEntertainment = async (body: CreateEntertainmentSchemaType): Promise<DigitalEntertainment> => {

    try {
        const data = await prisma.digital_Entertainment.create({
            data: {
                title: body.title,
                type: body.type,
                director: body.director,
                budget: new Prisma.Decimal(body.budget),
                location: body.location,
                duration: body.duration,
                year: body.year,
            },
        });

        return data;
    } catch (error) {
        throw error;
    }
};
export const patchEntertainment = async (id: number, body: PatchEntertainmentSchemeType): Promise<DigitalEntertainment> => {

    try {
        const data = await prisma.digital_Entertainment.update({
            where: { id: id },
            data: {
                ...(body.title && { title: body.title }),
                ...(body.type && { type: body.type }),
                ...(body.director && { director: body.director }),
                ...(body.budget && { budget: new Prisma.Decimal(body.budget) }),
                ...(body.location && { location: body.location }),
                ...(body.duration && { duration: body.duration }),
                ...(body.year && { year: body.year }),
            },
        });

        return data
    }
    catch (error: any) {
        if (error.code === 'P2025') {
            throw new BadRequestException(`Record with id ${id} not found`)
        }
        throw error
    }
}
export const updateEntertainment = async (id: number, body: UpdateEntertainmentSchemaType): Promise<DigitalEntertainment> => {

    try {
        const data = await prisma.digital_Entertainment.update({
            where: { id },
            data: {
                title: body.title,
                type: body.type,
                director: body.director,
                budget: new Prisma.Decimal(body.budget),
                location: body.location,
                duration: body.duration,
                year: body.year,
            },
        });

        return data

    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new BadRequestException(`Record with id ${id} not found`)
        }
        throw error
    }
}
export const deleteEntertainment = async (id: number) => {
    try {
        const data = await prisma.digital_Entertainment.delete({
            where: { id }
        });
        console.log(data);
        return { message: "Deleted Successfylly" };
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new BadRequestException(`Record with id ${id} not found`)
        }
        throw error;
    }
};

