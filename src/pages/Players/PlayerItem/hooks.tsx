import { useLayoutEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";

export function useMediaQuery() {
  const [screenSize, setScreenSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}

export function useToggle() {
  const [itemsShown, setItemShown] = useState(false);

  function toggleItems(e: React.MouseEvent) {
    e.stopPropagation();
    setItemShown(!itemsShown);
  }

  return {
    itemsShown,
    toggleItems,
  };
}

export function usePlayerItem() {
  const { path } = useRouteMatch();

  const history = useHistory();

  function onPlayerClick(id: string | undefined) {
    if (path.includes(":id")) {
      history.push(`${id}`);
    } else if (path.includes("add")) {
      history.push(`add/${id}`);
    } else {
      history.push("players/add/" + id);
    }
  }
  return {
    onPlayerClick,
  };
}
