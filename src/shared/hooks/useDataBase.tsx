import { useState } from "react";
import { PLAYERS } from "../mocks/mocks";
import { useHistory } from "react-router";
import { DEFAULT_THUMBNAIL } from "../constants/constants";
import { Player, Players } from "../interfaces/interfaces";

export function useDataBase() {
  // @ts-ignore
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')) || PLAYERS);

  const history = useHistory();

  function deletePlayer(event: React.MouseEvent, id: string) {
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
      const newPlayersList = players.map((item: Player) => (item.id === player.id ? player : item));
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

  function saveToLocalStorage(newPlayersList: Players) {
    localStorage.setItem('players', JSON.stringify(newPlayersList));
  }

  function refreshPlayers() {
    setPlayers(PLAYERS);
    localStorage.removeItem('players');
  }

  return {
    players,
    onFormSubmit,
    deletePlayer,
    refreshPlayers
  };
}
