const pics = document.querySelectorAll('img');

for(let i = 0; i < pics.length; i ++) {
    pics[i].addEventListener('mouseenter', function(){
            this.style.transitionDuration = 600;
            this.style.boxShadow = 'none';
        })
    pics[i].addEventListener('mouseleave', function(){
            this.style.boxShadow = '5px 5px 8px #888888';
        })
}
