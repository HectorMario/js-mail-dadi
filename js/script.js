const gioca = document.getElementById("tus")
const jerry = document.getElementById("res")

mailControl = {
    email: [
        "hector@gmail.com",
        "victor@gmail.com",
        "myriam@gmail.com",
        "perez@gmail.com",
        "herrera@gmail.com"
    ],

    userMail: prompt("Inserisci la tua email:"),

    resultato: function(){
        for (let i = 0; i < this.email.length; i++)

        if(this.userMail == this.email[i]){
            return true
        } 
    }

}



function dadi() {
    let pc= Math.ceil(Math.random()*6);
    let user= Math.ceil(Math.random()*6);
    console.log(user, pc);
    document.getElementById("imgDado1").src="img/"+pc+".svg";
    document.getElementById("imgDado2").src="img/"+user+".svg";
    if (pc > user){
        console.log("Ha vinto la machina");
    } else if (user > pc){
        console.log("Hai vinto!!");
    } else{
        console.log("Hai pareggiatto, riprova");
    }
    
}


if(mailControl.resultato()){
    console.log("divertiti e buona fortuna");
    jerry.classList.toggle("d-none");
    gioca.addEventListener("click", function(){
        dadi();
    })

}else {
    console.log("Non sei ancora registrato nel nostro sito");
}