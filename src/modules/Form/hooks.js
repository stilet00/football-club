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
    setPlayer({
      ...player,
      birthDate: `${date.getDate()} ${getStringMonth(
        date.getMonth()
      )} ${date.getFullYear()}`,
    });
  };
  function getStringMonth(month) {
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }
    return month;
  }
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
    setPlayer({ ...DEFAULT_PLAYER, id: player.id });
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
    handleDateChange,
  };
}
