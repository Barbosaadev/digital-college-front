import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <nav className="hidden lg:flex list-none">
      <li>
        <Link to="/" className="text-white px-4">
          Meus favoritos
        </Link>
      </li>
      <li>
        <Link to="/Signin" className="text-white px-4">
          Sign In
        </Link>
      </li>
      <li>
        <Link to="/Signup" className="text-white px-4">
          Sign Up
        </Link>
      </li>
    </nav>
  );
};
