import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Main;
