import React from 'react';
import { Grid } from '@material-ui/core';
import { Master } from './Components/Master';
import { Detail } from './Components/Detail';
import './Css/App.css';

function App() {
  return (
    <>
      <div className="title">Photo Galery</div>
      <Grid container spacing={2}>
        <Grid item xs={4} className="gridCss">
          <Master />
        </Grid>
        <Grid item xs={8}>
          <Detail />
        </Grid>
      </Grid>
    </>
  );
}

export { App };
