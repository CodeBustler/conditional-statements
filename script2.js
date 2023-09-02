// Switch Case
let userInput = prompt('Enter Day');
let day = userInput.toLowerCase().trim();

switch (day) {
  case 'monday':
    console.log('Its Monday');
    break;
  case 'tuesday':
    console.log('Its tuesday');
    break;

  case 'wednesday':
    console.log('Its wednesday');
    break;

  case 'thursday':
    console.log('Its thursday');
    break;

  case 'friday':
    console.log('Its friday');
    break;

  case 'saturday':
    console.log('Its saturday');
    break;

  case 'sunday':
    console.log('Its sunday as funday');
    break;

  default: {
    console.log('Its some other day | entered wrong day');
  }
}
