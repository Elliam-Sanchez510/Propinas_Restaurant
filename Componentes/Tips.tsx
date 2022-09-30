import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, TextInput,} from "react-native";

const Tips = () => {
  const [tip, setTip] = useState<string>("8.5");
  const [total, setTotal] = useState<number>(560.5);
  const [totalPeople, setTotalPeople] = useState<string>("100");
  const [porCiento, setPorCiento] = useState<number>(16);
  const [peoples, setPeoples] = useState<number>(5);
  

  const calculateTip = () => {
    let tipTotal: number = total * (porCiento / 100);
    let tips: number = tipTotal / peoples;
    if (isNaN(tips) || tips === Infinity) {
      tips = 0;
    }
    setTip(tips.toFixed(2).toString());
    let _total: number = total + tipTotal;
    setTotalPeople(tipTotal.toFixed(2).toString());
  };
  const resetData = () => {
    setTotal(0);
  };

  useEffect(calculateTip, [total, peoples, porCiento]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}> Bill </Text>
        <View>
          <Text style={styles.inputC$}> C$</Text>
          <TextInput
            style={styles.input}
            defaultValue={total.toString()}
            onChangeText={() => setTotal}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.titulo}>
            Select Tip %
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => setPorCiento(5)}
              style={
                porCiento == 5
                  ? styles.porciento
                  : styles.btnporciento
              }
            >
              <Text
                style={
                  porCiento == 5
                    ? styles.Textporciento
                    : styles.textbtnPorciento
                }
              >
                5%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorCiento(10)}
              style={
                porCiento == 10
                  ? styles.porciento
                  : styles.btnporciento
              }
            >
              <Text
                style={
                  porCiento == 10
                    ? styles.Textporciento
                    : styles.textbtnPorciento
                }
              >
                10%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorCiento(15)}
              style={
                porCiento == 15
                  ? styles.porciento
                  : styles.btnporciento
              }
            >
              <Text
                style={
                  porCiento == 15
                    ? styles.Textporciento
                    : styles.textbtnPorciento
                }
              >
                15%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorCiento(25)}
              style={
                porCiento == 25
                  ? styles.porciento
                  : styles.btnporciento
              }
            >
              <Text
                style={
                  porCiento == 25
                    ? styles.Textporciento
                    : styles.textbtnPorciento
                }
              >
                25%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPorCiento(50)}
              style={
                porCiento == 50
                  ? styles.porciento
                  : styles.btnporciento
              }
            >
              <Text
                style={
                  porCiento == 50
                    ? styles.Textporciento
                    : styles.textbtnPorciento
                }
              >
                50%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnporciento}>
              <Text style= {styles.textbtnPorciento}>Custom</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.titulo}>Number of people</Text>
          <View>
            <TextInput
              style={styles.inputs}
              keyboardType="numeric"
              defaultValue={peoples.toString()}
              onChangeText={() => setPeoples}
            />
          </View>
        </View>
        <View style={styles.res}>
          
          <View style={styles.Res}>
            <Text style={styles.textTip}>Tip</Text>
            <Text style={styles.textPeople}>People</Text>
          </View>
          <View>
            <Text style={styles.textMount}>${tip}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => resetData()} style={styles.btnReset}>
          <Text style={styles.textoReset}>RESET</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Tips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingTop: 22,
    paddingLeft: 22,
    paddingRight: 22,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#687778',
    fontSize: 18,
    marginTop: 7,
    borderWidth: 0,
    marginBottom: 7,
  },
  input: {
    backgroundColor: '#F2F8FB',
    fontWeight: 'bold',
    color: '#004445',
    textAlign: 'right',
    borderRadius: 7,
    padding: 10,
    fontSize: 22,
  },
  inputC$: {
    position: 'absolute',
    fontSize: 22,
    top: 10,
    color: '#A2AABB',
    left: 10,
  },
  box: {
    marginTop: 30
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  },
  porciento: {
    backgroundColor: '#00C1AC',
    width: '48%',
    borderRadius: 10,
    paddingVertical: 7,
    marginTop: 10,
  },
  btnporciento: {
    backgroundColor: '#00494C',
    width: '48%',
    borderRadius: 8,
    paddingVertical: 7,
    marginTop: 10,
  },
  Textporciento: {
    color: '#004B4F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
   },
    textbtnPorciento: {
        color: '#F5FBFC',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    res: { 
        backgroundColor: '#00494C',
        borderRadius: 10,
        marginTop: 25,
        padding: 20,
    },
    
    textTip: {
      color: '#EDFEFE',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: 0,
    },
    textPeople: {
      color: '#4F8B8E',
      fontWeight: 'bold',
      fontSize: 16,
      borderWidth: 0,
  },
  textMount: {
    borderWidth: 0,
    fontSize: 30,
      color: '#00BEAD',
      fontWeight: 'bold',
  },
  Res: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  inputs: {
    fontWeight: 'bold',
    color: '#004445',
      backgroundColor: '#F2F8FB',
      textAlign: 'right',
      padding: 8,
      borderRadius: 10,
      fontSize: 22,
  },
  btnReset: {
    backgroundColor: '#00C1AC',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 7,
    marginTop: 1,
  },
  textoReset: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00514E',
  },
});
