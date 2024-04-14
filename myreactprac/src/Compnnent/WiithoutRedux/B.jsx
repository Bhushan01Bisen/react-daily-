import { useRef } from "react"

 
export const B = ({ fn }) => {
    const locRef = useRef(null);

    const handleClick = () => {
        const loc = locRef.current.value;
        fn(loc);
    };

    return (
        <p>
            <input ref={locRef} />
            <button onClick={handleClick}>Location</button>
        </p>
    );
};

