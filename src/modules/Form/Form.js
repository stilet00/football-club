import React, { useState } from 'react';
import { Button, FormGroup, TextField } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import './Form.css'
import { DEFAULT_PLAYER } from "../../constants/constants";
import { DropzoneArea } from "material-ui-dropzone";
function Form (props) {
    const [player, setPlayer] = useState(props.player || DEFAULT_PLAYER)
    function handleChange(file) {
       console.log(file)
    }
    return (
            <form>
                <FormGroup className={'players-form'}>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Surname" variant="outlined" />
                <TextField id="outlined-basic" label="Photo" variant="outlined" />
                <DropzoneArea
                        onChange={handleChange}
                />
                <TextField id="outlined-basic" label="Games played" variant="outlined" />
                <TextField id="outlined-basic" label="Price" variant="outlined" />
                    <div className="control-buttons">
                        <Button><SaveIcon /></Button>
                        <Button><ClearAllIcon/></Button>
                        <Button><CloseIcon/></Button>
                    </div>
                </FormGroup>
            </form>
    );
}

export default Form;