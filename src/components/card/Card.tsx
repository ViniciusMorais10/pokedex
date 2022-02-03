import React from "react";

import {
  Text, View, StyleSheet, Image
}
from 'react-native';
import Styles from "../card/styles";

export function Card(){
  return(
    <View style={Styles.container}>
      <View style={Styles.card}>
          <Text style={Styles.lbNumber} >#001</Text>
          <Text style={Styles.lbName}>Bulbasaur</Text>
          <Text>Grass</Text>
          <Text>Poison</Text>
      </View>
    </View>
  )
}

