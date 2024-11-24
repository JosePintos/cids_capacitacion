import dataSource from "../data-source";
import { CreateTareaDTO, GetTareaDTO, UpdateTareaDTO } from "../dto/TareaDTO";
import { TareaEntity } from "../entity/TareaEntity";
import { Tarea } from "../model/Tarea";
import { TareaRepository } from "../repository/TareaRepository";

const getTareaById = async (id: number): Promise<GetTareaDTO | null> => {
  try {
    return await TareaRepository.getTareaById(id);
  } catch (error) {
    console.error("Error fetching tarea:", error);
    throw new Error("Could not fetch tarea");
  }
};

const getAllTareas = async (): Promise<GetTareaDTO[] | []> => {
  try {
    return await TareaRepository.getTareas();
  } catch (error) {
    console.error("Error fetching tareas:", error);
    throw new Error("Could not fetch tareas");
  }
};

export const TareaService = {
  getTareaById,
  getAllTareas,
};
