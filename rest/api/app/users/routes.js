
export function setup(router) {

    //.get('/users')
    router.get('/', (req, res) => {
        res.send("Hello World")
    })

    //.get('/users/:id')
    router.get('/:id', (req, res) => {

    })

}