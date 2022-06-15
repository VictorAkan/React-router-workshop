// import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function Person() {
    const [person, setPerson] = useState({});

    const { id } = useParams()

    // const [searchParams, setSearchParams] = useSearchParams();

    // person = searchParams.get('id')

    useEffect(() => {
        const getPerson = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${id}`);
            const responseJson = await response.json();

            setPerson(responseJson)
        }
        
        getPerson();
    }, [id]);

    return(
        <div className="container">
            <h3 className="display-3">Person</h3>
            <h4 className="">Details of a StarWars person</h4>
            <hr />
            <h4>{person.name}</h4>
            <p>Height: {person.height}</p>
            <p>Hair Color: {person.hair_color}</p>
        </div>
    )
}