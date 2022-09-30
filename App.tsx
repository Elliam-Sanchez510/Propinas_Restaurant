import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Propinas from "./Componentes/Tips";
export default function App() {
  return (
    <View style={styles.fund}>
      <View style={styles.container}>
        <Text style={styles.textcolor}>
        Restaurant Tip
        </Text>
      </View>
      <Propinas />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    paddingVertical: 38,
  },
  fund: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C0E3E6",
  },
  textcolor: {
    color: "hsl(172, 67%, 45%)",
    fontWeight: "bold",
    fontSize: 35,
  },
});
