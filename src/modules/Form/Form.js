import React from "react";
import { Button, FormGroup, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Form.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useForm } from "./hooks";
import SmallLogo from "../../Components/SmallLogo/SmallLogo";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
function Form({ players, onFormSubmit }) {
  const {
    player,
    onInputChange,
    makePreview,
    history,
    clearFields,
    fileInput,
    selectedDate,
    handleDateChange,
    fieldsFilled,
    errors,
  } = useForm(players);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit({ ...player, edited: new Date() });
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
            style={{ backgroundImage: "url(" + player.photo.preview }}
          >
            <input
              type="file"
              ref={fileInput}
              accept={"image/jpeg,image/png,image/gif"}
              className={"photo-input"}
              onChange={() => makePreview(fileInput.current.files[0])}
            />
            <AddAPhotoIcon fontSize={"large"} className={"photo-icon"} />
          </div>
          <TextField
            error={errors.name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={onInputChange}
            name={"name"}
            value={player.name}
          />
          <TextField
            error={errors.surname}
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            onChange={onInputChange}
            name={"surname"}
            value={player.surname}
          />
          <TextField
            error={errors.gamesPlayed}
            id="outlined-basic"
            label="Games played"
            variant="outlined"
            onChange={onInputChange}
            name={"gamesPlayed"}
            value={player.gamesPlayed}
          />
          <TextField
            error={errors.price}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            onChange={onInputChange}
            name={"price"}
            value={player.price}
            className={"price-input"}
          />
          <KeyboardDatePicker
            inputVariant={"outlined"}
            disableFuture={true}
            margin="normal"
            id="date-picker-dialog"
            label="Player's birth date"
            format="MM/dd/yyyy"
            value={selectedDate}
            className={"datepicker"}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <div className="control-buttons">
            <Button
              onClick={clearFields}
              variant={"outlined"}
              className={"form-control-button"}
            >
              Clear
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
              Save
            </Button>
          </div>
        </FormGroup>
      </form>
      <SmallLogo />
    </>
  );
}

export default Form;
