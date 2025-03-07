'use client';
import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const openDb = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("expensesDatabase", 1);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("expenses")) {
        const store = db.createObjectStore("expenses", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("date", "date", { unique: false });
        store.createIndex("day", "day", { unique: false });
        store.createIndex("category", "category", { unique: false });
        console.log("Object store 'expenses' created.");
      }
    };

    request.onerror = (e) => {
      reject(`Error opening database: ${e.target.error}`);
    };

    request.onsuccess = (e) => {
      const db = e.target.result;

      if (!db.objectStoreNames.contains("expenses")) {
        console.error("Object store 'expenses' is missing. Resetting database.");
        db.close();
        indexedDB.deleteDatabase("expensesDatabase");
        window.location.reload();
      } else {
        resolve(db);
      }
    };
  });
};

const storeData = async (data) => {
  try {
    const db = await openDb();
    const transaction = db.transaction("expenses", "readwrite");
    const store = transaction.objectStore("expenses");

    const date = new Date();
    data.date = date.toISOString().split("T")[0];
    data.day = date.toLocaleString("en-US", { weekday: "long" });

    store.add(data);

    transaction.oncomplete = () => {
      console.log("Data added successfully");
    };

    transaction.onerror = (e) => {
      console.error("Error storing data:", e.target.error);
    };
  } catch (error) {
    console.error("Error opening IndexedDB:", error);
  }
};

