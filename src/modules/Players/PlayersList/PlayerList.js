import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PlayerItem from "../PlayerItem/PlayerItem";
import { Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddIcon from "@material-ui/icons/Add";
import { useHistory, useRouteMatch } from "react-router";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
function PlayerList({ players, deletePlayer }) {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const history = useHistory();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name, Surname</StyledTableCell>
            <StyledTableCell align="right">Photo</StyledTableCell>
            <StyledTableCell align="right">Date of birth</StyledTableCell>
            <StyledTableCell align="right">Games played</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <PlayerItem
              key={player.id}
              {...player}
              deletePlayer={deletePlayer}
            />
          ))}
        </TableBody>
      </Table>
      <div className={"control-buttons"}>
        <Fab aria-label="add" onClick={() => history.push("/")}>
          <Link to={path + "/add"}>
            <ArrowBackIcon />
          </Link>
        </Fab>
        <Fab aria-label="add">
          <Link to={path + "/add"}>
            <AddIcon />
          </Link>
        </Fab>
      </div>
    </TableContainer>
  );
}

export default PlayerList;
