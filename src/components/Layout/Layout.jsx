import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";

export const Layout = () => {
  return (
    <div className="w-screen h-screen">
      <Menu />

      <main className="w-screen h-[70%]">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-400 w-screen h-[20%]">
        <div className=" flex flex-row justify-between border-gray-700 w-[100%] h-[80%]">
          <div className="flex flex-col h-[100%] w-[30%] justify-center">
            <h3 className="text-2xl font-semibold text-white ml-5">DreamBook</h3>
            <p className="text-sm ml-5">A sua melhor biblioteca virtual.</p>
          </div>

          <div className="flex flex-col h-[100%] w-[30%] justify-center items-end">
            <p className="hover:text-white transition mr-5">
              Contato: dreambook@email.com
            </p>
            <p className="hover:text-white transition mr-5">
              Suporte: (01) 2345-6789
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 w-[100%] h-[20%]">
          <p>
            &copy; {new Date().getFullYear()} DreamBook. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
