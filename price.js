let price = 750
let category = (price >= 1000) ? "Expensive" : 
               (price >= 500 && price <= 999) ? "Moderate" :
               (price > 0 && price < 500) ? "Affordable" :
               (price === 0) ? "Free" :
               "Invalid Price"
console.log(category)