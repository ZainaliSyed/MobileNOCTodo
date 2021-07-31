import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import Styles from './Styles';

const AppButton = (props: any) => {
  return !props.backgroundImage ? (
    <TouchableOpacity
      style={[
        Styles.btn,
        {backgroundColor: props.item.backgroundColor || 'blue'},
      ]}
      onPress={props.onPress}>
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <Text
          style={[Styles.txtTitle, {color: props.item.textColor || 'black'}]}>
          {props.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={props.onPress} style={Styles.btn}>
      <ImageBackground
        resizeMode="stretch"
        source={props.backgroundImage}
        style={Styles.img}>
        <Text
          style={[Styles.txtTitle, {color: props.item.textColor || 'black'}]}>
          {props.item.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default AppButton;
