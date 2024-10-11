export interface ITodoItem {
  id: number | string;
  name: string;
  completed: boolean;
}

export type IState = ITodoItem[];

export type Action =
  | { type: 'add'; payload: { name: string } }
  | { type: 'remove'; payload: { id: number | string } }
  | { type: 'toggle'; payload: { id: number | string } }
