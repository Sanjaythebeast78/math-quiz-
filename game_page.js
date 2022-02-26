player1=localStorage.getItem("player1_name")
player2=localStorage.getItem("player2_name")
document.getElementById("player1_name").innerHTML=player1
document.getElementById("player2_name").innerHTML=player2
player1_score=0
player2_score=0
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score

function send(){
    get_word=document.getElementById("word").value
    word =get_word.toLowerCase()
    console.log(word)

    firstletter =word.charAt(1);
    console.log(firstletter)

    middle=Math.floor(word.length/2);
    middleletter = word.charAt(middle);
    console.log(middleletter);

    last = word.length -1
    lastletter = word.charAt(last)
    console.log(lastletter);

remove_1=word.replace(firstletter,"_")
remove_2=remove_1.replace(middleletter,"_")
remove_3=remove_2.replace(lastletter,"_")
console.log(remove_3);

question="<h4>Q."+remove_3+"</h4>"

input="<br><input type='text' class='form-control'id='input' placeholder='answer'>"

button="<br> <button onclick='check()'class='btn btn-success' >check</button>"
document.getElementById("output").innerHTML = question+input+button;
}

questionturn="player1"
answerturn="player2"

function check(){
get_answer=document.getElementById("input").value
answer =get_answer.toLowerCase();
console.log(answer)

if(answer == word) {
if(answerturn == "player1"){
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML=player1_score

}
else{
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML=player2_score
}

}
if(questionturn=="player1"){
questionturn="player2"
document.getElementById("q_turn").innerHTML="question-turn"+player2
}
else{
    questionturn="player1"
    document.getElementById("q_turn").innerHTML="question-turn"+player1
}
if(answerturn=="player1"){
    answerturn="player2"
    document.getElementById("a_turn").innerHTML="answer-turn"+player2
    }
    else{
        answerturn="player1"
        document.getElementById("a_turn").innerHTML="answer-turn"+player1
    }
}
