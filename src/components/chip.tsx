import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {chip} from '../typesTs/type';

const Chip: React.FC<chip> = ({category, onPress, selected}) => {
  return (
    <TouchableOpacity
      style={[styles.chip, selected && styles.chipSelected]}
      onPress={onPress}>
      <Text style={styles.chipText}>{category}</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  chip: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    margin: 5,
    flexGrow: 1,
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: 'lightblue',
  },
  chipText: {
    color: 'black',
  },
});
