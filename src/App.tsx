import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Page from "./page/Page";
import rootStore from "./store/rootStore";

const App = () => {
  return (
    <Provider store={rootStore}>
      <Page />
    </Provider>
  );
};

export default App;
