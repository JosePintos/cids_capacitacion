import dataSource from "../data-source";
import { GetProyectoDTO } from "../dto/ProyectoDTO";
import { ProyectoEntity } from "../entity/ProyectoEntity";
import { Proyecto } from "../model/Proyecto";

const _proyectoRepository = dataSource.getRepository(ProyectoEntity);

const getProyectos = async (): Promise<GetProyectoDTO[]> => {
  try {
    return await _proyectoRepository.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getProyectoById = async (id: number): Promise<GetProyectoDTO | null> => {
  try {
    return await _proyectoRepository.findOne({ where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const ProyectoRepository = {
  getProyectos,
  getProyectoById,
};
