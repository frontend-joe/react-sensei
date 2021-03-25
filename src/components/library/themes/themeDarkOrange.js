import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorLabel = rgba("white", 0.57);
const colorText = rgba("white", 0.96);

export default {
  id: "darkOrange",
  ...themeDefault,
  borderRadius: "1rem",
  colorBackground: "#181818",
  colorNavbar: "#050505",
  colorNavbarLabel: colorLabel,
  colorNavbarLink: colorText,
  colorText: colorText,
  colorLabel: colorLabel,
  colorBorder: "#393939",
  colorPrimary: "#ff6b3f",
  colorPrimaryText: colorText,
  colorAccent: "#f7f7f7",
  colorAccentText: "#1B1B1B",
  colorCardBackground: "#050505",
  colorDefaultBackground: "#2D2D2D",
  colorDefaultText: colorText,
  colorDisabledBackground: "#3d3d3d",
  colorDisabledText: "#6b6666",
  colorCode: "#242424",
  colorChartShading: "white",
  boxShadowLogo: "none",
};
