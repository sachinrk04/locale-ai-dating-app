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

import * as actions from "../../redux/actions/index";
import DetailPopop from "../../components/DetailPopop/DetailPopop";

function AreasList(props) {
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

  const onRowClicl = (data) => {
    props.onOpenClose(true);
    props.onAreaData(data);
    props.onAreaDetails(data.properties, props.users);
  };

  return (
    <div>
      <DetailPopop />
      {props.areas && props.areas.features && props.areas.features.length ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "89vh" }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Area</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Type</TableCell>
                  <TableCell style={{ minWidth: 50 }}>Pin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.areas.features
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.properties.area_id}
                        onClick={() => onRowClicl(row)}
                        style={{ cursor: "pointer" }}
                      >
                        <TableCell>{row.properties.name}</TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.geometry.type}
                        </TableCell>
                        <TableCell style={{ minWidth: 50 }}>
                          {row.properties.pin_code}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20, 25, 50]}
            component="div"
            count={props.areas.features.length}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onFetchAreas: () => dispatch(actions.fetchAreas()),
    onOpenClose: (data) => dispatch(actions.popupOpenClose(data)),
    onAreaData: (data) => dispatch(actions.getAreaData(data)),
    onAreaDetails: (area, users) =>
      dispatch(actions.getAreaDetails(area, users)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AreasList);
