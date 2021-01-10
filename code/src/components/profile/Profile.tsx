import "./Profile.scss";
import getUser from "../../api/getUser";
import getWorkoutsForUser from "../../api/getWorkoutsForUser";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Workout from "../workout/Workout";
import Display from "../display/Display";

interface RouteParams {
  id: string
}

export default function Profile() {
  let { id }: RouteParams = useParams(); 

  let userState = {
    nameFirst: '',
    nameLast: '',
    id: 0,
    profilePhotoUrl: '',
    slug: '',
  };
  const [user, setUser] = useState(userState);
  useEffect(() => {
    async function getUserByID(id: number) {
      const user = await getUser(id);
      setUser(user!);
    }
    getUserByID(parseInt(id));
  }, []);

  let workoutsState: Array<object> = [];
  const [workouts, setWorkouts] = useState(workoutsState);
  useEffect(() => {
    async function getWorkoutsByID(id: number) {
      const workouts: Array<TrainHeroic.Workout> = await getWorkoutsForUser(id).sort((a, b) => Date.parse(b.datetimeCompleted) - Date.parse(a.datetimeCompleted));
      setWorkouts(workouts);
    }
    getWorkoutsByID(parseInt(id));
  }, []);
  
  let lastFiveWorkouts: Array<any> = workouts.filter((workout, index) => { 
    return index < 5}
  )

  let displayedWorkouts: Array<object> = [];
  if (lastFiveWorkouts.length) {
    displayedWorkouts = lastFiveWorkouts.map((workout, index) => {
      return (
        <Workout workout={workout} key={index}/>
      )
    })
  }
  
  

  if (!workouts.length || !lastFiveWorkouts.length || !displayedWorkouts.length) {
    return ( <h1>LOADING...</h1> )
  } else {
    return (
      <div className="profile-container">
        <header className="athlete-profile">
          <img src={user.profilePhotoUrl} alt="Athlete profile" className="profile-picture"></img>
          <h3>{user.nameFirst} {user.nameLast}</h3>
        </header>
        <section className="graphs">
          <Display type={'Weight'} id={parseInt(id)}/>
          <Display type={'Reps'} id={parseInt(id)} />
        </section>
        <section className="workouts-container">
          {displayedWorkouts}
        </section>
      </div>
    );
  }
}