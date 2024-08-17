import "./App.css";
import { GlobalNavigationBar } from "./components/navigation/GlobalNavigationBar";
import { Footer } from "./components/footer/Footer";
import { HomeBoard } from "./components/board/HomeBoard";
import { Advertisement } from "./components/sidebar/Advertisement";
import { GoToTop } from "./components/common/GoToTop";

function App() {
  return (
    <>
      <header>
        <GlobalNavigationBar />
      </header>
      <main>
        <div id="sidebar">
          <Advertisement imgPath="/imgs/sidebar-advertisement_width180.png" />
          <Advertisement imgPath="/imgs/sidebar-advertisement_width180.png" />
        </div>
        <div id="mainbody">
          <HomeBoard title={"Q&A"} />
          <HomeBoard title={"커뮤니티"} />
          <HomeBoard title={"지식"} />
          <HomeBoard title={"공지사항"} />
        </div>
        <div id="sidebar">
          <Advertisement imgPath="/imgs/sidebar-advertisement_backend_bootcamp_87_width180.png" />
          <Advertisement imgPath="/imgs/sidebar-advertisement_backend_bootcamp_87_width180.png" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <GoToTop />
    </>
  );
}

export default App;
