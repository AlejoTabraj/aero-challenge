import ContextProvider from "./context/globalContext";
import Pages from "./pages";

function App() {
  return (
    <ContextProvider>
    <div className="App">
        <Pages />
    </div>
    </ContextProvider>
  );
}

export default App;
