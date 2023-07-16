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
  
  function generateWorkout() {
    const shuffledExercises = shuffleArray(exercises);
  
    const workoutList = document.getElementById('workoutList');
    workoutList.innerHTML = '';
  
    for (let i = 0; i < shuffledExercises.length; i++) {
      const day = i + 1;
      const exercise = shuffledExercises[i];
      const ordinalSuffix = getOrdinalSuffix(day);
  
      const listItem = document.createElement('li');
      listItem.textContent = `On the ${day}${ordinalSuffix} day of Christmas, my trainer gave to me: ${exercise}`;
  
      workoutList.appendChild(listItem);
    }
  }
  
  function shuffleArray(array) {
    const shuffled = [...array];
  
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  
    return shuffled;
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
  
  document.addEventListener('DOMContentLoaded', () => {
    const regenerateButton = document.getElementById('regenerateButton');
    regenerateButton.addEventListener('click', generateWorkout);
  
    generateWorkout();
  });
  