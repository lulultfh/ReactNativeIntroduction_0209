import { StyleSheet, Text, View } from "react-native";

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E9B6",
  },
  hero: {
    backgroundColor: "#F2EAE0",
    borderRadius: 20,
    shadowColor: "#744577",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    marginHorizontal: 20,
    color: "#744577",
  },
});
