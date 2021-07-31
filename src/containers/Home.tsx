import React, {useCallback} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {addTodo, removeTodoItem} from '../action/actionCreators';
import {AddNocTodo, ListNocTodo} from '../components';
import {Dispatch} from 'redux';

const Home: React.FC = () => {
  const todoNoclist: readonly ITodo[] = useSelector(
    (state: TodoState) => state.todoNoclist,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveTodo = useCallback(
    (todo: ITodo) => dispatch(addTodo(todo)),
    [dispatch],
  );
  const renderItem = ({item}) => (
    <ListNocTodo key={item.id} todo={item} removeTodoItem={removeTodoItem} />
  );

  return (
    <View style={{flex: 1}}>
      <Text style={styles.container}>Mobile NOC Todo</Text>
      <AddNocTodo saveTodo={saveTodo} />

      <SafeAreaView style={{flex: 3}}>
        <FlatList
          data={todoNoclist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 40,
  },
});
