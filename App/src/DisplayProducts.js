import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import GetJson from '../../common/DataFetchers/GetJson'

export default class DisplayProducts extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>

      <GetJson>
      {({products})=>(
        products.map((product)=>(
        <View key={product.name}>
        <Text >{product.name} </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: product.avatar }}
        />

      </View>)) )}
     </GetJson>

      </View>
    );
  }

}
