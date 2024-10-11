import React, {useReducer} from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css';
import TodoList from './components/TodoList';
import { type IState } from './types';
import { checkboxTheme } from "./theme/components/checkbox";
import reducer from './reducer';

const theme = extendTheme({
  components: {
    Checkbox: checkboxTheme,
  }
});


const todolistDatas: IState = []

function App() {

  const [todos, dispatch] = useReducer(reducer, todolistDatas);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/*<Checkbox>Themed Checkbox</Checkbox>*/}
        {/*<Checkbox size="xl">Themed XL Checkbox</Checkbox>*/}
        {/*<Checkbox variant="circular">Themed Circular Checkbox</Checkbox>*/}
        {/*<Checkbox variant="circular" size="xl">Themed XL Circular Checkbox</Checkbox>*/}
        {/*<Checkbox variant="circular" size="xl" colorScheme="red">Themed Red XL Circular Checkbox</Checkbox>*/}
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </ChakraProvider>
  );
}

export default App;
