import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links.jsx";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  const { user, toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;