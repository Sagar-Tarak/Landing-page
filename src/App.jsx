import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
    {/* Header stays on top */}
    <Header />

    {/* Main Content - Single Page Sections */}
    <Home />
  </div>
  );
}

export default App;
