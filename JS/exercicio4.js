

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


console.log('Número de categorias: ' + booksByCategory.length)

for (let categorias of booksByCategory) {
    console.log('Categoria : ' + categorias.category)
    console.log('Livros: ' + categorias.books.length)
}

function contaAutores () {
    let autores = [];

    for (let categorias of booksByCategory) {
        for (let livros of categorias.books) {
            if(autores.indexOf(livros.author) == -1) {
                autores.push(livros.author)
            }
        }    
    }
    console.log('Total de autores: ' + autores.length)
}

contaAutores()

function livrosAutores (autor) {
    let livros = [];

    for (let categorias of booksByCategory) {
        for (let livro of categorias.books) {
            if(livro.author === autor) {
                livros.push(livro.title)
            }
        }    
    }
    console.log(`Livros do autor: ${autor}: ${livros.join(", ")}`)
}

livrosAutores("Augusto Cury")
