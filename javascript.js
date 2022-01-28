console.log("Start Note Taking Website");
shownotes();
// prompt('heelo');

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', funcadd);

function funcadd(e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtext.value = " ";

    shownotes();
    alert("Notes is added successfully !!");

}

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = " ";
    notesobj.forEach(function (element, index) {
        html += `  <div class=" notecard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
         
             <p class="card-text">${element}</p> 
            <botton id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" style ="background-color: hotpink;">Delete <i class="fa fa-trash" aria-hidden="true"></i></botton>
        </div>
    </div>`
    });

    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = 'Please Add your notes'
    }
}

// function deletecondition() {
//     let promtinput = prompt("You want to delete this note ?");
//     console.log(promtinput);
// }


function deleteNote(index) {
    // console.log('deleted', index);
    let promtinput = confirm("You want to delete this note ?");
    // console.log(promtinput);
    if (promtinput) {
        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesobj = [];
        }
        else {
            notesobj = JSON.parse(notes);
        }
        notesobj.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesobj));
        shownotes();
    }

}



let search = document.getElementById('searchtxt');
search.addEventListener('input', funcsearch);

function funcsearch() {
    let inval = search.value.toLowerCase();
    // console.log('search' ,inval);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element) {
        let cardtext = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardtext);
        if (cardtext.includes(inval)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })
}







