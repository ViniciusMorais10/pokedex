import React from "react";
import {
  View, Text, StyleSheet, TextInput
}
from 'react-native';

import { Header } from "../components/header/Header";

export function Home(){
  return(
    <View>
      <Header title='Pokédex' description="Search for Pokémon by name or using the National Pokédex number." />
    </View>
  )
}

