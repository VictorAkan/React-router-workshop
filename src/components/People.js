import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

export default function People() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const getPeople = async () => {
            const response = await fetch("https://swapi.dev/api/people");
            const responseJson = await response.json();

            setPeople(responseJson.results)
            console.log(responseJson);
        }
        getPeople();
    }, [])
    return(
        <div>
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
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{person.name}</td>
      <td>{person.height}</td>
      <td>{person.hair_color}</td>
      <td>
          <Link to={`/people/${index + 1}`}>Details</Link>
      </td>
    </tr>
  ))}
    
  </tbody>
</table>
        </div>
    )
}