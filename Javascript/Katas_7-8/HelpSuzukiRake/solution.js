//write only the solution function here
function rakeGarden(garden) {
  return garden
    .split(' ')
    .map(item => item === 'rock'? 'rock': 'gravel')
   .join(' ')
}