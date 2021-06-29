import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./PlayerItem.css";
import { useMediaQuery, usePlayerItem, useToggle } from "./hooks";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import moment from "moment";
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "aliceblue",
    },
  },
}))(TableRow);
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    position: "relative",
  },
}))(TableCell);

function PlayerItem({
  id,
  name,
  surname,
  photo,
  birthDate,
  gamesPlayed,
  price,
  deletePlayer,
  edited,
}) {
  const [width] = useMediaQuery();
  const { onPlayerClick } = usePlayerItem();
  const { itemsShown, toggleItems } = useToggle();
  const { t } = useTranslation();
  return (
    <>
      <StyledTableRow
        className={"single-player-item"}
        onClick={(e) => onPlayerClick(id)}
      >
        <StyledTableCell
          scope="row"
          className={"image-name-container"}
          align="center"
        >
          <div
            className={"thumbnail"}
            style={{ backgroundImage: "url(" + photo.preview }}
          />
          {`${name} ${surname}`}
          <button
            className={itemsShown ? "transformed" : ""}
            onClick={toggleItems}
          >
            <ArrowForwardIosIcon />
          </button>
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {moment().diff(birthDate, "years")}
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {gamesPlayed}
        </StyledTableCell>
        <StyledTableCell align="center" className={"price hiding-fields"}>
          {price} $
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button
            size={"small"}
            className={"delete-button"}
            onClick={(event) => deletePlayer(event, id)}
          >
            <DeleteIcon />
          </Button>
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {edited !== null ? edited.fromNow() : t("table.editedFalse")}
        </StyledTableCell>
      </StyledTableRow>
      <CSSTransition
        in={itemsShown && width <= 665}
        classNames="fields"
        timeout={100}
        unmountOnExit
      >
        <StyledTableRow>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {t("table.gamesPlayed") + ": " + gamesPlayed}
          </StyledTableCell>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {t("table.players") + " " + price} $
          </StyledTableCell>
        </StyledTableRow>
      </CSSTransition>
      <CSSTransition
        in={itemsShown && width <= 665}
        classNames="fields"
        timeout={100}
        unmountOnExit
      >
        <StyledTableRow>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {`${moment().diff(birthDate, "years")} years old`}
          </StyledTableCell>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {edited !== null
              ? "Edited " + edited.fromNow()
              : t("table.editedFalse")}
          </StyledTableCell>
        </StyledTableRow>
      </CSSTransition>
    </>
  );
}

export default PlayerItem;
