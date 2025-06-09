let NAME = document.getElementById("name");
let EMAIL = document.getElementById("email");
let continueBtn = document.getElementById("continue");
let Form = document.getElementById("form");
let formContainer = document.getElementById("form-container");
let Bullets = document.querySelectorAll(".bullets div");
let step = document.getElementById("step");



NAME.oninput = EMAIL.oninput = function () {
    if (NAME.value !== "" && EMAIL.value !== "") {
        continueBtn.classList.remove("disabled");
    }
};

let submitCount = 0;
let choicesArr = [];

Form.onsubmit = function(e){
    e.preventDefault();
    submitCount++;

    if (submitCount === 1) {
        Bullets[0].classList.remove("active");
        Bullets[1].classList.add("active");
        step.innerHTML= Number(step.innerHTML)+1;
        continueBtn.classList.add("disabled");
        
        formContainer.innerHTML = `
            <div id="form-container">
                <h5 class="fw-normal" style="margin-bottom: 30px;">Which topics you are interested in?</h5>
                <div id="sw" class="rounded-3 choice px-3 mb-3" >Software Development</div>
                <div id="ux" class="rounded-3 choice px-3 mb-3" >User Experience</div>
                <div id="gd" class="rounded-3 choice px-3 mb-3">Graphic Design</div>     
            </div>
        `;

        let sw = document.getElementById("sw");
        let ux = document.getElementById("ux");
        let gd = document.getElementById("gd");

        let choices = document.querySelectorAll(".choice");
        choices.forEach(function(choice) {
            choice.addEventListener("click", function() {
                choice.style.backgroundColor = "#5425AF";
                choicesArr.push(this.textContent)
                if(choicesArr.length > 0){
                    continueBtn.classList.remove("disabled");
                }
            });
        });
            
    } 
    else if (submitCount === 2) {
        submitCount++;
        Bullets[1].classList.remove("active");
        Bullets[2].classList.add("active");
        step.innerHTML= Number(step.innerHTML)+1;
        
        formContainer.innerHTML = `
            <div id="form-container">
                <h5 class="fw-normal mb-4">Summary</h5>
                <div class="d-flex flex-row mb-2">
                  <label for="name" class="me-2">Name:</label>
                  <p style="font-size: 13px;" class="mb-0 fw-bold">${NAME.value}</p>
                </div>

                <div class="d-flex flex-row mb-4">
                  <label for="email" class="me-2">Email:</label>
                  <p style="font-size: 13px;" class="mb-0 fw-bold">${EMAIL.value}</p>
                </div>

                <div>
                  <label for="" class="mb-2">Topics:</label>
                    <ul style="font-size: 13px;" class="ps-4">
                    ${choicesArr[0] ? `<li>${choicesArr[0]}</li>` : ''}
                    ${choicesArr[1] ? `<li>${choicesArr[1]}</li>` : ''}
                    ${choicesArr[2] ? `<li>${choicesArr[2]}</li>` : ''}
                    </ul>
                </div>
            </div>

        `;
    } 

};

