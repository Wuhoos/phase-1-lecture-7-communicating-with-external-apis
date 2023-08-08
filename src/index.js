fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        addFoodImageToMenu(food)
    })
})

fetch("http://localhost:3000/foods/1")
.then(response => response.json())
.then(food => {
    displayFoodDetails(food)
})

function addFoodImageToMenu(food){
    const restaurantMenu = document.getElementById('restaurant-menu')
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(foodImage)
}

function displayFoodDetails(food){
    const foodImage = document.querySelector('.detail-image')
    foodImage.src = food.image

    const foodName = document.querySelector('.name')
    foodName.textContent = food.name

    const foodDescription = document.querySelector('#description-display')
    foodDescription.textContent = food.description
}



const totalCrytoList = document.querySelector('#cryptocurrency-list')
fetch('https://api.coincap.io/v2/assets')
.then(response => response.json())
.then(crytoCurrency => {
    const filteredCryto = crytoCurrency.data.filter(eachCryto => {
        const rank = Number(eachCryto.rank)
        return rank <= 10
    })
    

    filteredCryto.forEach(cryto => {
        const crytoList = document.createElement('li')
        crytoList.textContent = `${cryto.rank}: ${cryto.name} (${cryto.symbol})`
        totalCrytoList.appendChild(crytoList)
    })
})