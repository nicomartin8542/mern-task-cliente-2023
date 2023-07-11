import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <main className="md:mt-10 p-5 md:flex md:justify-center">
        <main className="md:w-2/3 lg:w-1/2 ">
          <Outlet />
        </main>
      </main>
    </>
  );
};
