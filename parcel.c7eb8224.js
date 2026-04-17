const $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=0&limit=10",main=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),e=a?.map(t=>`
            <article class="Card">
                <img src="${t.images[0]}" alt="${t.title}" />
                <h2>${t.title}</h2>
                <p>${t.price}</p>
            </article>
        `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=e,$app.appendChild(i)};main();
//# sourceMappingURL=parcel.c7eb8224.js.map
