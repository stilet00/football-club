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
import { Button, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { useRouteMatch } from "react-router";
import "./PlayerList.css";
import { PAGINATION_STEP } from "../../../constants/constants";
import { usePagination } from "./hooks";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
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
    minWidth: "100%",
  },
});
function PlayerList({ players, deletePlayer }) {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const { currentPage, switchPages } = usePagination();
  return (
    <>
      <TableContainer component={Paper} className={"players-list"}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name, Surname</StyledTableCell>
              <StyledTableCell align="center">Photo</StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                Date of birth
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                Games played
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                Price
              </StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players
              .slice(
                currentPage * PAGINATION_STEP - PAGINATION_STEP,
                currentPage * PAGINATION_STEP
              )
              .map((player) => (
                <PlayerItem
                  key={player.id}
                  {...player}
                  deletePlayer={deletePlayer}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={"control-buttons"}>
        <Button
          aria-label="back"
          name={"back"}
          onClick={switchPages}
          disabled={currentPage === 1}
          variant={"outlined"}
        >
          <ArrowBack />
        </Button>
        <Fab aria-label="add" className={"add-button"}>
          <Link to={path + "/add"}>
            <AddIcon />
            <SupervisedUserCircleIcon />
          </Link>
        </Fab>
        <Button
          aria-label="forward"
          name={"forward"}
          onClick={switchPages}
          disabled={players.length - currentPage * PAGINATION_STEP <= 0}
          variant={"outlined"}
        >
          <ArrowForward />
        </Button>
      </div>
    </>
  );
}

export default PlayerList;
