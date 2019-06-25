// create http request get, post, delete, put method
class httpRequest {
    // GET request or Data response request
    get(url, callback) {
        fetch(url)
            .then(responseData => responseData.json())
            .then(data => callback(data))
            .catch(error => console.log(error))
    }

    // POST request or data Insert Request
    post(url, dataId, callback) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataId)
        })
            .then(responseData => responseData.json())
            .then(data => callback(data))
            .catch(error => console.log(error))
    }

    // PUT request or Update request
    put(url, dataId) {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataId)
        })
            .then(responseData => responseData.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    // DELETE request or delete data

    delete(url) {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(responseData => responseData.json())
            .then(() => console.log('delete data succefully !!!'))
            .catch(error => console.log(error))
    }
}

export const myhttp = new httpRequest;