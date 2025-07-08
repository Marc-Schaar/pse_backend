import { AppDataSource } from './data-source';

import { PseElement } from './pse-elements/pse-element.entity';

import 'reflect-metadata';

AppDataSource.initialize()

  .then(async () => {
    console.log('Inserting a new user into the database...');
    const pseElement = new PseElement();
    pseElement.name = 'Hydrogen';
    pseElement.symbol = 'H';

    await AppDataSource.manager.save(pseElement);

    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch((error) => console.log(error));
