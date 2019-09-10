import Articles from './model'
import ArticlePolicy from './policy'

const ArticlesController = {
    getAll(req, res) {
        console.log(req.user)
        res.json({ articles: Articles.findAll() })
    },

    get(req, res) {
        res.json({ articles: Articles.find(req.params.id) })
    },

    create(req, res) {
        if (ArticlePolicy.for('create', req.user)) {
            const article = Articles.create(req.body)
            res.status(201).json({ article })
        } else {
            res.status(401)
                .json({
                    article: {
                        errors: ['You are not allow to create this article']
                    }
                })
        }

    },

    update(req, res) {
        const id = req.params.id

        if (ArticlePolicy.for('update', req.user, Articles.find(id))) {
            const article = Articles.update(id, req.body)
            res.status(201).json({ article })
        } else {
            res.status(401)
                .json({
                    article: {
                        errors: ['You are not allow to update this article']
                    }
                })
        }
    },

    destroy(req, res) {
        const id = req.params.id

        if (ArticlePolicy.for('destroy', req.user, Articles.find(id))) {
            Articles.destroy(id)
            res.status(204)
        } else {
            res.status(401)
                .json({
                    article: {
                        errors: ['You are not allow to delete this article']
                    }
                })
        }

    },

}

export default ArticlesController;