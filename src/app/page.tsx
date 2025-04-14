import { GeistSans } from "geist/font/sans";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <h1
        className={`${GeistSans.className} text-8xl font-bold tracking-tight text-center text-black dark:text-white`}
      >
        next-coolify
      </h1>
    </div>
  );
}
