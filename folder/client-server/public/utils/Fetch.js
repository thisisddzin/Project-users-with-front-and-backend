class Fetch {

    static get (url, params = {}) {

        return Fetch.request("GET", url, params)

    }

    static post (url, params = {}) {

        return Fetch.request("POST", url, params)

    }

    static delete (url, params = {}) {

        return Fetch.request("DELETE", url, params)

    }

    static put (url, params = {}) {

        return Fetch.request("PUT", url, params)

    }

    static request (method, url, params = {}) {

        return new Promise((resolve, reject) => {

            let request = url 

            if(method.toLowerCase() != "get") 
                request = new Request(url, {
                    method,
                    body: JSON.stringify(params),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                })
            
            fetch(request)
            .then(response => {
                console.log(response, 'no .json()')
                
                response.json().then(json => {
                    console.log(json, 'with json')
                    resolve(json)

                })
                .catch(err => reject(err))

            })
            .catch(err => reject(err))
            
        })
        
    }

}