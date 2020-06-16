// import React from "react";
import Link from "next/link";
import axios from "axios";
// import backgroundImg from "../img/Bird.jpg";

export default function Index({ post }) {
  post = post.filter((p) => p.id <= 10);
  return (
    <div className='container'>
      <ul>
        {post.map((p) => (
          <li key={p.id} className='post-card'>
            <Link href={`/comment?id=${p.id}`}>
              <a>
                <h3>{p.title}</h3>
              </a>
            </Link>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
      <style jsx global>
        {`
         
          }
        `}
      </style>
    </div>
  );
}

Index.getInitialProps = async () => {
  const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = post;
  return { post: data };
};
