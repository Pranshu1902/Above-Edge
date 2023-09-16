import design from "../assets/design.png";
import Photo from "../assets/photo.png";

export default function Home() {
  const LoanCard = (recommendation) => {
    return (
      <div className="bg-white p-2 shadow rounded-xl">
        <div className="flex gap-2 items-center">
          <i
            className={`${recommendation.icon} bg-${recommendation.color}-200 p-2 rounded-lg text-${recommendation.color}-600`}
          ></i>
          <div className="flex flex-col">
            <p className="font-bold text-xl">{recommendation.name}</p>
            <p className="text-sm text-gray-500">
              Lowest interest as low as {recommendation.interest}%
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <p className="font-bold text-xl">${recommendation.amount}</p>
            <p className="text-sm text-gray-500">Maximum Amount</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl">{recommendation.interest}%</p>
            <p className="text-sm text-gray-500">Interest</p>
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
      color: "purple",
      name: "Policy Loan",
      interest: 0.2,
      amount: 20000,
    },
    {
      icon: "fa-solid fa-user-graduate",
      color: "orange",
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
    <div className="flex flex-col justify-center md:flex-row gap-12">
      <div className="bg-white flex flex-col gap-6 p-4 rounded-3xl h-fit md:w-2/5 md:mb-28 shadow-md">
        <div>
          <img src={design} alt="blue and red ball" />
        </div>
        <div className="flex justify-center pt-6">
          <img src={Photo} alt="icon" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold">Place for getting student loan</p>
          <p className="text-gray-500">
            We provide the best loan offer for the student with flexible
            conditions.
          </p>
        </div>
        <div>
          <button className="bg-[#4E58DD] text-white p-4 mb-2 px-6 rounded-xl mt-6 shadow-lg shadow-[#c2c6ff]">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="bg-[#F8F7FC] p-4 rounded-3xl md:w-2/5 md:mt-28 shadow-md">
        <p className="font-bold text-2xl">Get Loan</p>
        <div className="bg-gradient-to-br mt-4 from-[#4D57D9] via-[#666EE0] to-[#4D57D9] text-white p-2 rounded-xl shadow-md shadow-[#969cec]">
          <p className="text-gray-300">Maximum Amount</p>
          <p className="font-bold text-3xl">$50000</p>
          <div className="relative flex justify-around mt-6">
            <hr className="absolute text-gray-400 w-2/3 mt-2" />
            <p className="p-2 rounded-full bg-white"></p>
            <p className="p-2 rounded-full bg-gray-400"></p>
            <p className="p-2 rounded-full bg-gray-400"></p>
          </div>
          <div className="flex justify-around text-ms">
            <p>Apply</p>
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
          {recommended.map((recommendation) => LoanCard(recommendation))}
        </div>
      </div>
    </div>
  );
}
