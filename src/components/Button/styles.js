import { StyleSheet } from "react-native";
import { colors, fonts, sizes, weights } from "../../theme/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center'
  },
  text: {
    color: colors.white,
    fontSize: sizes.md,
    fontWeight: weights.bold,
    fontFamily: fonts.primary,
    paddingLeft: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  coffee: {
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 25,
    height: 25,
  }
})