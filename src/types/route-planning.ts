export interface RouteCityDetail {
  cidade: string;
  totalOs: number;
}

export interface DayRoute {
  id: string;
  tecnico: string;
  prestador: string;
  data: string; // YYYY-MM-DD
  cidades: string[];
  cidadesDetalhes: RouteCityDetail[];
  totalOs: number;
  criadoEm: string;
  atualizadoEm?: string;
}
