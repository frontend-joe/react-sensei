import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);
const colorLabel = "#A4A3A6";
const colorText = "#343239";

export default {
  id: "whiteGreen",
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f0f0f9",
  colorNavbar: "#fff",
  colorNavbarLabel: colorLabel,
  colorNavbarLink: colorText,
  colorText: colorText,
  colorLabel: colorLabel,
  colorBorder: "#f0f0f9",
  colorPrimary: "#18b984",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#5fe7bb",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#e3e3e8",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#100f10",
  colorChartShading: "#696969",
  boxShadowLogo: `none`,
};
