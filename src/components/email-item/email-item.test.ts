import EmailItem from './email-item';

describe('EmailItem inner methods', () => {
    it('should be removed when click on close btn', () => {

        document.body.innerHTML =
        '<div>' +
            ' <email-item>' +
                '<i class="close"></i>' +
            ' </email-item>' +
        '</div>';
        window.customElements.define('email-item', EmailItem);
    
        expect(document.querySelectorAll('email-item')).toHaveLength(1);
        document.querySelector('i').click();
        expect(document.querySelectorAll('email-item')).toHaveLength(0);
    })
})
