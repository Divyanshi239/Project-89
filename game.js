function Login()
{
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1 Name", player1_name);
    localStorage.setItem("Player 2 Name", player2_name);

    console.log("Player 1 Name: " + player1_name);
    console.log("Player 2 Name: " + player2_name);

    window.location = "quiz_game_page.html";
}
