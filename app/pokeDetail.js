import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import * as Icons from "../assets/icons";


export default function DetailComponent ({route}) {
  const detail = route.params.detail;
  const typeIcons = {
    normal: Icons.Normal,
    fire: Icons.Fire,
    water: Icons.Water,
    electric: Icons.Electric,
    grass: Icons.Grass,
    ice: Icons.Ice,
    fighting: Icons.Fighting,
    poison: Icons.Poison,
    ground: Icons.Ground,
    flying: Icons.Flying,
    psychic: Icons.Psychic,
    bug: Icons.Bug,
    rock: Icons.Rock,
    ghost: Icons.Ghost,
    dark: Icons.Dark,
    dragon: Icons.Dragon,
    steel: Icons.Steel,
    fairy: Icons.Fairy
  }
  return(
    <ScrollView style={style.container}>
      <ImageBackground style={style.container_back} source={{uri: "https://cdn2.iconfinder.com/data/icons/gaming-color-icons/104/22-gaming-pokemon-pokeball-512.png"}}>
        <Text style={style.title_page}>
          {detail.name}
        </Text>
        <View style={style.img_container}>
          {detail.sprites.front_default && 
            <View style={style.card_container}>
              <Image
                style={style.image}
                source={{uri: detail.sprites.front_default}}
              />
              <Text style={style.text}>Normal Sprite</Text>
            </View>
          }
          {detail.sprites.front_shiny && 
            <View style={style.card_container}>
              <Image
                style={style.image}
                source={{uri: detail.sprites.front_shiny}}
              />
              <Text style={style.text}>Shiny Sprite</Text>
            </View>
          }
          {detail.sprites.front_female && 
            <View style={style.card_container}>
              <Image
                style={style.image}
                source={{uri: detail.sprites.front_female}}
              />
              <Text style={style.text}>Normal Sprite Female</Text>
            </View>
          }
          {detail.sprites.front_shiny_female && 
            <View style={style.card_container}>
              <Image
                style={style.image}
                source={{uri: detail.sprites.front_shiny_female}}
              />
              <Text style={style.text}>Shiny Sprite Female</Text>
            </View>
          }
        </View>
        <View style={{gap:24, backgroundColor:"#000000", padding:12, borderRadius:12}}>
          <View style={{gap: 12}}>
          <Text style={style.title_element}>Elements</Text>
          <View style={{flexDirection:'row' ,alignItems:"center", justifyContent:"center", gap:24, backgroundColor: "#ffffff46", padding:12, borderRadius:12}}>
            {detail.types.map(type=>{
              const Icon = typeIcons[type.type.name];
              return(
                <View key={type.slot} style={style.element_card}>
                  <Icon width={25} height={25}/>
                  <Text style={style.element_title}>{type.type.name}</Text>
                </View>
              )
            })}
          </View>
        </View >
          <View >
            <Text style={style.title}>
              Pokemon Stats
            </Text>
            <View style={style.stat_container}>
              {detail.stats.map((stat, i)=>{
                return(
                  <View key={i} style={style.stat_card}>
                    <Text style={style.text_stat}>{stat.stat.name}</Text>
                    <Text style={style.text_stat}>{stat.base_stat}</Text>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
    </ImageBackground>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000000"
  },
  container_back: {
    flex:1,
    gap: 24,
    padding:12,
    resizeMode:"center",
    flexDirection: 'column',
    backgroundColor:"#000000"
  },
  stat_container:{
    padding:12,
    backgroundColor: "#ffffff46",
    borderRadius:12
  },
  stat_card:{
    flexDirection:"row",
    gap:4
  },
  element_card:{
    flexDirection:'row' ,
    alignItems:"center", 
    backgroundColor: "#ffffff46",
    paddingInline:8,
    paddingBlock:4,
    gap:4,
    borderRadius:8,
  },
  element_title:{
    color: "#000000",
    fontSize:24,
    fontWeight:"bold",
    textAlign:'center'
  },
  img_container:{
    justifyContent:'center',
    gap:12,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  card_container: {
    padding:12,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor : "#ffffffb9"
  },
  title:{
    fontSize:24,
    color:"#ffffff",
    marginBlock: 1,
    fontWeight:"bold",
    textAlign:'center',

  },
  title_element:{
    fontSize:24,
    color:"#ffffff",
    marginBlock: 1,
    fontWeight:"bold",
    textAlign:'center',
  },
  title_page:{
    fontSize:32,
    backgroundColor:"#ffffffb9",
    padding:12,
    borderRadius:12,
    color:"#000000",
    marginBlock: 1,
    fontWeight:"bold",
    textAlign:'center',
  },
  text:{
    fontWeight: "bold",
    color:"#000000ea",
    fontSize: 16
  },
  text_stat:{
    fontWeight: "bold",
    color:"#ffffffea",
    fontSize: 16
  },
  image:{
    width:150,
    height:150,
    resizeMode:"cover"
  }
})