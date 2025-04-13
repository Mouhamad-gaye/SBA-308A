
// import axios from 'axios'
// const apiKey = '8166c9d240mshe23a0f396e9cd4dp1c9fc3jsncbb8b0610a1e'

// x-rapidapi-key

const league = document.querySelectorAll('a[href="league"]')
const players = document.querySelectorAll('a[href="players"]');
const standings = document.querySelectorAll('a[href="standings"]');
const stats = document.querySelectorAll('a[href="stats"]');



const seasons = document.querySelector('a[href="season"]');
if(seasons) {
  seasons.addEventListener('click', globalFootball);
  console.log(seasons)
} else {
  console.log('No element found in href')
}

async function globalFootball() {
  try {
  const response = await fetch("https://api-football-v1.p.rapidapi.com/v2/seasons", {
    method: 'GET',
    headers: {"x-rapidapi-key": "8166c9d240mshe23a0f396e9cd4dp1c9fc3jsncbb8b0610a1e"}
  });
  //check if response is successful
  if(!response.ok) {
      throw new error('HTTP error! Status: ${response.status}')
  }
  const jsonData = await response.json();
  console.log(jsonData);
}catch (error){
  console.error('NOT FETCHING DATA', error)
}

}





