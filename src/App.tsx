import React from "react";
import AppRouter from "router/AppRouter";
import "./style/GlobalStyles.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
