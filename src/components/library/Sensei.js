import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useStyledTheme } from "./hooks";

const Wrapper = ({ children }) => {
  const theme = useStyledTheme();

  return (
    <HelmetProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v3.0.6/css/line.css"
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=${theme.fontFamily}:wght@${theme.fontWeightRegular};${theme.fontWeightSemibold};${theme.fontWeightBold}&display=swap`}
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default Wrapper;
