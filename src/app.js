import { myhttp } from './httpRequest';
import { uidata } from './getUi';

// get data when dom load
document.addEventListener('DOMContentLoaded', getDataForm);
function getDataForm() {
    myhttp.get('http://localhost:3000/allData', function (dataall) {
        let outputdata = '';
        dataall.forEach(item => {
            outputdata += `<div class="single-item">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <a href="#" class="edit item-link" data-id="${item.id}">
                    <i class="fa fa-pencil-square-o btn-primary btn btn-sm" aria-hidden="true"></i>
                </a>
                <a href="#" class="delete item-link" data-id="${item.id}">
                    <i class="fa fa-trash btn-danger btn btn-sm" aria-hidden="true"></i>
                </a>
            </div>`;
        });
        output.innerHTML = outputdata;
    });
}

// insert data 

document.querySelector('.submitData').addEventListener('click', insertData);
function insertData() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const data = {
        title,
        description
    };

    myhttp.post('http://localhost:3000/allData', data, function (alldata) {

        if (alldata.title == '' || alldata.description == '') {
            alert("please fillup all field");
            return false;
        }
        else {
            getDataForm();
        }
    })
}