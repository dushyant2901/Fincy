import React, { useState } from "react";

function IncomeForm({ action, setOpenModal, btnStyle }) {
  const [data, setData] = useState({
    source: "",
    amount: 0,
    description: "",
    category: "",
  });

  const formValidation = () => {
    if (
      (data.source === "") |
      (data.amount === "") |
      (data.description === "") |
      (data.category === "")
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4">
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Source</div>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, source: e.target.value })}
            type="text"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Amount</div>
          <input
            value={data.quantity}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex text-lg">
          <div className="w-[16vh]">Description</div>
          <div className="flex flex-col items-center">
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="border-2 p-1 h-[6vh] w-[20vh] rounded-md text-sm"
            ></textarea>
            {data.description.length > 30 ? (
              <p className="text-[10px] mt-1 text-red-500">
                Enter less than 30 characters
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Category</div>
          <select
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
            className="border-2 p-1 w-[20vh] rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Investments">Investments</option>
            <option value="Part-time">Part-time</option>
            <option value="Rental">Rental</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Consulting">Consulting</option>
            <option value="Interest">Interest</option>
            <option value="Gift">Gift</option>
            <option value="Royalties">Royalties</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          disabled={formValidation()}
          onClick={() => {
            action(data);
            setOpenModal(false);
          }}
          className={`${
            formValidation() ? "bg-slate-300" : btnStyle
          } mx-auto px-12 py-2 mb-4 rounded-full text-lg`}
        >
          Add
        </button>
        {formValidation() ? (
          <p className="text-[12px] text-red-500">
            Please fill all input fields to Add an Income
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default IncomeForm;
