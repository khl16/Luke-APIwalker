import React, {useState} from 'react';
import Axios from 'axios';

const SearchBar = (props) => {

    const {setElement} = props;
    const [category, setCategory] = useState("films");
    const [id, setId] = useState(1);

    function getElement(e){
        e.preventDefault();
        Axios.get('https://swapi.dev/api/'+category+"/"+id)
             .then(response => {
                console.log(response.data);
                setElement(response.data);
            })
             .catch(response => {
                console.log(response.data);
                setElement({name: "Unknown"});
            })
            ;

    }

    return ( 
        <form onSubmit={getElement}>
            <div className="row my-3 justify-content-center">
                <label className="mx-2">Search for:</label>
                <select className="mx-2" name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label className="mx-2">ID:</label>
                <input className="mx-2" type="number" value={id} required onChange={e => setId(e.target.value)}/>
                <button type="submit" className=" mx-2 btn btn-primary">Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;