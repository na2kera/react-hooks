import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/useState" legacyBehavior>
        <a>useState</a>
      </Link>
      <Link href="/useRef" legacyBehavior>
        <a>useState</a>
      </Link>
    </>
  );
}
