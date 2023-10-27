import _ from 'lodash';
import './style.css';

//tab Box
let tabDiv = document.createElement('div')
tabDiv.textContent = 'tabdiv'
tabDiv.classList.add('tabDiv')
content.appendChild(tabDiv)

//button to create new notes
let plusButton = document.createElement('button')
plusButton.classList.add('plusButton')
plusButton.textContent = '+'
tabDiv.appendChild(plusButton)

//note anchor
let noteDiv = document.createElement('div')
noteDiv.textContent = 'NOTES'
noteDiv.classList.add('noteDiv')

content.appendChild(noteDiv)


//note generator
let noteCounter = [0]




let newNote = () => {
    let notePageButton = document.createElement('button')
    notePageButton.textContent = noteCounter.length
    // notePageButton.classList.add(`notePageInterface` + noteCounter.length)
    notePageButton.classList.add(`notePageButton`)
    let pageId = notePageButton.setAttribute('Id', noteCounter.length)
    //creates button to keep track of notes and numbers them

    let noteInput = document.createElement('INPUT')
    noteInput.classList.add(`note`)//creates note and note input




    //creates div to put notes on
    let notePage = document.createElement('div')
    notePage.classList.add('notePage')
    let noteId = notePage.setAttribute('Id', noteCounter.length)
    console.log(notePage.getAttribute('Id'))
    //creates div to put notes on


    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = 'X' //creates delete button
    deleteButton.addEventListener('click', () => {clearNote()})

    notePage.appendChild(deleteButton)
    notePage.appendChild(noteInput)
    tabDiv.appendChild(notePageButton)
    noteDiv.appendChild(notePage)
    noteCounter.push(notePageButton)


    let noteDivId = notePage.getAttribute('Id')
    let interfaceId = (notePageButton.getAttribute('Id'))

    const clearNote = () => {
            notePageButton.remove(interfaceId)
            notePage.remove(noteDivId)
    }

    let highlight = () => {
        // let highlightSelect = document.querySelector('button.notePageButton')
        // let noteHighlight = document.querySelector('div.notePage')
        let find = document.getElementById(event.target.innerHTML)
        console.log(find)
        find.style.borderColor = 'purple'
    }
    notePageButton.addEventListener('click', () => {highlight()})

    
return
}







plusButton.addEventListener('click', () => {newNote()})