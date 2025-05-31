import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const img = require('./assets/icon.png');
	const [countPresed, setCountPresed] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image  source={img} style={{width:100, height:100, resizeMode:"stretch"}}/>
      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text>
      <View style={{flexDirection:"row", gap:24}}>
        <Button 
          title='Hola' 
          onPress={()=>{alert("Hola mundo")}}
        />

				<Pressable
					onPress={()=>{
						setCountPresed(prev=>prev+1);
					}}
					style={({pressed})=>[{
						backgroundColor: pressed ? 'red' : 'white',
						borderRadius: 8, 
						padding:6
					}]}
					>
					{({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
				</Pressable>
				<View>
					<Text style={{color:'white'}}>{countPresed}</Text>
				</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    gap:12
  },
});
