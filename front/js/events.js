document.addEventListener("DOMContentLoaded", function(docEvent){

    const siteTable = document.getElementById('siteTable');

    siteTable.addEventListener('mouseover', function(e){
        if (e.target !== e.currentTarget) {
            if(e.target.classList.contains('entry')){
                console.log('YAS QUEEN')
                const tm = e.target.getElementsByClassName('top-matter')[0]

                let tldr = tm.getElementsByClassName('TLDR')[0]
                if(!tldr){
                    const p = document.createElement('p')
                    p.className = "TLDR"
                    if(e.target.classList.contains('stickied')){
                        p.innerText = "TLDR: This thread is dedicated to short questions and clarifications which don't require much discussion or those that can be given definitive answers may also be asked here."
                    }
                    else {
                        p.innerText = 'TLDR: This thread represents something else. Very likely that XQC is bad and a toxic influence on your kids. But its still better than PUBG so...'
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
