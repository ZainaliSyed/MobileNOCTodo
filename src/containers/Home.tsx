import React, {useCallback} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';

import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {addArticle, removeArticle} from '../action/actionCreators';
import {AddArticle, Article} from '../components';
import {Dispatch} from 'redux';

const Home: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch],
  );
  const renderItem = ({item}) => (
    <Article key={item.id} article={item} removeArticle={removeArticle} />
  );

  return (
    <View style={{flex: 1}}>
      <Text style={styles.container}>Mobile NOC Todo</Text>
      <AddArticle saveArticle={saveArticle} />

      <SafeAreaView style={{flex: 3}}>
        <FlatList
          data={articles}
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
