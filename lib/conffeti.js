export class Conffeti{

    static launchAnimationConffeti() {
        let animateDiv = document.createElement("div");
        animateDiv.id = "allconffetis";
        animateDiv.innerHTML = "";
    
        for(let i = 0; i < 100; i++){
            let conffeti = document.createElement("div");
            conffeti.classList.add("conffeti");
            conffeti.style.left = this.getRandomArbitrary(0,100)+'%';
            conffeti.style.animationDelay = 50*i+"ms";
            conffeti.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            animateDiv.appendChild(conffeti);
        }
        document.body.appendChild(animateDiv);
    }
    
    static stopAnimationConffeti() {
        let animateDiv = document.getElementById("allconffetis");
        if (animateDiv != undefined) {
            animateDiv.innerHTML = "";
            animateDiv.remove();
        }
        
    }

    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

