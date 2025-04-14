
// import axios from 'axios'
// const apiKey = '8166c9d240mshe23a0f396e9cd4dp1c9fc3jsncbb8b0610a1e'

// x-rapidapi-key



const navLinks = document.querySelectorAll('a')
navLinks.forEach((link) => {
  link.addEventListener('click', (getdata));
  linktarget = link.getAttribute('href')
  getdata(linktarget)
});
async function getdata(links) {
  let url = links

  switch (links) {
    case "season":
      url = "https://api-football-v1.p.rapidapi.com/v2/seasons";
      break;
    case "league":
      url = "https://api-football-v1.p.rapidapi.com/v2/leagues";
      break
    case "players":
      url = "https://api-football-v1.p.rapidapi.com/v2/players/seasons";
      break
    case "standings":
      url = "https://api-football-v1.p.rapidapi.com/v2/leagueTable/{league_id}";
      break
    case "stats":
      url = "https://api-football-v1.p.rapidapi.com/v2/players/player/{player_id}/{season}";
    default: 
      console.log('No links', links) 
      break
  }
  try {
    const response = await fetch(`https://api-football-v1.p.rapidapi.com`, {
      method: 'GET',
      headers: {"x-rapidapi-key": "1acc793d10msh96c1f4907c7ed8bp1c574cjsn4f0e889986d7"}
    });
    //check if response is successful
    if(!response.ok) {
        throw new Error('HTTP error! Status: ${response.status}')
    }
    const jsonData = await response.json();
    console.log('Data for ${links}')
  }catch (error){
    console.error('NOT FETCHING DATA', error)
  }

}


































 

//   jsonData.forEach(element => {
//     const option = document.createElement('option');
//     option.value = element.id
//     option.textContent = element.name
//     .appendChild(option)
//     console.log(seasons)
    
//   });



// }



// if(seasons) {
//   seasons.addEventListener('click', globalFootball);
//   console.log(seasons)
// } else {
//   console.log('No element found in href')
// }







