import React, { useCallback } from "react";
import { TodoInput } from "./Input";

import { Action } from '../types';
import { Text } from '@chakra-ui/react';

export function Header({ dispatch }:{ dispatch: React.Dispatch<Action>}) {
  const addItem = useCallback((name: string) => dispatch({ type: 'add', payload: { name } }), [dispatch]);

  return (
    <header className="header" data-testid="header">
      <Text fontSize='5xl' color='tomato'>Todos</Text>
      <TodoInput onSubmit={addItem} label="New Todo Input" placeholder="What needs to be done?" />
    </header>
  );
}
