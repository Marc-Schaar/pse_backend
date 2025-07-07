import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Element } from './element.entity';
import { log } from 'console';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'admin',
  database: 'test',
  entities: [Element],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    //hier mit der Datenbake arbeiten
    log('Data Source has been initialized!');
  })
  .catch((error) => console.log(error));
