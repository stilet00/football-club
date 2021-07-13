import React from "react";
import firebase from "firebase/app";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./Authorization.css";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
function Authorization(props) {
  const { t } = useTranslation();
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <div className={"auth-container"}>
            {!isSignedIn ? (
              <Button
                className={"auth-button"}
                variant={"outlined"}
                onClick={() => {
                  const googleAuthProvider =
                    new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(googleAuthProvider);
                }}
              >
                <VpnKeyIcon />
                {t("authorization.googleButton")}
              </Button>
            ) : (
              <IfFirebaseAuthedAnd filter={({ user }) => user !== "anonymous"}>
                {({ user }) => {
                  return (
                    <div>{`${t("authorization.greetingsWord")} ${
                      user.displayName
                    }! ${t("authorization.googleSuccess")}`}</div>
                  );
                }}
              </IfFirebaseAuthedAnd>
            )}
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  );
}

export default Authorization;
