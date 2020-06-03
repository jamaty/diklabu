export interface Anwesenheit {
  id: string;
  erfasstAm: Date;
  geändertAm: Date;
  klasse: string;
  klasseBild: string;
  kommentar: string;
  anwesend: number;
  fehlend: number;
  unentschuldigt: number;
  
}

