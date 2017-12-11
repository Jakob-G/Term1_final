/// variables ///
var IsOpen = 0 // 0 = closed    1 = open
var bg = "1";
var qNum = 1;
var values = [];
///           ///
/// functions ///
///           ///
function openClose(){
	if (IsOpen == 0){
		IsOpen = 1
		document.getElementById("control").style.left = "0vw"
		document.getElementById("openClose").style.right = "0vw"
	}
	else if (IsOpen == 1){
		IsOpen = 0
		document.getElementById("control").style.left = "-150px"
		document.getElementById("openClose").style.right = "-150px"
	}
	
}

function resetIndex(){
	for (var i = 1; i<=5; i++){
		document.getElementById("text"+i).style.display = "none"
	}
}
function changeVideo(){
	resetText()
	document.getElementById("text"+bg+"2").style.display = "block"
     if(bg == 1){
	   document.getElementById("text"+bg+"2").innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/Pp2aMs38ERY" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    }
     if(bg == 2){
	   document.getElementById("text"+bg+"2").innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/AuoH0vz3Mqk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    }
     if(bg == 3){
	   document.getElementById("text"+bg+"2").innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/WYSupJ5r2zo" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    }
     if(bg == 4){
	   document.getElementById("text"+bg+"2").innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/iY1KTlKNE3M" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    }
    if(bg == 5){
	   document.getElementById("text"+bg+"2").innerHTML = '<iframe width="854" height="480" src="https://www.youtube.com/embed/fiShX2pTz9A" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>'
    }
}
function changeText(){
	resetText()
	document.getElementById("text"+bg+"1").style.display = "block"
}
function changeFact(){
	resetText()
	document.getElementById("text"+bg+"3").style.display = "block"
}
function resetText(){
	for (i = 1; i<4; i++){
		document.getElementById("text"+bg+i).style.display = "none"
		
	}
    document.getElementById("text"+bg+2).innerHTML = ""
}

function changeTxt(num){
	bg = num
    resetIndex()
	document.getElementById("text"+bg).style.display="block"
    changeText()
}
function changeBG(num){
    bg = num
	document.getElementById("body").style.backgroundImage = "url(imgs/bg"+bg+".jpg)"
}
function nextQ(){
    document.getElementById("q"+qNum).style.display = "none"
    qNum += 1 
    document.getElementById("q"+qNum).style.display = "block"
    if (qNum == 4){
        document.getElementById("answers").style.display = "none"
    }
}
function finalQ(){
    document.g
}
function storeVal(num){
    values.push(num)
    checkVal(qNum - 1)
}
function checkVal(num){
    if (qNum == 1 && values[num] == 1){
            showResults("Pong")
    }
    else if (qNum == 2 && values[num] == 0){
            showResults("astaroids")
    }
    else if (qNum == 3 && values[num] == 1){
            showResults("Mario")
    }
    else {
        nextQ()
    }
}
function showResults(str){
    document.getElementById("questions").style.display = "none"
    document.getElementById("answers").style.display = "none"
    document.getElementById("control").style.display = "block"
    document.getElementById("sugestion").innerHTML = "the game i would recomend to you is " +str;
}
///        ///
/// events ///
///        ///
document.getElementById("openClose").addEventListener("click",function(){
	openClose()
});
document.getElementById("mario_but").addEventListener("click",function(){
    document.getElementById("text"+bg+2).innerHTML = ""
	changeBG("1")
	changeTxt("1")
    document.getElementById("sugestion").style.display = "none"
});
document.getElementById("pac_but").addEventListener("click",function(){
	document.getElementById("text"+bg+2).innerHTML = ""
    changeBG("2")
	changeTxt("2")
    document.getElementById("sugestion").style.display = "none"
});
document.getElementById("rock_but").addEventListener("click",function(){
	document.getElementById("text"+bg+2).innerHTML = ""
    changeBG( "3")
	changeTxt( "3")
    document.getElementById("sugestion").style.display = "none"
});
document.getElementById("alien_but").addEventListener("click",function(){
	document.getElementById("text"+bg+2).innerHTML = ""
    changeBG("4")
	changeTxt("4")
    document.getElementById("sugestion").style.display = "none"
});
document.getElementById("pong_but").addEventListener("click",function(){
	document.getElementById("text"+bg+2).innerHTML = ""
    changeBG("5")
	changeTxt("5")
    document.getElementById("sugestion").style.display = "none"
});
document.getElementById("v_but").addEventListener("click",function(){
	changeVideo() 
})
document.getElementById("t_but").addEventListener("click",function(){
	changeText() 
})
document.getElementById("f_but").addEventListener("click",function(){
	changeFact() 
})
document.getElementById("v_but2").addEventListener("click",function(){
	changeVideo() 
})
document.getElementById("t_but2").addEventListener("click",function(){
	changeText() 
})
document.getElementById("f_but2").addEventListener("click",function(){
	changeFact() 
})
document.getElementById("v_but3").addEventListener("click",function(){
	changeVideo() 
})
document.getElementById("t_but3").addEventListener("click",function(){
	changeText() 
})
document.getElementById("f_but3").addEventListener("click",function(){
	changeFact() 
})
document.getElementById("v_but4").addEventListener("click",function(){
	changeVideo() 
})
document.getElementById("t_but4").addEventListener("click",function(){
	changeText() 
})
document.getElementById("f_but4").addEventListener("click",function(){
	changeFact() 
})
document.getElementById("v_but5").addEventListener("click",function(){
	changeVideo() 
})
document.getElementById("t_but5").addEventListener("click",function(){
	changeText() 
})
document.getElementById("f_but5").addEventListener("click",function(){
	changeFact() 
})

document.getElementById("a1").addEventListener("click",function(){
	storeVal(document.getElementById("a1").value)
})
document.getElementById("a2").addEventListener("click",function(){
	storeVal(document.getElementById("a2").value)
})
document.getElementById("a4").addEventListener("click",function(){
	if (document.getElementById("a3").value < 10 ){
        showResults("Space Invadors")
    }
    else{
        showResults("pacman")
    }
})
/// Facts 1 ///
document.getElementById("fact11").addEventListener("mouseover",function(){
	document.getElementById("fact11").innerHTML = "1,068,000 points was set by Steve Wiebe On January 10, 2011"
})
document.getElementById("fact11").addEventListener("mouseout",function(){
	document.getElementById("fact11").innerHTML = "World Record Score"
})

document.getElementById("fact12").addEventListener("mouseenter",function(){
	document.getElementById("fact12").innerHTML = "July 9, 1981"
})
document.getElementById("fact12").addEventListener("mouseleave",function(){
	document.getElementById("fact12").innerHTML = "Release Date"
})

document.getElementById("fact13").addEventListener("mouseenter",function(){
	document.getElementById("fact13").innerHTML = "Nintendo"
})
document.getElementById("fact13").addEventListener("mouseleave",function(){
	document.getElementById("fact13").innerHTML = "Creator"
})

document.getElementById("fact14").addEventListener("mouseenter",function(){
	document.getElementById("fact14").innerHTML = "Led to Donkey kong junior and ultimatly led to the start of the Mario bros frachise."
})
document.getElementById("fact14").addEventListener("mouseleave",function(){
	document.getElementById("fact14").innerHTML = "Legacy"
})
/// Facts 2 ///
document.getElementById("fact21").addEventListener("mouseover",function(){
	document.getElementById("fact21").innerHTML = "3,333,360 points in 3 hours 33 minuits and 12.69 seconds was set by Dave Race On January 4, 2012"
})
document.getElementById("fact21").addEventListener("mouseout",function(){
	document.getElementById("fact21").innerHTML = "World Record Score"
})

document.getElementById("fact22").addEventListener("mouseenter",function(){
	document.getElementById("fact22").innerHTML = "May 22, 1980"
})
document.getElementById("fact22").addEventListener("mouseleave",function(){
	document.getElementById("fact22").innerHTML = "Release Date"
})

document.getElementById("fact23").addEventListener("mouseenter",function(){
	document.getElementById("fact23").innerHTML = "Namco"
})
document.getElementById("fact23").addEventListener("mouseleave",function(){
	document.getElementById("fact23").innerHTML = "Creator"
})

document.getElementById("fact24").addEventListener("mouseenter",function(){
	document.getElementById("fact24").innerHTML = "Led to mrs. pacman then multiple remakes and telovishion series"
})
document.getElementById("fact24").addEventListener("mouseleave",function(){
	document.getElementById("fact24").innerHTML = "Legacy"
})
/// Facts 3 ///
document.getElementById("fact31").addEventListener("mouseover",function(){
	document.getElementById("fact31").innerHTML = "41,338,740 points was set by John McAllister On April 05, 2010"
})
document.getElementById("fact31").addEventListener("mouseout",function(){
	document.getElementById("fact31").innerHTML = "World Record Score"
})

document.getElementById("fact32").addEventListener("mouseenter",function(){
	document.getElementById("fact32").innerHTML = "November 1979"
})
document.getElementById("fact32").addEventListener("mouseleave",function(){
	document.getElementById("fact32").innerHTML = "Release Date"
})

document.getElementById("fact33").addEventListener("mouseenter",function(){
	document.getElementById("fact33").innerHTML = "	Atari, Inc."
})
document.getElementById("fact33").addEventListener("mouseleave",function(){
	document.getElementById("fact33").innerHTML = "Creator"
})

document.getElementById("fact34").addEventListener("mouseenter",function(){
	document.getElementById("fact34").innerHTML = "Led to the sequil Astaroids Delux."
})
document.getElementById("fact34").addEventListener("mouseleave",function(){
	document.getElementById("fact34").innerHTML = "Legacy"
})
/// Facts 4 ///
document.getElementById("fact41").addEventListener("mouseover",function(){
	document.getElementById("fact41").innerHTML = "110,510 points was set by Knucklez On October 7, 2011"
})
document.getElementById("fact41").addEventListener("mouseout",function(){
	document.getElementById("fact41").innerHTML = "World Record Score"
})

document.getElementById("fact42").addEventListener("mouseenter",function(){
	document.getElementById("fact42").innerHTML = "June 1978"
})
document.getElementById("fact42").addEventListener("mouseleave",function(){
	document.getElementById("fact42").innerHTML = "Release Date"
})

document.getElementById("fact43").addEventListener("mouseenter",function(){
	document.getElementById("fact43").innerHTML = "Taito"
})
document.getElementById("fact43").addEventListener("mouseleave",function(){
	document.getElementById("fact43").innerHTML = "Creator"
})

document.getElementById("fact44").addEventListener("mouseenter",function(){
	document.getElementById("fact44").innerHTML = "no direct seqils but Nintendo did remake the game for the SNES with improved graphics"
})
document.getElementById("fact44").addEventListener("mouseleave",function(){
	document.getElementById("fact44").innerHTML = "Legacy"
})
/// Facts 5 ///
document.getElementById("fact51").addEventListener("mouseover",function(){
	document.getElementById("fact51").innerHTML = "no record for score but, the record for the most amount of people playing one game of pong is 380"
})
document.getElementById("fact51").addEventListener("mouseout",function(){
	document.getElementById("fact51").innerHTML = "World Record Score"
})

document.getElementById("fact52").addEventListener("mouseenter",function(){
	document.getElementById("fact52").innerHTML = "29 November 1972"
})
document.getElementById("fact52").addEventListener("mouseleave",function(){
	document.getElementById("fact52").innerHTML = "Release Date"
})

document.getElementById("fact53").addEventListener("mouseenter",function(){
	document.getElementById("fact53").innerHTML = "Atari"
})
document.getElementById("fact53").addEventListener("mouseleave",function(){
	document.getElementById("fact53").innerHTML = "Creator"
})

document.getElementById("fact54").addEventListener("mouseenter",function(){
	document.getElementById("fact54").innerHTML = "A Remake with 3d graphics and powerups was made for the PS3"
})
document.getElementById("fact54").addEventListener("mouseleave",function(){
	document.getElementById("fact54").innerHTML = "Legacy"
})



