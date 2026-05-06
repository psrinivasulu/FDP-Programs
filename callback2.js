
async function fun(){
    try{
        const data = await fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())        
        console.log(data)
    }
    catch{
        
    }
}
fun()