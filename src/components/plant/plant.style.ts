import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
  verticalScrollContainer: {
    width: responsiveWidth(100),
    backgroundColor: "white"
  },
  swipeableContainer: {
    width: responsiveWidth(100)
  },
  deleteButton: {
    backgroundColor: "red",
    width: responsiveWidth(100),
    height: 130
  },
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
  },
  logo: {
    width: 130,
    height: 130
  },
  header: {
    fontSize: responsiveFontSize(2),
    fontFamily: "BebasNeue-Bold",
    color: "#282a2c"
  },
  slideContainer: {
    height: 100
  },
  slide: {
    padding: 15,
    height: 100
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  },
  text: {
    color: "#fff",
    fontSize: 16
  }
});

export default styles;
