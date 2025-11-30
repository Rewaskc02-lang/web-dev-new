// let productarr;
fetch('https://fakestoreapi.com/products')
.then((response)=> {
    console.log(response);
    
    return response.json()
})
.then((data)=> {
    // console.log(data);
    //rendering objects DOM
    // productarr=data;
    display(data);
    
})
.catch((error)=>console.log(error)
);

let main=document.querySelector("main");
function display(product){
main.innerHTML=product.map((Ele)=>{
    return `
     <section> 
     <p> Id: ${Ele.id} </p>
    <img src="${Ele.image}" alt="">
    <h2>  ${Ele.title} </h2>
    <p> Price: ${Ele.price}$ </p>
    <p> Category: ${Ele.category} </p>
    <p> Description: ${Ele.description} </p>
    </section>`
}).join("")
}