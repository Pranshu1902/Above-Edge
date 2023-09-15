import design from "../assets/design.png";
import Photo from "../assets/photo.png";

export default function Home() {
  const LoanCard = (icon, color, name, interest, amount) => {
    return (
      <div className="bg-white p-2 shadow-md rounded-xl">
        <div className="flex gap-2 items-center">
          <i
            className={`${icon} bg-green-300 p-2 rounded-lg text-green-800`}
          ></i>
          <div className="flex flex-col">
            <p className="font-bold text-xl">{name}</p>
            <p className="text-sm text-gray-500">
              Lowest interest as low as {interest}%
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <p className="font-bold text-xl">${amount}</p>
            <p>Maximum Amount</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">{interest}%</p>
            <p>Interest</p>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#44A7EA] p-2 rounded-lg text-white">
              Apply Now
            </div>
          </div>
        </div>
      </div>
    );
  };

  const recommended = [
    {
      icon: "fa-solid fa-credit-card",
      color: "violet",
      name: "Policy Loan",
      interest: 0.2,
      amount: 20000,
    },
    {
      icon: "fa-solid fa-user-graduate",
      color: "red",
      name: "Post Graduation Loan",
      interest: 0.3,
      amount: 22000,
    },
    {
      icon: "fa-solid fa-money-bill",
      color: "green",
      name: "Static Loan",
      interest: 0.5,
      amount: 7000,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="bg-white p-4 rounded-lg md:w-2/5 md:mb-36">
        <div>
          <img src={design} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={Photo} alt="" />
        </div>
        <p className="text-3xl font-bold">Place for getting student loan</p>
        <p>
          We provide the best loan offer for the student with flexible
          conditions.
        </p>
        <button className="bg-[#4E58DD] text-white p-2 px-4 rounded-lg mt-6">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="bg-[#F8F7FC] p-4 rounded-lg md:w-2/5 md:mt-36">
        <p className="font-bold text-2xl">Get Loan</p>
        <div className="bg-[#5E67E0] text-white p-2 rounded-xl shadow-md shadow-[#969cec]">
          <p className="text-gray-300">Maximum Amount</p>
          <p className="font-bold text-3xl">$50000</p>
          <div className="flex justify-around text-ms mt-6">
            <p>Applied</p>
            <p className="text-gray-300">Review</p>
            <p className="text-gray-300">Approval</p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-gray-300 border-2 px-6 border-gray-300 p-2 rounded-lg">
              Apply Now
            </div>
          </div>
        </div>

        <p className="font-bold mt-6">Recommended Loan</p>
        <div className="flex flex-col gap-4 mt-4">
          {recommended.map((recommendation) =>
            LoanCard(
              recommendation.icon,
              recommendation.color,
              recommendation.name,
              recommendation.interest,
              recommendation.amount
            )
          )}
        </div>
      </div>
    </div>
  );
}
