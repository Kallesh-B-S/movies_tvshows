import { Request, Response, NextFunction } from "express";
import { BadRequestException } from "../exceptions/BadRequestException";
import { ZodError } from "zod";

export const generalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BadRequestException) {
        console.log("Error : ", err.message);
        return res.status(err.statusCode).json({ message: err.message });
    }
    else if (err instanceof SyntaxError) {
        console.log("Error : ", err.message);
        return res.status(400).json({ message: err.message });
    }

    console.error("Error : Application failed resolve request", err.message, err);
    res.status(500).json({ message: "Internal Server Error" });
};

export const zodErrorhandler = (error: ZodError, req: Request, res: Response) => {
    console.log(error.issues);
    const issue = error.issues[0];
    const pathString = String(issue.path[0]);
    return res.status(400).json({ message: `${issue.message} for ${pathString}` });
}
