import * as Font from "expo-font";

const fontLoader = () => {
    return Font.loadAsync({
      BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf")
    });
};

export { fontLoader };