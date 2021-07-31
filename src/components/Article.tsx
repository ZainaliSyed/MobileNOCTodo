import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({article, removeArticle}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle],
  );

  return (
    <TouchableOpacity
      onPress={() => deleteArticle(article)}
      style={styles.ComponentContainer}>
      <View style={styles.ListContainer}>
        <View style={{padding: 10}}>
          <Text style={styles.TextItem}>{article.title}</Text>
          <Text style={styles.TextTask}> {article.body}</Text>
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
