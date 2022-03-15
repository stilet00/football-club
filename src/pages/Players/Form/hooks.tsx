import { useHistory, useParams } from "react-router";
import React, { createRef, useCallback, useState } from "react";
import { DEFAULT_PLAYER } from "../../../shared/constants/constants";
import moment, { Moment } from "moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Player } from "../../../shared/interfaces/player";

interface Params {
  id: string;
}

export function useForm(players: Array<Player>) {
  const params: Params = useParams();

  const history = useHistory();

  const [player, setPlayer] = useState(
    (players && players.find((item) => item.id === params.id)) || DEFAULT_PLAYER
  );

  const [fieldsFilled, setFieldsFilled] = useState(false);

  const [selectedDate, setSelectedDate] = useState<string | Moment | null>(
    getCorrectDate()
  );

  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    gamesPlayed: false,
    price: false,
    timeOnField: false,
    goals: false,
  });

  const handleDateChange = (date: MaterialUiPickersDate): void => {
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

  function getCorrectDate(): string {
    if (player.birthDate) {
      if (typeof player.birthDate == "object") {
        return player.birthDate.format();
      } else {
        const dateFromString = new Date(player.birthDate);
        return moment(dateFromString).format();
      }
    } else {
      return "";
    }
  }

  function clearFields() {
    setPlayer({ ...DEFAULT_PLAYER, id: player.id });

    setErrors({
      name: false,
      surname: false,
      gamesPlayed: false,
      price: false,
      timeOnField: false,
      goals: false,
    });
  }

  function validateFields(string: string, inputName: string) {
    if (inputName === "name" || inputName === "surname") {
      let textRegExp = /^[a-zA-Z]{1,10}$/gi;
      setErrors({ ...errors, [inputName]: !textRegExp.test(string) });
    } else {
      let numberRegExp = /^\d{1,10}$/gi;
      setErrors({ ...errors, [inputName]: !numberRegExp.test(string) });
    }
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
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

  const fileInput = createRef<HTMLInputElement>();

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
