class Uidata {
    constructor() {
        // input field data
        this.title = document.querySelector('#title');
        this.description = document.querySelector('#description');
        // output field data
        this.output = document.querySelector('#output');
        // hidden field id
        this.id = document.querySelector('#id');
        // submit data
        this.submitData = document.querySelector('.submitData');
        this.forState = 'add';
    }

}

export const uidata = new Uidata;