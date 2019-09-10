

const Pagination = {

    paginate(conditions, pages = 1, perPage = 2) {
        const queryResults = this.where(conditions)

        return {
            [this.key]: queryResults.slice((pages - 1) * perPage, pages * perPage),
            meta: {
                pages,
                perPage,
                totalPages: Math.ceil(queryResults.length / perPage)
            }
        }
    }

}

export default Pagination;