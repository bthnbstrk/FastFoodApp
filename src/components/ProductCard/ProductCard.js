import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.strMealThumb}} />
        <Text style={styles.title}>{product.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
