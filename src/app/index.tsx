import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("error", "Semua kolom wajib diisi!");
      return;
    }
    Alert.alert(
      "Sukses",
      `Data terkirim!\n\nEmail: ${email}\nPassword: ${password}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Text style={styles.subTitle}>Silakan masuk ke akun anda</Text>
      <View style={styles.containerForm}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username/Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan username/email anda"
            value={email}
            onChangeText={(text) => setEmail(text)}
            // secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan password anda"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E9B6",
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
  containerForm: {
    backgroundColor: "#F2EAE0",
    borderRadius: 20,
    shadowColor: "#744577",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
    margin: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#744577",
  },
  input: {
    paddingVertical: 12,
    fontSize: 16,
    borderBottomColor: "#744577",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#744577",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
