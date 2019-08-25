import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
//FIXME This is not drawing onto the page possibly problem 
function _drawLists() {
    let template = ``
    let list = _listService.Lists
    list.forEach((list, index) => {
        template += list.getTemplate(index)
    })
    document.querySelector('#list-creator').innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems

    addList(event) {
        debugger
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value
        }
        _listService.addList(newList)
        _drawLists()
    }

    addListItems(event, index) {
        event.preventDefault()
        let form = event.target
        let newListItem = form.listItems.value
        _listService.addListItem(newListItem, index)
        _drawLists()
    }

    deleteList(index) {
        _listService.deleteList(index)
        _drawLists()
    }
}