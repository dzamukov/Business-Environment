var myHeaders = new Headers();
myHeaders.append("Cookie", "VID=0AU64i1UU4YH00000r1gP4YH:::0-0-0-974b5fa:CAASEPmY5CDIJREu0nCwJano4e8aYOgU43zaEYWlcFHfAOaFlFMg_1Q0vOgHWrc_3L_SdF9rXshyYM_U_SgkdYxd5Pxl0hMMW-2-cM7E_Fs5trtIbJ7EWX11YSNE5ZOVjm6tknQPhdabO6-Gy9Qu5gXt8vIS6Q");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://top-fwz1.mail.ru/datalayer?js=13;id=3212074;u=https%3A//
www.dns-shop.ru/cart/;r=https%3A//www.dns-shop.ru/product/9140f1a0caac3120/kovrik-cbr-s9-angel-mnogocvetnyj/;st=1683639719916;
title=DNS%20%E2
%80%93%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%20%D0%BC%D0%B0%D0%B3%
D0%B0%D0%B7%D0%B8%D0%BD%20%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%B8
%20%D0%B1%D1%8B%D1%82%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%
B8%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D1%8B%D0%BC%20%D1%86%D0%B5%
D0%BD%D0%B0%D0%BC.;s=1920*1080;vp=1073*979;touch=0;hds=1;frame=0;flash=;sid=cc183b2f97d5b83e;ve
r=60.3.0;tz=-180%2FEurope%2FMoscow;ni=9.6//4g/50/0/;detect=1;lvid=1679692609658%3A1683639728161%3A12
3%3Ac7616a585e2b5883d3c50a521603e9d8;opts=dl%2Cecom-1-203-dataLayer%2Cjst-gtag-ga-ym-vk;visible=true;_=0.
47435702985009454;ids=3212074;e=%7B%22currencyCode%22%3A%22RUB%22%2C%22add%22%3A%7B%22products%22%3A%5B%7B%22id
%22%3A%220182205%22%2C%22name%22%3A%22%u041A%u043E%u0432%u0440%u0438%u043A%20CBR%20S9%20Angel%20%u043C%u043D%u043
E%u0433%u043E%u0446%u0432%u0435%u0442%u043D%u044B%u0439%22%2C%22price%22%3A%22150%22%2C%22quantity%22%3A1%2C%22brand%
22%3A%22CBR%22%2C%22category%22%3A%22%u041A%u043E%u0432%u0440%u0438%u043A%u0438%20%u0434%u043B%u044F%20%u043C%u044B%u0
448%u0438%22%7D%5D%7D%2C%22_m%22%3A%5B%22push%22%5D%2C%22_t%22%3A%5B%22ym%22%2C%22gee%22%5D%2C%22_jst%22%3A%5B%22gtag
%22%2C%22ga%22%2C%22ym%22%2C%22vk%22%5D%7D", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));