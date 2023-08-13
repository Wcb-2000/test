/*
 * Author: 吴楚标
 * Date: 2021-07-21 15:27:10
 * LastEditors: 吴楚标
 * LastEditTime: 2021-07-21 15:35:43
 * Description:
 */
// let tou = Math.round(Math.random() * 10);
// console.log(tou);

function touzi() {
  let tou = Math.ceil(Math.random() * 10);
  console.log(tou);
  switch (tou) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
      console.log("6点");
      break;
    case 5:
      console.log("5点");
      break;
    case 4:
      console.log("4点");
      break;
    case 3:
      console.log("3点");
      break;
    case 2:
      console.log("2点");
      break;
    case 1:
      console.log("1点");
      break;
  }
}

touzi();