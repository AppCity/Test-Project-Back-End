import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsync = (handler: RequestHandler) =>
    async (...args: [Request, Response, NextFunction]) => {
        try
        {
            await handler(...args)
            args[2]()
        }
        catch (err)
        {
            args[2](err)
        }
    }

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' })
}

export const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!err.status) {
        console.error(err.stack)
    }
    res.status(err.status || 500).json ({ message: err.message || "Internal Server Error" })
}