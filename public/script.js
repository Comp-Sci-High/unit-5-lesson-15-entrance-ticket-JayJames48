// Create a function that tests the post route handler [2 pts]
<form>
    <label for = "label" > title:</label>
    <input type = "text" name ="label" required></input>
    <label for = "effect" > effect:</label>
    <input type = "text" name ="effect" required></input>
    <label for = "ingredients" > ingredients:</label>
    <input type = "text" name ="ingredients" required></input>
    <label for = "color" > color:</label>
    <input type = "text" name ="color" required></input>
    <label for = "isExplosive" > isExplosive:</label>   
</form>


// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]
const createForm = document.querySelector("form")
createForm.addEventListener("submit", (e)=>{
    const potionData = new FormData(createForm)
    const reqBody = Object.fromEntries(potionData)
})
