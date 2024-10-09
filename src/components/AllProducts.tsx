import React, {useState, useEffect} from 'react';
import {useGetShopAllProductsQuery} from '../Redux/servicesApi/shopApi';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import AllProductItem from './AllProductItem';
import {shopApiAllProductsResponse} from '../typesTs/type';
import Chip from './chip';
import SortingBy from './sortingBy';

const filterDataByCategory = (
  items: shopApiAllProductsResponse[],
  categories: string[],
) => {
  if (categories.includes('All')) {
    return items;
  }

  return items.filter(item => categories.includes(item.category));
};

const sortByPrice = (
  items: shopApiAllProductsResponse[],
  order: 'ASC' | 'DESC',
) => {
  if (!items) {
    return [];
  }
  if (order === 'ASC') {
    return [...items].sort((a, b) => a.price - b.price);
  } else {
    return [...items].sort((a, b) => b.price - a.price);
  }
};

const sortByRating = (
  items: shopApiAllProductsResponse[],
  order: 'ASC' | 'DESC',
) => {
  if (!items) {
    return [];
  }
  if (order === 'ASC') {
    return [...items].sort((a, b) => a.rating.rate - b.rating.rate);
  } else {
    return [...items].sort((a, b) => b.rating.rate - a.rating.rate);
  }
};

const ALlProducts: React.FC = () => {
  const {data, isLoading, isError} = useGetShopAllProductsQuery({});
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [filtred, setFiltred] = useState<shopApiAllProductsResponse[]>([]);
  const [orderPrice, setorderPrice] = useState<'ASC' | 'DESC'>('ASC');
  const [orderRating, setorderRating] = useState<'ASC' | 'DESC'>('ASC');

  const categories = [
    'All',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    if (data) {
      const products = Array.isArray(data) ? data : [];
      setFiltred(
        selectedChips.length === 0
          ? products
          : filterDataByCategory(products, selectedChips),
      );
    }
  }, [data, selectedChips]);

  const handleChipPress = (category: string) => {
    setSelectedChips(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(item => item !== category)
        : [...prevSelected, category],
    );
  };

  const handleSortByPrice = () => {
    if (orderPrice === 'ASC') {
      setorderPrice('DESC');
    } else {
      setorderPrice('ASC');
    }
    setFiltred(prevFiltred => sortByPrice(prevFiltred, orderPrice));
  };

  const handleSortByRating = () => {
    if (orderRating === 'ASC') {
      setorderRating('DESC');
    } else {
      setorderRating('ASC');
    }
    setFiltred(prevFiltred => sortByRating(prevFiltred, orderRating));
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error loading products</Text>}
      <TextInput style={styles.input} />
      <View style={styles.chipContainer}>
        <SortingBy label="sort by price" onPress={handleSortByPrice} />
        <SortingBy label="sort by rating" onPress={handleSortByRating} />
      </View>
      <View style={styles.chipContainer}>
        {categories.map(category => (
          <Chip
            key={category}
            category={category}
            onPress={() => handleChipPress(category)}
            selected={selectedChips.includes(category)}
          />
        ))}
      </View>
      <FlatList
        data={filtred}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <AllProductItem
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default ALlProducts;

const styles = StyleSheet.create({
  container: {flex: 1, margin: 20},
  row: {
    justifyContent: 'space-between',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    borderStyle: 'solid',
    padding: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
