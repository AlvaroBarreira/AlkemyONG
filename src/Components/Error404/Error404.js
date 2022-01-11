import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image404 from '../../assets/img/404Error-somosMas.svg';
import {
  pageContainer,
  mainGridContainer,
  messageError,
  homeButtom,
} from '../../Styles/Error404/Error404InlineStyles';

const Error404 = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const error404Theme = createTheme();

  error404Theme.typography.h3 = {
    fontSize: '1.1rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [error404Theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  };

  return (
    <ThemeProvider theme={error404Theme}>
      <Grid container alignItems="center" sm={12} sx={pageContainer}>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          md={8}
          sm={12}
          sx={mainGridContainer}>
          <Grid item sm={7} xs={12}>
            <img alt="404" src={image404} />
          </Grid>
          <Grid item sm={5} xs={12}>
            <Typography
              component="p"
              sx={messageError}
              textAlign="center"
              variant="h3">
              Oops.. Página no encontrada
            </Typography>
            <Button
              size="medium"
              sx={homeButtom}
              variant="contained"
              onClick={handleClick}>
              Ir al inicio
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Error404;
