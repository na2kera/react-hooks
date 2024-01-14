import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/useState" legacyBehavior>
        <a>useState</a>
      </Link>
      <hr />
      <Link href="/useRef" legacyBehavior>
        <a>useRef</a>
      </Link>
      <hr />
      <Link href="/useReducer" legacyBehavior>
        <a>useReducer</a>
      </Link>
      <hr />
      <Link href="/useMemo" legacyBehavior>
        <a>useMemo</a>
      </Link>
      <hr />
    </>
  );
}
