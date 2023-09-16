import { useState } from "react";
import { url, username, password } from "../constant";
import { Link } from "react-router-dom";

export default function GetStatus() {
  const [referenceID, setReferenceID] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    setError("");
    setMessage("");
    e.preventDefault();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
      body: JSON.stringify({ referenceId: referenceID }),
    });

    const data = await res.json();

    if (data.code === "400") {
      setError(data.msg);
    } else if (data.code === "200") {
      setMessage(data);
      setReferenceID("");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-700 flex justify-center items-center p-4 min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-200 p-4 rounded-lg md:w-1/3">
        <div className="text-4xl font-bold">Check Status</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="referenceID">Reference ID:</label>
            <input
              type="text"
              placeholder="Enter Reference ID"
              className="rounded-lg p-2 border-1 focus:border-blue-500"
              name="referenceID"
              id="referenceID"
              value={referenceID}
              onChange={(e) => setReferenceID(e.target.value)}
            />
          </div>
          {error.length > 0 && (
            <p className="flex justify-center text-red-500">Error: {error}</p>
          )}
          {message && (
            <div className="flex flex-col justify-center">
              <p className="font-medium text-xl text-green-600">{message.msg}</p>
              <p>
                Reference ID: <b>{message.model.referenceId}</b>
              </p>
              <p>
                Status: <b>{message.model.status}</b>
              </p>
              <p>
                Status Code: <b>{message.model.statusCode}</b>
              </p>
            </div>
          )}
          {loading ? (
            <div className="flex justify-center">
              <p>Loading...</p>
            </div>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white font-bold shadow-lg duration-300 transition"
            >
              Get Status
            </button>
          )}
        </form>
        <div className="flex flex-col gap-2 items-center">
          <p>
            Submit new request?{" "}
            <Link
              to="/form"
              className="underline text-blue-500 hover:text-blue-700"
            >
              New Request
            </Link>
          </p>
          <p>
            Already submitted a request?{" "}
            <Link
              to="/retrieve"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Retrieve Data
            </Link>
          </p>
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-700 rounded-lg p-2 text-white font-bold px-6 shadow-lg duration-300 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
