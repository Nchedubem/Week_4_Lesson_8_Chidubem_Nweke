
async function fetchData () {
    try {
      const response = await fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json() 
      document.getElementById('greatness').innerText='Successful AJAX request' 
    } catch (error) {
        document.getElementById('greatness').innerText='Request failed, check internet connectivity' 
    }
} 

fetchData()
