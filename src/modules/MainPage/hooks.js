import { useState } from "react";
import { PLAYERS } from "../../mocks/mocks";
import { useHistory } from "react-router";
import { DEFAULT_THUMBNAIL } from "../../constants/constants";

export function useMainPage() {
  const [players, setPlayers] = useState(PLAYERS);
  const history = useHistory();
  function deletePlayer(id) {
    setPlayers(players.filter((item) => item.id !== id));
  }
  function onFormSubmit(player) {
    if (!player.photo) {
      player.photo = DEFAULT_THUMBNAIL
    }
    if (player.id) {
      setPlayers(players.map(item => item.id === player.id ? player : item));
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
