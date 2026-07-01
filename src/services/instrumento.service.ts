import { InstrumentoRepository } from "../repositories/instrumento.repository";
import { IInstrumento } from "../interfaces/instrumento.interface";
import { AppError } from "../utils/app-error";

const CAMPOS_REQUERIDOS = ["nombre", "marca", "categoria", "precio", "descripcion", "imagen"] as const;

type CrearInstrumento = Omit<IInstrumento, "id" | "created_at">;
type ActualizarInstrumento = Partial<CrearInstrumento>;

function validarCamposRequeridos(data: Record<string, unknown>): void {
  for (const campo of CAMPOS_REQUERIDOS) {
    if (!data[campo]) {
      throw new AppError(`El campo '${campo}' es requerido`, 400);
    }
  }
}

export const InstrumentoService = {
  async listar(): Promise<IInstrumento[]> {
    return InstrumentoRepository.findAll();
  },

  async obtenerPorId(id: string): Promise<IInstrumento> {
    return InstrumentoRepository.findById(id);
  },

  async crear(data: CrearInstrumento): Promise<IInstrumento> {
    validarCamposRequeridos(data as unknown as Record<string, unknown>);
    return InstrumentoRepository.create(data);
  },

  async actualizar(id: string, data: ActualizarInstrumento): Promise<IInstrumento> {
    if (Object.keys(data).length === 0) {
      throw new AppError("Debe enviar al menos un campo para actualizar", 400);
    }
    return InstrumentoRepository.update(id, data);
  },

  async eliminar(id: string): Promise<void> {
    await InstrumentoRepository.delete(id);
  },
};
