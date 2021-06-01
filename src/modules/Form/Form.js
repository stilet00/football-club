import React from "react";
import { Button, FormGroup, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import "./Form.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useForm } from "./hooks";
import SmallLogo from "../../Components/SmallLogo/SmallLogo";
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
          />
        </div>

        <Button
          variant={"outlined"}
          color={"primary"}
          onClick={() => makePreview(fileInput.current.files[0])}
          className={"save-photo-button"}
        >
          Upload
        </Button>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={onInputChange}
          name={"name"}
          value={player.name}
        />
        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          onChange={onInputChange}
          name={"surName"}
          value={player.surName}
        />
        <TextField
          id="outlined-basic"
          label="Games played"
          variant="outlined"
          onChange={onInputChange}
          name={"gamesPlayed"}
          value={player.gamesPlayed}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          onChange={onInputChange}
          name={"price"}
          value={player.price}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Player's birth date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <div className="control-buttons">
          <Button onClick={clearFields}>Clear</Button>
          <Button type={"submit"}>
            <SaveIcon />
          </Button>
        </div>
      </FormGroup>
    </form>
        <SmallLogo />
      </>
  );
}

export default Form;
