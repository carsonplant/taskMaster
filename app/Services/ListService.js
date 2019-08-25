import List from "../models/List.js";

//Private
let vacationList = {
    name: "Vacation Spots",
    items: ["Paris", "British Columbia", "Russia", "Texas"]
}
let _state = {
    list: [new List({
        name: "",
        listItems: []
    })]
}


//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        this.getLists()
    }

    addList(newList) {
        _state.list.push(new List(newList))
        this.saveLists()
    }

    addListItem(newItem, index) {
        _state.list[index].listItems.push(newItem)
        this.saveLists()
    }

    deleteList(index) {
        _state.list.splice(index, 1)
        this.saveLists()
    }

    get Lists() {
        return _state.list.map(list => new List(list))
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('list', JSON.stringify(_state.list))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('list'))
        if (saved) {
            _state.list = saved;
        }
    }
}
