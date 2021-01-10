import React, { Component } from 'react';
import getUsers from "../../api/getUsers";
import Athletes from "../athletes/Athletes";


class Home extends Component<{}, { athletes: Array<TrainHeroic.User> }> {
  constructor(props: object) {
    super(props);
    this.state = {
      athletes: []
    };
  }

  componentDidMount() {
    this.getAllAthletes();
  }

  getAllAthletes = async () => {
    const athletes = await getUsers();
    this.setState({
      athletes
    });
  }

  render() {
    return (
      <div className="home">
        <div className="body">
          <h1>My Athletes</h1>
          <Athletes athletes={this.state.athletes} />
        </div>
      </div>
    );
  }
  
}

export default Home;