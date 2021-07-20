import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import moment from "moment";
import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 45;
    const left = 45;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AuthorizationForm( { onFormSubmit }) {
    const classes = useStyles();
    const { t } = useTranslation();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    function onEmailChange(text) {
        setEmail(text)
    }
    function onPasswordChange(text) {
        setPassword(text)
    }
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onFormSubmit(email, password);
                    handleClose();

                }}
            >
                <TextField
                    required
                    type="email"
                    fullWidth
                    // error={errors.name}
                    // label={t("form.name")}
                    variant="outlined"
                    name={"email"}
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                />
                <TextField
                    required
                    type="password"
                    fullWidth
                    // error={errors.name}
                    // label={t("form.name")}
                    variant="outlined"
                    name={"password"}
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                />
            <Button variant={"outlined"} type={"submit"}>{t("authorization.emailButton")}</Button>
            </form>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
