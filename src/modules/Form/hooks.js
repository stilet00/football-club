import { useHistory, useParams } from "react-router";
import React, { createRef, useCallback, useState } from "react";
import { DEFAULT_PLAYER } from "../../constants/constants";

export function useForm(players) {
  const params = useParams();
  const history = useHistory();
  const [player, setPlayer] = useState(
    (players && players.find((item) => item.id === params.id)) || DEFAULT_PLAYER
  );
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPlayer({...player, birthDate: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`})
  };
  const fileInput = createRef();
  const makePreview = useCallback(
    (file) => {
      if (file) {
        file = Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
        setPlayer({ ...player, photo: file });
      }
    },
    [player]
  );
  function clearFields() {
    setPlayer({...DEFAULT_PLAYER, id: player.id});
  }
  function onInputChange(e) {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  }

  return {
    player,
    onInputChange,
    makePreview,
    history,
    clearFields,
    fileInput,
    selectedDate,
    handleDateChange
  };
}
