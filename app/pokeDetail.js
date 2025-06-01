import { View, Text, StyleSheet, Image } from "react-native";
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
    <View style={style.container}>
      <Text style={style.title}>
        {detail.name}
      </Text>
      <View style={style.img_container}>
        {detail.sprites.front_default && 
          <View style={style.card_container}>
            <Image
              style={style.image}
              source={{uri: detail.sprites.front_default}}
            />
            <Text style={{color: "#ffffff"}}>Normal Sprite</Text>
          </View>
        }
        {detail.sprites.front_shiny && 
          <View style={style.card_container}>
            <Image
              style={style.image}
              source={{uri: detail.sprites.front_shiny}}
            />
            <Text style={{color: "#ffffff"}}>Shiny Sprite</Text>
          </View>
        }
        {detail.sprites.front_female && 
          <View style={style.card_container}>
            <Image
              style={style.image}
              source={{uri: detail.sprites.front_female}}
            />
            <Text style={{color: "#ffffff"}}>Normal Sprite Female</Text>
          </View>
        }
        {detail.sprites.front_shiny_female && 
          <View style={style.card_container}>
            <Image
              style={style.image}
              source={{uri: detail.sprites.front_shiny_female}}
            />
            <Text style={{color: "#ffffff"}}>Shiny Sprite Female</Text>
          </View>
        }
      </View>
      
      <View>
        <Text style={style.title}>Elements</Text>
        <View style={{flexDirection:'row' ,alignItems:"center", justifyContent:"center", gap:24}}>
          {detail.types.map(type=>{
            const Icon = typeIcons[type.type.name];
            return(
              <View key={type.slot} style={style.element_card}>
                <Icon width={20} height={20}/>
                <Text style={style.title}>{type.type.name}</Text>
              </View>
            )
          })}
        </View>
      </View>
      <View>
        <Text style={style.title}>
          Pokemon Stats
        </Text>
        <View>
          {detail.stats.map((stat, i)=>{
            return(
              <View key={i} style={style.stat_card}>
                <Text style={style.text}>{stat.stat.name}</Text>
                <Text style={style.text}>{stat.base_stat}</Text>
              </View>
            )
          })}
        </View>
      </View>

    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex:1,
    padding:12,
    flexDirection: 'column',
    backgroundColor:"#000000"
  },
  stat_card:{
    flexDirection:"row",
    gap:4
  },
  element_card:{
    flexDirection:'row' ,
    alignItems:"center", 
    backgroundColor: "#dddddd4b",
    paddingInline:8,
    paddingBlock:4,
    gap:4,
    borderRadius:8,
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
    backgroundColor : "#ffffff18"
  },
  title:{
    fontSize:24,
    color:"#ffffff",
    marginBlock: 1,
    fontWeight:"bold"
  },
  text:{
    color:"#ffffff",
  },
  image:{
    width:150,
    height:150,
    resizeMode:"cover"
  }
})