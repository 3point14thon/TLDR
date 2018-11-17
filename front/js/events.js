document.addEventListener("DOMContentLoaded", function(docEvent){

    const siteTable = document.getElementById('siteTable');
    console.log('Here')

    siteTable.addEventListener('mouseover', function(e){
        if (e.target !== e.currentTarget) {
            if(e.target.classList.contains('top-matter')){
                console.log('YAS QUEEN')
            }
            // var clickedItem = e.target.id;
            // console.log(e.target.classList.value);
        }
        e.stopPropagation();
    })
})
