import Header from "./components/Header/Header";
import "./global.css";
import "./App.css";
import SideBar from "./components/SideBar/SiderBar";

function App() {
  return (
    <>
      <Header />
      <div className="Wrapper">
        <SideBar />
        <main></main>
      </div>
    </>
  );
}

export default App;
