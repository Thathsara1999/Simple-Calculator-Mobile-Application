import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calText, setCalText] = useState("");

  const onButtonClick = (text) => {
    console.log(text);
    if (text === '=') {
      return calculation();
    }
    setResultText(resultText + text);
  };

  const calculation = () => {
    try {
      setCalText(eval(resultText));
    } catch (e) {
      setCalText('Error');
    }
  };

  const onOperationClick = (text) => {
    if (text === 'AC') {
      setResultText('');
      setCalText('');
      return;
    }
    if (text === 'Del') {
      return setResultText(resultText.substring(0, resultText.length - 1));
    }
    setResultText(resultText + text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calText}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { onButtonClick('1') }}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('2') }}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('3') }}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { onButtonClick('4') }}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('5') }}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('6') }}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { onButtonClick('7') }}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('8') }}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('9') }}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => { onButtonClick('.') }}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('0') }}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onButtonClick('=') }}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity onPress={() => { onOperationClick('Del') }}>
            <Text style={styles.operationButton}>Del</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onOperationClick('AC') }}>
            <Text style={styles.operationButton}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onOperationClick('+') }}>
            <Text style={styles.operationButton}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onOperationClick('-') }}>
            <Text style={styles.operationButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onOperationClick('*') }}>
            <Text style={styles.operationButton}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onOperationClick('/') }}>
            <Text style={styles.operationButton}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  result: {
    backgroundColor: 'grey',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    flex: 9,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'black',
    flex: 3,
  },
  operations: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  calculationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: 30,
  },
  operationButton: {
    color: 'white',
    fontSize: 30,
  },
});
