import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="App">
            <h1>Welcome</h1>
            <div className="d-block">
            <div>
            <Link to="/people" className="display-4">
                StarWars People
            </Link>
            </div>
            <Link to="/things" className="display-5">
                StarWars Things
            </Link>
            </div>
        </div>
    )
}