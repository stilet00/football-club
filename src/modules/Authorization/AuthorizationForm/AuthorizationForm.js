import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import EmailIcon from "@material-ui/icons/Email";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import "./AuthorizationForm.css";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router";

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
    position: "absolute",
    width: "70%",
    maxWidth: 350,
    backgroundColor: "rgba(0,178,169,1)",
    borderRadius: "5px",
    boxShadow: "5px 5px 5px rgb(0, 0, 0, 50%)",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AuthorizationForm({ onFormSubmit, registration }) {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const repeatField = registration ? (
    <TextField
      required
      type="password"
      fullWidth
      // error={errors.name}
      label={t("authorization.formRepeat")}
      variant="outlined"
      name={"repeatPassword"}
      value={user.repeatPassword}
      onChange={onInputChange}
    />
  ) : null;
  const buttonStart = registration ? (
    <Button
      type="button"
      onClick={handleOpen}
      variant={"outlined"}
      className={"auth-button"}
    >
      <AlternateEmailIcon /> {t("authorization.registerButton")}
    </Button>
  ) : (
    <Button
      type="button"
      onClick={handleOpen}
      variant={"outlined"}
      className={"auth-button"}
    >
      <EmailIcon /> {t("authorization.emailButton")}
    </Button>
  );
  const submitButtonCheck = registration
    ? user.password !== user.repeatPassword || user.email == ""
    : user.email == "" || user.password == "";

  return (
    <div>
      {buttonStart}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Button onClick={handleClose} className={"close-button"}>
            <CloseIcon />
          </Button>
          <form
            className={"auth-form"}
            onSubmit={(e) => {
              e.preventDefault();
              onFormSubmit(user);
              handleClose();
            }}
          >
            <TextField
              required
              type="email"
              fullWidth
              // error={errors.name}
              label={t("authorization.formEmail")}
              variant="outlined"
              name={"email"}
              value={user.email}
              onChange={onInputChange}
            />
            <TextField
              required
              type="password"
              fullWidth
              // error={errors.name}
              label={t("authorization.formPassword")}
              variant="outlined"
              name={"password"}
              value={user.password}
              onChange={onInputChange}
            />
            {repeatField}
            <Button
              variant={"outlined"}
              type={"submit"}
              className={"auth-button"}
              disabled={submitButtonCheck}
            >
              {registration
                ? t("authorization.registerButton")
                : t("authorization.emailButton")}
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
