import { useSelector } from "react-redux";

export const GetDataFromStrore = () => {
  // const store = useSelector((store) => store);

  // const posts = store?.ajax?.posts;
  // const comments = store?.ajax?.comments;
  const posts = useSelector((state) => state.ajax.posts);
const comments = useSelector((state) => state.ajax.comments);
  return (
    <div>
      {posts?.map((obj, i) => {
        return <p key={i}>{obj.title}</p>;
      })}
      {comments.map((obj, i) => {
        return <p key={i}>{obj.id}</p>;
      })}
    </div>
  );
};
