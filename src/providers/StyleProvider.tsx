import type { FC, ReactNode } from "react";
import { memo } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export interface StyleProviderProps {
  children: ReactNode;
}

export const StyleProvider: FC<StyleProviderProps> = memo(({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
});

StyleProvider.displayName = "StyleProvider";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.beige,
    flex: 1,
    // fontFamily: "oursMedium",
    gap: 10,
  },
});
