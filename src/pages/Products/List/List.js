import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import styles from './List.style';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import ProductCard from '../../../components/ProductCard';

const List = ({route, navigation}) => {
  const value = route.params.categoryName;

  const {error, data, loading} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + value,
  );

  const handleProductSelect = productId => {
    navigation.navigate('DetailScreen', {productId});
  };

  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.idMeal)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default List;
