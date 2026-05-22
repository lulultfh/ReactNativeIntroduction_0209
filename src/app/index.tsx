import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.subTitle}>Silakan masuk ke akun anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#744577",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  subTitle: {
    color: "#744577",
    fontSize: 15,
    marginHorizontal: 20,
  },
});
