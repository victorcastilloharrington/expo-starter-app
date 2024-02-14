import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Link } from "expo-router";
export default function Status() {
  const colorScheme = useColorScheme();
  const textColor =
    colorScheme === "dark" ? styles.darkThemeText : styles.lightThemeText;
  return (
    <View>
      <Text style={[styles.text, textColor]}>STATUS PAGE</Text>
      <Link href="/" style={textColor}>
        Go to Home
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
