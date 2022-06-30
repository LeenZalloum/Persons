import useFetch from '../hooks/useFetch';
import PersonsList from './PersonsList';
const  Home = () => {
    const {data, isPending, error} = useFetch('http://icloudjo.com:8050/REST/persons');

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {data && <PersonsList data={data}/>}
        </div> 
    );
}
 
export default Home;