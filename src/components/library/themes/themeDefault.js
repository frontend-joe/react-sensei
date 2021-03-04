import { rgba } from "polished";

const fontFamily = `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif`;

const theme = {
  gutterWidth: "0.5rem",
  containerMaxWidthXs: "100%",
  containerMaxWidthSm: "100%",
  containerMaxWidthMd: "100%",
  containerMaxWidthLg: "1080px",
  containerMaxWidthXl: "1200px",
  screenWidthXs: "576px",
  screenWidthSm: "768px",
  screenWidthMd: "992px",
  screenWidthLg: "1200px",
  screenWidthXl: "1920px",
  sidebarWidth: "56px",
  sidebarWidthMd: "220px",
  colorForDark1: rgba("white", 0.96),
  colorForDark2: rgba("white", 0.65),
  colorForDark3: rgba("white", 0.45),
  fontFamily,
  fontWeightBold: 700,
  fontWeightSemibold: 600,
  fontWeightRegular: 300,
  heightCardMd: "360px",
  heightChartMd: "150px",
};

export default theme;
