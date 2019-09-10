export default {
    categories: [
        { id: 1, title: "Lang" },
        { id: 2, title: "Dev" },
        { id: 3, title: "Editor" },
    ],
    articles: [
        {
            id: 1,
            title: "Introduction To Javascript",
            content: "Javascript content",
            authorId: 1,
            categoryId: 1,
        },
        {
            id: 2,
            title: "Introduction To Python",
            content: "Python content",
            authorId: 1,
            categoryId: 1,
        },
        {
            id: 3,
            title: "Introduction To Java",
            content: "Java content",
            authorId: 2,
            categoryId: 2,
        },
        {
            id: 4,
            title: "Introduction To Ruby",
            content: "Ruby content",
            authorId: 2,
            categoryId: 3,
        }
    ],
    users: [
        {
            id: 1,
            email: "user1@gmail.com",
            isAdmin: true,
            password: "password@1234"
        },
        {
            id: 2,
            email: "user2@gmail.com",
            isAdmin: false,
            password: "password@1234"
        }
    ]
}