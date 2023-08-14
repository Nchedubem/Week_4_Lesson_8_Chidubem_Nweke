let api = "https://www.themealdb.com/api/json/v1/1/categories.php";
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

let currentPage = 1,
    itemsPerPage = 3,
    categoriesData = [],
    categoriesDataLength = 0;

async function fetchApi() {
    const response = await fetch(api);
    const data = await response.json();
    categoriesData = data.categories;
    categoriesDataLength = categoriesData.length;
}

async function itemsToShow() {
    await fetchApi();

    let foodContainer = document.getElementById("Categories");
    foodContainer.innerHTML = "";

    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let categoreiesToShow = categoriesData.slice(startIndex, endIndex);

    categoreiesToShow.forEach((category) => {
        let elementId = document.createElement("p"),
            img = document.createElement("img"),
            title = document.createElement("h3"),
            desc = document.createElement("p");

        elementId.textContent = category.idCategory;
        img.src = category.strCategoryThumb;
        title.textContent = category.strCategory;
        desc.textContent = category.strCategoryDescription;

        foodContainer.append(elementId);
        foodContainer.append(img);
        foodContainer.append(title);
        foodContainer.append(desc);
    });
    hideBtns();
}

itemsToShow();


nextBtn.addEventListener("click", () => {
    currentPage++;
    itemsToShow();
});

prevBtn.addEventListener("click", () => {
    currentPage--;
    itemsToShow();
});

function hideBtns() {
    if (currentPage === 1) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "initial";
    }
    let totalNumberOfPages = Math.ceil(categoriesDataLength / itemsPerPage);

    if (currentPage === totalNumberOfPages) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "initial";
    }
}