import useFetch from '../hooks/useFetch';
import { useParams } from "react-router-dom";

const GetPerson = () => {
    const { id } = useParams();

    const {data, isPending, error} = useFetch('http://icloudjo.com:8050/REST/persons/' + id) ;

    
    
     
    
    return ( 
        <div className="getPerson">
              
            {isPending && <div> Loading... </div>}
            {error && <div>{error}</div>}
             {data && data.map( (data , index) =>(
                <article key={index}>
                    
                    
                 <h2>Person {data.id}</h2>
                 <p>First Name: {data.first_name}</p>
                 <p>Middle Name: {data.middle_name}</p>
                 <p>Last Name : {data.last_name}</p>
                 <p>Email: {data.email}</p>
                 <p>Description: {data.description}</p>
                 </article>
                 ))
                 }
                    
                    
        </div>
     );
}
 
export default GetPerson;