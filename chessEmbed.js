async function addChessEmbed(username, parent){
    let embed = document.querySelector('#chessProfileTemplate').content.cloneNode(true);
    let user = await fetch(`https://api.chess.com/pub/player/${username}`);
    let stats = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    user = await user.json();
    stats = await stats.json();
    console.log(embed);
    embed.querySelector('.chessName').textContent = user['username'];
    embed.querySelector('.pfp').src = user.avatar;
    let ratings = embed.querySelectorAll('.vItem > p');
    ratings[0].textContent = stats.chess_rapid.last.rating;
    ratings[1].textContent = stats.chess_blitz.last.rating;
    ratings[2].textContent = stats.chess_bullet.last.rating;
    ratings[3].textContent = stats.tactics.highest.rating;
    parent.appendChild(embed);
}