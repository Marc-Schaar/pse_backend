import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { PseElement } from './pse-elements/pse-element.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [PseElement],
  migrations: [],
  subscribers: [],
});
