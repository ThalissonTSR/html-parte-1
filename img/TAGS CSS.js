

ORDEM DE PRIORIDADE 

id>class>div(!important== caga pra regra) 

box-sizing;border box== importante usar no comeco para todo o conteudo (*) dentro de cada bloco vai ser responsivo as margens etc (padrao)

background== papel de parede
background-Image==== colocar uma imagem 
background-size== tamanho
background-repeat== repetir a imagem ou nao 
background-image==(linear ou radial)== podendo colocar por graus ex 45deg ou direcao to top letf 

border== borda (dps colocar o tamanho o tipo dps a cor ) 
border-left==colocar so de um lado
border - radius== borda circular

solid= normal dotted= pontilhada dashed com tracos double= dupla groove= 3d


COR RGBA==(a) e a opacidade da cor

margin==margem (top,bottom,left,right)

    padding == preencher margem

text-decoration== oq vai ter no texto especifico
text-shadow==sombra texto(px,px,px,cor)
text shadow box == pra usar em um bloco inteiro

justify-content:como vai ficar o conteudo (center,flex start,flex end,space between,space around       ) faz a msm coisa do float 

hover== trocar propridade quando passar o mouse 

cursor == muda o modo do mouse

color== cor da fonte





text-aling== alinhar texto
aling-itens==alinhar itens (center,flex start,flex end) usado casado com justify-content
aling-contente==msm coisa so q pega todo o conteudo do bloco 

direction== direcao do texto
text-transform== colocar tudo maiusculo ou mininusculo (uppercase,lowercase)
text-indent== criar paragrafo
letter-spacing== espacamento das letras
line-heigth== distancia das linhas
word-spacing== distancia das palavras

font-size== tamanho da fonte
font-family== tipo da fonte
font-style== customizar a fonte (font-weigth tbm) 

gap = espacamento dos blocos
width=largura
maxwidth==largura maxima
heigth== altura

opacity == opacidade

float == empurrar a imagem 
clear == pula o float

overflow==o q fazer com o conteudo fora do bloco
text-overflow== colocar ... no fim do bloco 
white-space==colocar o texto em uma so linha

POSITION 

relative== mexer a imagem em qualquer lado -
absolute== mexer dentro do bloco pai (usar relative no pai)
fixed == fica mostrando na pagina msm rolando
sticky== msm coisa do fixed so q somente dentro do bloco pai



display== como o bloco vai se comportar (block,inline,block-inline)  none para remover (visibility : hidden== para so esconder)

id/class== selecionar um unico bloco para customizar (id se chama pelo # e class por .)(class serve pra varios blocos, id somente 1) 

*{}== trabalhar com todos os elementos 


media queries == responsivo a todos tamanhos de telas (basicamente criar condicoes e dimencionamentos mostrados nas diferentes telas)

FLEX
display:flex=== deixa os itens alinhados e se comportam variado a tela(a partir dele se faz os outros flex)
flex;direction== deixa em colunas, um embaixo do outro  (colunm ou row) deixa um alinhado ao outro(pode usar com ex;row-reverse para deixa ao contrario)
flex-wrap:nowrap== os itens nao respeitam o tamanho do bloco pai(:wrap respeita o bloco pai)
flex-flow==junta as duas propridades acima 
flex-grow==(1,2,3)coloca o tamanho dos itens ate o limite das bordas respondendo junto os todos os objetos do bloco 


efeitos:

transition: biblioteca de efeitos (timing function )(ease,linear,ease-in,ease-out,ease-in-out)


A transition-timing-function: propriedade especifica a curva de velocidade do efeito de transição.

A propriedade de função de tempo de transição pode ter os seguintes valores:
ease - especifica um efeito de transição com início lento, rápido e final lento (esse é o padrão);

linear - especifica um efeito de transição com a mesma velocidade do início ao fim;

ease-in - especifica um efeito de transição com um início lento.

ease-out - especifica um efeito de transição com um final lento
.
ease-in-out - especifica um efeito de transição com início e fim lentos;

cubic-bezier(n,n,n,n) - permite definir seus próprios valores em uma função de cubic-bezier;

Atraso no efeito de transição

A transition-delay propriedade especifica um atraso (em segundos) para o efeito de transição.

transform: mudar o objeto ex: translateX==muda o elemento no eixo X ou para direita ou esquerda Y para cima e para baixo(bom para usar no hover)

cursor== mudar como o cursor aparece

animate== usado junto com keyframes fazer movimentos no bloco (precisando de nome duracao e tipo de entrada ease)


z index()= hierarquia de profundidade (maior numero tem maior prioridade) (eixo x e a profundidade)


::not()== negacao de estilo