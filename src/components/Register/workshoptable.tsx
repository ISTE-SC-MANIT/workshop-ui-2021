import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  Checkbox,
  TableFooter,
  Typography,
  Button,
} from '@material-ui/core';
import { Details } from '../../pages/_app';
import { seatCount } from '../../utils';
const useStyles = makeStyles({
  root: {
    margin: 'auto',
    border: 'solid,3px,black',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  table: {
    minWidth: 650,
  },
  btn: {
    margin: '10px',
    width: '150px',
    alignItems: 'center',
  },
});

interface tableprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}
export default function WorkshopTable(props: tableprops) {
  const classes = useStyles();
  const values = props.userDetails;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [workshopA, setWorkshopA] = React.useState<boolean>(values.workshopA);
  const [workshopB, setWorkshopB] = React.useState<boolean>(values.workshopB);
  const [seats, setSeats] = React.useState({
    workshopA: 0,
    workshopB: 0,
  });
  React.useEffect(() => {
    setLoading(true);
    seatCount()
      .then((res) => {
        if (res) setSeats(res);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, ['/register']);
  return (
    <>
      <Grid container alignItems='center' className={classes.root}>
        <TableContainer component={Paper}>
          <Typography>
            {' '}
            Note: First 50 students of Each Workshop will get 10 % discount
          </Typography>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Sr. No.</TableCell>
                <TableCell align='center'>Workshop</TableCell>
                <TableCell align='center'>Date</TableCell>
                <TableCell align='center'>Seats Left</TableCell>
                <TableCell align='center'>Price</TableCell>
                <TableCell align='center'>Register</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='left'>1</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Finance</Typography>
                  <Typography component='p' variant='inherit'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ipsam?
                  </Typography>
                </TableCell>
                <TableCell align='center'>15-Oct-2021</TableCell>
                <TableCell align='center'>{`${
                  200 - seats.workshopA
                }/200`}</TableCell>
                <TableCell align='center'>Rs 500</TableCell>
                <TableCell align='center'>
                  <Checkbox
                    checked={values.workshopA}
                    onChange={(e) => {
                      props.updateDetails({
                        ...values,
                        workshopA: !workshopA,
                      });
                      setWorkshopA(!workshopA);
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>2</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Data Science</Typography>
                  <Typography component='p' variant='inherit'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, ipsam?
                  </Typography>
                </TableCell>
                <TableCell align='center'>17-Oct-2021</TableCell>
                <TableCell align='center'>
                  {`${200 - seats.workshopB}/200`}
                </TableCell>
                <TableCell align='center'>Rs 500</TableCell>
                <TableCell align='center'>
                  <Checkbox
                    checked={values.workshopB}
                    onChange={(e) => {
                      props.updateDetails({
                        ...values,
                        workshopB: !workshopB,
                      });
                      setWorkshopB(!workshopB);
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter />
          </Table>
        </TableContainer>
      </Grid>
      <Grid container className={classes.root}>
        <Button
          className={classes.btn}
          variant='outlined'
          onClick={props.handleBack}
        >
          Back
        </Button>
        <Button
          className={classes.btn}
          variant='outlined'
          onClick={props.handleNext}
          disabled={!values.workshopA && !values.workshopB}
        >
          NEXT
        </Button>
      </Grid>
    </>
  );
}