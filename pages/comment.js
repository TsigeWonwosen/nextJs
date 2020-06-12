import React from "react";
import axios from "axios";

export default function Comment({ singlePost }) {
  return (
    <ul>
      {singlePost.map((comm) => (
        <li
          key={comm.id}
          style={{
            border: "1px solid #22f4f4",
            margin: "10px  auto",
            padding: "10px",
            color: "black",
            width: "80%",
            listStyle: "none",
          }}
        >
          <h3>{comm.email}</h3>
          <p> {comm.name}</p>
          <p> {comm.body}</p>
        </li>
      ))}
    </ul>
  );
}

Comment.getInitialProps = async ({ query }) => {
  const { id } = query;
  const comment = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const { data } = comment;
  return { singlePost: data };
};
