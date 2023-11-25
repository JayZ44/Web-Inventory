const apiData = fetch("https://www.freetogame.com/api/games")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
  });

apiData.then((gameData) => {
  const min = 0;
  const max = gameData.length - 1;
  const gamesArr = document.querySelector(".games");
  for (let i = 0; i < 5; i++) {
    const gameIndex = Math.round(Math.random() * (max - min + 1) + min);

    gamesArr.innerHTML += `<li>
        <a href="${gameData[gameIndex].game_url}" target="_blank">
        <p class="cardTitle">Title : ${gameData[gameIndex].title}</p>
        <img src="${gameData[gameIndex].thumbnail}" alt="${gameData[gameIndex].title}"/>
      <p>Genre : ${gameData[gameIndex].genre}</p>
      <p>Platform : ${gameData[gameIndex].platform}</p>
      <p>Publisher : ${gameData[gameIndex].publisher}</p>
      <p>Developer : ${gameData[gameIndex].developer}</p>
      <p>Release Date : ${gameData[gameIndex].release_date}</p>
      <p>Description : ${gameData[gameIndex].short_description}</p>
      </a>;
  </li>`;
  }
});
