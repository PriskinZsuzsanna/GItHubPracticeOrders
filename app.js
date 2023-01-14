const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "img/pexels-brett-jordan-842519.jpg"
    },
    {
        id: 2,
        pizza: "Bolognai",
        extra: "Sonka",
        ital: "Ice Tea",
        ar: 2300,
        kep: "img/pexels-cats-coming-365459 (1).jpg"
    },
    {
        id: 3,
        pizza: "4Sajtos",
        extra: "Parmesan",
        ital: "Water",
        ar: 1700,
        kep: "img/pexels-eneida-nieves-905847.jpg"
    },
    {
        id: 4,
        pizza: "Vega",
        extra: "Brokkoli",
        ital: " - ",
        ar: 2500,
        kep: "img/pexels-pixabay-280453.jpg"
    },
    {
        id: 5,
        pizza: "Tenger Gyümölcsei",
        extra: "Olivabogyó",
        ital: "Pepsi zero",
        ar: 2000,
        kep: "img/pexels-brett-jordan-842519.jpg"
    },
    {
        id: 6,
        pizza: "Sonkás",
        extra: "Gomba",
        ital: "Fanta",
        ar: 1500,
        kep: "img/pexels-cats-coming-365459.jpg"
    }
]

const orderContainer = document.querySelector(".order-container");

let output = "";

orders.map(order => {
    output += `
        <div class="order">
            <p>Rendelés azonosítója: <span>${order.id}</span></p>
            <p>Pizza: <span>${order.pizza}</span></p>
            <p>Extra: <span>${order.extra}</span></p>
            <p>Ital: <span>${order.ital}</span></p>
            <p>Ár: <span>${order.ar} Ft</span></p>
            <div class="img-div">
                <img src="${order.kep}" alt="">
            </div>
    </div>
        `
})

orderContainer.innerHTML = output


