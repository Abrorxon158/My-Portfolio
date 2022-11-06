import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className='container mx-auto'>
      <h1 className="title">
        Read <Link
          href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
}
