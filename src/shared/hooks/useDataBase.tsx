import { useState } from "react";
import { PLAYERS } from "../mocks/mocks";
import { useHistory } from "react-router";
import { DEFAULT_THUMBNAIL } from "../constants/constants";
import { Player } from "../interfaces/player";

export function useDataBase() {
  const playersFromStorage = localStorage.getItem("players");

  const [players, setPlayers] = useState(
    playersFromStorage ? JSON.parse(playersFromStorage) : PLAYERS
  );

  const history = useHistory();

  function deletePlayer(event: React.MouseEvent, id: string | undefined) {
    event.stopPropagation();
    const newPlayersList = players.filter((item: Player) => item.id !== id);
    setPlayers(newPlayersList);
    saveToLocalStorage(newPlayersList);
  }

  function onFormSubmit(player: Player) {
    if (!player.photo.preview) {
      player.photo = DEFAULT_THUMBNAIL;
    }
    if (player.id) {
      const newPlayersList = players.map((item: Player) =>
        item.id === player.id ? player : item
      );
      setPlayers(newPlayersList);
      saveToLocalStorage(newPlayersList);
    } else {
      player = { ...player, id: String(Date.now()), edited: null };
      const newPlayersList = [...players, player];
      setPlayers(newPlayersList);
      saveToLocalStorage(newPlayersList);
    }
    history.push("/players");
  }

  function saveToLocalStorage(newPlayersList: Array<Player>) {
    localStorage.setItem("players", JSON.stringify(newPlayersList));
  }

  function refreshPlayers() {
    setPlayers(PLAYERS);
    localStorage.removeItem("players");
  }

  return {
    players,
    onFormSubmit,
    deletePlayer,
    refreshPlayers,
  };
}
