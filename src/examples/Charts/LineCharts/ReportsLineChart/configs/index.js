/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: datasets.length > 1
        ? datasets.map((item, i) =>
            ({
              label: item.label,
              tension: 0,
              pointRadius: 5,
              pointBorderColor: "transparent",
              pointBackgroundColor: item.pointBgColor,
              borderColor: item.pointBgColor,
              borderWidth: 4,
              backgroundColor: "transparent",
              fill: true,
              data: item.data,
              maxBarThickness: 6,
            })
          )
        : [
            {
              label: datasets[0].label,
              tension: 0,
              pointRadius: 5,
              pointBorderColor: "transparent",
              pointBackgroundColor: "rgba(255, 255, 255, .8)",
              borderColor: "rgba(255, 255, 255, .8)",
              borderWidth: 4,
              backgroundColor: "transparent",
              fill: true,
              data: datasets[0].data,
              maxBarThickness: 6,
            },
          ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { // 범례 스타일링.
          display: true,
          labels: {
            // 범례 도형 모양과 관련된 속성으로, false일 경우엔 기본 직사각형 도형으로 표시된다.
            usePointStyle: true,
            // 범례간 가로 간격을 조정할 수있다. 범례의 상하 padding을 지정하는 기능은 따로 지원되지 않아요. ㅠㅠ
            padding: 15,
          }
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}

export default configs;
