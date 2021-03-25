import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);

export default {
  id: "lightBlue",
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f4f4f8",
  colorNavbar: "#151939",
  colorNavbarLabel: rgba("white", 0.65),
  colorNavbarLink: colorTextForDark,
  colorText: "#343239",
  colorLabel: "#A4A3A6",
  colorBorder: "#f0f0f9",
  colorPrimary: "#475be3",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#b6bad7",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#ececf0",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#a5a5a5",
  colorChartShading: "#696969",
  boxShadowLogo: "none",
};
