var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Cookie", "i=xJALzCdT35NSwmRmxIxPc7sNFIFVEiGT0ZqkCI4qxUQ1lmyIGkO4L7AgGSgBKfpOi3pfAKiTOBc
T1ULqpv4ZTe7qlZM=; yandexuid=163175941683647904; ymex=1999007904.yrts.1683647904#1999007904.yrtsi.1683647904; yabs-sid=1457510101683647904");

var raw = "site-info: {\"__ym\":{\"ecommerce\":[{\"currencyCode\":\"RUB\",\"checkout\":{\"products\":[{\"id\":\"0182205\",\"name\":\"Коврик
 CBR S9 Angel многоцветный\",\"price\":\"150\",\"quantity\":2,\"brand\":\"CBR\",\"category\":\"Коврики для мыши\"},{\"id\":\"1102570\",\"name\":\"Мойка
  высокого давления Зубр МАСТЕР АВД-100\",\"price\":\"3499\",\"quantity\":1,\"brand\":\"Зубр\",\"category\":\"Мойки высокого давления\"}],\"actionField\":{\"step\":1}}}]}}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mc.yandex.ru/watch/7967056/1?page-url=https%3A%2F%2Fwww.dns-shop.ru%2Fcart%2F&charset
=utf-8&hittoken=1683646836_653331b65ae55596a60edbcb0b90b69873111d700421c4b421fe256b6f2f8d74&browser-info
=pa%3A1%3Aar%3A1%3Avf%3A10ym9geic8i73flogxj2lsv%3Afu%3A1%3Aen%3Autf-8%3Ala%3Aru-RU%3Av%3A1031%3Acn%3A1%3Adp%3A1%3Als%3A703080195386%3Ahid%3A347262385%3Az%3A1
80%3Ai%3A20230509184037%3Aet%3A1683646837%3Ac%3A1%3Arn%3A126449559%3Arqn%3A44%3Au%3A167969261059693344%3Aw%3A627x979%3As%3A1920x1080x24%3Ask%3A1%3Awv%3A2
%3Aco%3A0%3Acpf%3A1%3Ans%3A1683646834548%3Aadb%3A1%3Arqnl%3A1%3Ast%3A1683646837&t=gdpr(14)mc(p-1)clc(0-0-0)rqnt(2)lt(85000)aw(1)ecs(0)ti(2)", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));