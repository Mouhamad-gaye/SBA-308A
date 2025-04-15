
// import axios from 'axios'


const navLinks = document.querySelectorAll('a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {;
    event.preventDefault();
  const linktarget = link.getAttribute('href');
  getdata(linktarget);
});
});

async function getdata(linktarget) {
  let url;
  switch (linktarget) {
    case "season":
      url = `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id`;
      break;
    case "league":
      url = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`;
      break
    case "players":
      url = `https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=133604`;
      break
    case "standings":
      url = `https://www.thesportsdb.com/api/v1/json/3/lookup_table.php?l=4328&s=2022-2023`;
      break
    case "stats":
      url = `https://www.thesportsdb.com/api/v1/json/3/eventsstat.php?id=441963`;
    default: 
      console.error('Invalid href', linktarget);
      return;
  }


try {
  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`,{
    method: 'GET' 
  });

  if(!response.ok) {
      throw new Error('HTTP error! Status: ${response.status}')
  }
  const jsonData = await response.json();
  console.log('Data for Linktarget', jsonData);
}catch (error){
  console.error('NOT FETCHING DATA', error)
}

}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const output = document.getElementById("output");


async function fetchData(query) {
  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${query}`
    );
    const data = await response.json();
    return data.player || []; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}


searchButton.addEventListener("click", async () => {
  const query = searchInput.value; 
  if (query) {
    const players = await fetchData(query); 
    output.innerHTML = players
      .map((player) => `<p>${player.strPlayer} (${player.strTeam})</p>`)
      .join(""); 
  }
});

const playerName = document.getElementById('playerName');
const category = document.getElementById('playerPosition');
const button = document.getElementById('addItemButton');

button.addEventListener('click', (event) => {}),

async function axiosItem() {
  try {
    const response = await axiosItem.post(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`, {
      name: playerName,
      category: playerPosition,
    });
    console.log("Item added:", response.data)
    
  } catch (error) {
    console.error("Error adding item:", error);

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







