const $app=document.getElementById("app"),API="https://fakestoreapi.com/products?offset=5&limit=10",main=async()=>{let t=await fetch("https://fakestoreapi.com/products?offset=5&limit=10"),e=await t.json(),a=e?.map(t=>`
            <article class="Card">
                <img src="${t.image}" alt="${t.title}" />
                <h2>${t.title}</h2>
                <p>${t.price}</p>
            </article>
        `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=a,$app.appendChild(i)};main();
//# sourceMappingURL=parcel.64b8a923.js.map
