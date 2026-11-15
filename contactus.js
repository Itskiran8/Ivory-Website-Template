
        let form = document.getElementById("myForm");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        displayData();

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            let gender = document.querySelector('input[name="gender"]:checked');

            let skills = [];

            document.querySelectorAll('input[name="skills"]:checked').forEach(function (skill) {
                skills.push(skill.value);
            });

            let user = {

                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                email: document.getElementById("email").value,
                contact: document.getElementById("contact").value,
                gender: gender ? gender.value : "",
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,

            };

            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            form.reset();

            displayData();

        });


        function displayData() {

            let tableBody = document.getElementById("tableBody");

            tableBody.innerHTML = "";

            users.forEach(function (user, index) {

                tableBody.innerHTML += `
        <tr>

            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.email}</td>
            <td>${user.contact}</td>
            <td>${user.gender}</td>
            <td>${user.subject}</td>
            <td>${user.message}</td>

            <td>
             
                    <i onclick="deleteUser(${index})" id="delete"  class="fa-solid fa-trash-can"></i>
             
            </td>

        </tr>
        `;

            });

        }


        function deleteUser(index) {

            users.splice(index, 1);

            localStorage.setItem("users", JSON.stringify(users));

            displayData();

        }
 