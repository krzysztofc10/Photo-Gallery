import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Master } from './Components/Master';
import { Detail } from './Components/Detail';
import './Css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '', dUrl: '' };
    this.sendId = this.sendId.bind(this);
  }

  sendId(url, dUrl) {
    this.setState({ url, dUrl });
  }

  render() {
    const { url, dUrl } = this.state;

    return (
      <>
        <div className="title">Photo Galery</div>
        <Grid container spacing={2}>
          <Grid item xs={4} className="gridCss">
            <Master sendId={this.sendId} />
          </Grid>
          <Grid item xs={8}>
            <Detail sendId={url} durl={dUrl} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export { App };
