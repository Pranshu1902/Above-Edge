import { useState } from "react";
import { url, username, password, attributes } from "../constant";
import { Link } from "react-router-dom";

export default function CallBack() {
  const [referenceID, setReferenceID] = useState("");
  const [status, setStatus] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const initData = {
    mobile: "",
    email: "",
    firstname: "",
    lastname: "",
    gender: "",
    pan: "",
    panStatus: "",
    dob: "",
    pincode: "",
    profession: "",
    salary: "",
    imei: "",
    referenceId: "",
    showCompany: "",
    from: "",
    status: "",
    statusCode: "",
    isDedupe: 0,
    isPastLoan: 0,
    isActiveLoan: 0,
  };

  const [data, setData] = useState(initData);

  const reset = () => {
    setReferenceID("");
    setStatus("");
    setStatusCode("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
      body: JSON.stringify({
        referenceId: referenceID,
        status: status,
        statusCode: statusCode,
      }),
    });

    const data = await res.json();

    if (data.code === "400") {
      setError(data.msg);
    } else if (data.code === "200") {
      setMessage(data.msg);
      setData(data.model);
      reset();
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-700 flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-200 p-4 rounded-lg md:w-2/5">
        <div className="text-4xl font-bold">Retrieve Data</div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="referenceID">Reference ID:</label>
            <input
              type="text"
              placeholder="Enter Reference ID"
              className="rounded-lg p-2"
              id="referenceID"
              value={referenceID}
              onChange={(e) => setReferenceID(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              placeholder="Enter Status"
              className="rounded-lg p-2"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="statusCode">Status Code:</label>
            <input
              type="text"
              placeholder="Enter Status Code"
              className="rounded-lg p-2"
              id="statusCode"
              value={statusCode}
              onChange={(e) => setStatusCode(e.target.value)}
            />
          </div>

          {error.length > 0 && (
            <p className="flex justify-center text-red-500">Error: {error}</p>
          )}
          {loading ? (
            <div className="flex justify-center">
              <p>Loading...</p>
            </div>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white font-bold"
            >
              Get Data
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
            Check status of existing request?{" "}
            <Link
              to="/status"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Check Status
            </Link>
          </p>
          <Link
            to={"/"}
            className="bg-green-500 hover:bg-green-700 rounded-xl p-2 text-white font-bold px-6"
          >
            Home
          </Link>
        </div>
      </div>
      {message.length > 0 && (
        <div className="bg-white mt-6 p-3 rounded-xl w-2/5">
          <div className="flex flex-col justify-center text-green-600 font-medium">
            <p className="text-xl">{message}</p>
            <div className="grid grid-cols-2 mt-3">
              {attributes.map((field, ind) => (
                <p key={ind}>
                  {field}: <b>{data[field]}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
