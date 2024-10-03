import { Outlet } from "react-router-dom";
import Navbar from "./components/nav";
import Tabs from "./components/tab";


function App() {
  return (
    <div>
      <Navbar/>
      <Tabs/>
      <div className="container-md">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
