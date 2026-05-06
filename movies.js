
async function fun() {
    const data=await fetch("https://jsonfakery.com/movies/paginated")
    .then((res)=>res.json())
    .then((res)=>res.data)
    console.log(data)
    const d=document.getElementById('box')

    for(i=0;i<data.length;i++){
        d.innerHTML+=
        `<div class="movie">
        <img src=${data[i].poster_path} alt="" height="100">
        <h2>${data[i].original_title}</h2>
        <h4>${data[i].popularity}<h4
        ><div>`
    }
}

fun()