import { CoreStack } from "./components/CoreStack/Corestack";
import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Welcome } from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Summary />
      <CoreStack />
    </>
  );
}

export default App;
