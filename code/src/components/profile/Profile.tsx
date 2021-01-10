import "./Profile.scss"
import getUser from "../../api/getUser"
import getWorkoutsForUser from "../../api/getWorkoutsForUser"
import {
  useParams
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Workout from "../workout/Workout";
import BarGraph from "../barGraph/BarGraph"

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
  }
  let workoutsState: Array<object> = [];

  const [user, setUser] = useState(userState);
  useEffect(() => {
    async function getUserByID(id: number) {
      const user = await getUser(id);
      setUser(user!);
    }
    getUserByID(parseInt(id));
  }, [])

  const [workouts, setWorkouts] = useState(workoutsState);
  useEffect(() => {
    async function getWorkoutsByID(id: number) {
      const workouts: Array<TrainHeroic.Workout> = await getWorkoutsForUser(id).sort((a, b) => Date.parse(b.datetimeCompleted) - Date.parse(a.datetimeCompleted));
      setWorkouts(workouts);
    }
    getWorkoutsByID(parseInt(id));
  }, [])
  
  let lastFiveWorkouts: Array<any> = workouts.filter((workout, index) => { 
    return index < 5}
  )

  let displayedWorkouts: Array<object> = [];
  if (lastFiveWorkouts.length) {
    displayedWorkouts = lastFiveWorkouts.map(workout => {
      return (
        <Workout workout={workout} />
      )
    })
  }
  
  

  if (!workouts.length || !lastFiveWorkouts.length || !displayedWorkouts.length) {
    return ( <div>LOADING...</div> )
  } else {
    return (
      <div className="athlete-container">
        <header></header>
        <section>
          <BarGraph type={'Weight'} id={parseInt(id)}/>
          <BarGraph type={'Reps'} id={parseInt(id)} />
        </section>
        <section>
          {displayedWorkouts}
        </section>
      </div>
    );
  }
}