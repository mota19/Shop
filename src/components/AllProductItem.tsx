import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {shopApiAllProductsResponse} from '../typesTs/type';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../typesTs/type';
import {StackNavigationProp} from '@react-navigation/stack';

const AllProductItem: React.FC<
  Omit<shopApiAllProductsResponse, 'category' | 'description' | 'count'>
> = ({id, title, price, image, rating}) => {
  const rate = rating?.rate !== undefined ? rating.rate : 'No rating';

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log('Navigating to oneProduct with id:', id);
        navigation.navigate('oneProduct', {id});
      }}
      activeOpacity={0.7}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textPrice}>{price} $</Text>
      <Text style={styles.textRating}>{rate}</Text>
    </TouchableOpacity>
  );
};

export default AllProductItem;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 175,
    borderRadius: 10,
    marginBottom: 8,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  textPrice: {
    fontSize: 18,
    color: '#2c3e50',
    marginBottom: 4,
  },
  textRating: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});
