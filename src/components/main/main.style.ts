import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3EEDD"
  },
  logo: {
    width: 66,
    height: 58
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: responsiveFontSize(6),
    fontFamily: "BebasNeue",
    backgroundColor: "#D3EEDD"
  },
  headerContainer: {
    borderColor: "lightgrey"
  },
  topBorder: {
    backgroundColor: "#D3EEDD"
  }
});

export default styles;
