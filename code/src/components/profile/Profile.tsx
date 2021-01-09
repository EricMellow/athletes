import React, { Component } from 'react';
import "./Profile.scss"


class Profile extends Component<{}, { workouts: Array<any> }> {
  constructor(props: object) {
    super(props);
    this.state = {
      workouts: [],
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="athlete">
        <div className="body">
          <h1>This is an athlete page!</h1>
        </div>
      </div>
    );
  }

}

export default Profile;