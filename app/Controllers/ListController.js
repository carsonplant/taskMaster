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
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value
        }
        _listService.addList(newList)
        _drawLists()
    }

    addListItems(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newListItem = form.listItem.value
        _listService.addListItem(newListItem, listIndex)
        _drawLists()
    }

    deleteList(index) {
        window.confirm("Are you sure you want to delete?")
        _listService.deleteList(index)
        _drawLists()
    }

    deleteItems(index, listIndex) {
        window.confirm("Are you sure you want to delete?")
        _listService.deleteItem(index, listIndex)
        _drawLists()
    }
}