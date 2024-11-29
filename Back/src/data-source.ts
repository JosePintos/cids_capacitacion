import { DataSource } from "typeorm";
import "reflect-metadata";
import { EstadoEntity } from "./entity/EstadoEntity";
import { TareaEntity } from "./entity/TareaEntity";
import { RolEntity } from "./entity/RolEntity";
import { ProyectoEntity } from "./entity/ProyectoEntity";
import { DesarrolladorEntity } from "./entity/DesarrolladorEntity";
import dotenv from "dotenv";
dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    DesarrolladorEntity,
    ProyectoEntity,
    RolEntity,
    TareaEntity,
    EstadoEntity,
  ],
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  logging: false,
});

export default dataSource;
