import { Desarrollador } from "../model/Desarrollador";
import { Estado } from "../model/Estado";
import { Proyecto } from "../model/Proyecto";
import { GetDesarrolladorDTO } from "./DesarrolladorDTO";
import { GetEstadoDTO } from "./EstadoDTO";
import { GetProyectoDTO } from "./ProyectoDTO";

export type CreateTareaDTO = {
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  asignado: Desarrollador;
  proyecto: Proyecto;
  estado: Estado;
};

export type UpdateTareaDTO = {
  titulo?: string;
  descripcion?: string;
  fechaLimite?: Date;
  proyecto?: Proyecto;
  estado?: Estado;
  asignado?: Desarrollador;
};

export type GetTareaDTO = {
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: Date;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  asignado: GetDesarrolladorDTO;
  proyecto: GetProyectoDTO;
  estado: GetEstadoDTO;
};
