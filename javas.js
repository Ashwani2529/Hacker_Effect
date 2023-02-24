const l="NOX10WDD6Imdub1234567890vnjihzjfcvovdcxgcbbj"
document.querySelector("h2").onmouseover=event=>{
let iterations=0;
    const interval =setInterval(()=> {
    event.target.innerText=event.target.innerText.split("")
.map(letter=>l[Math.floor(Math.random()*26)])
.join("");
// if(iterations>=10) clearInterval(interval);
iterations+=1
},60);
}