export class CreatePseElementDto {
  ordnungszahl: number;
  symbol: string;
  name: string;
  atommasse: number;
  aggregatzustand: string;
  kategorie: string;
  siedepunkt: number;
  schmelzpunkt: number;
  elektronegativitaet: number;
  dichte: number;
  entdeckt: string;
  oxidationszahlen: number[];
  gruppe: number;
  periode: number;
}
