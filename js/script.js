// TEST: Input field vullen met value
var test = "wie dit leest is gaaf";
document.getElementById("recipeNameInputFromDatabase").value = test;
// EINDE TEST


function showUpdateRecipe(e) {
    e.preventDefault();
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))

    // input#id

    // parseInt(num, 10)

    var idInputVeld = document.getElementById("id").value;
    if (idInputVeld != "" || idInputVeld == typeof Number) {

        if (idInputVeld < 0) {

            myModal.show();
            UpdateRecipeTable.style.display = "none";
            exit();
        }

        console.log("deze", idInputVeld);

        var recipeForm = document.getElementById("UpdateRecipeTable");
        UpdateRecipeTable.style.display = "block";

    } else {

        UpdateRecipeTable.style.display = "none";
        myModal.show();
    }



    // Haal het formulier op

}

function updateRecipe() {
    //Haal de gegevens van de gebruiker op uit de inputvelden
    var receptId = document.getElementById("id").value;
    var newRecept = {};

    //Check welke velden zijn ingevuld en voeg deze toe aan het veld-object
    if (document.getElementById("recipeTitle-input").value.trim() !== "") {
        newRecept.receptName = document.getElementById("recipeTitle-input").value;
    }
    if (document.getElementById("userId-input").value.trim() !== "") {
        newRecept.uploaderName = document.getElementById("userId-input").value;
    }
    if (document.getElementById("prepTime-input").value.trim() !== "") {
        newRecept.prepTime = document.getElementById("prepTime-input").value;
    }
    if (document.getElementById("prepText-input").value.trim() !== "") {
        newRecept.cookingDescription = document.getElementById("prepText-input").value;
    }
    if (document.getElementById("mealtype-input").value.trim() !== "") {
        newRecept.mealType = document.getElementById("mealtype-input").value;
    }
    if (document.getElementById("intro-input").value.trim() !== "") {
        newRecept.intro = document.getElementById("intro-input").value;
    }
    if (document.getElementById("foto-input").value.trim() !== "") {
        newRecept.recipePhoto = document.getElementById("foto-input").value;
    }
    if (document.getElementById("bbqId-input").value.trim() !== "") {
        newRecept.bbqID = document.getElementById("bbqId-input").value;
    }
    if (document.getElementById("cookAttireId-input").value.trim() !== "") {
        newRecept.utensilsID = document.getElementById("cookAttireId-input").value;
    }
    if (document.getElementById("rating-input").value.trim() !== "") {
        newRecept.rating = document.getElementById("rating-input").value;
    }
    if (document.getElementById("dateCreate-input").value.trim() !== "") {
        newRecept.dateCreate = document.getElementById("dateCreate-input").value;
    } if (document.getElementById("dateedited-input").value.trim() !== "") {
        newRecept.dateEdited = document.getElementById("dateedited-input").value;
    }

    // console.log(JSON.stringify(newRecept))
    console.log('https://localhost:7042/api/Recepten/' + receptId)

    // Stuur de gegevens naar de backend via de Fetch API
    fetch('https://localhost:7042/api/Recepten/' + receptId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecept)

    })
        .then(response => {
            if (response.ok) {
                alert("Recept bijgewerkt");
            } else {
                alert("Er is een fout opgetreden bij het bijwerken van het recept");
            }
        })
        .catch(error => {
            console.error('Fout bij het bijwerken van het recept:', error);
        });
}

function veldenVullen() {
    fetch('https://localhost:7042/api/Recepten/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error)
        );
}

function verwijderRecept() {
    // Bouw de SQL-query
    var recipeId = document.getElementById("id").value;
    var query = "DELETE FROM table_name WHERE id = " + recipeId;

    // Verwijder de gebruiker met behulp van Fetch API
    fetch('https://localhost:7042/api/Recepten/' + recipeId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => {
            if (response.ok) {
                alert("Recept verwijderd");
            } else {
                alert("Er is een fout opgetreden bij het verwijderen van het recept");
            }
        })
        .catch(error => {
            console.error('Fout bij het verwijderen van het recept:', error);
        });
}