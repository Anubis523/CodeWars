//Write your unit test, working code, and test examples here

var garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'

var garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
//garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

function rakeGarden(garden) {
  return garden.split(' ').map(
   function(el) {
     if (el !== 'gravel' && el !== 'rock'){
       return 'gravel'
     }
     else {
       return el
     }
   }).join(' ')
}
//refine

console.log(rakeGarden(garden))