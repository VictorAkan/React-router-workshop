import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="App">
            <h1>Welcome</h1>
            <Link to="/people" className="display-4">
                StarWars People
            </Link>
        </div>
    )
}