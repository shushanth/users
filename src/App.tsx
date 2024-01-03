import "./App.css";
import { Provider } from "react-redux";

import Pages from "./pages/Pages";
import rootStore from "./store/rootStore";

const App = () => {
  return (
    <Provider store={rootStore}>
      <Pages data-testid="pages-component" />
    </Provider>
  );
};

export default App;
