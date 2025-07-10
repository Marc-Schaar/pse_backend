import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pse_elements' })
export class PseElement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  ordnungszahl: number;

  @Column({ type: 'text' })
  symbol: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  atommasse: number;

  @Column({ type: 'text' })
  aggregatzustand: string;

  @Column({ type: 'text' })
  kategorie: string;

  @Column({ type: 'float' })
  siedepunkt: number;

  @Column({ type: 'float' })
  schmelzpunkt: number;

  @Column({ type: 'float' })
  elektronegativitaet: number;

  @Column({ type: 'float' })
  dichte: number;

  @Column({ type: 'text' })
  entdeckt: string;

  @Column({ type: 'int', array: true })
  oxidationszahlen: number[];

  @Column({ type: 'float' })
  gruppe: number;

  @Column({ type: 'float' })
  periode: number;
}
