import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

export function useMenuBar() {
  const [menuShown, setMenuShown] = useState(false);
  const { path } = useRouteMatch();
  function toggleMenu() {
    setMenuShown(!menuShown);
  }

  return {
    menuShown,
    toggleMenu,
    path,
  };
}
