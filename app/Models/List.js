export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.name = data.name
        this.listItems = data.listItems || []
    }

//FIXME this could potetially be the other problem maybe my template is fucked
    getTemplate(index) {
        let template =
         `
            <div class="col-4">
                <H1>${this.name}</H1>
                <ul>`
        template += this.drawListItems(index)   
        template += ` </ul>
                <form onsubmit="app.controllers.listController.addListItems(event, ${index})">
                <div class="form-group">
                <label for="list-items">Add to your list</label>
                <input type="text" class="form-control" name="listItem" placeholder="add a list item">
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
                <button type="button" onclick="app.controllers.listController.deleteList(${index})">X</button>
                </form>
            </div>
        `
        return template
    }

    drawListItems(listIndex){
        let itemTemplate = ""
        this.listItems.forEach((item, itemIndex) => {
            itemTemplate += `<li>${item}<span onclick="app.controllers.listController.deleteListItem(${listIndex}, ${itemIndex})">X</span></li>`
        });
        return itemTemplate
    }
    
}