import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
};
