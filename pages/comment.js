import React from "react";
import axios from "axios";

export default function Comment({ id, singlePost }) {
  return (
    <>
      <h1>Comment for Post # {id}</h1>
      <ul>
        {singlePost.map((comm) => (
          <li key={comm.id} className='post-card'>
            <h3>{comm.email}</h3>
            <p> {comm.name}</p>
            <p> {comm.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

Comment.getInitialProps = async ({ query }) => {
  const { id } = query;
  const comment = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const { data } = comment;
  return { id, singlePost: data };
};
