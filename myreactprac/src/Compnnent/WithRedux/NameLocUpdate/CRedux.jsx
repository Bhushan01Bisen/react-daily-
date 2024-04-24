import { useSelector } from "react-redux";

export const CRedux = () => {
  const { name, loc } = useSelector((state) => state.nL || {});
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Loc: {loc}</h2>
    </div>
  );
};

  // const name = useSelector((state)=>state.nL.name)
  // const loc = useSelector((state)=>state.nL.loc)