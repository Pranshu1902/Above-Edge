import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-12">
      <div className="font-medium text-3xl">404 Not Found</div>
      <Link
        to={"/"}
        className="bg-blue-500 duration-300 transition hover:bg-blue-700 rounded-lg p-2 text-white font-bold px-6 shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
