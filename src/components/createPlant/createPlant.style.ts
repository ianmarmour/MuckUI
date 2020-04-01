import {
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      width: responsiveWidth(100),
      alignItems: "center",
      backgroundColor: "white"
    },
    forumTitle: {
      fontSize: responsiveFontSize(3),
      fontFamily: "BebasNeue",
      color: "#282a2c",
      paddingTop: 15
    },
    inputStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: "lightgrey"
    },
    buttonStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: "lightgrey"
    }
  });
  
  export default styles