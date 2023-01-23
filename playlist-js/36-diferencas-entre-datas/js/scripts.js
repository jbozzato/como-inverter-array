var d1 = "23/01/2023 12:15:00"
var d2 = "22/02/2023 14:00:00"

var diff = moment(d2, "DD/MM/YYYY HH:mm:ss").diff(
  moment(d1, "DD/MM/YYYY HH:mm:ss")
)

var dias = moment.duration(diff).asDays()

console.log(dias)
console.log(meses)
