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

    addList(newList) {
        _state.list.push(new List(newList))
    }

    get Lists() {
        return _state.list.map(list => new List(list))
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
