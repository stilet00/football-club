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
      <StyledTableCell scope="row">{name + " " + surName}</StyledTableCell>
      <StyledTableCell align="right">
        <img
          className={"thumbnail"}
          src={
            photo.preview ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXMzMz////JycnQ0NDu7u77+/vX19f4+PjOzs7y8vLh4eHc3Nz19fXk5OTe3t7o6OglbxQAAAAEoklEQVR4nO2cjXarKhBGZRBBRXn/t70zA6hp0+hZ96ykHr692kSRWN3yMwpp1wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9muAh9+kDfBQ3eXMTbTx/sm7BXjQifPtj3QEkKwCU4Y2qi+tBozEqXWIzpm3EyX8s5NeeEgj1pQptzQslxuzK/Oue2nFBHfe5Y1hcn3ZYTDttqb/tQf0L5zbTlhLRHVh7aW3ow1JaTreoYMx3OmgYzUqPlZD2Uk+GwSSrUuK835WTeI3x/2JLbmH5LaM1Jt6oAtzcgNDhTpITc0LblRBqNofcx2f2cqxKuPiWxMSdSEEh+aotKW+e8S2nLyWFdpYQHJVVKo05KMfmipEhp0wn1+oDkm5LcJTfpRCI3lvJEiaY36CTkYDY9VdKokxrf9w5OqpP+mYp2nXDMRq+VtOekO1XSnhM6qThtOhnhZEefn+grnFTKczY4OVDbE/d6XNQt7TkJpzR6v3PC2pKT5doYemrGyXLWuh6ZmnDS2cvTlIyJbShhKb27SH++s3+DoLMsrhBaKSV/QgjnedoCQgAAAAAAAPgYwUpAXubRE9/GddttXL2xk6Wcac9al/UtbGu2zOzSTHV2/jZLv370Hef1f5jlcbs1RibpBRnW2ibU1wf1nnhp4USvo4E6jzqn5EGO+pbnRY5yxuR5f7SUyUur7L3TDLa+/mpm49iJk6OWwc8x7vNfU+SVGHviDdnJsDnpq5OkG4qTOHqdF0lRHlYu+Tmk7FZ3mf/KLZyYmfLRBj52Of/tiSoFTifqXjkZ1WhxEmQEVTZENr05YbOT7O5OTsbiZJDpwDQcHh9yulaFn504Q/wJV5xY2UmvTlhvcWKdqwv3cWJsPtpZp0gPUpkK6iS8cjIaS5Pz8gUWPVnanIzVCad4dzMn3qXw6GTbuDuZiPhEvztJXB76ONZyIs3xrE5GE7ITmsw6aiN7IycxuXy06wsnY0rJPXGy8nvsq5M+ebYXxAlvmMSJTIEbkjayd3JizSpHSz+Wk23qyRMn3C25adz7Yq/fkotm7n2pO97YSbunOzkhH0/LST/P87P2ZE0+mCEWJyuXCI1Y2MnA1UecWA5wBo1UbuVExvlO2xMJxL47mSYzG3toTxbptsQJZ1cnvD+Jc+7mxKoTetnv8FptYwcNXafshHsVJ+WFtr7Y5XJSx47LwKq9mROJvWp8ogl14/e+OPDll47FbWZkODRu8QlpXCwJYrpXb0sIOcPRyW8e9pjlfibfkXCPzBffH/7jwJP4pEsmBqltXXHi+cxjKSeBrC/xySovUk6cBMeJdxo2Jxwb/+rxQnHS5fhEvlnPuP0SfnUy57Q6fUCdyG/c+x39bx8qiU1LX6w3QKsUvs2J3lh+7pRP0arC11GmGdEanTt+kYuveontRYG2J1wUeufGmWr6wuUgt7E6iJ6kwEnkJgnsJFdFK62M9epEs42/2UmnxbiWZfpSqssa/ZBJFmQ5r+dpOYfPHT71sPj1rwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH+X/wCj6CmgTH0orQAAAABJRU5ErkJggg=="
          }
          alt={"thumbnail"}
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
