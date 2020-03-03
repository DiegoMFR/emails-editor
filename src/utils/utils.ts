
    export function serializeString(text: string):string[] {
        return text.split(/[\s, ]+/).filter(el => el.length > 0 && el !== "​");
    }

    export function parseEmailsHtml(emails: string[]):string {
        return (
            emails.map((email) => (
                `<email-item${isValidEmail(email)? '' : ' class="invalid"'}>
                    <span>${email}</span>
                    <i class="close">&#215</i>
                </email-item>`
            )).join('')
        );
    }

    export function getRandomDigit():number {
       return Math.floor(Math.random() * 10);
    }

    export function isValidEmail(email:string):boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    export function getRandomEmail():string {
        const people = ['bgates', 'sjobs', 'jbezos', 'mzuckerberg', 
        'emusk', 'toreilly', 'lpage', 'jive', 'rstallman', 'ltrovalds'];
        const domains = ['gmail', 'microsoft', 'miro', 'facebook', 'linkedin',
        'amazon', 'tesla', 'medium', 'linux', 'apple'];
        return `${people[getRandomDigit()]}@${domains[getRandomDigit()]}.com`;
    }