import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
	err: Error,
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	console.log("Error", err.message);

	const statusCode = res.statusCode != 200 ? res.statusCode : 500;
	const isDev = process.env.NODE_ENV === "development";
	res.status(statusCode).json({
		message: isDev ? err.message : "Internal Server Error",
		...(isDev && { stack: err.stack }),
	});
};
