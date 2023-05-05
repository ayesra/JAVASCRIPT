const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner form input");
const msgSpan = document.querySelector("top-banner .msg");
const list = document.querySelector(".cities")

let units = "metric";
let lang = "en";

let url; //api url

let cities = [] //sorgulanan sehirleri tutacak

const apiKey = "bad1133c6d2aaf60383f99aae74b50e5"

const sample = EncyrptStringAES("Hello World")