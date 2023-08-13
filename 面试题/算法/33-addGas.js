//P25 加油站 
let gas = [1,2,3,4,5];
let cost = [3,4,5,1,2];

function addGas(gas, cost){
  let allGas = gas.reduce((a, b) => a+b);
  let allCost = cost.reduce((a, b) => a+b);
  if (allGas < allCost) return -1;

  let currentGas = 0;
  let number = 0;
  for(let i =0;i <gas.length;i++){
    currentGas = currentGas - cost[i] + gas[i];
    if( currentGas < 0){
      currentGas = 0;
      number++
    }
  }
  return number;
}

console.log(addGas(gas, cost));