import { useState } from "react";
import { PLAYERS } from "../../shared/mocks/mocks";
import { useHistory } from "react-router";
import { DEFAULT_THUMBNAIL } from "../../shared/constants/constants";

export function useMainPage() {
  const [players, setPlayers] = useState(PLAYERS);
  const history = useHistory();
  function deletePlayer(id) {
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
      console.log(player);
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
