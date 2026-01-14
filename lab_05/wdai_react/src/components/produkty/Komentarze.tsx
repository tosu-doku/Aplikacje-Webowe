import React, { useEffect, useState } from "react";
import { Komentarz, type Comment } from "./Komentarz";

const Komentarze = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((fetchData) => {
        setData(fetchData);
        console.log(fetchData);
      });
  }, []);

  return (
    <div>
      {data?.comments?.map(
        // ?. -> if data is null, react wont display anything
        // but when data is loaded in useState causes a rerender
        (comment: Comment) => (
          console.log("something", comment),
          (
            <Komentarz
              {...{
                id: comment.id,
                body: comment.body,
                postId: comment.postId,
                likes: comment.likes,
                user: comment.user,
              }}
            />
          )
        )
      )}
    </div>
  );
};

export default Komentarze;
