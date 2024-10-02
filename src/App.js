
import PageNotFound from "./components/404";
import DetailPage from "./components/detailPageC/DetailPage";
import HomePage from "./components/homePageC/HomePage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <Router>
    <Nav />
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
