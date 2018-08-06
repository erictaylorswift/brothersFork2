const data = {
  labels: [
    'Solos',
    'Duos',
    'Squads'
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
        Number(window.reactApp.stats.p2.kd.displayValue),
        Number(window.reactApp.stats.p10.kd.displayValue),
        Number(window.reactApp.stats.p9.kd.displayValue)
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
