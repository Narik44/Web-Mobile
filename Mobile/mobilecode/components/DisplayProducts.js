import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import GetJson from './GetJson'
import { MonoText } from '../components/StyledText';

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
        <View >
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
