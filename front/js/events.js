document.addEventListener("DOMContentLoaded", function(docEvent){

    const siteTable = document.getElementById('siteTable');
    const dataKeys = Object.keys(data[0])

    siteTable.addEventListener('mouseover', function(e){
        if (e.target !== e.currentTarget) {
            if(e.target.classList.contains('entry')){
                // console.log('YAS QUEEN')
                const tm = e.target.getElementsByClassName('top-matter')[0]
                const title = tm.getElementsByClassName('title')[0].getElementsByClassName('linkflairlabel')[0]
                let tldr = tm.getElementsByClassName('TLDR')[0]
                if(!tldr){
                    const p = document.createElement('p')
                    p.className = "TLDR"

                    if(dataKeys.indexOf(title.innerText) > -1)
                    {
                        let key = title.innerText
                        p.innerText = data[0][key]
                    }
                    else {
                        p.innerText = data[0].Question
                    }
                    tm.appendChild(p)
                } 
            }
        }
        e.stopPropagation();
    })

    siteTable.addEventListener('mouseout', function(e){
        if (e.target !== e.currentTarget) {
            if(e.target.classList.contains('entry')){
                // console.log('BYE FELICIA')
                const tm = e.target.getElementsByClassName('top-matter')[0]
                let tldr = tm.getElementsByClassName('TLDR')[0]
                if(tldr){
                    tm.removeChild(tldr)
                } 
            }
        }
        e.stopPropagation();
    })

})

const data = [{
    Question: "TLDR: This thread is dedicated to short questions and clarifications which don't require much discussion or those that can be given definitive answers may also be asked here.",
    Discussion: "TLDR: This thread represents something else. Very likely that XQC is bad and a toxic influence on your kids. But its still better than PUBG so...",
    PSA: "TLDR: PUBLIC SERVICE ANNOUNCEMENT, Here we would put something very very very important. Maybe about Seagull, or Soe, or Monte. But definitely not anybody else. This is a briefing to let everyone know what we're about. Yay!",
    Highlight: "TLDR: LOOK at this awesome thing a Pro did! Isn't it keeewwwwwl Kenny? Isn't it wholesome? Look at that Doomfist bringing doom upon others. Justice from orbit. Justice crashes to earth and crushes all those beneath it..... from above.",
    Fluff: "TLDR: Seagull in a unicorn onsie. It's literally fluff. It's the fluffiest thing I have ever seen and it's wholesome and wonderful and great and I love it. LOVE IT WITH ME!",
    Gossip: "TLDR: XQC XQC XQC XQC.... Dafran.... Fissure... XQC XQC XQC. Let's be honest ALL gossip is for XQC and I don't even see why we validate his child-like mannerisms. Like, ok yes he's the best Tank in the game HANDS DOWN. But... do we really want to glorify needing a new keyboard every week? He's a terrible influence and if I hear one more scream into the mic I will lose my damn mind."
}]