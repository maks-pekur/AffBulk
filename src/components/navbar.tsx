import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const linkBase = "px-3 py-1 rounded-full border transition-colors";
  const active = "border-[#a1cf0c] text-[#a1cf0c]";
  const idle = "border-white/30 hover:border-[#a1cf0c] hover:text-[#a1cf0c]";

  return (
    <nav className="py-4 flex gap-2 bg-white/5 items-center justify-center">
      <NavLink
        to="/element-drawer"
        className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
      >
        Element drawer
      </NavLink>
      <NavLink
        to="/fit-heading"
        className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
      >
        Fit heading
      </NavLink>
    </nav>
  );
};
