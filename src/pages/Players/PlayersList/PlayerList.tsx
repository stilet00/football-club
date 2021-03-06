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
import "./PlayerList.css";
import { PAGINATION_STEP } from "../../../shared/constants/constants";
import { usePagination } from "../../../shared/hooks/pagination";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { useDataBase } from "../../../shared/hooks/useDataBase";
import { Player } from "../../../shared/interfaces/player";
import { useTranslation } from "react-i18next";

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

function PlayerList() {
  const classes = useStyles();

  const { players, deletePlayer } = useDataBase();

  const { t } = useTranslation();

  const { currentPage, goForward, goBack } = usePagination();

  return (
    <>
      <TableContainer component={Paper} className={"players-list"}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={"first-column"}>
                {t("table.players")}
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                {t("table.age")}
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                {t("table.gamesPlayed")}
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                {t("table.price")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {t("table.action")}
              </StyledTableCell>
              <StyledTableCell align="center" className={"hiding-fields"}>
                {t("table.edited")}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players
              .slice(
                currentPage * PAGINATION_STEP - PAGINATION_STEP,
                currentPage * PAGINATION_STEP
              )
              .map((player: Player) => (
                <PlayerItem
                  {...player}
                  deletePlayer={deletePlayer}
                  key={player.id}
                />
              ))}
          </TableBody>
        </Table>
        <div className={"control-buttons control-buttons__table-controls"}>
          <Button
            aria-label="back"
            name={"back"}
            onClick={goBack}
            disabled={currentPage === 1}
            variant={"outlined"}
            className={"action-button"}
          >
            <ArrowBack />
          </Button>
          <Fab aria-label="add" className={"action-button"}>
            <Link to={"/players/add"}>
              <AddIcon />
            </Link>
          </Fab>
          <Button
            aria-label="forward"
            name={"forward"}
            onClick={goForward}
            disabled={players.length - currentPage * PAGINATION_STEP <= 0}
            variant={"outlined"}
            className={"action-button"}
          >
            <ArrowForward id={"back"} />
          </Button>
        </div>
      </TableContainer>
    </>
  );
}

export default PlayerList;
