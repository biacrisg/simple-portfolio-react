import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'150px'
    
  },
  event: {
    flex: 1,
    textAlign: 'center',
  },

  '@media (max-width: 600px)': {
    container: {
      marginLeft:'10px' 
    },
  },

  '@media (max-width: 300px)': {
    container: {
      marginLeft:'2px' 
    },
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.container}>

      <div className={classes.event}>
        <AccountBalanceIcon fontSize="large" />
        <p>Curso - Bacharel e licenciatura em História </p>
        <p>2017-2022</p>
      </div>

      <div className={classes.event}>
        <AccountBalanceIcon fontSize="large" />
        <p>Curso - Análise e Desenvolvimento de Sistemas</p>
        <p>2021-2023</p>
      </div>

      <div className={classes.event}>
        <LaptopMacIcon fontSize="large" />
        <p>Pós Graduação - Ciência de dados</p>
        <p>2023</p>
      </div>
    </div>
  );
}
