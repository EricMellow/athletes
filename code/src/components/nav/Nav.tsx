import "./Nav.scss"
import {
  useLocation
} from "react-router-dom";

interface RouteParams {
  id: string
}

export default function Nav() {
  let location = useLocation();
  console.log(location)

  return (
    <nav></nav>
  )
}