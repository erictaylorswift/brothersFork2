const data = {
  labels: [
    window.reactApp[0].epicUserHandle,
    window.reactApp[1].epicUserHandle,
    window.reactApp[2].epicUserHandle,
    window.reactApp[3].epicUserHandle,
    window.reactApp[4].epicUserHandle
  ],
  datasets: [
    {
      label: 'KD Scores',
      backgroundColor: [
        '#8C15E0',
        '#F3CF1A',
        '#178FDB',
        '#FC9225',
        '#6AE2FD'
      ],
      borderWidth: 0,
      data: [
        Number(window.reactApp[0].lifeTimeStats[8].value),
        Number(window.reactApp[1].lifeTimeStats[8].value),
        Number(window.reactApp[2].lifeTimeStats[8].value),
        Number(window.reactApp[3].lifeTimeStats[8].value),
        Number(window.reactApp[4].lifeTimeStats[8].value)
      ]
    }
  ]
  };

const options = {
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
  }
};

export { data, options };
