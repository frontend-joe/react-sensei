import React from "react";
import styled from "styled-components";
import {
  SettingsDialog,
  SettingsRow,
  SettingsHeader,
  SettingsSubheader,
  SettingsThemePicker,
  SettingsFontPicker,
} from "components/library";

const Wrapper = ({ isSettingsOpen, setSettingsOpen, setTheme, setFont }) => {
  return (
    <SettingsDialog isSettingsOpen={isSettingsOpen}>
      <SettingsHeader>Settings</SettingsHeader>
      <SettingsSubheader>Theme</SettingsSubheader>
      <SettingsThemePicker setTheme={setTheme} />
      <SettingsSubheader>Font</SettingsSubheader>
      <SettingsFontPicker setFont={setFont} />
    </SettingsDialog>
  );
};

export default Wrapper;
