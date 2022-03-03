import React from "react";
import Navbar from "./Navbar";

const defExport = {
  title: "Pages/Home/Navbar",
  component: Navbar,
};

export default defExport;
const Template = (args) => <Navbar />;
export const navbar = Template.bind();
