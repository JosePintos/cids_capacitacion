import dataSource from "../data-source";
import { GetTareaDTO } from "../dto/TareaDTO";
import { TareaEntity } from "../entity/TareaEntity";
import { Tarea } from "../model/Tarea";

const _tareaRepository = dataSource.getRepository(TareaEntity);

const getTareas = async (): Promise<GetTareaDTO[]> => {
  try {
    return await _tareaRepository.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getTareaById = async (id: number): Promise<GetTareaDTO | null> => {
  try {
    return await _tareaRepository.findOne({ where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const TareaRepository = {
  getTareas,
  getTareaById,
};
