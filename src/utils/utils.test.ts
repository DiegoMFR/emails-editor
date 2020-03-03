import { serializeString, parseEmailsHtml, getRandomDigit, isValidEmail } from './utils';

test('serializeString should retrieve an array of strings', () => {
    expect(serializeString('lala,lolo lulu')).toEqual(['lala', 'lolo', 'lulu']);
});

test('getRandomDigit() to be a number between 0 and 9', () => {
    const testRandom = getRandomDigit();
    expect(testRandom).toBeGreaterThanOrEqual(0);
    expect(testRandom).toBeLessThanOrEqual(9);
})

test('isValidEmail should return true for valid emails', () =>{
    expect(isValidEmail('pepe')).toBe(false);
    expect(isValidEmail('pepegmail')).toBe(false);
    expect(isValidEmail('pepe@gmail')).toBe(false);
    expect(isValidEmail('pepe@gmail.com')).toBe(true);
    expect(isValidEmail('pepe@pepe@gmail.com')).toBe(false);
    expect(isValidEmail('pepe@gmail.com.nl')).toBe(true);
})

test('parseEmailsHtml() to retrieve an html like string', () => {
    const stubOk =  `<email-item>
                    <span>example@domain.com</span>
                    <i class="close">&#215</i>
                </email-item>`;

    const stubFail =  `<email-item class="invalid">
                    <span>example</span>
                    <i class="close">&#215</i>
                </email-item>`;
    
    expect(parseEmailsHtml(['example@domain.com']).trim()).toBe(stubOk);
    expect(parseEmailsHtml(['example']).trim()).toBe(stubFail);
})
