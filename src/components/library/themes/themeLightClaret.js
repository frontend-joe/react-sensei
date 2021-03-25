import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorTextForDark = rgba("white", 0.96);
const colorLabel = "#A4A3A6";
const colorText = "#343239";

export default {
  id: "lightClaret",
  ...themeDefault,
  borderRadius: "0.75rem",
  colorBackground: "#f0f0f9",
  colorNavbar: "#ffffff",
  colorNavbarLabel: colorLabel,
  colorNavbarLink: colorText,
  colorText: "#343239",
  colorLabel: "#A4A3A6",
  colorBorder: "#f0f0f9",
  colorPrimary: "#670E36",
  colorPrimaryText: colorTextForDark,
  colorAccent: "#95BFE5",
  colorAccentText: colorTextForDark,
  colorCardBackground: "#ffffff",
  colorDefaultBackground: "#e3e3e8",
  colorDefaultText: "#73707C",
  colorDisabledBackground: "#d5d5e3",
  colorDisabledText: "#bebed0",
  colorCode: "#100f10",
  colorChartShading: "#696969",
  boxShadowLogo: `0px 0px 20px ${rgba("black", 0.12)}`,
};
