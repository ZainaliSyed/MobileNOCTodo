import React, {useRef} from 'react';
import {View, Dimensions, SafeAreaView, StyleSheet} from 'react-native';

import {
  MaterialTextField,
  FormHandler,
  AppButton,
} from '../reuseableComponents';

const windowWidth = Dimensions.get('window').width;
type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({saveArticle}) => {
  const formHandler = useRef(null);

  const addNewArticle = () => {
    const payload = formHandler.current.onSubmitForm();
    let isValid = formHandler.current.checkValidation();
    if (isValid) {
      payload['id'] = Math.round(Math.random() * 999999);
      saveArticle(payload);
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
          onPress={() => addNewArticle()}
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
