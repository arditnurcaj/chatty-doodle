import { Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "globalStyles";

import { Chat } from "pages/Chat";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Toaster
        toastOptions={{
          style: {
            padding: "1rem",
            fontSize: "1.6rem",
          },
          position: "top-right",
        }}
      />
      <Switch>
        <Route exact path='/' component={Chat} />
      </Switch>
    </>
  );
};

export default App;
