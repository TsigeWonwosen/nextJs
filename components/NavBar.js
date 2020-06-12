import Link from "next/link";

export default function NavBar() {
  return (
    <div style={style}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/About'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </div>
  );
}
const style = {
  //   width: "100%",
  height: "30px",
  margin: "0px",
  padding: "2px 1.2rem",
  backgroundColor: "red",
  color: "white",
  display: "flex",
  alignItem: "center",
  textAlign: "center",
  justifyContent: "space-around",
};
