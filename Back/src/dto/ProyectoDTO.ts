import { Desarrollador } from "../model/Desarrollador";

export type CreateProyectoDTO = {
  nombre: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  responsable: Desarrollador;
};

export type GetProyectoDTO = {
  id: number;
  nombre: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  responsable: Desarrollador;
  fechaCreacion?: Date;
  fechaActualizacion?: Date;
};

export type UpdateProyectoDTO = {
  nombre?: string;
  descripcion?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  responsable?: Desarrollador;
};
