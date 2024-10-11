import type { Action, IState } from './types';

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), name: action.payload.name, completed: false },
      ];
    case 'remove':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      throw new Error('Unhandled action type');
  }
}

export default reducer;
