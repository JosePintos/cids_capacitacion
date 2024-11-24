import { Router, Request, Response } from "express";
import { ProyectoController } from "../controller/ProyectoController";

const ProyectoRouter = Router();

ProyectoRouter.get("/:id", (req: Request, res: Response) => {
  ProyectoController.getProyectoById(req, res);
});

ProyectoRouter.get("", (req: Request, res: Response) => {
  ProyectoController.getAllProyectos(req, res);
});

export default ProyectoRouter;
