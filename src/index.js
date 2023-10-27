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
    let noteDate = document.createElement(new Date (year))


    //creates div to put notes on
    let notePage = document.createElement('div')
    notePage.classList.add('notePage' + noteCounter.length)
    let noteId = notePage.setAttribute('Id', noteCounter.length)
    // console.log(notePage.getAttribute('Id'))
    //creates div to put notes on


    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.textContent = 'X' //creates delete button
    deleteButton.addEventListener('click', () => {clearNote()})



    let noteObject = {
        notePageButton,
        noteInput,
        noteDate,
        notePage,
        deleteButton
    }

    let renderNote = () => {
        noteObject.notePage.appendChild(deleteButton)
        noteObject.notePage.appendChild(noteInput)
        noteDiv.appendChild(notePage)
    }
    
    tabDiv.appendChild(notePageButton)
    noteCounter.push(notePageButton)

    // notePage.appendChild(deleteButton)
    // notePage.appendChild(noteInput)
    // tabDiv.appendChild(notePageButton)
    // noteDiv.appendChild(notePage)
    // noteCounter.push(notePageButton)

//logic
    let noteDivId = notePage.getAttribute('Id')
    let interfaceId = (notePageButton.getAttribute('Id'))

    const clearNote = () => {
            notePageButton.remove(interfaceId)
            notePage.remove(noteDivId)
    }

    let highlight = () => {
        if (noteCounter.length === 2){
            return
        }
        let reset = document.querySelector('button.notePageButton.highlighted')
        if (reset != null) 
        {reset.classList.remove('highlighted')}
        
        let pageSelect = document.getElementById(event.target.id)
        pageSelect.classList.add('highlighted')
    }

    //use noteobject to change content
    let noteChange = () => {
            noteDiv.innerHTML = ''
            renderNote()
            highlight()
            
        }
        notePageButton.addEventListener('click', () => {noteChange()})
return
}







plusButton.addEventListener('click', () => {newNote()})