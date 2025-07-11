export class CreatePseElementDto {
  ordnungszahl: number;
  symbol: string;
  name: string;
  atommasse: number;
  aggregatzustand: 'Gas' | 'Flüssig' | 'Fest';
  kategorie: string;
  siedepunkt_k: number;
  schmelzpunkt_k: number;
  elektronegativitaet: number;
  dichte: number;
  entdeckt: string;
  oxidationszahlen: string;
  gruppe: number | null;
  periode: number;
}
