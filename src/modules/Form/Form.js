import React from "react";
import { Button, FormGroup, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import CloseIcon from "@material-ui/icons/Close";
import "./Form.css";
import { DropzoneArea } from "material-ui-dropzone";
import { useForm } from "./hooks";
function Form({ players, onFormSubmit }) {
  const { player, onInputChange, onDrop, history, clearFields } =
    useForm(players);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(player);
      }}
    >
      <FormGroup className={"players-form"}>
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
        <DropzoneArea
          onChange={onDrop}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={false}
          maxFileSize={5000000}
          maxFiles={1}
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
        <div className="control-buttons">
          <Button type={"submit"}>
            <SaveIcon />
          </Button>
          <Button onClick={clearFields}>
            <ClearAllIcon />
          </Button>
          <Button onClick={() => history.push("/players")}>
            <CloseIcon />
          </Button>
        </div>
      </FormGroup>
    </form>
  );
}

export default Form;
