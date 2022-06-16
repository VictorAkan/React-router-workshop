import { Link } from "react-router-dom"

export default function ThingsHome() {
    return(
        <div className="container lead-list">
            <div className="d-block">
                <div className="">
                <Link className="" to="/things/starShips">
                    StarShips
                </Link>
                </div>
                <div>
                <Link className="" to="/things/vehicle">
                    Vehicles
                </Link>
                </div>
            </div>
        </div>
    )
}