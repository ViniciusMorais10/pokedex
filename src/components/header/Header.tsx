import React from "react";

import {
  Text, View, TextInput
}
from 
'react-native';
import { MaterialCommunityIcons , AntDesign, Ionicons, Feather } from '@expo/vector-icons';


import Styles from './styles';
import { Card } from "../card/Card";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({title, description}: HeaderProps){
  return (
    <View style={Styles.container}>
      <View style={Styles.menu} >
        <AntDesign name="bars" size={24} color={'#000'} style={Styles.headerIcon} />
        <MaterialCommunityIcons  name="sort" size={24} color={'#000'} style={Styles.headerIcon} />
        <Ionicons name="filter" size={24} color={'#000'} style={Styles.headerIcon} />
      </View>
      <View style={Styles.headerContent}>
        <Text style={Styles.lbtitle}>{title}</Text>
        <Text style={Styles.lbdescription}>{description}</Text>
        <View style={Styles.headerContentInput}>
          <Feather 
          name="search" 
          size={20} 
          color={'#747476'}
          style={{paddingStart:15}}
          />
          <TextInput 
          placeholder="What Pokémon are you looking for?"
          style={Styles.headerInput}
          />
        </View>
        
        <Card />

      </View>
    </View>
  )
}