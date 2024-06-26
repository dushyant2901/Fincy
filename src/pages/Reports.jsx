import React, { useState } from "react";
import IncomeVsExpensesReport from "../components/Reports/IncomeVsExpensesReport";
import ExpenseBreakdown from "../components/Reports/ExpenseBreakdown";
import { AiOutlineReload } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";

function Reports() {
  const [reportType, setReportType] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Report Analysis Page has a powerful tool to gain insights into your
          financial well-being. This page is designed to help you make informed
          financial decisions and gain a deep understanding of your financial
          habits. With the "Income vs Expense Report," you can compare your
          earnings and spending over time, allowing you to see at a glance
          whether you're living within your means or where adjustments are
          needed. With the "Expense Breakdown Report" offers an in-depth
          analysis of your spending patterns based on category.
        </div>
        {income && expenses ? (
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-20">
              <select
                onChange={(e) => {
                  setShowReport(false);
                  setReportType(e.target.value);
                }}
                className="pl-2 py-3 rounded-full drop-shadow-md border text-lg"
              >
                <option value="">Select Report Type</option>
                <option value="IncomeVSExpenses">Income Vs Expenses</option>
                <option value="ExpenseBreakdown">Expense Breakdown</option>
              </select>
              <button
                disabled={(reportType === "") | showReport}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setShowReport(true);
                  }, 1000);
                }}
                className={`flex items-center justify-center gap-1 bg-[#edaeb7] hover:bg-[#f797a6] mb-4 text-center mx-auto px-4 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold`}
              >
                Generate Report
                <AiOutlineReload className="h-6 w-6 ml-1" />
              </button>
            </div>
            <div className="mt-4">
              {!loading && !showReport ? (
                <p className="mt-[4vh] font-bold text-xl">
                  Please Choose To Generate A Report
                </p>
              ) : (
                loading && (
                  <div className="mt-16">
                    <Oval
                      height={80}
                      width={80}
                      color="#f797a6"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#FFFFFF"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  </div>
                )
              )}
              {showReport && reportType === "IncomeVSExpenses" && (
                <IncomeVsExpensesReport />
              )}
              {showReport && reportType === "ExpenseBreakdown" && (
                <ExpenseBreakdown />
              )}
            </div>
          </div>
        ) : (
          <div>Data Not Available To Generate Reports</div>
        )}
      </div>
    </div>
  );
}

export default Reports;
