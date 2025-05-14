import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CadastroUser } from "../pages/CadastroUser";
import { CadastroLivro } from "../pages/CadastroLivro";
import { LoginPage } from "../pages/LoginPage";
import { PageNotFound } from "../pages/PageNotFound";
import { Reserva } from "../pages/Reserva";
import { PrivateRoute } from "../Private/PrivateRoute";
import { Layout } from "../components/Layout/Layout";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/cadastroLivro"
            element={
              <PrivateRoute>
                <CadastroLivro />
              </PrivateRoute>
            }
          />
          <Route
            path="/Reservas"
            element={
              <PrivateRoute>
                <Reserva />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastroUsuario" element={<CadastroUser />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
