import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Dashboard() {
  // Mock data
  const userName = "John Doe"; // Reemplaza con el nombre del usuario
  const profileImageUrl = require("./img/pfp.jpg"); // Reemplaza con la URL o ruta de tu imagen de perfil

  // Función para manejar la acción de los botones
  const handleButtonPress = (buttonText) => {
    // Lógica para manejar la acción de cada botón
    console.log(`Pressed button: ${buttonText}`);
  };

  return (
    <View style={styles.container}>
      {/* Sección de saludo y foto de perfil */}
      <View style={styles.profileSection}>
        <Image source={profileImageUrl} style={styles.profileImage} />
        <Text style={styles.userName}>{`Hello, ${userName}`}</Text>
      </View>

      {/* Sección de botones */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 1")}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 2")}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 3")}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 4")}>
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 5")}>
          <Text style={styles.buttonText}>Button 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress("Button 6")}>
          <Text style={styles.buttonText}>Button 6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  button: {
    width: "48%",
    height: 150,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
