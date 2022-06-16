import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import LoadSpinner from "./LoadingSpinner"

export default function People() {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      setIsLoading(true);
        const getPeople = async () => {
            const response = await fetch("https://swapi.dev/api/people");
            const responseJson = await response.json();

            setPeople(responseJson.results)
            console.log(responseJson);
            setIsLoading(false);
        }
        getPeople();
    }, [])
    return(
        <div className="container mt-4">
        
        <h1>People</h1>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Height</th>
      <th scope="col">Hair Color</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {people.map((person, index) => (
    <tr className="people-table">
      <th scope="row">{index + 1}</th>
      <td>{person.name}</td>
      <td>{person.height}</td>
      <td>{person.hair_color}</td>
      <td>
          <Link to={`/person?id=${index + 1}`}>Details</Link>
      </td>
    </tr>
  ))}
  {isLoading ? <LoadSpinner /> : ""}
  </tbody>
</table>
        </div>
    )
}