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
          {moment().diff(birthDate, 'years')}
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
          {edited !== null ? edited.fromNow() : "Not edited"}
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
            {`${moment().diff(birthDate, 'years')} years old`}
          </StyledTableCell>
          <StyledTableCell className={"shown-menu-cell"} align="center">
            {edited !== null ? "Edited " + edited.fromNow() : "Not edited"}
          </StyledTableCell>
        </StyledTableRow>
      </CSSTransition>
    </>
  );
}

export default PlayerItem;
