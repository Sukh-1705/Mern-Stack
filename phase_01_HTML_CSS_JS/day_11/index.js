let handleSubmit = async (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    let obj = {
        name: name,
        email: email,
        age: age
    };

    console.log(obj);

    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    // alert("User added successfully");

    document.getElementById("regForm").reset();

    getData();
};


document
    .getElementById("regForm")
    .addEventListener("submit", handleSubmit);


let container = document.getElementById("container");


let displayData = (data) => {
    console.log("Data from displayData:", data);

    container.innerHTML = "";

    data.forEach((element) => {
        container.innerHTML += `
            <div>
                <h3>${element.name}</h3>
                <p>${element.email}</p>
                <p>${element.age}</p>

                <button onclick="handleDelete(${element.id})">
                    Delete
                </button>

                <button onclick="handleUpdate(${element.id})">
                    Update
                </button>
            </div>
        `;
    });
};


let getData = async () => {
    let resp = await fetch("http://localhost:3000/users", {
        method: "GET"
    });

    let data = await resp.json();

    console.log(data);

    displayData(data);
};


let handleDelete = async (userId) => {
    await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE"
    });

    // alert("User deleted successfully");

    getData();
};


getData();



