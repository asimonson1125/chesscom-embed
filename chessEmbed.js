async function addChessEmbed(username){
    let embed = document.querySelector('#chessProfile');
    let user = await fetch(`https://api.chess.com/pub/player/${username}`);
    let stats = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    if(user.status == 200){
        user = await user.json();
        stats = await stats.json();
        embed.querySelector('.chessName').textContent = user['username'];
        embed.querySelector('.pfp').src = user.avatar;
        let ratings = embed.querySelectorAll('.vItem > p');
        ratings[0].textContent = stats.chess_rapid.last.rating;
        ratings[1].textContent = stats.chess_blitz.last.rating;
        ratings[2].textContent = stats.chess_bullet.last.rating;
        ratings[3].textContent = stats.tactics.highest.rating;
    }
    else {
        embed.querySelector('.chessName').textContent = "User Not Found";
        let ratings = embed.querySelectorAll('.vItem > p');
        for(let i = 0; i < ratings.length; i++){
            ratings[i].textContent = "N/A"
        }
    }
}