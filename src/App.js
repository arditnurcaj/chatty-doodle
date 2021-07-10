import { Switch, Route } from "react-router-dom";

import GlobalStyles from "globalStyles";

import { Chat } from "pages/Chat";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Chat} />
      </Switch>
    </>
  );
};

export default App;
