function randomMessage() {
    var randomWish = ['You are ok','You are good','You are very well','You are not bad'];
    var msg = document.querySelector('p');
    msg.innerHTML = randomWish[Math.floor(Math.random() * randomWish.length)];
}