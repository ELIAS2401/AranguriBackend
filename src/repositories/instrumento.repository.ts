import supabase from "../config/supabase";
import { IInstrumento } from "../interfaces/instrumento.interface";
import { AppError } from "../utils/app-error";

const TABLE = "instrumentos";

export const InstrumentoRepository = {
  async findAll(): Promise<IInstrumento[]> {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new AppError("Error al obtener instrumentos", 500);
    }

    return data ?? [];
  },

  async findById(id: string): Promise<IInstrumento> {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      throw new AppError("Instrumento no encontrado", 404);
    }

    return data;
  },

  async create(
    instrumento: Omit<IInstrumento, "id" | "created_at">
  ): Promise<IInstrumento> {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(instrumento)
      .select()
      .single();

    if (error) {
      throw new AppError("Error al crear instrumento", 500);
    }

    return data;
  },

  async update(
    id: string,
    instrumento: Partial<Omit<IInstrumento, "id" | "created_at">>
  ): Promise<IInstrumento> {
    const { data, error } = await supabase
      .from(TABLE)
      .update(instrumento)
      .eq("id", id)
      .select()
      .single();

    if (error || !data) {
      if (error?.code === "PGRST116") {
        throw new AppError("Instrumento no encontrado", 404);
      }
      throw new AppError("Error al actualizar instrumento", 500);
    }

    return data;
  },

  async delete(id: string): Promise<void> {
    const { data, error } = await supabase
      .from(TABLE)
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      throw new AppError("Error al eliminar instrumento", 500);
    }

    if (!data || data.length === 0) {
      throw new AppError("Instrumento no encontrado", 404);
    }
  },
};
