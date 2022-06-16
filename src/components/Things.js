import { Outlet } from "react-router-dom"
export default function Things() {
    return(
        <div className="container">
            <h1 className="display-3">Things</h1>
            <h3>List of things of the starWars people</h3>
            <hr />
            <Outlet />
        </div>
    )
}