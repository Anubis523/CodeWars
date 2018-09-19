
function countVegetables(string) {
  const vegetables = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
  let countVegetables = {}
  string.split(/\n|\W{1}/).filter((el_veg => vegetables.includes(el_veg))).sort((a_veg, b_veg) => b_veg.localeCompare(a_veg)).forEach(veg => {
    if (countVegetables[veg]) {
      countVegetables[veg]++
    } else {
      countVegetables[veg] = 1
    }
  })
  return Object.keys(countVegetables).sort((a, b) => countVegetables[b] - countVegetables[a]).map(veg => [countVegetables[veg], veg]).sort((a_kv, b_kv)=> b_kv[1] - a_kv[1])
}