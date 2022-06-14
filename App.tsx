import { Provider as PaperProvider } from "react-native-paper";

import { paperTheme } from "./assets/theme";

import Main from "./src/Main";

const App = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <Main />
    </PaperProvider>
  );
};

export default App;
