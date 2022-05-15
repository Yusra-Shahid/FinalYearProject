const newSeries = [];

this.state.series.map((s) => {
  const data = s.data.map(() => {
    return Math.floor(Math.random() * (180 - min + 1)) + min
  })
  newSeries.push({ data, name: s.name })
})

this.setState({
  series: newSeries
})