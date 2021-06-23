$(document).ready(()=>{
    console.log(`load-more script loaded`)
    const $button = $("#load-more")
    $button.on("click", function(){
        let params = {
            url: "more-articles.html",
            method: "GET"
        }
        $.ajax(params)
        .then((results)=>{
            const articlesContainer = $(".row")
            articlesContainer.append(results)
        })
        .catch((err)=>{
            console.log(`error trying to load more: ${err}`)
        })
    })

})