import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import key from "./adminKey";

function App() {
  return (
    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path={`/${key}`} element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
