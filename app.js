const express = require('express');
const app = express();

const exercises = [
    'Burpee with double kick out',
    'Ab roll',
    'Pull ups',
    'Plate to overhead',
    'v-up abs',
    'split leg lunge jumps',
    'hand release pushups',
    'burpees',
    'leg lifts (abs)',
    'military press',
    '30 second wall sit',
    'tricep dips'
];

app.get('/', (req, res) => {
  // Generate the workout here
  const workout = generateWorkout();
  
  // Send the workout as the response
  res.send(workout);
});

function generateWorkout() {
  let workout = '';

  for (let i = 0; i < exercises.length; i++) {
    const day = i + 1;
    const exercise = exercises[i];
    const ordinalSuffix = getOrdinalSuffix(day);

    workout += `On the ${day}${ordinalSuffix} day of Christmas, my trainer gave to me: ${exercise}\n`;
  }

  return workout;
}

function getOrdinalSuffix(number) {
  if (number % 10 === 1 && number !== 11) {
    return 'st';
  } else if (number % 10 === 2 && number !== 12) {
    return 'nd';
  } else if (number % 10 === 3 && number !== 13) {
    return 'rd';
  } else {
    return 'th';
  }
}

const port = 3000; // Choose the desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
