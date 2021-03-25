import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);

export default {
  id: "light",
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f0f0f9",
  colorNavbar: "#100f10",
  colorNavbarLabel: rgba("white", 0.65),
  colorNavbarLink: colorTextForDark,
  colorText: "#343239",
  colorLabel: "#A4A3A6",
  colorBorder: "#f0f0f9",
  colorPrimary: "#6A26CD",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#37B9F1",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#e3e3e8",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#100f10",
  colorChartShading: "#696969",
  boxShadowLogo: "none",
};
