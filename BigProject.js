var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var display = document.getElementById("display")

button1.addEventListener("click", generate);

var numClick = 0;
var ST1 = "<img src='http://www.pleated-jeans.com/wp-content/uploads/2015/09/2_sssss-1.jpg'>";
var ST2 = "<img src='http://www.strangebeaver.com/wp-content/uploads/2016/08/shower84/shower-thoughts-84-2.jpg'>";
var ST3 = "<img src='https://thechive.files.wordpress.com/2015/01/deep-shower-thoughts-10.jpg?quality=85&strip=info&w=600'>";
var ST4 = "<img src='http://1.media.collegehumor.cvcdn.com/39/50/73008758a4400f258e93f7715ae67bef.jpg'>";
var ST5 = "<img src='http://canyouactually.com/wp-content/uploads/2014/09/jTx9KaXTE-copy-934x1-934x1.jpg'>";
var ST6 = "<img src='http://0.media.collegehumor.cvcdn.com/99/85/b2620a246440ecdb2f9971b750bc71e2.jpg'>";
var ST7 = "<img src='http://runt-of-the-web.com/wordpress/wp-content/uploads/2015/04/grammar-nazi.jpg'>";
var ST8 = "<img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRuY8KuMZ1JT7Qyxj_iy3cvP0SvyhpuZR0YMgk60RxyNbo-9da_'>";
var ST9 = "<img src='http://www.viralnetics.com/r/2016/04/600/viralnetics-food-shower-thoughts-05.jpg'>";
var ST10 = "<img src='https://thechive.files.wordpress.com/2015/01/deep-shower-thoughts-20.jpg?quality=85&strip=info&w=600'>";

var pictures = [ST1, ST2, ST3, ST4, ST5, ST6, ST7, ST8, ST9, ST10];

function generate() {
    
    var randomNum = Math.floor(Math.random() * 10);
    var randomST = pictures[randomNum];
    display.innerHTML = randomST;
}
    
button2.addEventListener("click", generate2);

var numClick = 0;
var Pun1 = "<img src='http://0.media.dorkly.cvcdn.com/84/20/1018907ed84f72d5b1b57cae3e62ddbe-pixar-shower-thoughts.jpg'>";
var Pun2 = "<img src='http://cdn.gurl.com/wp-content/uploads/2015/01/Screen-Shot-2015-01-28-at-1.03.26-AM.png'>";
var Pun3 = "<img src='http://img.ifcdn.com/images/63f56015adb601da910cfc6e93ec281fd0f29b3779827090349fa26d57d177d9_1.jpg'>";
var Pun4 = "<img src='https://s-media-cache-ak0.pinimg.com/564x/8b/df/43/8bdf43ff4570bd23ba9214894fc4581e.jpg'>";
var Pun5 = "<img src='https://s-media-cache-ak0.pinimg.com/736x/56/f4/4c/56f44cfb77fb7530bcc9d3931799bbd0.jpg'>";
var Pun6 = "<img src='http://www.pleated-jeans.com/wp-content/uploads/2014/05/m225318646-1.jpg'>";
var Pun7 = "<img src='https://s-media-cache-ak0.pinimg.com/736x/fc/8e/9a/fc8e9a48166a6da68830348898bc8881.jpg'>";
var Pun8 = "<img src='http://www.pleated-jeans.com/wp-content/uploads/2014/05/lion-king-pun-moustacha_large-1.jpg'>";
var Pun9 = "<img src='http://images.guff.com/gallery/image/m225318592'>";
var Pun10 = "<img src='http://images.guff.com/gallery/image/wall-e-puns'>";

var images = [Pun1, Pun2, Pun3, Pun4, Pun5, Pun6, Pun7, Pun8, Pun9, Pun10];

function generate2() {
    
    var randomNum = Math.floor(Math.random() * 10);
    var randomPun = images[randomNum];
    display.innerHTML = randomPun;
}

button3.addEventListener("click", generate3);

var numClick = 0;
var SM1 = "<img src='http://i.imgur.com/AGinJtA.gif'>";
var SM2 = "<img src='http://www.kappit.com/img/pics/201512_1506_dfbcg_sm.jpg'>";
var SM3 = "<img src='https://media.giphy.com/media/Ol2yHMEFJdYEo/giphy.gif'>";
var SM4 = "<img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'>";
var SM5 = "<img src='http://www.picsymag.com/wp-content/uploads/2015/07/funny-pokemon-gif-breaking-bad.gif'>";
var SM6 = "<img src='http://9to5animations.com/wp-content/uploads/2017/01/Donald-Trump-funny-gif-image.gif'>";
var SM7 = "<img src='http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/1213/More-Broken-Gifs-Nicolas-Cage.gif'>";
var SM8 = "<img src='http://a.fod4.com/misc/Weightlifting%20Meme%20Dance.gif'>";
var SM9 = "<img src='https://media.tenor.co/images/371bd41aa5a0d8168fac6bd67690f743/tenor.gif'>";
var SM10 = "<img src='https://media.giphy.com/media/B5ELUIyFMMbVC/giphy.gi'>";

var snapshot = [SM1, SM2, SM3, SM4, SM5, SM6, SM7, SM8, SM9, SM10];

function generate3() {
    
    var randomNum = Math.floor(Math.random() * 10);
    var randomSM = snapshot[randomNum];
    display.innerHTML = randomSM;
}