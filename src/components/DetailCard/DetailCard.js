import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  Linking,
} from 'react-native';

import styles from './DetailCard.style';

const DetailCard = ({product}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: product.strMealThumb}} />
      <Text style={styles.title}>{product.strMeal}</Text>
      <Text style={styles.desc}>{product.strInstructions}</Text>
      {product.strTags ? (
        <Text style={styles.tags}>Tags: {product.strTags}</Text>
      ) : null}
      <TouchableOpacity
        onPress={() => Linking.openURL(product.strYoutube)}
        style={styles.watchButton}>
        <Text style={styles.watchButtonText}>Watch Video</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailCard;
