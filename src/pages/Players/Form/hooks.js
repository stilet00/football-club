import { useHistory, useParams } from "react-router";
import { createRef, useCallback, useState } from "react";
import { DEFAULT_PLAYER } from "../../../shared/constants/constants";

export function useForm(players) {
  const params = useParams();
  const history = useHistory();
  const [player, setPlayer] = useState(
    (players && players.find((item) => item.id === params.id)) || DEFAULT_PLAYER
  );
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [selectedDate, setSelectedDate] = useState(player.birthDate.format());
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    gamesPlayed: false,
    price: false,
  });
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPlayer({
      ...player,
      birthDate: date,
    });
    if (
      player.name !== "" &&
      player.surname !== "" &&
      player.gamesPlayed !== "" &&
      player.price !== ""
    ) {
      setFieldsFilled(true);
    }
  };
  function clearFields() {
    setPlayer({ ...DEFAULT_PLAYER, id: player.id });
    setErrors({
      name: false,
      surname: false,
      gamesPlayed: false,
      price: false,
    });
  }
  function validateFields(string, inputName) {
    if (inputName === "name" || inputName === "surname") {
      let textRegExp = /^[a-zA-Z]{1,10}$/gi;
      setErrors({ ...errors, [inputName]: !textRegExp.test(string) });
    } else {
      let numberRegExp = /^\d{1,10}$/gi;
      setErrors({ ...errors, [inputName]: !numberRegExp.test(string) });
    }
  }
  function onInputChange(e) {
    validateFields(e.target.value.trim(), e.target.name);
    setPlayer({ ...player, [e.target.name]: e.target.value.trim() });
    if (
      player.name !== "" &&
      player.surname !== "" &&
      player.gamesPlayed !== "" &&
      player.price !== ""
    ) {
      setFieldsFilled(true);
    }
  }

  const fileInput = createRef();
  const uploadImage = useCallback(
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

  return {
    player,
    onInputChange,
    uploadImage,
    history,
    clearFields,
    fileInput,
    selectedDate,
    handleDateChange,
    fieldsFilled,
    errors,
  };
}