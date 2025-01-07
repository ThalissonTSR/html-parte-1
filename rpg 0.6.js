//JESUS OBRIGADO

//VARIAVEIS DOS HEROIS

//SE TIRAR OU ALTERAR NAO FUNCIONA!!!

//status cav
let atkCav = 3;
let defCav = 5;

//status mag
let atkMag = 4;
let defMag = 4;

// status "🎁 ͜ (ᵔ ̮ ᵔ)› JOKER 🎁

let atkJok = parseInt(Math.random() * 10);
let defJok = 4;

//status healer
let atkHel = 2;
let defHel = parseInt(Math.random() * 10);

//pagina 1 


//funcao moeda
function JogarMoeda() {
  let moeda = parseInt(Math.random() * 2);

  if (moeda == 0) {
    document.getElementById("VideoCara").style.display = "block";
    document.getElementById("VideoCara").style.alignItems= "center";
    document.getElementById("VideoCara").style.textAlign= "center";
    document.getElementById("VideoCara").style.width = "200px";
    document.querySelector("#textoMoeda").innerHTML = "CARA";
    document.getElementById("textoMoeda").style.textAlign= "center";
  } if(moeda == 1) {
    document.getElementById("VideoCoroa").style.display = "block";
    document.getElementById("VideoCoroa").style.width = "200px";

    document.querySelector("#textoMoeda").innerHTML = "COROA";
  }
}

///// funcao puxar nome jogador
let name1 = document.querySelector("#nome1");
function Pushname1() {
  
  localStorage.setItem("P1", name1.value);
  name1.value = "";
  document.querySelector("#Player1").innerHTML = "Agora escolha seu heroi "+localStorage.getItem("P1")
}
let name2 = document.querySelector("#nome2");
function Pushname2() {
 
  localStorage.setItem("P2", name2.value);
  name2.value = "";
  document.querySelector("#Player2").innerHTML =  "Depois "+localStorage.getItem("P2")+" Clique em escolha P2"
}

// atribuir valor DO HEROI  a P1 (pagina 1)

function P1Mag() {
  prompt("Voce escolheu mago");
  localStorage.setItem("Heroi", "Mago");
  localStorage.setItem("Atk1",atkMag)
  localStorage.setItem("Def1",defMag)
}
function P1Cav() {
  prompt("Voce escolheu cavaleiro");
  localStorage.setItem("Heroi", "Cavaleiro");
  localStorage.setItem("Atk1",atkCav)
  localStorage.setItem("Def1",defCav)
}
function P1Jok() {
  prompt("Voce escolheu joker");
  localStorage.setItem("Heroi", "Joker");
  localStorage.setItem("Atk1",atkJok)
  localStorage.setItem("Def1",defJok)
}
function P1Hel() {
  prompt("Voce escolheu healer");
  localStorage.setItem("Heroi", "Healer");
  localStorage.setItem("Atk1",atkHel)
  localStorage.setItem("Def1",defHel)
}

// pagina2

// atribuir valor DO HEROI  a P2
function P2Mag() {
  prompt("Voce escolheu mago");
  localStorage.setItem("Heroi2", "Mago");
  localStorage.setItem("Atk2",atkMag)
  localStorage.setItem("Def2",defMag)
  document.querySelector("#VerEscolhas").innerHTML= localStorage.getItem("P1")+" escolheu "+localStorage.getItem("Heroi")+" e "+localStorage.getItem("P2")+" escolheu "+localStorage.getItem("Heroi2")
}
function P2Cav() {
  prompt("Voce escolheu cavaleiro");
  localStorage.setItem("Heroi2", "Cavaleiro");
  localStorage.setItem("Atk2",atkCav)
  localStorage.setItem("Def2",defCav)
  document.querySelector("#VerEscolhas").innerHTML= localStorage.getItem("P1")+" escolheu "+localStorage.getItem("Heroi")+" e "+localStorage.getItem("P2")+" escolheu "+localStorage.getItem("Heroi2")
}
function P2Jok() {
  prompt("Voce escolheu joker");
  localStorage.setItem("Heroi2", "Joker");
  localStorage.setItem("Atk2",atkJok)
  localStorage.setItem("Def2",defJok)
  document.querySelector("#VerEscolhas").innerHTML= localStorage.getItem("P1")+" escolheu "+localStorage.getItem("Heroi")+" e "+localStorage.getItem("P2")+" escolheu "+localStorage.getItem("Heroi2")
}
function P2Hel() {
  prompt("Voce escolheu healer");
  localStorage.setItem("Heroi2", "Healer");
  localStorage.setItem("Atk2",atkHel)
  localStorage.setItem("Def2",defHel)
  document.querySelector("#VerEscolhas").innerHTML= localStorage.getItem("P1")+" escolheu "+localStorage.getItem("Heroi")+" e "+localStorage.getItem("P2")+" escolheu "+localStorage.getItem("Heroi2")
}


