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
    showAlert(message, classname) {
        this.clearAlert();
        // create a div
        const div = document.createElement('div');
        // add claess
        div.className = classname;
        div.appendChild(document.createTextNode(message));

        // get parent
        const mainDiv = document.querySelector('.formarea');
        const showalert = document.querySelector('.outputAll');
        mainDiv.insertBefore(div, showalert);

        // timeout
        setTimeout(() => {
            this.clearAlert();
        }, 2000);

    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    clearField() {
        this.title.value = '';
        this.description.value = '';
    }
}

export const uidata = new Uidata;