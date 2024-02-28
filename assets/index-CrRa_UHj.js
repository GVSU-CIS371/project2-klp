(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=[{name:"Gamer's Delight Laptop",description:"A powerful gaming laptop with top-tier graphics and performance for immersive gaming experiences.",price:1200,rating:4,stock:5,image:"https://m.media-amazon.com/images/I/31TcnQiBTpL._AC_UF894,1000_QL80_.jpg",category:"Electronics"},{name:"SmartTech Pro Phone",description:"Experience cutting-edge technology with our latest SmartTech Pro, featuring an ultra-responsive display and superior camera quality.",price:800,rating:5,stock:10,image:"https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg",category:"Electronics"},{name:"Rapid Dual USB-C Charger",description:"Efficiently power up your devices with our compact, high-speed USB-C charging brick designed for the modern tech-savvy user.",price:12,rating:4,stock:20,image:"https://d1b5h9psu9yexj.cloudfront.net/45024/Spigen-PowerArc-ArcStation-Pro_20210512-160334_full.jpeg",category:"Electronics"},{name:"Classic Comfort Tee",description:"Crafted for comfort, our soft and breathable t-shirt is perfect for personal customization or stylish everyday wear.",price:20,rating:4,stock:25,image:"https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/091B833490D74F4C87D5CE3767E806C7/MP236558_11.jpg",category:"Clothing"},{name:"SleekFit Denim Jeans",description:"Stay trendy with our Slim Fit Jeans, offering both comfort and style with durable, high-quality denim.",price:45,rating:3,stock:15,image:"https://benzakdenimdevelopers.com/cdn/shop/products/BDD-006-loomstate-denim-15-oz-RHT-0_720x.jpg?v=1664551915",category:"Clothing"},{name:"PatternPop Fancy Socks",description:"Add a splash of fun to your outfit with our vibrant, patterned socks, combining style with everyday comfort.",price:15,rating:4.8,stock:7,image:"https://goldiesocks.com/cdn/shop/products/mens-sock-argyle-blue-goldie-socks_540x.jpg?v=1541354007",category:"Clothing"},{name:"Crispy Red Apples",description:"Enjoy the natural sweetness of our freshly-picked, juicy red apples, perfect for a healthy snack.",price:.5,rating:4,stock:100,image:"https://5.imimg.com/data5/MG/WX/MY-1600400/fresh-apple-500x500.jpg",category:"Groceries"},{name:"Hearty Whole Grain Bread",description:"Indulge in the wholesome goodness of our whole grain bread, baked fresh for a nutritious and delicious choice.",price:2,rating:4,stock:20,image:"https://vimafoods.com/wp-content/uploads/panecillo-vima-foods.jpg",category:"Groceries"},{name:"Crunchy Delight Cashews",description:"Savor the rich, nutty flavor of our premium cashews, ideal for a healthy, energizing snack.",price:4,rating:3,stock:56,image:"https://www.farmfreshnuts.com/wp-content/uploads/2018/02/Cashews-DRS.jpg",category:"Groceries"}];function p(t){return`<div class="store-item">
              <img src="${t.image}" alt="${t.name}" />
              <p>${t.name}</p>
              <p>${t.description}</p>
              <span>${t.rating}/5</span><span>$${t.price}</span><span>stock ${t.stock}</span>
            </div>`}function a(t){const o=document.getElementById("main-container");if(!o){console.error("Main container not found");return}let i="";for(let n of t){const e=p(n);i+=e}o.innerHTML=i}function d(t){const o=c.filter(i=>i.category===t);a(o)}function l(t){const o=c.filter(i=>i.rating>t);a(o)}a(c);document.getElementById("electronics").addEventListener("click",()=>d("Electronics"));document.getElementById("clothing").addEventListener("click",()=>d("Clothing"));document.getElementById("groceries").addEventListener("click",()=>d("Groceries"));document.getElementById("bestSeller").addEventListener("click",()=>l(4.5));
