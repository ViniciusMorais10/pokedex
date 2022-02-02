import React from "react";

import {
  Text, View
}
from 
'react-native';

import Styles from './styles';

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({title, description}: HeaderProps){
  return (
    <View style={Styles.container}>
      <Text style={Styles.lbtitle}>{title}</Text>
      <Text style={Styles.lbdescription}>{description}</Text>
    </View>
  )
}