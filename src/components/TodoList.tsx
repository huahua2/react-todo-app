import React, { useCallback } from 'react';
import { Text, SimpleGrid, Checkbox, Flex, Container, CloseButton, Box, Spacer } from '@chakra-ui/react'
import { Action, IState, ITodoItem } from '../types';
import { Header } from './Header';

const TodoItem = ({ completed, name, onChecked, onRemoved }: ITodoItem & { onChecked: Function, onRemoved: Function }) => {

  const onCacheChecked = useCallback(()=> onChecked(), [onChecked]);
  const onCacheRemoved = useCallback(()=> onRemoved(), [onRemoved]);
  return (
    <Flex pl='5' align="center" justify="flex-start" bg='tomato' onClick={()=>onCacheChecked()}>
      <Flex  w='100%' align={'center'}>
        <Box onClick={(e)=>e.stopPropagation()}>
          <Checkbox size='lg' variant="circular" colorScheme='green' isChecked={completed} onChange={()=> {onCacheChecked()}} ><Text {...(completed && {as: 'del'})} fontSize='3xl' color='#fff'>{name}</Text>
          </Checkbox>
        </Box>
        <Spacer />
        <Box onClick={(e)=>e.stopPropagation()}><CloseButton size='lg' color='#fff' onClick={()=>onCacheRemoved()} /></Box>
      </Flex>
    </Flex>
  )
}



const TodoList = ({ todos, dispatch }: { todos: IState, dispatch: React.Dispatch<Action>}) => {

  const handleCheckd = useCallback((id: string | number) => dispatch({type: 'toggle', payload: { id: id }}), [dispatch])
  const handleRemoved = useCallback((id: string | number) => dispatch({type: 'remove', payload: { id: id }}), [dispatch])
  return (
    <Container maxW='container.sm'>
      <Header dispatch={dispatch}></Header>
      <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
      {
        todos.map((item: ITodoItem )=>
            <TodoItem key={item.id} id={item.id} completed={item.completed} name={item.name} onChecked={()=> handleCheckd(item.id)} onRemoved={()=> handleRemoved(item.id)} />
        )
      }
      </SimpleGrid>
    </Container>
  )
}


export default TodoList

