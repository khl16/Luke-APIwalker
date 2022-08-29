import React, {useEffect, useState} from 'react';
import Unknown from './Unknown';
import Axios from 'axios';

const Details = (props) => {

    const {element} = props;
    const [values, setvalues] = useState([]);

    useEffect(() =>{
        let temp = []
        for(let key in element){
            temp.push({"key": key, "value": element[key]});
        }
        setvalues(temp);
        console.log(temp);
    }
    , [element])

    function getName(url){
        let name = "";
        if(url.startsWith('http')){
            Axios.get(url)
                .then( response =>{
                    return response.data.name;
                } );
        }
    }


    return (
        element.name === "Unknown" ? <Unknown/> : 
        <div className="container">
            <div className="row my-3">
                <h1>{element.name ? element.name : element.title}</h1>
            </div>
            {
                values.map((item, idx) =>
                    <div key={idx} className="row my-2">
                        <div className="col-3 text-left font-weight-bold">
                            {item.key}:
                        </div>
                        <div className="col-8 text-left">
                            {item.value}
                        </div>
                    </div>
                )
            }
        </div>
     );
}
 
export default Details;