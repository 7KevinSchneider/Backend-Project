import { NextFunction, Request, Response } from 'express';

function getDate() {
  return new Date().toISOString().replace('T', ' ').replace('Z', ' ');
}

export function GlobalLogger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `Estas ejecutando un metodo ${req.method} en la ruta ${req.url} a las ${getDate()}`,
  );
  next();
}
