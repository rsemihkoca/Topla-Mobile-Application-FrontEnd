import { Dimensions } from "react-native";
import {
  isAndroid,
  getStatusBarHeight
} from "@freakycoder/react-native-helpers";
const { width } = Dimensions.get("window");

export default {
  container: {
    width,
    flexDirection: "row",
    marginTop: isAndroid ? getStatusBarHeight() + 8 : 8
  },
  leftContainer: {
    left: 16
  },
  dateTextStyle: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"
  },
  saluteTextStyle: {
    fontSize: 18,
    color: "white",
    fontWeight: "500"
  },
  rightContainer: {
    right: 16,
    position: "absolute",
    flexDirection: "row"
  },
  ticketImageStyle: {
    top: 8,
    right: 20,
    width: 35,
    height: 35
  },
  myProfileImageStyle: {
    width: 95,
    height: 95,
    borderRadius: 95 / 2
  }
};
