import { useRef } from "react"

 
export const A = ({ fn }) => {
    const nameRef = useRef(null);

    const handleClick = () => {
        const name = nameRef.current.value;
        fn(name);
    };

    return (
        <p>
            <input ref={nameRef} />
            <button onClick={handleClick}>Name</button>
        </p>
    );
};
