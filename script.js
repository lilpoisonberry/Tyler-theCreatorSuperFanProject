var a1 = document.getElementById("cmiygl");
var a2 = document.getElementById("igor");
var a3 = document.getElementById("flower");
var a4 = document.getElementById("cherry");
var a5 = document.getElementById("wolf");
var a6 = document.getElementById("goblin");
var b1 = document.getElementById("cmiygl-box");
var b2 = document.getElementById("igor-box");
var b3 = document.getElementById("fb-box");
var b4 = document.getElementById("cb-box");
var b5 = document.getElementById("wolf-box");
var b6 = document.getElementById("goblin-box");
var b7 = document.getElementById("vbox");
var b8 = document.getElementById("info-box");
var b9 = document.getElementById("name");
var v = document.getElementById("vid");
var i = document.getElementById("info");
var s1 = document.getElementById("callmesound");
var s2 = document.getElementById("igorsound");
var s3 = document.getElementById("fbsound");
var s4 = document.getElementById("cbsound");
var s5 = document.getElementById("wolfsound");
var s6 = document.getElementById("gsound");

function cmiygl() {
  s1.play();
  s2.pause();
  s3.pause();
  s4.pause();
  s5.pause();
  s6.pause();
  a1.src = "images/album-covers/Tyler-the-Creator.webp";
  a2.src = "images/Decorations-(cmiygl)/altalbumcover.webp";
  a3.src = "images/Decorations-(cmiygl)/cmiyglposter.png";
  a5.src = "images/Decorations-(cmiygl)/numbercmiygl.jpg";
  a6.src = "images/Decorations-(cmiygl)/cmiyglphone.jpg";
  a4.src = "images/Decorations-(cmiygl)/cmiyglgraphic.jpeg";
  a4.setAttribute("onclick", "");
  a3.setAttribute("onclick", "");
  a2.setAttribute("onclick", "");
  a5.setAttribute("onclick", "");
  a6.setAttribute("onclick", "");
  a1.classList.add("translucent");
  a2.classList.remove("translucent");
  a3.classList.remove("translucent");
  a4.classList.remove("translucent");
  a5.classList.remove("translucent");
  a6.classList.remove("translucent");
  b2.classList.add("cmiygl1");
  b3.classList.add("cmiygl2");
  b4.classList.add("cmiygl3");
  b5.classList.add("cmiygl4");
  b6.classList.add("cmiygl5");
  b7.classList.add("cmiygl");
  b8.classList.add("cmiygl");
  b2.classList.remove("option");
  b3.classList.remove("option");
  b4.classList.remove("option");
  b5.classList.remove("option");
  b6.classList.remove("option");
  i.src = "images/Words/cmiygl_info.png";
  b9.src = "images/Words/cmiygl_name.png";
  v.src = "https://www.youtube.com/embed/hWEukIWVw3o";
}
function igor() {
  s2.play();
  s1.pause();
  s3.pause();
  s4.pause();
  s5.pause();
  s6.pause();
  a2.classList.add("translucent");
  a1.classList.remove("translucent");
  a3.classList.remove("translucent");
  a4.classList.remove("translucent");
  a5.classList.remove("translucent");
  a6.classList.remove("translucent");
  a4.setAttribute("onclick", "");
  a3.setAttribute("onclick", "");
  a1.setAttribute("onclick", "");
  a5.setAttribute("onclick", "");
  a6.setAttribute("onclick", "");
  a2.src =
    "images/album-covers/60290320_1159152267600768_6828721593724698624_n.jpg";

  a1.src = "images/Decoration(igor)/igorcostumepic.webp";
  b1.classList.add("igor1");
  a3.src = "images/Decoration(igor)/altalbumcover.webp";
  b3.classList.add("igor2");
  a4.src = "images/Decoration(igor)/aotypic.webp";
  b4.classList.add("igor3");
  a5.src = "images/Decoration(igor)/igorrecipt.webp";
  b5.classList.add("igor4");
  a6.src = "images/Decoration(igor)/download.jfif";
  b6.classList.add("igor5");
  b7.classList.add("igor");
  b8.classList.add("igor");
  b1.classList.remove("option");
  b3.classList.remove("option");
  b4.classList.remove("option");
  b5.classList.remove("option");
  b6.classList.remove("option");
  i.src = "images/Words/igor_info.png";
  b9.src = "images/Words/igor_name.png";
  v.src = "https://www.youtube.com/embed/9JQDPjpfiGw";
}
function fb() {
  s3.play();
  s2.pause();
  s1.pause();
  s4.pause();
  s5.pause();
  s6.pause();
  a3.classList.add("translucent");
  a1.classList.remove("translucent");
  a2.classList.remove("translucent");
  a4.classList.remove("translucent");
  a5.classList.remove("translucent");
  a6.classList.remove("translucent");
  a4.setAttribute("onclick", "");
  a1.setAttribute("onclick", "");
  a2.setAttribute("onclick", "");
  a5.setAttribute("onclick", "");
  a6.setAttribute("onclick", "");
  a3.src = "images/album-covers/flowerboy.jpeg";
  a1.src = "images/Decoration(flower)/download.jfif";
  b1.classList.add("flower1");
  a2.src = "images/Decoration(flower)/flowervis.jpg";
  b2.classList.add("flower4");
  a4.src = "images/Decoration(flower)/flower_disc.jpg";
  b4.classList.add("flower3");
  a5.src = "images/Decoration(flower)/altalbumcover.webp";
  b5.classList.add("flower2");
  a6.src = "images/Decoration(flower)/flowerfield.jpg";
  b6.classList.add("igor5");
  b7.classList.add("flower");
  b8.classList.add("flower");
  b1.classList.remove("option");
  b2.classList.remove("option");
  b4.classList.remove("option");
  b5.classList.remove("option");
  b6.classList.remove("option");
  i.src = "images/Words/flowerboy_info.png";
  b9.src = "images/Words/fbname.png";
  v.src = "https://www.youtube.com/embed/khMb3k-Wwvg";
}
function cb() {
  s4.play();
  s2.pause();
  s3.pause();
  s1.pause();
  s5.pause();
  s6.pause();
  a4.classList.add("translucent");
  a1.classList.remove("translucent");
  a2.classList.remove("translucent");
  a3.classList.remove("translucent");
  a5.classList.remove("translucent");
  a6.classList.remove("translucent");
  a1.setAttribute("onclick", "");
  a3.setAttribute("onclick", "");
  a2.setAttribute("onclick", "");
  a5.setAttribute("onclick", "");
  a6.setAttribute("onclick", "");
  a4.src = "images/album-covers/Cherry_Bomb_Tyler_the_Creator.png";
  a1.src = "images/Decoration(cb)/cherryface.webp";
  b1.classList.add("cherry1");
  a2.src = "images/Decoration(cb)/cherry_bomb.jpg";
  b2.classList.add("cherry2");
  a3.src = "images/Decoration(cb)/altalbumcover.jpg";
  b3.classList.add("cherry3");
  a5.src = "images/Decoration(cb)/churbum.jpg";
  b5.classList.add("cherry4");
  a6.src = "images/Decoration(cb)/fanart.jpg";
  b6.classList.add("cherry5");
  b7.classList.add("cherry");
  b8.classList.add("cherry");
  b1.classList.remove("option");
  b2.classList.remove("option");
  b3.classList.remove("option");
  b5.classList.remove("option");
  b6.classList.remove("option");
  i.src = "images/Words/cb_words.png";
  b9.src = "images/Words/cbname.png";
  v.src = "https://www.youtube.com/embed/XIqVCJWSoeE";
}
function wolf() {
  s5.play();
  s2.pause();
  s3.pause();
  s4.pause();
  s1.pause();
  s6.pause();
  a5.classList.add("translucent");
  a1.classList.remove("translucent");
  a2.classList.remove("translucent");
  a3.classList.remove("translucent");
  a4.classList.remove("translucent");
  a6.classList.remove("translucent");
  a4.setAttribute("onclick", "");
  a3.setAttribute("onclick", "");
  a2.setAttribute("onclick", "");
  a1.setAttribute("onclick", "");
  a6.setAttribute("onclick", "");
  a5.src =
    "images/album-covers/7b347e868153698259ff6386e28aa019--concert-posters-music-posters.jpg";
  a1.src = "images/Decoration(wolf)/ealbumcover.png";
  b1.classList.add("wolf1");
  a2.src = "images/Decoration(wolf)/tylerfacewolf.jpg";
  b2.classList.add("wolf2");
  a3.src = "images/Decoration(wolf)/wolfemail.webp";
  b3.classList.add("wolf3");
  a4.src = "images/Decoration(wolf)/Wolf_Cover2.jpg";
  b4.classList.add("wolf4");
  a6.src = "images/Decoration(wolf)/wolfface.jpg";
  b6.classList.add("wolf5");
  b7.classList.add("wolf");
  b8.classList.add("wolf");
  b1.classList.remove("option");
  b2.classList.remove("option");
  b3.classList.remove("option");
  b4.classList.remove("option");
  b6.classList.remove("option");
  i.src = "images/Words/wolf_info.png";
  b9.src = "images/Words/wolfname.png";
  v.src = "https://www.youtube.com/embed/1yS1ay045B4";
}
function goblin() {
  s6.play();
  s2.pause();
  s3.pause();
  s4.pause();
  s5.pause();
  s1.pause();
  a6.classList.add("translucent");
  a2.classList.remove("translucent");
  a3.classList.remove("translucent");
  a4.classList.remove("translucent");
  a5.classList.remove("translucent");
  a1.classList.remove("translucent");
  a4.setAttribute("onclick", "");
  a3.setAttribute("onclick", "");
  a2.setAttribute("onclick", "");
  a5.setAttribute("onclick", "");
  a1.setAttribute("onclick", "");
  a6.src = "images/album-covers/goblin.jpg";
  a1.src = "images/Decoration(g)/altalbumcover.jpg";
  b1.classList.add("goblin1");
  a2.src = "images/Decoration(g)/wolfhaley.jpg";
  b2.classList.add("goblin1");
  a3.src = "images/Decoration(g)/liltyler.jpg";
  b3.classList.add("goblin1");
  a4.src = "images/Decoration(g)/scaryalbum.webp";
  b4.classList.add("goblin");
  a5.src = "images/Decoration(g)/fanart.jpg";
  b5.classList.add("goblin");
  b7.classList.add("goblin");
  b8.classList.add("goblin");
  b1.classList.remove("option");
  b2.classList.remove("option");
  b3.classList.remove("option");
  b4.classList.remove("option");
  b5.classList.remove("option");
  i.src = "images/Words/g_info.png";
  b9.src = "images/Words/goblinname.png";
  v.src = "https://www.youtube.com/embed/6l75clkAYFQ";
}
function resetall() {
  s1.pause();
  s2.pause();
  s3.pause();
  s4.pause();
  s5.pause();
  s6.pause();
  a1.src = "images/album-covers/Tyler-the-Creator.webp";
  a1.classList.remove("translucent");
  a2.classList.remove("translucent");
  a3.classList.remove("translucent");
  a4.classList.remove("translucent");
  a5.classList.remove("translucent");
  a6.classList.remove("translucent");
  a2.src =
    "images/album-covers/60290320_1159152267600768_6828721593724698624_n.jpg";
  a3.src = "images/album-covers/flowerboy.jpeg";
  a4.src = "images/album-covers/Cherry_Bomb_Tyler_the_Creator.png";
  a5.src =
    "images/album-covers/7b347e868153698259ff6386e28aa019--concert-posters-music-posters.jpg";
  a6.src = "images/album-covers/goblin.jpg";
  b2.classList.add("pink");
  b3.classList.add("flower");
  b4.classList.add("cherry");
  b5.classList.add("wolf");
  b6.classList.add("goblin");
  b7.classList.add("leftside-color");
  b8.classList.add("leftside-color");
  b2.classList.remove("cmiygl1");
  b3.classList.remove("cmiygl2");
  b4.classList.remove("cmiygl3");
  b5.classList.remove("cmiygl4");
  b6.classList.remove("cmiygl5");
  b7.classList.remove("cmiygl");
  b8.classList.remove("cmiygl");
  b1.classList.remove("igor1");
  b3.classList.remove("igor2");
  b4.classList.remove("igor3");
  b5.classList.remove("igor4");
  b6.classList.remove("igor5");
  b7.classList.remove("igor");
  b8.classList.remove("igor");
  b1.classList.remove("flower1");
  b2.classList.remove("flower4");
  b4.classList.remove("flower3");
  b5.classList.remove("flower2");
  b6.classList.remove("flower5");
  b7.classList.remove("flower");
  b8.classList.remove("flower");
  b1.classList.remove("cherry1");
  b2.classList.remove("cherry2");
  b3.classList.remove("cherry3");
  b5.classList.remove("cherry4");
  b6.classList.remove("cherry5");
  b7.classList.remove("cherry");
  b8.classList.remove("cherry");
  b1.classList.remove("wolf1");
  b2.classList.remove("wolf2");
  b3.classList.remove("wolf3");
  b4.classList.remove("wolf4");
  b6.classList.remove("wolf5");
  b7.classList.remove("wolf");
  b8.classList.remove("wolf");
  b1.classList.remove("goblin1");
  b2.classList.remove("goblin1");
  b3.classList.remove("goblin1");
  b4.classList.remove("goblin");
  b5.classList.remove("goblin");
  b7.classList.remove("goblin");
  b8.classList.remove("goblin");
  b9.src = "images/Words/tylername.png";
  i.src = "images/Words/background info.png";
  v.src = "https://www.youtube.com/embed/xxhUCXWmA2k";
  b1.classList.add("option");
  b2.classList.add("option");
  b3.classList.add("option");
  b4.classList.add("option");
  b5.classList.add("option");
  b6.classList.add("option");
  a1.setAttribute("onclick", "cmiygl()");
  a4.setAttribute("onclick", "cb()");
  a3.setAttribute("onclick", "fb()");
  a2.setAttribute("onclick", "igor()");
  a5.setAttribute("onclick", "wolf()");
  a6.setAttribute("onclick", "goblin()");
}
