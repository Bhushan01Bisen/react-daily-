import { useSelector } from "react-redux";

export const MyRedx = () => {
  const list = useSelector((state) => state.li.list);

  return (
    <div>
      <ol>
        {list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ol>
    </div>
  );
};
