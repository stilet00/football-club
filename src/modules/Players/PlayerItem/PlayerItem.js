import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./PlayerItem.css";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
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
}) {
  const match = useRouteMatch();
  return (
    <StyledTableRow>
      <StyledTableCell scope="row">{`${name} ${surName}`}</StyledTableCell>
      <StyledTableCell align="right">
        {/*<img*/}
        {/*  className={"thumbnail"}*/}
        {/*  src={photo.preview}*/}
        {/*  alt={"thumbnail"}*/}
        {/*/>*/}
        <div
          className={"thumbnail"}
          style={{ backgroundImage: "url(" + photo.preview }}
        />
      </StyledTableCell>
      <StyledTableCell align="right">{`${birthDate[0]} ${birthDate[1]} ${birthDate[2]}`}</StyledTableCell>
      <StyledTableCell align="right">{gamesPlayed}</StyledTableCell>
      <StyledTableCell align="right">{price}</StyledTableCell>
      <StyledTableCell align="right">
        <Button
          size={"small"}
          className={"delete-button"}
          onClick={() => deletePlayer(id)}
        >
          <DeleteIcon />
        </Button>
        <Button size={"small"} className={"delete-button"}>
          <Link to={match.path + "/" + id}>
            <EditIcon />
          </Link>
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default PlayerItem;
