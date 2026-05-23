import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function home() {
  const { email } = useLocalSearchParams();

  const [lokasi, setLokasi] = useState("");
  const [destinasi, setDestinasi] = useState("");
  const [departure, setDeparture] = useState<Date>(new Date());
  const [kembali, setKembali] = useState<Date>(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const openDeparturePicker = () => {
    DateTimePickerAndroid.open({
      value: departure,
      onChange: (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (selectedDate) setDeparture(selectedDate);
      },
      mode: "date",
      minimumDate: new Date(), // Tidak bisa pilih hari kemarin
    });
  };

  const openReturnPicker = () => {
    DateTimePickerAndroid.open({
      value: kembali,
      onChange: (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (selectedDate) setKembali(selectedDate);
      },
      mode: "date",
      minimumDate: departure, // Tidak bisa sebelum tanggal berangkat
    });
  };

  const [selectedTrip, setSelectedTrip] = useState<"round" | "one" | "multi">(
    "round",
  );

  const handleSubmit = () => {
    if (!lokasi || !destinasi || !departure || !kembali) {
      Alert.alert("error", "Semua kolom wajib diisi!");
      return;
    }
    Alert.alert(
      "Sukses",
      `Data terkirim!\n\nLokasi: ${lokasi}\nDestinasi: ${destinasi}\nDeparture: ${departure}\nKembali: ${kembali}`,
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.row}>
          <View style={styles.textWrap}>
            <Text style={styles.text}>Hello, {email}</Text>
            <Text style={styles.text2}>Book your next flight</Text>
          </View>
          <Image
            source={require("@/assets/images/pp.jpg")}
            style={styles.gambarProfile}
          />
        </View>
        <View style={styles.tripSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "round" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("round")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "round" && styles.activeTabText,
              ]}
            >
              Round Trip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "one" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("one")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "one" && styles.activeTabText,
              ]}
            >
              One way
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTrip === "multi" && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTrip("multi")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTrip === "multi" && styles.activeTabText,
              ]}
            >
              Multi city
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>From (Location)</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan lokasi anda"
            value={lokasi}
            onChangeText={(text) => setLokasi(text)}
            // secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>To (Destination)</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan destinasi yang ingin anda tuju"
            value={destinasi}
            onChangeText={(text) => setDestinasi(text)}
            // secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.row2}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Departure</Text>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={openDeparturePicker}
            >
              <Text style={styles.input}>{formatDate(departure)}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Return</Text>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={openReturnPicker}
            >
              <Text style={styles.input}>{formatDate(kembali)}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.popularSection}>
        <Text style={styles.text3}>Popular Destination</Text>
        <Image
          source={require("@/assets/images/mentawai.jpg")}
          style={styles.populer}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0E9B6",
  },
  hero: {
    backgroundColor: "#744577",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#F2EAE0",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    // marginHorizontal: 20,
  },
  textWrap: {
    flexDirection: "column",
  },
  text: {
    marginTop: 20,
    color: "#ffffff",
  },
  text2: {
    marginVertical: 10,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    marginBottom: 10,
    color: "#744577",
    fontSize: 20,
    fontWeight: "bold",
  },
  popularSection: {
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 30,
  },
  gambarProfile: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  tripSelector: {
    flexDirection: "row",
    backgroundColor: "#F2EAE0",
    borderRadius: 20,
    padding: 4,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 21,
  },
  populer: {
    backgroundColor: "#ccc",
    width: "100%",
    height: 180,
    borderRadius: 20,
    // marginHorizontal: 20,
    // marginVertical: 10,
  },
  activeTabButton: { backgroundColor: "#744577" },
  tabText: { color: "#744577", fontWeight: "600" },
  activeTabText: { color: "#fff" },
  form: {
    backgroundColor: "#BDA6CE",
    maxWidth: "100%",
    marginHorizontal: 24,
    marginTop: -10,
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputButton: {
    backgroundColor: "#F2EAE0",
    padding: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputRow: {
    flex: 1,
    // marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#744577",
  },
  input: {
    backgroundColor: "#F2EAE0",
    opacity: 0.8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#744577",
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
