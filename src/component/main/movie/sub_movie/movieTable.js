import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
      width: 400,
  },
});

const theme = createMuiTheme({
    typography:{
        fontFamily: 'Roboto',
        fontSize: 20, 
    }
})

export default function BasicTable({data}) {
  const classes = useStyles();
  console.log(data);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Table className={classes.table} >
            <TableHead>
                <TableRow hover>
                    <TableCell>Head1</TableCell>
                    <TableCell>Head2</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow hover>
                    <TableCell component="th" scope="row">Movie Name</TableCell>
                    <TableCell >{data.movieTitle}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Director</TableCell>
                    <TableCell >{data.director}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Cast</TableCell>
                    <TableCell >{data.cast}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Time</TableCell>
                    <TableCell >{data.duration}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Category</TableCell>
                    <TableCell >{data.category}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Language</TableCell>
                    <TableCell >{data.language}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Certification</TableCell>
                    <TableCell >{data.certification}</TableCell>
                </TableRow>
                <TableRow hover>
                    <TableCell component="th" scope="row">Rating</TableCell>
                    <TableCell >{data.popularity_index}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </ThemeProvider>
  );
}
