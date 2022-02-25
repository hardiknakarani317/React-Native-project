import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import {WHITE, GREY4, BLUE1} from '../constants/colors';

const Button = ({title, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.btnConatainer, disabled && styles.disabled]}>
      <Text style={styles.btnText}>{title}</Text>
      <Icon name="chevron-right" type="Entypo" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnConatainer: {
    backgroundColor: BLUE1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: GREY4,
  },
  btnText: {
    color: WHITE,
    fontSize: 17,
    fontWeight: '500',
  },
  icon: {
    color: WHITE,
    fontSize: 25,
    paddingLeft: 8,
  },
});
