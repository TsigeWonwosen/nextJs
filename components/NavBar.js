import Link from "next/link";

export default function NavBar() {
  return (
    <div className='nav-bar'>
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
