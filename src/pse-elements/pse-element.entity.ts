import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PseElement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ordnungszahl: number;

  @Column('text')
  symbol: string;

  @Column('text')
  name: string;

  @Column('float')
  atommasse: number;

  @Column('text')
  aggregatzustand: string;

  @Column('text')
  kategorie: string;

  @Column('float')
  siedepunkt: number;

  @Column('float')
  schmelzpunkt: number;

  @Column('float')
  elektronegativität: number;

  @Column('float')
  dichte: number;

  @Column('text')
  entdeckt: string;

  @Column('int', { array: true })
  oxidationszahlen: number[];

  @Column('float')
  gruppe: number;

  @Column('float')
  periode: number;
}