const ExpenseTracker = () => {
  const [activeTab, setActiveTab] = useState("addExpense");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({
    leastCategory: "",
    leastExpenditure: 0,
    mostSpentDay: "",
    mostSpentDayAmount: 0,
    leastSpentDay: "",
    leastSpentDayAmount: 0,
  });

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const db = await openDb();
    const transaction = db.transaction("expenses", "readonly");
    const store = transaction.objectStore("expenses");
    const request = store.getAll();

    request.onsuccess = () => {
      setExpenses(request.result);
      calculateSummary(request.result);
    };

    request.onerror = (e) => {
      console.error("Error fetching expenses:", e.target.error);
    };
  };

  const calculateSummary = (expenses) => {
    const categoryMap = {};
    const dayMap = {};

    expenses.forEach((expense) => {
      // Calculate category-wise spending
      if (!categoryMap[expense.category]) {
        categoryMap[expense.category] = 0;
      }
      categoryMap[expense.category] += parseFloat(expense.amount);

      // Calculate day-wise spending
      if (!dayMap[expense.day]) {
        dayMap[expense.day] = 0;
      }
      dayMap[expense.day] += parseFloat(expense.amount);
    });

    // Find least spent category
    const leastCategory = Object.keys(categoryMap).reduce((a, b) =>
      categoryMap[a] < categoryMap[b] ? a : b
    );
    const leastExpenditure = categoryMap[leastCategory];

    // Find most and least spent day
    const days = Object.keys(dayMap);
    const mostSpentDay = days.reduce((a, b) => (dayMap[a] > dayMap[b] ? a : b));
    const mostSpentDayAmount = dayMap[mostSpentDay];
    const leastSpentDay = days.reduce((a, b) => (dayMap[a] < dayMap[b] ? a : b));
    const leastSpentDayAmount = dayMap[leastSpentDay];

    setSummary({
      leastCategory,
      leastExpenditure,
      mostSpentDay,
      mostSpentDayAmount,
      leastSpentDay,
      leastSpentDayAmount,
    });
  };

  const handleAddExpense = async (e) => {
    e.preventDefault();
    const expense = { item, amount, category, description };
    await storeData(expense);
    fetchExpenses();
    setItem("");
    setAmount("");
    setCategory("");
    setDescription("");
  };

  const downloadCSV = () => {
    const headers = ["Item", "Amount", "Category", "Description", "Date", "Day"];
    const rows = expenses.map((expense) => [
      expense.item,
      expense.amount,
      expense.category,
      expense.description,
      expense.date,
      expense.day,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "expenses.csv";
    link.click();
  };

  // Chart data for category-wise spending
  const categoryChartData = {
    labels: Object.keys(
      expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) acc[expense.category] = 0;
        acc[expense.category] += parseFloat(expense.amount);
        return acc;
      }, {})
    ),
    datasets: [
      {
        label: "Amount Spent (₹)",
        data: Object.values(
          expenses.reduce((acc, expense) => {
            if (!acc[expense.category]) acc[expense.category] = 0;
            acc[expense.category] += parseFloat(expense.amount);
            return acc;
          }, {})
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Chart data for day-wise spending
  const dayChartData = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Amount Spent (₹)",
        data: [0, 0, 0, 0, 0, 0, 0].map((_, i) => {
          const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][i];
          return expenses
            .filter((expense) => expense.day === day)
            .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        }),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="  w-full h-screen mt-10  p-6">
      <div className="  mx-auto w-full h-full  bg-[#020617] border border-[#ffff] rounded-xl shadow-lg p-6">
        <div className="flex space-x-4 w-full border-b mb-6">
          <button
            className={`py-2 px-4 ${
              activeTab === "addExpense"
                ? "border-b-2 border-[#0F172A] text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("addExpense")}
          >
            Add Expense
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "viewExpenses"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("viewExpenses")}
          >
            View Expenses
          </button>
        </div>

        {activeTab === "addExpense" && (
          <form onSubmit={handleAddExpense} className="  space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                What I bought?
              </label>
              <input

                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter item"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter Amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter Category"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="mt-1 block w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full  bg-[#0F172A] rounded-xl text-white py-2 px-4   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add Expense
            </button>
            
          </form>
        )}

        {activeTab === "viewExpenses" && (
          <div className="rounded-xl bg-[#0F172A]">
            <div className="space-y-4 bg-[#0F172A]">
              <div className=" bg-[#0F172A] p-4 rounded-lg">
                <h3 className="text-lg font-medium">
                  Least Expended Category: {summary.leastCategory} (₹
                  {summary.leastExpenditure})
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">
                  Most Spent Day: {summary.mostSpentDay} (₹
                  {summary.mostSpentDayAmount})
                </h3>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium">
                  Least Spent Day: {summary.leastSpentDay} (₹
                  {summary.leastSpentDayAmount})
                </h3>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 bg-[#0F172A] md:grid-cols-2 gap-6">
            <div className="mt-6 grid grid-cols-1 bg-[#0F172A] md:grid-cols-2 gap-6">
  {/* Category-wise Spending Chart */}
  <div className="bg-[#0F172A] p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium mb-4">Category-wise Spending</h3>
    <div className="w-full bg-[#0F172A] h-[400px] flex items-center justify-center">
      <Pie 
        data={categoryChartData} 
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                padding: 15
              }
            }
          }
        }}
      />
    </div>
  </div>

  {/* Day-wise Spending Chart */}
  <div className="bg-[#0F172A] p-6 rounded-lg shadow">
    <h3 className="text-lg font-medium mb-4">Day-wise Spending</h3>
    <div className="w-full h-[400px] text-white flex items-center justify-center">
      <Bar 
        data={dayChartData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }} 
      />
    </div>
  </div>
</div>
              <div className="bg-[#0F172A]  text-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Day-wise Spending</h3>
                <Bar data={dayChartData} />
              </div>
            </div>

            <button
              onClick={downloadCSV}
              className="mt-4  mb-5 items-center bg-[#020617] text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Download as CSV
            </button>
            <div className="p-4  space-y-4 mt-10 flex gap-4  justify-center items-centerflex-wrap">
              {expenses.length === 0 ? (
                <p className="text-gray-500">No expenses recorded yet.</p>
              ) : (
                expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="w-44 h-28 bg-[#020617] p-4 space-y-2 rounded-xl"
                  >
                  
<div class="flex flex-col w-full  bg-[#020617] rounded-3xl">
  <div class="px-6 py-8 sm:p-10 bg-[#020617] sm:pb-6">
    <div class="grid items-center  justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        >
          {expense.item}
        </h2>
        <p class="mt-2 text-sm text-gray-500">{expense.description}</p>
      </div>
      <div class="mt-6">
        <p>
          <span class="text-5xl font-light tracking-tight text-white">
          ₹{expense.amount}
          </span>
          <span class="text-base font-medium text-gray-500">  </span>
        </p>
      </div>
    </div>
  </div>
  <div class="flex px-6 pb-8 sm:px-8">
    <a
      aria-describedby="tier-company"
      class="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-[0.1rem] focus-visible:ring-black"
      href="#"
    >
      {expense.day} {expense.date}
    </a>
  </div>
</div>
                    
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;