export interface Round {
  cities: string[];
  highestTemp: number;
  selectedCity: string;
  selectedCityTemp: number;
  won: boolean;
}

export interface IGame {
  id: string;
  error: number;
  isHelpUsed: boolean;
  level: string;
  rounds: Round[];
  stopped: boolean;
}

export interface GameProps {
  item: IGame;
  index: number;
}
