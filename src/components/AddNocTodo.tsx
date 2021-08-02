import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {AppButton} from '../reuseableComponents';

const windowWidth = Dimensions.get('window').width;
type Props = {
  saveTodo: (todo: ITodo | any) => void;
};

export const AddNocTodo: React.FC<Props> = ({saveTodo}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const addNewTodo = () => {
    title.length <= 0 ? setTitleError(true) : setTitleError(false);
    description.length <= 0
      ? setDescriptionError(true)
      : setDescriptionError(false);
    if (!Boolean(title.length <= 0) && !Boolean(description.length <= 0)) {
      const payload = {};
      payload['title'] = title;
      payload['description'] = description;
      saveTodo(payload);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Type here to title !"
          onChangeText={title => setTitle(title)}
          defaultValue={title}
        />
        <Text style={styles.inputValidation}>
          {titleError ? 'The title field is required' : ''}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Type here to description !"
          onChangeText={desc => setDescription(desc)}
          defaultValue={description}
        />
        <Text style={styles.inputValidation}>
          {descriptionError ? 'The description field is required' : ''}
        </Text>

        <AppButton
          onPress={() => addNewTodo()}
          item={{title: 'ADD', backgroundColor: 'goldenrod'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, minHeight: 150},
  content: {
    flex: 1,
    alignSelf: 'center',
    width: windowWidth - 40,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    fontSize: 18,
    color: 'goldenrod',
  },
  inputValidation: {
    color: 'red',
    marginBottom: 10,
    paddingTop: 5,
  },
});
