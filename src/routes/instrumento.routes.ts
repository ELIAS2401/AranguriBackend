import { Router } from "express";
import { InstrumentoController } from "../controllers/instrumento.controller";

const router = Router();

router.get("/", InstrumentoController.listar);
router.get("/:id", InstrumentoController.obtenerPorId);
router.post("/", InstrumentoController.crear);
router.patch("/:id", InstrumentoController.actualizar);
router.delete("/:id", InstrumentoController.eliminar);

export default router;
