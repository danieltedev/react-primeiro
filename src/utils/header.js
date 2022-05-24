function Header() {

    const get = () => {
        return {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            headers: new Headers({
                "Content-type": "application/json"
            })
        }
    }

    const post = (body) => {
        return {
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(body)
        }
    }

    const put = (body) => {
        return {
            method: 'PUT',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(body)
        }
    }

    const remove = () => {
        return {
            method: 'DELETE',
            headers: new Headers({
                "Content-type": "application/json"
            }),
        }
    }

    const patch = () => {
        return {
            method: 'PATCH',
            headers: new Headers({
                "Content-type": "application/json"
            }),
        }
    }

    return Object.freeze({
        get,
        post,
        put,
        remove,
        patch
    })
}

export default Header;