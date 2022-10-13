const playfield = document.querySelector('.playfield');
let player = "X";
let turns = {a1:"",b1:"",c1:"",a2:"",b2:"",c2:"",a3:"",b3:"",c3:"",winner:""};

function nextplayer(event,square) {
    if (turns[square] == "" && turns.winner == ""){

    event.target.innerHTML = player;
    turns[square] = player
    
    if (turns.a1 != "" && turns.a1 == turns.b1 && turns.b1 == turns.c1 || 
        turns.a2 != "" && turns.a2 == turns.b2 && turns.b2 == turns.c2 || 
        turns.a3 != "" && turns.a3 == turns.b3 && turns.b3 == turns.c3 ||
        turns.a1 != "" && turns.a1 == turns.a2 && turns.a2 == turns.a3 ||
        turns.b1 != "" && turns.b1 == turns.b2 && turns.b2 == turns.b3 ||
        turns.c1 != "" && turns.c1 == turns.c2 && turns.c2 == turns.c3 ||
        turns.a1 != "" && turns.a1 == turns.b2 && turns.b2 == turns.c3 ||
        turns.c1 != "" && turns.c1 == turns.b2 && turns.b2 == turns.a3
        )
        {
            turns.winner = player
            winner(turns.winner)
        }
    else if 
        (turns.a1 != "" && turns.b1 != "" && turns.c1 != "" && turns.a2 != "" && turns.b2 != "" && turns.c2 != "" && turns.a3 != "" && turns.b3 != "" && turns.c3 != "")
        {
            document.getElementById('xturn').classList.add('hidden');
            document.getElementById('oturn').classList.add('hidden');
            document.getElementById('tiegame').classList.remove('hidden');
        }

        if (player === "X" && turns.winner == "") {
            player = "O";
            document.getElementById('oturn').classList.remove('hidden');
            document.getElementById('xturn').classList.add('hidden');        
        }
        else if (player === "O" && turns.winner == "") {
            player = "X";
            document.getElementById('xturn').classList.remove('hidden');
            document.getElementById('oturn').classList.add('hidden');
        }
    }
}

function winner(player){
    document.getElementById('xturn').classList.add('hidden');
    document.getElementById('oturn').classList.add('hidden');
    if (player == "X") {
        document.getElementById('xwin').classList.remove('hidden');
    }
    else {
        document.getElementById('owin').classList.remove('hidden');
    }
}

document.querySelector('button').onclick = ()=>{location.reload()};