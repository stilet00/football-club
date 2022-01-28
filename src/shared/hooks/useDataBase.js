import { useState } from "react";
import { PLAYERS } from "../mocks/mocks";
import { useHistory } from "react-router";
import { DEFAULT_THUMBNAIL } from "../constants/constants";

export function useDataBase() {
  const [players, setPlayers] = useState(PLAYERS);
  const history = useHistory();
  function deletePlayer(event, id) {
    event.stopPropagation();
    setPlayers(players.filter((item) => item.id !== id));
  }
  function onFormSubmit(player) {
    if (!player.photo.preview) {
      player.photo = DEFAULT_THUMBNAIL;
    }
    if (player.id) {
      setPlayers(
        players.map((item) => (item.id === player.id ? player : item))
      );
    } else {
      player = { ...player, id: String(Date.now()), edited: null };
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
