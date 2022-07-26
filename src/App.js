import Header from "./components/Header/Header";
import "./global.css";
import "./App.css";
import SideBar from "./components/SideBar/SiderBar";
import Post from "./components/Post/Post";

function App() {
  return (
    <>
      <Header />
      <div className="Wrapper">
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
