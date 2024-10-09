import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {sort} from '../typesTs/type';

const SortingBy: React.FC<sort> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sortContainer}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default SortingBy;

const styles = StyleSheet.create({
  sortContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    margin: 5,
    flexGrow: 1,
    alignItems: 'center',
  },
  sortText: {
    color: 'black',
  },
});
