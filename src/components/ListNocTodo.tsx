import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';

type Props = {
  todo: ITodo;
  removeTodoItem: (todo: ITodo) => void;
};

export const ListNocTodo: React.FC<Props> = ({todo, removeTodoItem}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTodoItem = React.useCallback(
    (todo: ITodo) => dispatch(removeTodoItem(todo)),
    [dispatch, removeTodoItem],
  );

  return (
    <TouchableOpacity
      onPress={() => deleteTodoItem(todo)}
      style={styles.ComponentContainer}>
      <View style={styles.ListContainer}>
        <View style={{padding: 10}}>
          <Text style={styles.TextItem}>{todo.title}</Text>
          <Text style={styles.TextTask}> {todo.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListContainer: {
    backgroundColor: 'whitesmoke',
    height: 'auto',
    width: 350,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },

  TextItem: {
    color: 'black',
    width: 260,
    height: 'auto',
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    paddingBottom: 10,
  },
  TextTask: {
    color: 'goldenrod',
    fontSize: 15,
    marginRight: 20,
    borderRadius: 10,
  },
});
