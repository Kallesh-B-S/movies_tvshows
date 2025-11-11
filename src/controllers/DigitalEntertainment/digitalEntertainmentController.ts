import { Request, Response } from "express";
import * as entertainmentService from "../../services/DigitalEntertainment/digitalEntertainmentService";
import {
    CreateEntertainmentSchema,
    CreateEntertainmentSchemaType,
    PaginatedEntertainmentsQueryParamsSchema,
    PaginatedEntertainmentsQueryParamsSchemaType,
    PatchEntertainmentSchema,
    PatchEntertainmentSchemeType,
    UpdateEntertainmentSchema,
    UpdateEntertainmentSchemaType,
    ParamIDNumberSchema,
} from "../../validations/entertainmentValidation";
import { ZodError } from "zod";
import { extractQueryParams } from "../../util/helper";
import { zodErrorhandler } from "../../middlewares/errorHandler";

export const getEntertainments = async (req: Request, res: Response) => {

    try {
        const extractedQueryParams = extractQueryParams(req);

        if (!extractedQueryParams) {
            return res.json(await entertainmentService.getAllEntertainments());
        }

        else {
            const queryParams: PaginatedEntertainmentsQueryParamsSchemaType = PaginatedEntertainmentsQueryParamsSchema.parse(extractedQueryParams);
            const data = await entertainmentService.getPaginatedEntertainments(queryParams.page, queryParams.limit);
            return res.json(data)
        }

    } catch (error) {
        if (error instanceof ZodError) {
            return zodErrorhandler(error, req, res);
        }
        throw error;
    }
};

export const searchEntertainments = async (req: Request, res: Response) => {

    try {
        const title = req.params.title;
        const data = await entertainmentService.searchEntertainments(title);
        return res.json(data);
    } catch (error) {
        throw error
    }

};


export const createEntertainment = async (req: Request, res: Response) => {

    try {
        const body: CreateEntertainmentSchemaType = CreateEntertainmentSchema.parse(req.body)

        const result = await entertainmentService.createEntertainment(body);

        return res.status(201).json(result)
    } catch (error) {
        if (error instanceof ZodError) {
            return zodErrorhandler(error, req, res);
        }
        throw error;
    }
}

export const updateEntertainments = async (req: Request, res: Response) => {
    try {
        const paramId = req.params.id;

        const id = ParamIDNumberSchema.parse(paramId);

        const body: UpdateEntertainmentSchemaType = UpdateEntertainmentSchema.parse(req.body)

        const result = await entertainmentService.updateEntertainment(id, body);

        return res.status(200).json(result)
    } catch (error) {
        if (error instanceof ZodError) {
            return zodErrorhandler(error, req, res);
        }
        throw error;
    }
}

export const patchEntertainments = async (req: Request, res: Response) => {

    try {

        const paramId = req.params.id;

        const id = ParamIDNumberSchema.parse(paramId);

        const body: PatchEntertainmentSchemeType = PatchEntertainmentSchema.parse(req.body)

        const result = await entertainmentService.patchEntertainment(id, body);

        return res.status(200).json(result)

    } catch (error) {
        if (error instanceof ZodError) {
            return zodErrorhandler(error, req, res);
        }
        throw error;
    }
}


export const deleteEntertainment = async (req: Request, res: Response) => {
    try {

        const paramId = req.params.id;

        const id = ParamIDNumberSchema.parse(paramId);

        const data = await entertainmentService.deleteEntertainment(id);

        return res.json(data);

    } catch (error) {
        if (error instanceof ZodError) {
            return zodErrorhandler(error, req, res);
        }
        throw error;
    }
}