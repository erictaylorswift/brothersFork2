const data = {
  labels: [
    window.reactApp[0].epicUserHandle,
    window.reactApp[1].epicUserHandle,
    window.reactApp[2].epicUserHandle,
    window.reactApp[3].epicUserHandle,
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
        Number(window.reactApp[0].lifeTimeStats[10].value),
        Number(window.reactApp[1].lifeTimeStats[10].value),
        Number(window.reactApp[2].lifeTimeStats[10].value),
        Number(window.reactApp[3].lifeTimeStats[10].value)
      ]
    }
  ]
  };

const options = {
    responsive: true,
    maintainAspectRatio: true,
};

const legend = {
    display: true,
    position: 'left',
}

export { data, options, legend };
