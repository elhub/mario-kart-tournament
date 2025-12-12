import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col items-center gap-8 min-h-screen w-full">
      <Outlet />
    </div>
  );
};

export default RootLayout;
