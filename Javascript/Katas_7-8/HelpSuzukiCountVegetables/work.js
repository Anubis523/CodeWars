let groceries =  `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;
let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`
function countVegetables(string) {
  const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
  let countVegetables = {}
  //.filter(item => vegetables.indexOf(item) != -1)
  string.split(/\n|\W{1}/).filter((el_veg => vegetables.includes(el_veg))).sort((a_veg, b_veg) => b_veg.localeCompare(a_veg)).forEach(veg => {
    if (countVegetables[veg]) {
      countVegetables[veg]++
    } else {
      countVegetables[veg] = 1
    }
  })
  return Object.keys(countVegetables).sort((a, b) => countVegetables[b] - countVegetables[a]).map(veg => [countVegetables[veg], veg]).sort((a_kv, b_kv)=> b_kv[1] - a_kv[1])
}
 
console.log(countVegetables(s2))