"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Navbar from "../app/components/Navbar";
import Footer from "./components/Footer";

const App = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
