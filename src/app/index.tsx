import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hi Uls!</Text>
      <Link href="/contoh">Contoh</Link>
      <Link href="/uls">Halaman Form</Link>

      <Text>Ini Form Nama</Text>
      <TextInput style={styles.form} placeholder="Masukkan nama anda" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff98",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    borderWidth: 1,
    width: 200,
  },
});
