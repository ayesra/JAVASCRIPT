// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:*********************************************//
//?FONKSIYONUN TANIMLANMASI

function yazdir(){
    console.log("e daha daha nasilsiniz");
}
yazdir() //!call veya invoke olarak gecer: fonksiyonu cagirmak...illaki alta yazilmasi gerekmiyor, fonksiyonun üstüne de yazilabilir

//* Örnek2*********************************************//
 function adYazdir(ad, ikinciAd, soyad){
    console.log(soyad, ikinciAd, ad);
 }

 adYazdir("kubilay", "özlem", "NIHAL")

 //* Örnek3********************************************//

 function yasHesapla(ad, tarih){

        console.log(`benim adim ${ad} ve ben ${2023-tarih} yasindayim`);
    return 2023-tarih
 }

 const ipek=yasHesapla("ipek", 1979)
 const yunus=yasHesapla("yunus", 1990)
 const fatih=yasHesapla("fatih",2000)

 console.log((ipek+yunus+fatih)/3);


//* Örnek4*******************************************//
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

//! tek cift sorgulamasi

console.log(tekCiftSayi(5));
console.log(tekCiftSayi(50));

function tekCiftSayi(sayi){
    return sayi%2==0 ? "cifttir" : "tektir"
}
