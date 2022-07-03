import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './Detail.style';
import useFetch from '../../../hooks/useFetch';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import DetailCard from '../../../components/DetailCard';

const Detail = ({route}) => {
  const value = route.params.productId;

  const {loading, error, data} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + value,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderDetail = ({item}) => <DetailCard product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.idMeal}
        data={data.meals}
        renderItem={renderDetail}
      />
    </SafeAreaView>
  );
};

export default Detail;
