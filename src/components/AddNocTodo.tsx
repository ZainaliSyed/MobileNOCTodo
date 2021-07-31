import React, {useRef} from 'react';
import {View, Dimensions, SafeAreaView, StyleSheet} from 'react-native';

import {
  MaterialTextField,
  FormHandler,
  AppButton,
} from '../reuseableComponents';

const windowWidth = Dimensions.get('window').width;
type Props = {
  saveTodo: (todo: ITodo | any) => void;
};

export const AddNocTodo: React.FC<Props> = ({saveTodo}) => {
  const formHandler = useRef(null);

  const addNewTodo = () => {
    const payload = formHandler.current.onSubmitForm();
    let isValid = formHandler.current.checkValidation();
    formHandler.current.clearInputs();
    if (isValid) {
      payload['id'] = Math.round(Math.random() * 999999);
      saveTodo(payload);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FormHandler ref={formHandler}>
          <MaterialTextField
            label={'Title'}
            identifier="title"
            type={'TEXT'}
            highlight={true}
            error="First Name is required"
            autoCapitalize={'words'}
          />
          <MaterialTextField
            label={'Description'}
            identifier="body"
            type={'TEXT'}
            highlight={true}
            error="First Name is required"
            autoCapitalize={'words'}
          />
        </FormHandler>

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
});
