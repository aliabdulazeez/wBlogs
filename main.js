

var w = window.innerWidth;
var h = window.innerHeight;
var cover = document.getElementsByClassName('cover')[0];

console.log(w, h, cover);

if(w <= 500){
    alert('THIS WEBSITE IS NOT MOBILE RESPONSIVE!');
    cover.style.display = 'block';

}else{
    cover.style.display = 'none';
}