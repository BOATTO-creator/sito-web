export type MetadescriptionType = string;

export interface StepOneType {
  nome: string;
  cognome: string;
  azienda: string;
  piva: string;
  email: string;
  telefono: string;
}

export interface StepTwoType {
  indirizzoDiCarico: string;
  indirizzoDiScarico: string;
  tipologiaCarico: string;
  dataProntezzaMerce: string;
  larghezza: string;
  altezza: string;
  peso: string;
  numeroPezzi: string;
  infoAggiuntive: string;
}
