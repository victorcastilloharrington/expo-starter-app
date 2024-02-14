import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
import { Stack, Slot, Tabs } from "expo-router";

export default function App() {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "dark" ? styles.darkThemeText : styles.lightThemeText;
  return (
    <View>
      <Stack.Screen />
      <Text style={[styles.text, textColor]}>APP HOME</Text>
      <Link href="/status" style={textColor}>
        Go to Status
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: "Poppins_800ExtraBold",
  },
  lightThemeText: {
    color: "#2e323c",
  },
  darkThemeText: {
    color: "#edeff0",
  },
});