// // Cartas do fim de round

// function C1(){

//     AtkP1=AtkP1+4
//     DefP1=DefP1-2
//     mostrarAtbs()
//       document.getElementById("Cartas").style.display= "none"
//       document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P2")+" comece clicando em Ataque P2"
//       document.querySelector("#MsgDano").innerHTML=""
//       document.querySelector("#MsgDef").innerHTML= ""
//       document.querySelector("#status").innerHTML= ""
// }
// function C2(){
//        AtkP1=AtkP1-2
//        DefP1=DefP1+4
//        mostrarAtbs()
//        document.getElementById("Cartas").style.display= "none"
//        document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P2")+" comece clicando em Ataque P2"
//        document.querySelector("#MsgDano").innerHTML=""
//        document.querySelector("#MsgDef").innerHTML= ""
//        document.querySelector("#status").innerHTML= ""
// } 
//       function C3(){
//        AtkP1=AtkP1+parseInt(Math.random() * 20)
//        mostrarAtbs()
//       document.getElementById("Cartas").style.display= "none"
//       document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P2")+" comece clicando em Ataque P2"
//       document.querySelector("#MsgDano").innerHTML=""
//       document.querySelector("#MsgDef").innerHTML= ""
//       document.querySelector("#status").innerHTML= ""
//       }  
//       function C4(){
//       DefP1=DefP1+parseInt(Math.random() * 20)
//       mostrarAtbs()
//         document.getElementById("Cartas").style.display= "none"
//         document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P2")+" comece clicando em Ataque P2"
//         document.querySelector("#MsgDano").innerHTML=""
//         document.querySelector("#MsgDef").innerHTML= ""
//         document.querySelector("#status").innerHTML= ""
//       }
function C1P2(){

    AtkP2=AtkP2+4
    DefP2=DefP2-2
    mostrarAtbs()
      document.getElementById("CartasP2").style.display= "none"
      document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P1")+" comece clicando em Ataque P1"
      document.querySelector("#status").innerHTML=""
}
function C2P2(){
       AtkP2=AtkP2-2
       DefP2=DefP2+4
       mostrarAtbs()
       document.getElementById("CartasP2").style.display= "none"
       document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P1")+" comece clicando em Ataque P1"
       document.querySelector("#status").innerHTML=""
} 
      function C3P2(){
       AtkP2=AtkP2+parseInt(Math.random() * 20)
       mostrarAtbs()
      document.getElementById("CartasP2").style.display= "none"
      document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P1")+" comece clicando em Ataque P1"
      document.querySelector("#status").innerHTML=""
      }  
      function C4P2(){
      DefP2=DefP2+parseInt(Math.random() * 20)
      mostrarAtbs()
        document.getElementById("CartasP2").style.display= "none"
        document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P1")+" comece clicando em Ataque P1"
        document.querySelector("#status").innerHTML=" "
      }

  
// puxar informacoes do heroi e status que o usuario selecionou

let escolhaP1 = localStorage.getItem("Heroi");
let escolhaP2 = localStorage.getItem("Heroi2")

let AtkP1 = parseInt(localStorage.getItem("Atk1"))
let DefP1 = parseInt(localStorage.getItem("Def1"))

let AtkP2 =parseInt(localStorage.getItem("Atk2"))
let DefP2 = parseInt(localStorage.getItem("Def2"))

//aparecer os atb
  document.querySelector("#H1").innerHTML = escolhaP1;

  document.querySelector("#AtbAtk1").innerHTML = "atk= " + AtkP1;

  document.querySelector("#AtbDef1").innerHTML = "def= " + DefP1;

  document.querySelector("#H2").innerHTML = escolhaP2;

  document.querySelector("#AtbAtk2").innerHTML = "atk= " + AtkP2;

  document.querySelector("#AtbDef2").innerHTML = "def= " + DefP2;

      function mostrarAtbs(){
        document.querySelector("#H1").innerHTML = escolhaP1;

        document.querySelector("#AtbAtk1").innerHTML = "atk= " + AtkP1;
      
        document.querySelector("#AtbDef1").innerHTML = "def= " + DefP1;
      
        document.querySelector("#H2").innerHTML = escolhaP2;
      
        document.querySelector("#AtbAtk2").innerHTML = "atk= " + AtkP2;
      
        document.querySelector("#AtbDef2").innerHTML = "def= " + DefP2;
      }



