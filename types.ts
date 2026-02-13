
export enum Position {
  SeniorPastor = '담임목사',
  Elder = '장로',
  AssociatePastor = '부교역자'
}

export interface RegistrationData {
  churchName: string;
  name: string;
  position: Position;
}

export interface AppState {
  isFormOpen: boolean;
  isSubmitted: boolean;
  lastRegistration?: RegistrationData;
  aiMessage?: string;
}
