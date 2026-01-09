import React, { useState } from "react";

interface User {
  id: number;
  username: string;
  fullname: string;
}
interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
const Komentarz = (comment: Comment) => {
  const [likeCount, updateLikeCount] = useState<number>(comment.likes);
  return (
    <div className="Comment">
      <div className="CommentAuthor"> {comment.user.username}</div>
      <div className="CommentText">{comment.body}</div>
      <div className="CommentLikes">
        <button
          onClick={() => {
            updateLikeCount((prev) => prev + 1);
          }}
        >
          {" "}
          👍{" "}
        </button>
        <div> {likeCount}</div>
        <button
          onClick={() => {
            updateLikeCount((prev) => prev - 1);
          }}
        >
          {" "}
          👎{" "}
        </button>
      </div>
    </div>
  );
};

export default Komentarz;
