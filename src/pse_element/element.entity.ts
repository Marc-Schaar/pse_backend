import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Element {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Ordnungszahl: number;

  @Column()
  Symbol: string;

  @Column()
  Name: string;

  @Column('float')
  Atommasse: number;

  @Column()
  Aggregatzustand: string;

  @Column()
  Kategorie: string;

  @Column('float')
  Siedepunkt: number;

  @Column('float')
  Schmelzpunkt: number;

  @Column('float')
  Elektronegativität: number;

  @Column('float')
  Dichte: number;

  @Column()
  Entdeckt: string;

  @Column()
  Oxidationszahlen: string;

  @Column('float')
  Gruppe: number;

  @Column('float')
  Periode: number;
}
