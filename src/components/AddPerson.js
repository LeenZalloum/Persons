import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPerson = () => {
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate  = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const person = {first_name,middle_name,last_name,email,description};
        console.log('data to be sent',person);
        setIsPending(true);
        fetch('http://icloudjo.com:8050/REST/persons',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(person),
            
        }).then(
            console.log("New Person Added"),
            setIsPending(false),
            navigate('/')
        )
        
    }

    return ( 
        <div className="addPerson">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName" >First Name:</label>
                <input id="firstName" value={first_name} onChange={(e) => setFirstName(e.target.value)}></input>
                <label htmlFor="middleName" >Middle Name:</label>
                <input id="middleName" value={middle_name} onChange={(e) => setMiddleName(e.target.value)}></input>
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" value={last_name} onChange={(e) => setLastName(e.target.value)}></input>
                <label htmlFor="email">Email:</label>
                <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="description">Description:</label>
                <textarea id="description"  rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br></br>
                <button type="submit">{isPending ? 'Loading...' : 'Add Person' }</button>
            </form>
        </div>
     );
}
 
export default AddPerson;