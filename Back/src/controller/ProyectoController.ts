import { Request, Response, Router } from "express";
import { ProyectoService } from "../service/ProyectoService";

const getAllProyectos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const roles = await ProyectoService.getAllProyectos();
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProyectoById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id, 10);
    const rol = await ProyectoService.getProyectoById(id);
    return res.status(200).json(rol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const ProyectoController = {
  getProyectoById,
  getAllProyectos,
};
