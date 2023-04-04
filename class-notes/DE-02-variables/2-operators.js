//* ========================================
//*         ARITMETIK OPERATÖRLER
//* ========================================

const sucuk=250;
const cola=20;
const peynir=200;

let toplam=sucuk+cola+peynir;
console.log(toplam);

//! +bir arttir***
toplam++;
// toplam=toplm+1
console.log(toplam);


//! +10 arttir***
toplam+=10
// toplam=toplam+10
console.log(toplam);


//? + operatörü String Concatination işlemi de yapar.

const ad="esra"
const soyad="fatih"
console.log("adim ve soyadim:" +ad+" "+soyad);
console.log(`adim ve soyadim ${ad} ${soyad}`);


//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2

const s3="iki"
console.log(s1-s3);
//* iki yazisini sayi olarak algilayamayacagi icin islem yapamaz


const dogumTarihi=1994;
const name1="Esra";
console.log(name1+ " " +(2023-dogumTarihi)+ " "+"yasindadir");

//! template literals (backticks)

console.log(`${name1} ${2023-dogumTarihi} yasindadir`);

//* +++ARTTIRMA---AZALTMA

let a=5;

console.log("ilk", a++); // ilk 5
console.log("ikinci", a) // ikinci 6
//!  sag tarafina iki tane arti koydugumuzda sonuc hemen degil(sola koydugumuzda o satirda direk islem oluyordu) bir sonraki islemde verilir
 
 let b=a++;
 console.log(a); //7
 console.log(b); //6

 console.log("**********************************")

 let c=10;
 console.log(++c);


//! cikarma isleminde de aynisi gecerli
 let e=33;
 console.log(--e); //32
 console.log(e--); //32
console.log(e);   //31


//! e yi 5 arttir
e+=5
console.log(e); //36

e*=10
console.log(e); //e*10=360


//? CARPMA VE ÜS ALMA

const pi=3.14;
const r=3;

const alan=pi*r**2
console.log(alan);

const cevre=pi*r*2
console.log(cevre); //18.84
console.log(Math.floor(cevre)); //18
console.log(Math.ceil(cevre)); //19
console.log(Math.trunc(cevre)); //18
console.log(Math.round(cevre)); //19
console.log(Math.random(cevre)); //rastgele sayi 


// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//! trunc ile floor un farki negatif degerlerde ortaya cikar
const ab=-1.3
console.log(Math.trunc(ab)); //-1
console.log(Math.floor(ab)); //-2


//**************MOD ALMA**********//
const number=456;

const birler=456%10
console.log(birler); //6 ::10a bölümünden kalan

//! direk 10 a bölümünün sonucunu almak istiyorsak>>>once sayiyi yuvarlariz

const onlar=Math.trunc(number/10)%10
console.log(onlar);

const yüzler=Math.floor(number/100)
console.log(yüzler);


