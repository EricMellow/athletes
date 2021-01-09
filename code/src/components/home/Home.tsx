import React, { Component } from 'react';
import logo from "../../assets/logo.svg";
import getUsers from "../../api/getUsers"

class Home extends Component {
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
          <h1>
            My Athletes
          </h1>
        </div>
      </div>
    );
  }
  
}

export default Home;