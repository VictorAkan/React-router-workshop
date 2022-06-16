import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

export default function StarshipDetail() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const getDetails = async () => {
            const response = await fetch("https://swapi.dev/api/starships")
            const responseJson = await response.json();

            setDetail(responseJson);
            console.log(responseJson);
        }
        getDetails();
    }, [id])
    return(
        <div className="container">
            <h1>StarShips Details</h1>
            <h3>Complete details of starShips</h3>
            <div></div>
        </div>
    )
}