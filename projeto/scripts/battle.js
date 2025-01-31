//JESUS SOCORRO

//VARIAVEIS DOS HEROIS

//SE TIRAR OU ALTERAR NAO FUNCIONA!!!

//status cav
let atkCav = 4;
let defCav = 7;

//status mag
let atkMag = 4;
let defMag = 7;

// status "🎁 ͜ (ᵔ ̮ ᵔ)› JOKER 🎁

let atkJok = parseInt(Math.random() * 10);
let defJok = 4;

//status healer
let atkHel = 3;
let defHel = parseInt(Math.random() * 10);

//pagina 1 


//funcao moeda
function JogarMoeda() {
  let moeda = parseInt(Math.random() * 2);

  if (moeda == 0) {
    document.getElementById("VideoCara").style.display = "block";
    document.getElementById("VideoCara").style.width = "200px";
    document.querySelector("#textoMoeda").innerHTML = "CARA";
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



let escolhaP1 = localStorage.getItem("Heroi");
let escolhaP2 = localStorage.getItem("Heroi2")

let AtkP1 = parseInt(localStorage.getItem("Atk1"))
let DefP1 = parseInt(localStorage.getItem("Def1"))

let AtkP2 =parseInt(localStorage.getItem("Atk2"))
let DefP2 = parseInt(localStorage.getItem("Def2"))


//imagem do player  

if(escolhaP1=="Mago"){
  document.getElementById("imgMago").style.display="block"
}

if(escolhaP1=="Cavaleiro"){
  document.getElementById("imgCav").style.display="block"
} 


if(escolhaP1=="Joker"){  
  document.getElementById("imgJok").style.display="block"
}

if(escolhaP1=="Healer"){
  document.getElementById("imgHea").style.display="block"
}

if(escolhaP2=="Mago"){
  document.getElementById("imgMago2").style.display="block"
}

if(escolhaP2=="Cavaleiro"){
  document.getElementById("imgCav2").style.display="block"
} 


if(escolhaP2=="Joker"){  
  document.getElementById("imgJok2").style.display="block"
}

if(escolhaP2=="Healer"){
  document.getElementById("imgHea2").style.display="block"
}







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



///////////////// funcoes para selecionar as cartas de  atbP1 e esconder e aparecer os botoes

////////// botao continuar q vai fazer aparecer os botoes de p1 e p2
function script1() {
   
    document.getElementById("CONTINUAR").style.display = "none";
    document.getElementById("CardsStart").style.display= "flex";
    document.getElementById("texto").style.display= "none";

  }

  //// dps de clicar na cartar fazer sumir
 

    
    function scriptAtk() {

        AtkP1=AtkP1+7
        DefP1=DefP1+3
        mostrarAtbs()
        document.getElementById("CardsStart").style.display= "none";
        document.getElementById("CardsStart2").style.display= "flex";
        document.querySelector("#trocarTexto").innerHTML= "CLIQUE EM SUA ESCOLHA P2"
      }
      
      function scriptDef() {
            
        AtkP1=AtkP1+3
        DefP1=DefP1+7
        mostrarAtbs()
        document.getElementById("CardsStart").style.display= "none";
        document.getElementById("CardsStart2").style.display= "flex";
        document.querySelector("#trocarTexto").innerHTML= "CLIQUE EM SUA ESCOLHA P2"
      }
      
      function scriptEqu() {
        
        AtkP1=AtkP1+5
        DefP1=DefP1+5
        mostrarAtbs()
        document.getElementById("CardsStart").style.display= "none";
        document.getElementById("CardsStart2").style.display= "flex";
        document.querySelector("#trocarTexto").innerHTML= "CLIQUE EM SUA ESCOLHA P2"
      }
      
      function scriptAtk2() {
      
        AtkP2=AtkP2+7
        DefP2=DefP2+3
        mostrarAtbs()
        document.getElementById("CardsStart2").style.display= "none";
        document.querySelector("#trocarTexto").innerHTML= ""
        document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P1")+" aperte em AtaqueP1 quando quiser atacar"
        }
        
    function scriptDef2() {
            
              AtkP2=AtkP2+3
              DefP2=DefP2+7
              mostrarAtbs()
              document.getElementById("CardsStart2").style.display= "none";
              document.querySelector("#trocarTexto").innerHTML= ""
              document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P1")+" aperte em AtaqueP1 quando quiser atacar"
            }
    function scriptEqu2() {
               
              AtkP2=AtkP2+5
              DefP2=DefP2+5
              mostrarAtbs()
              document.getElementById("CardsStart2").style.display= "none";
              document.querySelector("#trocarTexto").innerHTML= ""       
              document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P1")+" aperte em AtaqueP1 quando quiser atacar"   
                }


// Cartas do fim de round
 function C1(){

     AtkP1=AtkP1+4
     DefP1=DefP1-2
     mostrarAtbs()
     document.getElementById("CardsEnd").style.display= "none"
     document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P2")+" aperte em AtaqueP2 quando quiser atacar"
           
 }
 function C2(){

     AtkP1=AtkP1-2
     DefP1=DefP1+4
     mostrarAtbs()
     document.getElementById("CardsEnd").style.display= "none"
     document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P2")+" aperte em AtaqueP2 quando quiser atacar"
           
 }
 function C3(){

     AtkP1=AtkP1+parseInt(Math.random()*20)
    
     mostrarAtbs()
     document.getElementById("CardsEnd").style.display= "none"
     document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P2")+" aperte em AtaqueP2 quando quiser atacar"
           
 }
 function C4(){


     DefP1=DefP1+parseInt(Math.random() * 20)
     mostrarAtbs()
     document.getElementById("CardsEnd").style.display= "none"
     document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P2")+" aperte em AtaqueP2 quando quiser atacar"
          
 }

//UPGRADES

function upgrade(){
  if(escolhaP1=="Cavaleiro"){
    AtkP1=AtkP1+2
    document.querySelector("#Upgrade").innerHTML= "Berserker ativado +2 ATK para o Cavaleiro "
    mostrarAtbs()
 }
 if(escolhaP1=="Healer"){
  DefP1=DefP1+2
    document.querySelector("#Upgrade").innerHTML= "Cura ativada +2 DEF para o Healer "
    mostrarAtbs()
 }

 if(escolhaP2=="Cavaleiro"){
  AtkP2=AtkP2+2
  document.querySelector("#Upgrade").innerHTML= "Berserker ativado +2 ATK para o Cavaleiro "
  mostrarAtbs()
}
if(escolhaP2=="Healer"){  
DefP2=DefP2+2
  document.querySelector("#Upgrade").innerHTML= "Cura ativada +2 DEF para o Healer "
  mostrarAtbs()
}
}

//looping de mostrar P1 atacar de novo

function MsgP1(){
  document.getElementById("CardsEnd2").style.display= "none"
 document.querySelector("#TextCombat").innerHTML= "Muito bem agora "+localStorage.getItem("P1")+" aperte em AtaqueP1 quando quiser atacar" 
}

/// fim de jogo

function SumirAtbsDerrota(){
  document.querySelector("#TEXT").innerHTML= "FIM DE JOGO"
  document.getElementById("Atk1").style.display= "none"
  document.getElementById("Atk2").style.display= "none" 
  }



function AtaqueP1(){

    DefP2=DefP2-AtkP1
    mostrarAtbs()
    document.querySelector("#Upgrade").innerHTML=""
    if(DefP2<=0 && escolhaP1=="Mago"){ 
        document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P1")+" SEU "+escolhaP1+" FOI O VENCEDOR"
        document.getElementById("Mago").style.display= "block" 
        document.getElementById("CardsEnd").style.display= "none"
        SumirAtbsDerrota()
        exit(0)
          
        }
    if(DefP2<=0 && escolhaP1=="Cavaleiro"){ 
        document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P1")+" SEU "+escolhaP1+" FOI O VENCEDOR"
        document.getElementById("Cavaleiro").style.display= "block"       
         document.getElementById("CardsEnd").style.display= "none"
         SumirAtbsDerrota()
         exit(0)
        }
    if(DefP2<=0 && escolhaP1=="Joker"){ 
        document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P1")+" SEU "+escolhaP1+" FOI O VENCEDOR"
        document.getElementById("Joker").style.display= "block"       
        document.getElementById("CardsEnd").style.display= "none"
        SumirAtbsDerrota()
        exit(0)
        }
    if(DefP2<=0 && escolhaP1=="Healer"){ 
        document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P1")+" SEU "+escolhaP1+" FOI O VENCEDOR"
        document.getElementById("Healer").style.display= "block"     
        document.getElementById("CardsEnd").style.display= "none"
        SumirAtbsDerrota()
        exit(0)
        }
    document.querySelector("#TextCombat").innerHTML= "Agora escolha uma carta "+localStorage.getItem("P1")
    document.getElementById("CardsEnd").style.display= "flex"
             }     
              
function AtaqueP2(){
 
                DefP1=DefP1-AtkP2
                mostrarAtbs()
                document.querySelector("#Upgrade").innerHTML=""

              if(DefP1<=0 && escolhaP2=="Mago"){                              
                document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P2")+" SEU "+escolhaP2+" FOI O VENCEDOR"   
                document.getElementById("Mago").style.display= "block"
                SumirAtbsDerrota()
                exit(0)  

                
              }   
              if(DefP1<=0 && escolhaP2=="Cavaleiro"){                              
                document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P2")+" SEU "+escolhaP2+" FOI O VENCEDOR"        
                document.getElementById("Cavaleiro").style.display= "block"
                SumirAtbsDerrota()
                exit(0)  
              }   

              if(DefP1<=0 && escolhaP2=="Joker"){                              
                document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P2")+" SEU "+escolhaP2+" FOI O VENCEDOR"        
                 document.getElementById("Joker").style.display= "block"
                 SumirAtbsDerrota()
                exit(0)  
              }   

              if(DefP1<=0 && escolhaP2=="Healer"){                              
                document.querySelector("#TextCombat").innerHTML= "PARABENS "+localStorage.getItem("P2")+" SEU "+escolhaP2+" FOI O VENCEDOR"       
                document.getElementById("healer").style.display= "block"
                SumirAtbsDerrota()
                exit(0)  
              }   

              document.querySelector("#TextCombat").innerHTML= "Agora escolha uma carta "+localStorage.getItem("P2")
              document.getElementById("CardsEnd2").style.display= "flex"
              }
 // Cartas do fim de round P2
 function C1P2(){

    AtkP2=AtkP2+4
    DefP2=DefP2-2
    mostrarAtbs()
    MsgP1() 
    upgrade()
}
function C2P2(){
       AtkP2=AtkP2-2
       DefP2=DefP2+4
       mostrarAtbs()
       MsgP1()
       upgrade()
} 
      function C3P2(){
       AtkP2=AtkP2+parseInt(Math.random() * 20)
       mostrarAtbs()
       MsgP1() 
       upgrade()
      }  
      function C4P2(){
      DefP2=DefP2+parseInt(Math.random() * 20)
      mostrarAtbs()
      MsgP1()
      upgrade()
      }

      