import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";

export default function NavHeader() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
          {/* <Link to="/categories">Categories</Link> */}
        </li>
        <li>
          <NavLink to="/recipes">Recipes</NavLink>
          {/* <Link to="/recipes">Recipes</Link> */}
        </li>
        <li>
          <NavLink to="/add">Add</NavLink>
          {/* <Link to="/add">Add</Link> */}
        </li>
        <AuthStatus />
      </ul>
    </nav>
  );
}
