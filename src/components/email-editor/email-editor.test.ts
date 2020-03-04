import EmailEditor from './email-editor';

describe('EmailEditor public methods', () => {

    document.body.innerHTML =
    '<div>' +
        ' <email-editor>' +
        ' </email-editor>' +
    '</div>';
    
    window.customElements.define('email-editor', EmailEditor);

    test('getEmailsCount should return 0 when first created', () => {
        expect((document.querySelector('email-editor') as EmailEditor).getEmailsCount()).toBe(0);
    })
    
    test('addEmail should add one email', () => {
        (document.querySelector('email-editor') as EmailEditor).addEmail();
        expect((document.querySelector('email-editor') as EmailEditor).getEmailsCount()).toBe(1);
    })

    it('should emit a "editor:change" type CustomEvent when an email is created', () => {
        let testEvent;
        document.querySelector('email-editor').addEventListener('editor:change', (e) => {testEvent = e});
        (document.querySelector('email-editor') as EmailEditor).addEmail();
        expect(testEvent).toBeInstanceOf(CustomEvent);
        expect((testEvent as CustomEvent).type).toBe('editor:change');
    })
})

