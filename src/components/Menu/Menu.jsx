import { Link } from "react-router-dom";
import { LinksMenu } from "./LinksMenu";

export const Menu = () => {
  return (
    <nav className="flex flex-row items-center justify-between w-screen h-[10%] bg-gray-800">
      <Link to="/" className="flex items-center">
        <span className="text-xl font-bold text-white ml-5">DreamBook</span>
      </Link>
      <div>
        <LinksMenu />
      </div>
    </nav>
  );
};
