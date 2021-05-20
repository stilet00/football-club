import { useState } from "react";
import { PLAYERS } from "../../mocks/mocks";
import { useHistory } from "react-router";

export function useMainPage() {
  const [players, setPlayers] = useState(PLAYERS);
  const history = useHistory();
  function deletePlayer(id) {
    setPlayers(players.filter((item) => item.id !== id));
  }
  function onFormSubmit(player) {
    if (player.id) {
      setPlayers([...players, player]);
    } else {
      player.id = Date.now();
      setPlayers([...players, player]);
    }
    history.push("/players");
  }
  return {
    players,
    onFormSubmit,
    deletePlayer,
    history,
  };
}
