import { Request, Response, NextFunction } from "express";

let requestCount = 0;
let lastRequestCount = 0;

setInterval(() => {
  if (requestCount !== lastRequestCount) {
    console.log("📈 Request count: ", requestCount);
    lastRequestCount = requestCount;
  }
}, 1000);

export const countRequests =
  () => (req: Request, res: Response, next: NextFunction) => {
    requestCount++;
    next();
  };
