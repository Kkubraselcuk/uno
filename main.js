// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

var kolay = ["1 kart çek","2 kart çek","3 kart çek"];

var orta = ["4 kart çek","5 kart çek","6 kart çek",
    "elindeki mavi kartları yere bırak",
    "elindeki yeşil kartları yere bırak",
    "elindeki kırmızı kartları yere bırak",
    "elindeki sarı kartları yere bırak"];

var zor = ["7 kart çek", 
    "8 kart çek", 
    "9 kart çek",
    "elindeki tüm özel kartları yere bırak"];

var rastgele = ["1 kart çek","2 kart çek","3 kart çek",
    "4 kart çek","5 kart çek","6 kart çek",
    "elindeki mavi kartları yere bırak",
    "elindeki yeşil kartları yere bırak",
    "elindeki kırmızı kartları yere bırak",
    "elindeki sarı kartları yere bırak",
    "7 kart çek", 
    "8 kart çek", 
    "9 kart çek",
    "elindeki tüm özel kartları yere bırak"];

const kolayBtn = () =>{
    var randomKolayKart = kolay[Math.floor(Math.random() * kolay.length)];
    alert(randomKolayKart);
}
const ortaBtn = () =>{
    var randomOrtaKart = orta[Math.floor(Math.random() * orta.length)];
    alert(randomOrtaKart);
}
const zorBtn = () =>{
    var randomZorKart = zor[Math.floor(Math.random() * zor.length)];
    alert(randomZorKart);
}

const rastgeleBtn = () =>{
    var randomRastgeleKart = rastgele[Math.floor(Math.random() * rastgele.length)];
    alert(randomRastgeleKart);
}
