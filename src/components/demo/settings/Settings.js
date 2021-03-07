import React from "react";
import styled from "styled-components";
import {
  SettingsDialog,
  SettingsHeader,
  SettingsSubheader,
  SettingsThemePicker,
} from "components/library";

const Wrapper = ({ isSettingsOpen, setSettingsOpen, setTheme }) => {
  return (
    <SettingsDialog isSettingsOpen={isSettingsOpen}>
      <SettingsHeader>Settings</SettingsHeader>
      <SettingsSubheader>Theme</SettingsSubheader>
      <SettingsThemePicker setTheme={setTheme} />
    </SettingsDialog>
  );
};

export default Wrapper;
