import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const expenses = [
        { date: "2025-02-20", title: "Groceries", amount: 45, type: "expense", category: "Food" },
        { date: "2025-02-19", title: "Salary", amount: 2500, type: "income", category: "Work" },
        { date: "2025-02-18", title: "Books", amount: 75, type: "expense", category: "Education" },
        { date: "2025-02-17", title: "Freelance", amount: 800, type: "income", category: "Work" },
        { date: "2025-02-16", title: "Dining", amount: 35, type: "expense", category: "Food" },
      ];

  return (
    <div className="min-h-screen flex flex-col bg-[#e8d5c4] text-[#429ab9]">
      <Appbar />

      {/* Filters */}
      <div className="pt-10 flex justify-around">
        <select className="text-white bg-[#429ab9] hover:bg-[#387b94] p-2 rounded- border border-[#429ab9]">
          <option>Last Week</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
        <select className="text-white bg-[#429ab9] hover:bg-[#387b94] p-2 rounded border border-[#429ab9]">
          <option>All</option>
          <option>Expense</option>
          <option>Income</option>
        </select>
        <div className="text-white">
          <Button label="Reset" />
        </div>
      </div>

      {/* Centered Table */}
      <div className="mt-20 w-full flex justify-center items-center overflow-x-auto">
        <table className="w-full max-w-4xl bg-[#e8d5c4] text-[#429ab9] border-collapse">
          <thead>
            <tr className="bg-[#e8d5c4]">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2">{expense.date}</td>
                <td className="px-4 py-2">{expense.title}</td>
                <td className="px-4 py-2">${expense.amount}</td>
                <td className="px-4 py-2">{expense.type}</td>
                <td className="px-4 py-2">{expense.category}</td>
                <td className="px-4 py-2">
                  <button className="text-red-500">❌</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};