import React, { useEffect } from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import "./AllList.css";
import * as actions from "../../redux/actions/index";

function AllList(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (props.users.length === 0) {
      props.onFetchUsers();
    }
    if (Object.keys(props.areas).length === 0) {
      props.onFetchAreas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (props.users.length > 0 && Object.keys(props.areas).length > 0) {
      if (props.au.length === 0) {
        props.onMergeBothDatas(props.areas, props.users);
      }
    }
  });

  return (
    <div>
      {props.au.length ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "89vh" }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Area</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Gender</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Age</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Pro</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Pin</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Matches</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.au
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.user_id}
                      >
                        <TableCell>{row.area_name}</TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.gender === "M" ? (
                            <span className="cell-chip-male">Male</span>
                          ) : (
                            <span className="cell-chip-female">Female</span>
                          )}
                        </TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.age}
                        </TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.is_pro_user ? (
                            <span className="cell-chip-yes">Yes</span>
                          ) : (
                            <span className="cell-chip-no">No</span>
                          )}
                        </TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.pin_code}
                        </TableCell>
                        <TableCell
                          className="match-col"
                          style={{ minWidth: 50 }}
                        >
                          {row.total_matches > 0 ? (
                            <span className="cell-chip-match">
                              {row.total_matches}
                            </span>
                          ) : (
                            <span className="cell-chip-match-no">
                              {row.total_matches}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20, 50, 100]}
            component="div"
            count={props.au.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    areas: state.areas.areas,
    au: state.users.areasUsers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onFetchAreas: () => dispatch(actions.fetchAreas()),
    onMergeBothDatas: (areas, users) =>
      dispatch(actions.mergeBothDatas(areas, users)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllList);
