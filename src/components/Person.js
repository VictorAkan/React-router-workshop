import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadSpinner from "./SecondSpinner"

export default function Person() {
    // const [person, setPerson] = useState({});
    const { search } = useLocation();
    const [ searchParams, setSearchParams ] = useState({});
    const id = parseInt(search.split("=")[1], 10);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getPerson = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${id}`);
            const responseJson = await response.json();

            // setPerson(responseJson)
            setSearchParams(responseJson)
            setIsLoading(false)
        }
        getPerson();
    }, [id]);

    return (
        <div className="container">
            <h3 className="display-3">Person</h3>
            <h4 className="">Details of a StarWars person</h4>
            <hr />
            {isLoading ? <LoadSpinner /> : ""}
            <h4>{searchParams.name}</h4>
            <p>Height: {searchParams.height}</p>
            <p>Hair Color: {searchParams.hair_color}</p>
        </div>
    )
}