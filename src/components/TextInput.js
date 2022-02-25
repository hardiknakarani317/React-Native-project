/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Icon} from 'native-base';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import {BLUE1, GREY1, GREY2, GREY3, GREY9} from '../constants/colors';

const InputBox = ({label, hasInfoIcon, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      {label && (
        <View style={styles.iconRow}>
          <Text style={[styles.label, isFocused && {color: BLUE1}]}>
            {label}
          </Text>
          {hasInfoIcon && (
            <Icon
              name="info-circle"
              type="FontAwesome5"
              style={[styles.icon, isFocused && {color: BLUE1}]}
            />
          )}
        </View>
      )}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          isFocused && {borderColor: BLUE1, borderWidth: 2},
        ]}
        placeholderTextColor={GREY3}
        {...props}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  label: {
    color: GREY9,
    fontSize: 12,
    marginBottom: 11,
  },
  input: {
    backgroundColor: GREY1,
    color: GREY9,
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: GREY2,
    borderRadius: 8,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
    color: GREY9,
    top: -5,
  },
});
