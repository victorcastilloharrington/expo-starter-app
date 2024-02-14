import { StyleSheet, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { Stack, Slot, Tabs } from "expo-router";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
  });

  const colorScheme = useColorScheme();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DefaultTheme : DefaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView
          style={[
            styles.container,
            colorScheme === "dark"
              ? styles.darkContainer
              : styles.lightContainer,
          ]}
        >
          <Slot />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  lightContainer: {
    backgroundColor: "#f8f9fa",
  },
  darkContainer: {
    backgroundColor: "#212429",
  },
});
