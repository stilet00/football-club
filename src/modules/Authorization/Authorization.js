import React, { useState } from "react";
import firebase from "firebase/app";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthedAnd,
  IfFirebaseUnAuthed,
} from "@react-firebase/auth";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./Authorization.css";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm";
function Authorization(props) {
  const { t } = useTranslation();
  const [errorText, setErrorText] = useState(null);
  function googleAuth() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  function emailAuth({ email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        setErrorText(error.message);
      });
  }
  function emailRegister({ email, password, repeatPassword }) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  function sendEmailVerification() {
    // [START auth_send_email_verification]
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
      });
    // [END auth_send_email_verification]
  }
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <div className={"auth-container"}>
            {!isSignedIn && !errorText ? (
              <>
                <Button
                  className={"auth-button"}
                  variant={"outlined"}
                  onClick={googleAuth}
                >
                  <VpnKeyIcon />
                  {t("authorization.googleButton")}
                </Button>
                <AuthorizationForm onFormSubmit={emailAuth} />
                <AuthorizationForm
                  onFormSubmit={emailRegister}
                  registration={true}
                />
              </>
            ) : (
              <>
                <IfFirebaseAuthedAnd
                  filter={({ user }) => user !== "anonymous"}
                >
                  {({ user }) => {
                    return (
                      <div>{`${t("authorization.greetingsWord")} ${
                        user.email
                      }! ${t("authorization.googleSuccess")}`}</div>
                    );
                  }}
                </IfFirebaseAuthedAnd>
                <IfFirebaseUnAuthed>
                  {() => {
                    return (
                      <>
                        <div>{errorText}</div>
                        <Button
                          className={"auth-button"}
                          variant={"outlined"}
                          onClick={() => {
                            firebase.auth().signOut();
                            window.location.reload();
                          }}
                        >
                          {t("authorization.backButton")}
                        </Button>
                      </>
                    );
                  }}
                </IfFirebaseUnAuthed>
              </>
            )}
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  );
}

export default Authorization;
