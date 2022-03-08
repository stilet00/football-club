import React from "react";
import { Button, FormGroup, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Form.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useForm } from "./hooks";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useTranslation } from "react-i18next";
import { useDataBase } from "../../../shared/hooks/useDataBase";

function Form() {
  const { players, onFormSubmit } = useDataBase();

  const {
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
  } = useForm(players);

  const { t } = useTranslation();
  // @ts-ignore
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit({
            ...player,
            edited: moment(),
          });
        }}
      >
        <FormGroup className={"players-form"}>
          <Button
            onClick={() => history.push("/players")}
            className={"close-button"}
          >
            <CloseIcon />
          </Button>
          <div
            className={"thumbnail form-thumbnail"}
            style={{ backgroundImage: "url(" + player.photo.preview + ")" }}
          >
            <input
              type="file"
              ref={fileInput}
              accept={"image/jpeg,image/png,image/gif"}
              className={"photo-input"}
              onChange={() => {
                if (fileInput && fileInput.current && fileInput.current.files) {
                  uploadImage(fileInput.current.files[0] )
                }
              }}
            />
            <AddAPhotoIcon fontSize={"large"} className={"photo-icon"} />
          </div>
          <TextField
            required
            type="text"
            error={errors.name}
            label={t("form.name")}
            variant="outlined"
            onChange={onInputChange}
            name={"name"}
            value={player.name}
          />
          <TextField
            required
            type="text"
            error={errors.surname}
            label={t("form.surname")}
            variant="outlined"
            onChange={onInputChange}
            name={"surname"}
            value={player.surname}
          />
          <TextField
            required
            type="number"
            error={errors.gamesPlayed}
            label={t("table.gamesPlayed")}
            variant="outlined"
            onChange={onInputChange}
            name={"gamesPlayed"}
            value={player.gamesPlayed}
          />
          <TextField
            required
            type="number"
            error={errors.price}
            label={t("table.price")}
            variant="outlined"
            onChange={onInputChange}
            name={"price"}
            value={player.price}
            className={"price-input"}
          />
          <TextField
            required
            type="number"
            error={errors.timeOnField}
            label={t("table.timeOnField")}
            variant="outlined"
            onChange={onInputChange}
            name={"timeOnField"}
            value={player.timeOnField}
            className={"hours-input"}
          />
          <TextField
            required
            type="number"
            error={errors.goals}
            label={t("table.goals")}
            variant="outlined"
            onChange={onInputChange}
            name={"goals"}
            value={player.goals}
            className={"hours-input goals-input"}
          />
          <KeyboardDatePicker
            inputVariant={"outlined"}
            disableFuture={true}
            margin="normal"
            id="date-picker-dialog"
            label={t("form.birthDate")}
            format="YYYY-MM-DD"
            value={selectedDate}
            className={"datepicker"}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <div className={"control-buttons"}>
            <Button
              onClick={clearFields}
              variant={"outlined"}
              className={"form-control-button"}
            >
              {t("form.clear")}
            </Button>
            <Button
              type={"submit"}
              variant={"outlined"}
              className={"form-control-button"}
              disabled={
                !fieldsFilled ||
                errors.name ||
                errors.surname ||
                errors.gamesPlayed ||
                errors.price
              }
            >
              {t("form.save")}
            </Button>
          </div>
        </FormGroup>
      </form>
    </MuiPickersUtilsProvider>
  );
}

export default Form;
