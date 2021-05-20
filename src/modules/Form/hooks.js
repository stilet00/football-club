import { useHistory, useParams } from "react-router";
import { useCallback, useState } from "react";
import { DEFAULT_PLAYER } from "../../constants/constants";

export function useForm(players) {
  const params = useParams();
  const history = useHistory();
  const [player, setPlayer] = useState(
    (players && players.find((item) => item.id === params.id)) || DEFAULT_PLAYER
  );
  const onDrop = useCallback(
    (images) => {
      images.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setPlayer({ ...player, photo: images[0] });
    },
    [player]
  );

  function onInputChange(e) {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  }

  return {
    player,
    onInputChange,
    onDrop,
    history,
  };
}
