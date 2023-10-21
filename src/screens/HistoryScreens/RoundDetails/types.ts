import {Round} from '../types';

export interface HeaderProps {
  level: string;
  isHelpUsed: boolean;
  error: number;
  stopped: boolean;
}

export interface RoundItemProps {
  item: Round;
  index: number;
}
