import React, { useEffect } from 'react';
import { View, Text, Button,  StyleSheet, Animated, useAnimatedValue } from 'react-native';


export default function HomeComponent({navigation}) {
  const rotate = useAnimatedValue(0);
  useEffect(()=>{
    Animated.loop(
      Animated.timing(rotate, {
      toValue:1,
      duration:5000,
      useNativeDriver:true})
    ).start();
    
    },[rotate]);

    const spin = rotate.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg'],
    });
  

  return (
    <View style={style.container}>
      <Text style={{color:"white", fontSize:24, textAlign:"center"}}>
          Bienvenido al mundo de React Native !
        </Text>
        <Animated.Image 
          style={[{transform:[{rotate:spin}]},style.image_react]}
          source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"}}/>
      <View style={style.btn_navigate}>
        <Button title='Calculadora' onPress={()=>{navigation.navigate("Calculadora")}}/>
        <Button title='PokeApi' onPress={()=>{navigation.navigate("PokeApi")}}/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    gap:32,
    paddingTop:40,
    padding:12,
    flex:1,
    height:"auto",
    backgroundColor: "#000",
    alignItems:"center",
  },
  image_react:{
    width: 100,
    height:100,
    resizeMode:"center"
  },
  btn_navigate:{
    flexDirection:"row",
    gap:12,
  }
})
  