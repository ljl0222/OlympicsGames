function Start()
{
    document.getElementById("Start").style.display = "none";
    document.getElementById("ShowID").style.display = "inline";
    document.body.style.overflowY = "visible";
    document.body.style.backgroundImage = "url('1.jpg')";
}

function Reset()
{
    document.getElementById("inputData").style.display = "block";
    document.getElementById("returnButton").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("showAllScores").style.display = "none";
}