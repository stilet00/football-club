import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./PlayerItem.css";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useMediaQuery, useToggle } from "./hooks";
import { CSSTransition } from "react-transition-group";
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
  const match = useRouteMatch();
  const { itemsShown, toggleItems } = useToggle();
  function getStringMonth(month) {
    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        break;
    }
    return month;
  }
  return (
    <>
      <StyledTableRow className={"single-player-item"}>
        <StyledTableCell
          scope="row"
          className={"image-name-container"}
          align="center"
        >
          <Link to={match.path + "/" + id}>
            <div
              className={"thumbnail"}
              style={{ backgroundImage: "url(" + photo.preview }}
            />
          </Link>
          {`${name} ${surname}`}
          <button
            className={itemsShown ? "transformed" : ""}
            onClick={toggleItems}
          >
            <ArrowForwardIosIcon />
          </button>
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {birthDate.getDate() +
            " " +
            getStringMonth(birthDate.getMonth()) +
            " " +
            birthDate.getFullYear()}
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
            onClick={() => deletePlayer(id)}
          >
            <DeleteIcon />
          </Button>
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {edited !== null ? edited + "" : "Not edited"}
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
            {gamesPlayed +
              " " +
              (gamesPlayed > 1 ? "games played" : "game played")}
          </StyledTableCell>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            Price: {price} $
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
            Birthdate: {birthDate.getFullYear()}
          </StyledTableCell>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {edited !== null ? "Edited: " + edited : "Not edited"}
          </StyledTableCell>
        </StyledTableRow>
      </CSSTransition>
    </>
  );
}

export default PlayerItem;
