import { StyleSheet } from "react-native";
import { colors, fonts, sizes, weights } from "../../theme/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    width: "100%",

  },
  text: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: weights.bold,
    alignSelf: "center",
  }
})