export default class EmailItem extends HTMLElement {

    constructor() {
        super();
        this.querySelector('.close').addEventListener('click', this.closeClickHandler);
    }
    private closeClickHandler = () => {
        this.remove();
    }
}