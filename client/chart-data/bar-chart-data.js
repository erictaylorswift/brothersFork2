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
      label: 'KD Score by Type',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [
      Number(window.reactApp[0].lifeTimeStats[11].value),
      Number(window.reactApp[1].lifeTimeStats[11].value),
      Number(window.reactApp[2].lifeTimeStats[11].value),
      Number(window.reactApp[3].lifeTimeStats[11].value),
      Number(window.reactApp[4].lifeTimeStats[11].value)
      ]
    }
  ]
};

const options ={
    options: {
        maintainAspectRatio: false
    }
};


export {data, options};
