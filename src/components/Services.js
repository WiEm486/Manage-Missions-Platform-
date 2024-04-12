import React from "react";
import { AppHeader } from "./AppHeader";
import FileUpload from "./FileUpload";
import { AppFooter } from "./AppFooter";

export const Services = () => {
  return (
    <div>
      <header id="header">
        <AppHeader></AppHeader>
      </header>

      <FileUpload></FileUpload>
      <AppFooter></AppFooter>
    </div>
  );
};
