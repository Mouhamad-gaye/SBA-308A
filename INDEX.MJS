
// import axios from 'axios'
// const apiKey = P3chEJgaZw90L2oAgKUjfyBI75NEpEOUmIHJ7he4xLTS5k128ZgBM9rFW14a

const navLinks = document.querySelectorAll('a')
navLinks.forEach((link) => {
  link.addEventListener('click', (getdata));
  linktarget = link.getAttribute('href')
  getdata(linktarget)
});


async function getdata(linktarget) {
  let url;

  switch (linktarget) {
    case "Season":
      url = "https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id";
      break;
    case "#league":
      url = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
      break
    case "#players":
      url = "https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133604";
      break
    case "#standings":
      url = "https://www.thesportsdb.com";
      break
    case "#stats":
      url = "https://www.thesportsdb.com";
    default: 
      console.error('Invalid href', linktarget);
      return;
  }

try {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`,{
    method: 'GET'
    // headers: {"Authorization": "P3chEJgaZw90L2oAgKUjfyBI75NEpEOUmIHJ7he4xLTS5k128ZgBM9rFW14a", }
    
  });
  //check if response is successful
  if(!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}')
  }
  const jsonData = await response.json();
  console.log('Data for Linktarget', jsonData);
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







