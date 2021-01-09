import "./Profile.scss"
import getUser from "../../api/getUser"
import getWorkoutsForUser from "../../api/getWorkoutsForUser"
import {
  useParams
} from "react-router-dom";
import { useState, useEffect } from 'react';

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
  let workoutsState: object = [];

  const [user, setUser] = useState(userState);
  useEffect(() => {
    async function getUserByID(id: number) {
      const user = await getUser(id);;
      setUser(user!);
    }
    getUserByID(parseInt(id));
  }, [])

  const [workouts, setWorkouts] = useState(workoutsState);
  useEffect(() => {
    async function getWorkoutsByID(id: number) {
      const workouts = await getWorkoutsForUser(id);
      setWorkouts(workouts);
    }
    getWorkoutsByID(parseInt(id));
  }, [])
  
  console.log(workouts)

  return (

    <div className="athlete-container">
      This is an athlete profile
    </div>
  );
}