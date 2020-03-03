import { serializeString, parseEmailsHtml, getRandomEmail } from '../../utils/utils';
export default class EmailEditor extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `<div class="text-area">
            <input type="text" placeholder="Add people..."></input>
        </div>`;
        this.textarea = this.querySelector('div');
        this.textInput = this.querySelector('input');
        this.textInput.addEventListener('blur', this.handleBlur);
        this.textInput.addEventListener('keypress', this.handleKey);
        this.textInput.addEventListener('paste', this.handlePaste);
        this.textarea.addEventListener('click', this.handleAreaClick);
        this.editorChangeEvt = new CustomEvent('editor:change');
        this.textInput.focus();
    }

    private textarea: HTMLDivElement;
    private textInput: HTMLInputElement;
    private editorChangeEvt: CustomEvent;


    private handleKey = (e: KeyboardEvent) => {
        switch (e.keyCode) {
            case 44://comma
            case 32://space
            case 13://enter
                e.preventDefault();
                this.populateArea();
                this.textInput.focus();
                break;
            default:
                break;
        }
    }

    private handleBlur = () => {
        this.populateArea();

    }

    private handlePaste = () => {
        window.setTimeout(() => {
            this.populateArea();
            this.textInput.focus();
        }, 5);

    }

    private handleAreaClick = (e:UIEvent) => {
        if (e.target === this.textarea) {
            this.textInput.focus();
        }
    }

    private populateArea = () => {
        if(!this.textInput.value.length) {
            return;
        }
        this.textInput.remove();
        this.textarea.innerHTML += parseEmailsHtml(serializeString(this.textInput.value));
        this.textInput.value = '';
        this.textInput.setAttribute('placeholder', 'Add more people...');
        this.textarea.appendChild(this.textInput);
        this.dispatchEvent(this.editorChangeEvt);
    }

    public getEmailsCount = () => (
        this.querySelectorAll('email-item:not(.invalid)').length
    );

    public addEmail = () => {
        this.textInput.value = getRandomEmail();
        this.populateArea();
    }
}
