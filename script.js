let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

let form = document.querySelector("form");
let erorr = document.querySelector(".erorr");


form.addEventListener("submit", (e) => {
    let data = new FormData(form);
    e.preventDefault();
    console.log(data.get("text"));
    if (data.get("text").length < 1) {
        erorr.innerHTML = "Inputun bos ola bilmez!"
        erorr.classList.remove("hidden");
    }
    else {
        erorr.classList.add("hidden");
        let li = document.createElement("li");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        li.style.opacity = "100"

        span1.innerHTML = input.value;
        span2.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        span2.classList.add("remove");

        li.append(span1, span2);
        list.append(li);
        input.value = "";

        span2.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove();
        });

    }

});










