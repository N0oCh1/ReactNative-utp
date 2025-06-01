import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function CalculadoraComponent() {
  const [total, setTotal] = useState([]);
  const [texto, setTexto] = useState('');
  const [equalPresed, press] = useState(false);


  function handlePress (digit) {
    const operadores = [" + ", " - ", " x ", " / "];
    if (texto === ""  && operadores.includes(digit)) {
      return;
    }
    if(equalPresed){
      press(false)
      setTexto('')
    }
    setTexto(prev=> prev + digit)
  }
  function handleEqual () {
    try{
      press(true)
       const expresion = texto
        .replace(/ \x /g,'*')
        .replace(/ \/ /g,'/')
        .replace(/ \+ /g,'+')
        .replace(/ \- /g,'-')
        .replace(/\s+/g, '')
      const resultado = eval(expresion);
      setTotal(resultado)
    } catch(e){
      setTotal("error");
    }
  }
  function handleDelete() {
      setTexto()
      setTotal()
    }
  return (
    <View style={style.container}>
      <Text style={style.text}>Hola estamos en Calculadora</Text>
       <Text style={style.text}>
            {texto} = {total}
          </Text>
      <View style={style.calculadora}>
       
        {/* aqui se vera el resultado */}
        <View
          style={{
            flexDirection: "column",
          }}
        >
        </View>
          <View style={{gap:4}}>
            <View style={{ flexDirection: "row", gap:4}}>
              <Pressable style={style.button_digit} onPress={()=>handlePress("7")}>
                <Text style={style.digit}>7</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("8")}>
                <Text style={style.digit}>8</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("9")}>
                <Text style={style.digit}>9</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress(" + ")}>
                <Text style={style.digit}>➕</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", gap:4} }>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("4")}>
                <Text style={style.digit}>4</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("5")}>
                <Text style={style.digit}>5</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("6")}>
                <Text style={style.digit}>6</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress(" - ")}>
                <Text style={style.digit}>➖</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", gap:4}}>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("1")}>
                <Text style={style.digit}>1</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("2")}>
                <Text style={style.digit}>2</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("3")}>
                <Text style={style.digit}>3</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress(" x ")}>
                <Text style={style.digit}>✖️</Text>
              </Pressable>
            </View>
            <View style={{ flexDirection: "row", gap:4}}>
              <Pressable style={style.button_digit}  onPress={()=>handlePress("0")}>
                <Text style={style.digit}>0</Text>
              </Pressable>
              <Pressable style={style.button_digit}  >
                <Text style={style.digit} onPress={()=>handleDelete()}>⬅️</Text>
              </Pressable>
              <Pressable style={style.button_digit}  >
                <Text style={style.digit} onPress={()=>handleEqual()}>🟰</Text>
              </Pressable>
              <Pressable style={style.button_digit}  onPress={()=>handlePress(" / ")}>
                <Text style={style.digit}>➗</Text>
              </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap:24,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign:'center',
    fontSize:16,
    width: "100%",
    color: "white",

  },
  calculadora: {
    borderRadius:8,
    padding:12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
  button_digit: {
    backgroundColor: "rgba(0, 116, 236, .9294117647)",
    width: 50,
    height: 50,
    justifyContent: "center",
    borderRadius: 8,
  },
  digit: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
});
