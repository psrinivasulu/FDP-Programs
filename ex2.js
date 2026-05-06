function fun(x,callback)
{
    if(x%2==0)
    {
        bun("Even") 
    }
    else
    {
        bun("Odd") 
    }
}

function bun(msg)
{
    console.log(`The number is ${msg}`)
}

fun(10,"Hello")

