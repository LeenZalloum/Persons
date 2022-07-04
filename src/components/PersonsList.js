import { Link } from "react-router-dom";
const PersonsList = (props) => {
    const persons = props.data;
    
    
    return (    
        <div className="person">
            {persons.map((person)=>(
                
                <div className="person-list" key={person.id}>
                             
                    <Link to={`/getPerson/${person.id}`}>
                    <h2>Person {person.id}</h2>
                        <p>First Name: {person.first_name}</p>
                        <p>Middle Name: {person.middle_name}</p>
                        <p>Last Name : {person.last_name}</p>
                        <p>Email: {person.email}</p>
                        <p>Description: {person.description}</p>
                    </Link>
                    
                </div>
            ))}
        </div>
    );
}
 
export default PersonsList;