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
  surName,
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
        <StyledTableCell scope="row">
          {`${name} ${surName}`}
          <button
            className={itemsShown ? "transformed" : ""}
            onClick={toggleItems}
          >
            <ArrowForwardIosIcon />
          </button>
        </StyledTableCell>
        <StyledTableCell align="right">
          <Link to={match.path + "/" + id}>
            <div
              className={"thumbnail"}
              style={{ backgroundImage: "url(" + photo.preview }}
            />
          </Link>
        </StyledTableCell>
        <StyledTableCell align="center" className={"hiding-fields"}>
          {birthDate}
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
        <StyledTableCell align="center" className={"hiding-fields"}>{`${edited
          .toDateString()
          .slice(
            4
          )} ${edited.getHours()}:${edited.getMinutes()}`}</StyledTableCell>
      </StyledTableRow>
      <CSSTransition
        in={itemsShown && width <= 665}
        classNames="fields"
        timeout={100}
        unmountOnExit
      >
        <StyledTableRow>
          <StyledTableCell align="center">{`${birthDate[0]} ${birthDate[1]} ${birthDate[2]}`}</StyledTableCell>
          <StyledTableCell align="center">{gamesPlayed} games</StyledTableCell>
          <StyledTableCell align="center">{price} $</StyledTableCell>
        </StyledTableRow>
      </CSSTransition>
    </>
  );
}

export default PlayerItem;
