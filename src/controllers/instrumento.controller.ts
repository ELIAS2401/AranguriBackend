import { Request, Response, NextFunction } from "express";
import { InstrumentoService } from "../services/instrumento.service";

export const InstrumentoController = {
  async listar(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const instrumentos = await InstrumentoService.listar();
      res.json(instrumentos);
    } catch (error) {
      next(error);
    }
  },

  async obtenerPorId(req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> {
    try {
      const instrumento = await InstrumentoService.obtenerPorId(req.params.id);
      res.json(instrumento);
    } catch (error) {
      next(error);
    }
  },

  async crear(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const instrumento = await InstrumentoService.crear(req.body);
      res.status(201).json(instrumento);
    } catch (error) {
      next(error);
    }
  },

  async actualizar(req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> {
    try {
      const instrumento = await InstrumentoService.actualizar(req.params.id, req.body);
      res.json(instrumento);
    } catch (error) {
      next(error);
    }
  },

  async eliminar(req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> {
    try {
      await InstrumentoService.eliminar(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};
