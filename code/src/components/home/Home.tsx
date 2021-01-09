import React, { Component } from 'react';
import logo from "../../assets/logo.svg";
import getUsers from "../../api/getUsers";
import Athletes from "../athletes/Athletes";

interface Athlete {
  id: number,
  nameFirst: string,
  nameLast: string,
  profilePhotoUrl: string,
  slug: string
};

class Home extends Component<{}, { athletes: Array<Athlete> }> {
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
    console.log(athletes)
  }

  render() {
    return (
      <div className="home">
        <div className="body">
          <img src={logo} className="logo" alt="TrainHeroic Logo" />
          <Athletes athletes={this.state.athletes} />
        </div>
      </div>
    );
  }
  
}

export default Home;