import  { useState} from "react";
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";

export const WithoutRedux = () => {
    const [name, setName] = useState('');
    const [loc, setLoc] = useState('');

    const handleNameChange = (data) => {
        setName(data);
    };

    const handleLocationChange = (data) => {
        setLoc(data);
    };

    return (
        <div> 
            <A fn={handleNameChange} />
            <B fn={handleLocationChange} />
            <C name={name} loc={loc} />
        </div>
    );
};