import dataSource from "../data-source";
import {
  CreateProyectoDTO,
  GetProyectoDTO,
  UpdateProyectoDTO,
} from "../dto/ProyectoDTO";
import { ProyectoEntity } from "../entity/ProyectoEntity";
import { Proyecto } from "../model/Proyecto";
import { ProyectoRepository } from "../repository/ProyectoRepository";

const getProyectoById = async (id: number): Promise<GetProyectoDTO | null> => {
  try {
    return await ProyectoRepository.getProyectoById(id);
  } catch (error) {
    console.error("Error fetching proyecto:", error);
    throw new Error("Could not fetch proyecto");
  }
};

const getAllProyectos = async (): Promise<GetProyectoDTO[] | []> => {
  try {
    return await ProyectoRepository.getProyectos();
  } catch (error) {
    console.error("Error fetching proyectos:", error);
    throw new Error("Could not fetch proyectos");
  }
};

export const ProyectoService = {
  getProyectoById,
  getAllProyectos,
};
