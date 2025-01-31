import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const QuizDashboard = ({
  quizData = {
    title: "Quiz",
    date: "Jun 15, 2020",
    questions: 2,
    completionTime: "0:05",
    difficulty: "All",
    stats: {
      correct: 1,
      incorrect: 1,
      unanswered: 0,
      score: 50,
    },
    timeStats: {
      yourAverage: "0:02",
      boardExamAverage: "1:15",
    },
    subjects: [
      {
        name: "OB/GYN",
        correct: 1,
        incorrect: 0,
        unanswered: 0,
        total: 1,
        avgTime: "0:03",
      },
      {
        name: "Pediatrics",
        correct: 0,
        incorrect: 1,
        unanswered: 0,
        total: 1,
        avgTime: "0:01",
      },
    ],
  },
}) => {
  const data = [
    { name: "Correct", value: quizData.stats.correct, color: "#4ade80" }, //"#4ade80"
    { name: "Incorrect", value: quizData.stats.incorrect, color: "#ef4444" }, //"#ef4444"
    { name: "Unanswered", value: quizData.stats.unanswered, color: "#d1d5db" },
  ];

  const chartData = {
    labels: ["Unattempted", "Incorrect", "Correct"],
    datasets: [
      {
        data: [10, 50, 80], // Values for Paid, Unpaid, and Due
        backgroundColor: ["#fbbf24", "#ef4444",  "#10b981"], // Colors for Paid, Unpaid, and Due
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: "75%", // Adjust the size of the inner circle
    plugins: {
      legend: { display: false }, // Hides the legend on the chart
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          return `${value / 1000}`; // Display the value in 'k' format
        },
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h2 font-weight-bold">{quizData.title}</h2>
          <p className="text-muted">
            {quizData.date} | {quizData.questions} Questions | Completed in{" "}
            {quizData.completionTime} | Difficulty Level: {quizData.difficulty}
          </p>
        </div>
        <button className="btn btn-success text-white">
          Review Quiz
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="row g-4">
        {/* Score Chart */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow-sm p-3">
            <h3 className="h5 font-weight-bold mb-4">Overall Performance</h3>
            <div className="position-relative">
              <div className="text-center">
                <div className="w-100 d-flex justify-content-center">
                  <Doughnut data={chartData} options={chartOptions} />
                </div>
                {/* Central Text */}
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <p className="h3 font-weight-bold"></p>
                  <p className="text-muted">Average</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4">
              {data.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle"
                      style={{ width: 16, height: 16, backgroundColor: item.color }}
                    ></div>
                    <span className="ms-2">{item.name}</span>
                  </div>
                  <span style={{ color: item.color }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow-sm p-3">
            <h3 className="h5 font-weight-bold mb-4">Results Summary</h3>
            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <span>Correct</span>
                <span className="font-weight-bold">{quizData.stats.correct}</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <span>Incorrect</span>
                <span className="font-weight-bold">{quizData.stats.incorrect}</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <span>Unanswered</span>
                <span className="font-weight-bold">{quizData.stats.unanswered}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Time Stats */}
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card shadow-sm p-3">
            <h3 className="h5 font-weight-bold mb-4">Response Time</h3>
            <div className="list-group">
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <span>Your Average</span>
                <span className="font-weight-bold">{quizData.timeStats.yourAverage}</span>
              </div>
              <div className="list-group-item d-flex justify-content-between align-items-center">
                <span>Board Exam Average</span>
                <span className="font-weight-bold">{quizData.timeStats.boardExamAverage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Table */}
      <div className="card shadow-sm p-3 mt-4">
        <div className="table-responsive">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Unanswered</th>
                <th># of Qs</th>
                <th>Avg Time</th>
              </tr>
            </thead>
            <tbody>
              {quizData.subjects.map((subject, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        className={`w-25 h-1 rounded ${subject.correct === subject.total ? "bg-success" : "bg-danger"}`}
                      />
                      <span className="ms-3">{subject.name}</span>
                    </div>
                  </td>
                  <td>{subject.correct}</td>
                  <td>{subject.incorrect}</td>
                  <td>{subject.unanswered}</td>
                  <td>{subject.total}</td>
                  <td>{subject.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;

