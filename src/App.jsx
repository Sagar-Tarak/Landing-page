import Header from "./components/Header";
import Home from "./Pages/Home";

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
