import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

export const ConnectedBaseTable = () => (
  <Paper variant="outlined">
    <TableContainer sx={styles.table}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={styles.tableCellHead}>Base Id</TableCell>
            <TableCell sx={styles.tableCellHead}>Base Serial</TableCell>
            <TableCell sx={styles.tableCellHead}>Base Channel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

const styles = {
  tableCell: { py: 1.25 },
  tableCellHead: { py: 1.25, fontWeight: "bold" },
  table: { maxHeight: "15.5rem", overflow: "auto" },
};
