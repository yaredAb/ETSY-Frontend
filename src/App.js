
import Filter from "./components/homePageC/Filter";
import Items from "./components/homePageC/Items";
import RecentUp from "./components/homePageC/RecentUp";
import Special from "./components/homePageC/Special";
import Nav from "./components/Nav";


function App() {

  return (
    <div>
      <Nav />
      <main className="p-5">
        <Special />
        <Filter />
        <RecentUp />
        <Items />
      </main>
    </div>
  );
}

export default App;
