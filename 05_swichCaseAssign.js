
var month =2 ;
switch (month) {
  case 1:
    console.log(`The First month of year is January`);
    break;
  case 2:
    console.log(`The Second month of year is February`);
    break;
  case 12:
    console.log(`The last month of year is December`);
    break;
  case 15:
    console.log(`Invalid data`);
    break;
  case 100:
    console.log(`Invalid data`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is the weekly off day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}

