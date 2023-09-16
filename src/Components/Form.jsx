import { useState } from "react";
import { url, username, password } from "../constant";
import { Link } from "react-router-dom";

export default function Form() {
  const initForm = {
    mobile: "",
    email: "",
    firstname: "",
    lastname: "",
    gender: "",
    pan: "",
    dob: "",
    pincode: "",
    profession: "",
    salary: "",
    imei: "",
    referenceId: "",
    company: "",
    campaign: "",
    key1: "",
    key2: "",
  };
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    setError("");
    setMessage("");
    e.preventDefault();

    console.log(form);

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(username + ":" + password),
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.code === "400") {
      setError(data.msg);
    } else if (data.code === "200") {
      setMessage(data.msg);
      setForm(initForm);
    }

    setLoading(false);
  };

  const fields = [
    { name: "mobile", title: "Mobile", type: "text" },
    { name: "email", title: "Email", type: "email" },
    { name: "firstname", title: "First Name", type: "text" },
    { name: "lastname", title: "Last Name", type: "text" },
    {
      name: "gender",
      title: "Gender",
      type: "select",
    },
    { name: "pan", title: "PAN", type: "text" },
    { name: "dob", title: "DOB", type: "date" },
    { name: "pincode", title: "Pincode", type: "text" },
    { name: "profession", title: "Profession", type: "text" },
    { name: "salary", title: "Salary", type: "text" },
    { name: "imei", title: "IMEI", type: "text" },
    { name: "referenceId", title: "Reference ID", type: "text" },
    { name: "company", title: "Company", type: "text" },
    { name: "campaign", title: "Campaign", type: "text" },
    { name: "key1", title: "Key 1", type: "text" },
    { name: "key2", title: "Key 2", type: "text" },
  ];

  const formField = (field) => {
    if (field.title === "Gender") {
      return (
        <div className="flex flex-col">
          <label htmlFor={field.title} className="font-bold">
            {field.title}:
          </label>
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-1">
              <input
                id="male"
                type="radio"
                value="M"
                name="gender"
                onChange={() => setForm({ ...form, [field.name]: "M" })}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-1">
              <input
                id="female"
                type="radio"
                value="F"
                name="gender"
                onChange={() => setForm({ ...form, [field.name]: "F" })}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex gap-1">
              <input
                id="other"
                type="radio"
                value="Other"
                name="gender"
                onChange={() => setForm({ ...form, [field.name]: "Others" })}
              />
              <label htmlFor="other">Others</label>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <label htmlFor={field.title} className="font-bold">
          {field.title}:
        </label>
        <input
          id={field.title}
          placeholder={`Enter ${field.title}`}
          className="rounded-lg p-2 border-1 focus:border-blue-500"
          type={field.type}
          value={form[field.name]}
          onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-700 flex justify-center items-center p-4 min-h-screen">
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-200 p-6 rounded-lg md:w-2/5">
        <div className="flex md:flex-row w-full flex-col items-center justify-between pb-2">
          <div className="text-4xl font-bold">Form</div>
          <Link
            to={"/"}
            className="bg-blue-500 duration-300 transition hover:bg-blue-700 rounded-lg p-2 text-white font-bold px-6 shadow-lg"
          >
            Home
          </Link>
        </div>
        <form
          id="form"
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}
        >
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => formField(field))}
          </div>
          {/* Error Message */}
          {error.length > 0 && (
            <p className="flex justify-center text-red-500">Error: {error}</p>
          )}
          {/* Success Message */}
          {message.length > 0 && (
            <p className="flex justify-center text-green-600 font-medium text-xl">
              Success: {message}
            </p>
          )}
          {loading ? (
            <div className="flex justify-center">
              <p>Loading...</p>
            </div>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 p-2 text-white rounded-lg font-bold shadow-lg duration-300 transition"
            >
              Submit
            </button>
          )}
        </form>
        <div className="flex flex-col gap-2 items-center">
          <p>
            Check status of existing request?{" "}
            <Link
              to="/status"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Check Status
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
        </div>
      </div>
    </div>
  );
}
