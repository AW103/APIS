
let residentButton = document.getElementById("resBtn")
let residentSection = document.getElementById("residents")

const getResidents = () => {
    console.log("Button was clicked!");
    axios.get("https://swapi.dev/api/planets?search=alderaan").then(res => {
        let residents = res.data.results[0].residents;
        console.log(residents);
        for(let i=0; i <residents.length; i++) {
            axios.get(residents[i]).then(res => {
                console.log(res.data.name);
                let resident = document.createElement("h2")
                resident.textContent = res.data.name
                residentSection.appendChild(resident)
            })
        }
    })
}

residentButton.addEventListener("click", getResidents);