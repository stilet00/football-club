import React, { useState } from "react";
import firebase from "firebase/app";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthedAnd,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./Authorization.css";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
function Authorization(props) {
  const history = useHistory();
  const { t } = useTranslation();
  const [errorText, setErrorText] = useState(null);
  function googleAuth() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
  function emailAuth() {
    var email = "safroninanton@gmail.com";
    var password = "7210stiletsss";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        setErrorText(error.message);
      });
  }
  function emailRegister() {
    var email = "test@example.com";
    var password = "hunter2";
    // [START auth_signup_password]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
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
                <Button
                  className={"auth-button"}
                  variant={"outlined"}
                  onClick={emailAuth}
                >
                  <VpnKeyIcon />
                  {t("authorization.emailButton")}
                </Button>
                <Button
                  className={"auth-button"}
                  variant={"outlined"}
                  onClick={emailRegister}
                >
                  <VpnKeyIcon />
                  {t("authorization.emailButton")}
                </Button>
              </>
            ) : (
                <>
              <IfFirebaseAuthedAnd filter={({ user }) => user !== "anonymous"}>
                {({ user }) => {
                  return (
                    <div>{`${t("authorization.greetingsWord")} ${
                      user.displayName
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
                          >Back</Button>
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
