import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Poppins_800ExtraBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular
  });

  const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  if (!fontsLoaded && !fontError) {
    return null;
  }

   const animConfig = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  // const animStyle = useAnimatedStyle(() => {
  //   return {
  //     opacity: withTiming(100, animConfig),
  //   };
  // });


  return (
    <SafeAreaProvider>
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      {/* <Animated.View style={[animStyle]}> */}
        <Text style={[styles.text, themeTextStyle]}>CONTROLIFY APP</Text>
      {/* </Animated.View> */}
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#F8F9FA',
  },
  darkContainer: {
    backgroundColor: '#212429',
  },
  lightThemeText: {
    color: '#2e323c',
  },
  darkThemeText: {
    color: '#edeff0',
  },
  text: {
    fontSize: 40,
    fontFamily: 'Poppins_800ExtraBold',
  }
});