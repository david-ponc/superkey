import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-all hover:-translate-y-0.5"
    >
      {theme === "dark" ? <BiSun size={22} /> : <BiMoon size={22} />}
    </button>
  );
};

export default ChangeTheme;
