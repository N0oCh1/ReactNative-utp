import { View, Text, FlatList, Image,StyleSheet, ScrollView, ImageBackground, Pressable } from "react-native";
import { getPoke } from "./api/useApi";
import { useEffect, useState } from "react";


export default function PokeApiComponent ({navigation}) {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
  async function fetchData() {
    const data = await getPoke();
    setPokeData(data);
  }
  fetchData();
}, []);

  return(
    <View style={style.container}>
      <Text>PokeApi</Text> 
      {pokeData && (
        <ScrollView>
          <View style={style.list_container}>
            {pokeData.map(item=>{
              return(
                <Pressable key={item.name} onPress={()=>{
                  navigation.navigate('Detail', {detail: item.detail})
                }}>
                  <ImageBackground style={style.card_container} source={{uri: "https://cdn2.iconfinder.com/data/icons/gaming-color-icons/104/22-gaming-pokemon-pokeball-512.png"}} resizeMethod="resize">
                    <Text style={style.text}>{item.name}</Text>
                    <Image source={{uri: item.detail.sprites.front_default}} style={{width:150, height:150}} />
                  </ImageBackground>
                </Pressable>
              )
            })}
          </View>
        </ScrollView>
      )}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor: "#000"
  },
  list_container: {
    flexDirection: "row",
    flexWrap:'wrap',
    alignItems:"center",
    justifyContent: 'center',
    gap: 24,
  },
  text:{
    backgroundColor: '#ffffffe3',
    borderRadius:8,
    paddingInline: 8,
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold"
  },
  card_container :{
    padding:4,
    borderRadius:20,

    backgroundColor: "#fff"
  }
})