import { Card } from './card';

export class List {
  id: string;
  boardID: string;
  name: string;
  cards: Card[];
  board: any; // TODO refactor
}
