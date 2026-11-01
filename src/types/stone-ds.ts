export type ViewMode = "OPERACOES" | "ANGELS";

export type MetricKey = "CHAMADOS" | "TMA_STONE" | "TMA_TON" | "TMA_BOBINA" | "CICLO_TRIAGEM";

export interface MetricDefinition {
  key: MetricKey;
  label: string;
  shortLabel: string;
  description: string;
  direction: "higher_is_better" | "lower_is_better";
  isTime?: boolean;
  unit?: string;
  operationsOnly?: boolean;
}

export interface RankedItem {
  id: string;
  nome: string;
  displayNome: string;
  rank: number;
  value: number;
  formattedValue: string;
  photoUrl?: string;
  avatarFallback: string;
  isTied: boolean;
  deltaFromLeader?: number;
  metricKey: MetricKey;
}

export interface HighlightPodiumAppearance {
  categoryKey: MetricKey;
  categoryLabel: string;
  rank: number;
  valueFormatted: string;
}

export interface MonthHighlightData {
  nome: string;
  displayNome: string;
  photoUrl?: string;
  avatarFallback: string;
  totalPodiums: number;
  firstPlaceCount: number;
  secondPlaceCount: number;
  thirdPlaceCount: number;
  score: number;
  appearances: HighlightPodiumAppearance[];
  summaryNote: string;
}
