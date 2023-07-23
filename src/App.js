import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="font-Raleway">
      <Header />
      <Outlet />
    </div>
  );
}
