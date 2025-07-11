import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

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

  // @ManyToOne(() => Aggregatzustand, (agg) => agg.elements, { eager: true })
  // @JoinColumn({ name: 'aggregatzustand' })
  @Column({ type: 'text' })
  aggregatzustand: 'Gas' | 'Flüssig' | 'Fest';

  // @ManyToOne(() => Kategorie, (kat) => kat.elements, { eager: true })
  // @JoinColumn({ name: 'kategorie' })
  @Column({ type: 'text' })
  kategorie: string;

  @Column({ type: 'float' })
  siedepunkt_k: number;

  @Column({ type: 'float' })
  schmelzpunkt_k: number;

  @Column({ type: 'float' })
  elektronegativitaet: number;

  @Column({ type: 'float' })
  dichte_g_cm3: number;

  @Column({ type: 'text' })
  entdeckt: string;

  @Column({ type: 'text' })
  oxidationszahlen: string;

  @Column({ type: 'float', nullable: true })
  gruppe: number | null;

  @Column({ type: 'float' })
  periode: number;
}

// @Entity({ name: 'kategorien' })
// export class Kategorie {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'text', unique: true })
//   kategorie: string;

//   @OneToMany(() => PseElement, (element) => element.kategorie)
//   elements: PseElement[];
// }

// @Entity({ name: 'aggregatzustaende' })
// export class Aggregatzustand {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'text', unique: true })
//   zustand: 'gasförmig' | 'Flüssig' | 'Fest';

//   @OneToMany(() => PseElement, (element) => element.aggregatzustand)
//   elements: PseElement[];
// }
