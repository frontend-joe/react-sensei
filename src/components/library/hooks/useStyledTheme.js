import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function useStyledTheme() {
  const theme = useContext(ThemeContext);
  return theme || {};
}
