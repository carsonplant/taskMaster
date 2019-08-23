export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.name = data.name
        this.listItems = data.listItems || []
    }


    getTemplate() {
        return `<div class="col-4">
            <H1>${this.name}</H1>
                <ul>
                    <li></li>
                </ul>
            <form onsubmit="app.controllers.ListController.addListItems(event)">
            <div class="form-group">
                <label for="list-items">Add to your list</label>
                <input type="text" class="form-control" id="list-items" placeholder="add a list item">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </div>`
    }
}