import { Link } from "react-router-dom";
import { LinksMenu } from "./LinksMenu";

export const Menu = () => {
  return (
    <nav className=" shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <span className="text-xl font-bold text-white">DreamBook</span>
      </Link>
        <div>
            <LinksMenu />
        </div>
    </nav>
  );
};
