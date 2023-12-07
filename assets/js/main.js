const chartData = {
  labels: [
    "FAIRLUNCH & PUBLIC",
    "CEX LIQUIDITY (locked)",
    "INSTANT CHARITY (locked)",
    "MARKETING (locked)",
    "OPERATIONAL",
  ],
  data: [60, 30, 5, 4, 1],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 3,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();
