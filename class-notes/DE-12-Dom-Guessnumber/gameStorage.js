//? pc ye 1 ile 20 arasinda sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random() * 20)

console.log(rastgeleSayi)

let mesaj = document.querySelector(".msg")

let skor = 10
//?-----------localStorage de topScore adıyla bir degisken varsa onu  getir yoksa 0 olsun
let enYuksekSkor = localStorage.getItem("topScore") || 0
//?----browser da, DOM da top-score değerini localStoroge den okuyarak güncelle, özellikle 2. 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = enYuksekSkor;

//? her check butonuna basilinca yapilacaklar

document.querySelector(".check").addEventListener("click", () => {

    const tahmin = document.querySelector(".guess").value

    //?tahmin girilmeden check e basildiysa:
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir tahmin giriniz"

        //?tahmin dogruysa:   
    } else if (tahmin == rastgeleSayi) {
        mesaj.textContent = "Tebrikler Bildiniz🎉"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi


        //?topScore kontrolü yap
        if (skor > enYuksekSkor) {
            //?eğer yeni skor localStoroge den yüksekse, kayıtlı topScore u benim skor umla güncelle
           localStorage.setItem("topScore",skor);

            enYuksekSkor = skor

            
            document.querySelector(".top-score").textContent = enYuksekSkor;
        }


        //?tahmin yanlissa:    
    } else {
        //?skor 1 den büyük oldugu sürece tahmin hakkim var
        if (skor > 1) {
            skor--
            document.querySelector(".score").textContent = skor

            tahmin < rastgeleSayi ? (mesaj.textContent = "Arttir📈") : (mesaj.textContent = "Azalt📉")
        } else {
            mesaj.textContent = "Oyunu Kaybettiniz😞"
            document.querySelector(".score").textContent = 0
        }
    }
});

//?Again butonuna basilinca ayarlar baslangic degerine kurulsun, arka ekran #2d3436 olsun

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundcolor = "#2d3436";
    rastgeleSayi = Math.ceil(Math.random() * 20);

    skor = 10; 2
    document.querySelector(".score").textContent = skor;

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = ""

    mesaj.textContent = "Oyun yeni oyuncu icin basliyor"
}
