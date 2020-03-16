import React, {useEffect} from 'react';
import { Provider as StoreProvider } from "react-redux"
import store from "./reducers";

import MembersPage from "./pages/MembersPage";
import './App.css'

const App = () => {

  return (
      <StoreProvider store={store}>
        <div className="App">
          <MembersPage/>
        </div>
      </StoreProvider>
  );
};

export default App;
