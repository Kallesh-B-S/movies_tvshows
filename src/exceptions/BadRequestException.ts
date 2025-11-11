export class BadRequestException extends Error {
    statusCode: number;

    constructor(message?: string) {
        super(message || "Bad Request");
        this.name = "BadRequestError";
        this.statusCode = 400;
        Object.setPrototypeOf(this, BadRequestException.prototype);
    }
}