///////////////// funcoes para selecionar os atbP1 e esconder e aparecer os botoes



function MostrarAtbP1() {
  mostrarAtbs()
 
  document.querySelector("#trocar").innerHTML = "AGORA SUA VEZ  P2";

  document.getElementById("esconder").style.display = "none";
  document.getElementById("aparecerP2").style.display = "block";
}
// mostrar atbP2 

function MostrarAtbP2() {
  
  mostrarAtbs()
  document.getElementById("esconder").style.display = "none";
  document.querySelector("#trocar").innerHTML= ""
  document.getElementById("aparecerP2").style.display = "block";
}



// dps do usuario 2 escolher seu mod vai ir para o combate 

function SumirBtn(){
 
  document.querySelector("#AtkP1").innerHTML= "Agora é sua vez de atacar "+localStorage.getItem("P1")+" comece clicando em Ataque P1"
 
        
  document.getElementById("aparecerP2").style.display = "none";
 document.querySelector("#texto").style.display = "none";
}


////////// botao continuar q vai fazer aparecer os botoes de p1 e p2
function script1() {
  document.getElementById("esconder").style.display = "block";
  document.getElementById("CONTINUAR").style.display = "none";
}


////////////////////// sistema onde e calculado os atb com base na escolha do usuario





function scriptAtk() {

  AtkP1=AtkP1+7
  DefP1=DefP1+3
  MostrarAtbP1()
  

}

function scriptDef() {
      
  AtkP1=AtkP1+3
  DefP1=DefP1+7
  MostrarAtbP1()



}

function scriptEqu() {
  
  AtkP1=AtkP1+5
  DefP1=DefP1+5
  MostrarAtbP1()

}

function scriptAtk2() {

  AtkP2=AtkP2+7
  DefP2=DefP2+3
  MostrarAtbP2()
  SumirBtn()

    

  }
  function scriptDef2() {
      
        AtkP2=AtkP2+3
        DefP2=DefP2+7
        MostrarAtbP2()
        SumirBtn()
      }
      function scriptEqu2() {
         
        AtkP2=AtkP2+5
        DefP2=DefP2+5
        MostrarAtbP2()
        SumirBtn()
          }

function AtaqueP1(){


  
 


   document.getElementById("Cartas").style.display= "block"
   document.querySelector("#AtkP1").innerHTML= ""
   document.querySelector("#status").innerHTML= "Muito bem, agora escolha uma carta "+escolhaP1  

         
            document.getElementById("trocar").style.display= "none"
          
        
            DefP2=DefP2-AtkP1

        

            mostrarAtbs()

            MostrarAtbP1()
            
            document.getElementById("aparecerP2").style.display = "none";
            document.getElementById("esconder").style.display = "none";
            document.querySelector("#status").innerHTML= "Muito bem, agora escolha uma carta "+escolhaP1
            
            if(DefP2<=0){

            
            
              document.querySelector("#MsgDano").innerHTML= ""
              document.querySelector("#MsgDef").innerHTML= escolhaP2+" GANHOU!!!"
              document.getElementById("Cartas").style.display= "none"
              document.getElementById("CartasP2").style.display= "none"
              document.querySelector("#status").innerHTML= ""
              prompt("FIM DE JOGO")
              
  }

             }

function AtaqueP2(){
 
  

  document.querySelector("#AtkP1").innerHTML= ""  

             DefP1=DefP1-AtkP2

             

             document.getElementById("CartasP2").style.display= "block"
             mostrarAtbs()
            
            document.querySelector("#status").innerHTML= "Muito bem, agora escolha uma carta "+escolhaP2
          
            
            MostrarAtbP2()
            
            document.getElementById("aparecerP2").style.display = "none";
            document.getElementById("esconder").style.display = "none";
          
            if(DefP1<=0){

             
            
              document.querySelector("#MsgDano").innerHTML= ""
              document.querySelector("#MsgDef").innerHTML= escolhaP1+" GANHOU!!!"   
              document.getElementById("Cartas").style.display= "none"
              document.getElementById("CartasP2").style.display= "none"  
              document.querySelector("#status").innerHTML= ""    
              prompt("FIM DE JOGO")  
            }   

            }