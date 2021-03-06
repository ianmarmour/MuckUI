import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  plantContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    backgroundColor: "white",
    width: responsiveWidth(100),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(1)
  },
  logo: {
    width: 130,
    height: 130
  },
  plantHeader: {
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 3,
    height: 130,
    width: 130,
    overflow: "hidden"
  },
  plantDetails: {
    alignItems: "center",
    marginHorizontal: "auto",
    flexDirection: "row"
  },
  textContainer: {
    marginLeft: responsiveWidth(10),
    flexDirection: "column"
  },
  keyView: {
    alignItems: "center",
    marginHorizontal: "auto"
  },
  plantKey: {
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  plantValue: {
    fontWeight: "normal",
    paddingVertical: responsiveHeight(0.8)
  }
});

export default styles;
