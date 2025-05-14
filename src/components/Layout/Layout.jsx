import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";

export const Layout = () => {
  return (
    <div>
      <Menu />

      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-white mb-2">
                PetCare
              </h3>
              <p className="text-sm">
                Cuidando do seu melhor amigo com amor e tecnologia.
              </p>
            </div>

            <div className="text-center md:text-right space-y-1">
              <p className="hover:text-white transition">
                Contato: petcare@email.com
              </p>
              <p className="hover:text-white transition">
                Suporte: (00) 0000-0000
              </p>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} PetCare. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
