const cars = [
    { name: "2024 Toyota Vios XLE Automatic", price: 580000, image: "../images/cars/1.jpg" },
    { name: "2023 Toyota Veloz 1.5 G Automatic (CVT)", price: 940000, image: "../images/cars/2.jpg" },
    { name: "2024 Toyota Vios XLE Automatic (CVT)", price: 575000, image: "../images/cars/3.jpg" },
    { name: "2024 Toyota Vios XLE Automatic (CVT)", price: 570000, image: "../images/cars/4.jpg" },
    { name: "2024 Toyota Vios XLE Automatic", price: 555000, image: "../images/cars/5.jpg" },
    { name: "2024 Avanza J Manual", price: 690000, image: "../images/cars/6.jpg" },
    { name: "2023 Toyota Vios XLE Automatic", price: 580000, image: "../images/cars/7.jpg" },
    { name: "2021 TOYOTA AVANZA G MATIC ", price: 655000, image: "../images/cars/8.jpg" },
    { name: "2024 TOYOTA WIGO G CVT ", price: 570000, image: "../images/cars/9.jpg" },
    { name: "2024 Toyota Wigo G CVT", price: 580000, image: "../images/cars/10.jpg" },
    { name: "2024 Toyota Vios XLE Automatic", price: 620000, image: "../images/cars/11.jpg" },
    { name: "2023 Toyota Veloz 1.5 G Dual VVTI Automatic", price: 880000, image: "../images/cars/12.jpg" },
    { name: "2023 Toyota Vios XLE CV Automatic ", price: 568000, image: "../images/cars/13.jpg" },
    { name: "2023 Hilux G 4x2 Automatic", price: 1160000, image: "../images/cars/14.jpg" },
    { name: "2024 Toyota Vios XLE Automatic", price: 615000, image: "../images/cars/15.jpg" },
    { name: "2024 Toyota Vios XLE Automatic", price: 615000, image: "../images/cars/16.jpg" },
    { name: "2024 Toyota Wigo G CVT", price: 585000, image: "../images/cars/17.jpg" },
    { name: "2010 Fortuner G Automatic", price: 530000, image: "../images/cars/18.jpg" },
    { name: "2024 Toyota FX Van", price: 610000, image: "../images/cars/19.jpg" }
];

const carsPerPage = 12;
let currentPage = 0;
let sortedCars = [...cars];
const totalPages = Math.ceil(cars.length / carsPerPage);

document.querySelector(".select").addEventListener("change", (event) => {
    const sortBy = event.target.value;
    
    if (sortBy === "latest") {
        sortedCars = [...cars];
    } else if (sortBy === "priceAsc") {
        sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
        sortedCars.sort((a, b) => b.price - a.price);
    }
    
    currentPage = 0;
    displayCars();
});

function displayCars() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const start = currentPage * carsPerPage;
    const end = start + carsPerPage;
    const carsToShow = sortedCars.slice(start, end);

    carsToShow.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("card", "bg-base-100", "shadow-sm");
        carElement.innerHTML = `
            <figure class="px-3 pt-3 aspect-4/3 overflow-hidden">
                <img src="${car.image}" alt="${car.name}" class="rounded-lg w-full h-full object-cover" />
            </figure>
            <div class="card-body px-5">
                <h2 class="card-title">${car.name}</h2>
                <p>₱${car.price.toLocaleString()}</p>
                <br>
                <div class="card-actions">
                    <a href="../pages/contact.html" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-custom rounded-lg shadow-md group cursor-pointer">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-custom group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-blue-custom transition-all duration-300 transform group-hover:translate-x-full ease">Contact Us</span>
                        <span class="relative invisible">Contact Us</span>
                    </a>
                </div>
            </div>
        `;
        productList.appendChild(carElement);
    });
    updatePagination();
    document.getElementById("result").textContent = `Showing ${start + 1}–${Math.min(end, sortedCars.length)} of ${sortedCars.length} results`;
}

function updatePagination() {
    const tabList = document.getElementById("tabList");
    tabList.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
        const tab = document.createElement("a");
        tab.classList.add("tab");
        if (i === currentPage) {
            tab.classList.add("tab-active");
        }
        tab.textContent = `Page ${i + 1}`;
        tab.onclick = () => {
            currentPage = i;
            displayCars();
            setupTabs();
        };
        tabList.appendChild(tab);
    }
}

displayCars();
