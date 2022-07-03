import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './Homepage.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/CategoryCard';
const Homepage = ({navigation}) => {
  const {error, data, loading} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  const handleProductSelect = categoryName => {
    navigation.navigate('ProductScreen', {categoryName});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleProductSelect(item.strCategory)}
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
        keyExtractor={item => item.idCategory}
        data={data.categories}
        renderItem={renderCategory}
      />
    </SafeAreaView>
  );
};

export default Homepage;
