import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import SearchJob from "./Components/SearchJob";

function App() {
  return (
    <Provider store={store}>
      <SearchJob />
    </Provider>
  );
}

export default App;
