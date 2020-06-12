import React from "react";
import Link from "next/link";
import axios from "axios";
import Comment from "./comment";
export default function Index({ post }) {
  return (
    <div>
      <ul>
        {post.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #22f4f4",
              margin: "10px",
              padding: "10px",
              color: "black",
              width: "80%",
              margin: "auto",
            }}
          >
            <Link href={`/comment?id=${p.id}`} as={`/p?${p.id}`}>
              <a>
                <h3>{p.title}</h3>
              </a>
            </Link>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Index.getInitialProps = async () => {
  const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = post;
  return { post: data };
};
