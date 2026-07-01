export interface IInstrumento {
  id?: string;
  nombre: string;
  marca: string;
  categoria: string;
  precio: number;
  descripcion: string;
  imagen: string;
  estado?: string;
  creador?: string;
  contacto?: string;
  created_at?: string;
}
