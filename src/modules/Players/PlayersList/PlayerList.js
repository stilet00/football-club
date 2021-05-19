import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'aliceblue',
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
function PlayerList ({players}) {
    const classes = useStyles();
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map(({id, name, surName, photo, birthDate, gamesPlayed, price}) => (
                        <StyledTableRow key={id}>
                            <StyledTableCell component="th" scope="row">
                                {name + ' ' + surName}
                            </StyledTableCell>
                            <StyledTableCell align="right">{photo}</StyledTableCell>
                            <StyledTableCell align="right">{`${birthDate[0]} ${birthDate[1]} ${birthDate[2]}`}</StyledTableCell>
                            <StyledTableCell align="right">{gamesPlayed}</StyledTableCell>
                            <StyledTableCell align="right">{price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PlayerList;