let bookName = document.querySelector(".search-bar input#BookName");
let bookAuthor = document.querySelector(".search-bar input#BookAuthor");
let bookDate = document.querySelector(".search-bar input#BookDate");
let AddBtn = document.querySelector(".search-bar button");
let list = document.querySelector(".list");
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");

function AddBook(){
    if(bookName.value == '' || bookDate.value == '' || bookAuthor.value == ''){
        alert("please fillout those empty inputs");
    }else{
        let tr = document.createElement("tr");
        let td__1 = document.createElement("td");
        td__1.innerHTML = bookName.value;
        let td__2 = document.createElement("td");
        td__2.innerHTML = bookAuthor.value;
        let td__3 = document.createElement("td");
        td__3.innerHTML = bookDate.value;
        tr.appendChild(td__1);
        tr.appendChild(td__2);
        tr.appendChild(td__3);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        list.appendChild(table);
    
        bookDate.value = '';
        bookName.value = '';
        bookAuthor.value = '';
    
        bookName.focus();
    }

    

    


}


AddBtn.addEventListener("click", AddBook);
