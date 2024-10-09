/* eslint-disable react/react-in-jsx-scope */
import {Text, View, Image, StyleSheet} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {useGetOneProductQuery} from '../Redux/servicesApi/shopApi';

const OneProduct: React.FC = () => {
  const route = useRoute();

  const {id} = route.params as {id: number};
  const {data, isLoading, isError} = useGetOneProductQuery({id});
  const rating = data?.rating.rate ?? 0;

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error loading products</Text>}
      <Image source={{uri: data?.image}} style={styles.image} />
      <Text style={styles.titleText}>{data?.title}</Text>
      <Text style={styles.titlePrice}>{data?.price} $</Text>
      <View style={styles.ratingContainer}>
        <Text>{rating}</Text>
        <Text>{data?.rating.count}</Text>
      </View>
    </View>
  );
};

export default OneProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  image: {
    width: 250,
    height: 250,
    objectFit: 'fill',
    alignSelf: 'center',
  },
  titleText: {
    marginTop: 15,
    fontSize: 20,
  },
  titlePrice: {
    marginTop: 10,
    fontSize: 16,
  },
  ratingContainer: {
    marginTop: 5,
    flexDirection: 'row',
    gap: 10,
  },
});
