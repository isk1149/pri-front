import "./App.css";
import { GlobalNavigationBar } from "./components/navigation/GlobalNavigationBar";
import { Footer } from "./components/footer/Footer";
import { HomeBoard } from "./components/home-board/HomeBoard";
import { Advertisement } from "./components/sidebar/Advertisement";
import { GoToTop } from "./components/common/GoToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Board } from "./components/board/Board";

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
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HomeBoard title={"공지사항"} boardId={1} />
                    <HomeBoard title={"Q&A"} boardId={2} />
                    <HomeBoard title={"커뮤니티"} boardId={3} />
                    <HomeBoard title={"지식"} boardId={4} />
                  </>
                }
              />
              <Route
                path="/board/:boardId"
                element={
                  <>
                    <Board></Board>
                  </>
                }
              ></Route>
            </Routes>
          </Router>
        </div>
        {/* <div id="mainbody">
          <HomeBoard title={"공지사항"} boardId={1} />
          <HomeBoard title={"Q&A"} boardId={2} />
          <HomeBoard title={"커뮤니티"} boardId={3} />
          <HomeBoard title={"지식"} boardId={4} />
        </div> */}
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
