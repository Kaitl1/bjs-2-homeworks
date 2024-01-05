class PrintEditionItem{
    constructor (name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100
        this.type = null
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state (newState){
        if (newState<0){
            this._state = 0;
        }else if (newState===100){
            this._state = 100;
        }else{
            this._state = newState;
        }

    }
    get state (){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem{
    constructor(autor ,name, releaseDate, pagesCount) {
        super(autor)
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.autor = autor
        this.type = 'book'
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, autor) {
        super(autor)
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.autor = autor
        this.type = 'novel'

    }
}

class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, autor) {
        super(name, releaseDate, pagesCount, autor)
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, autor) {
        super(name, releaseDate, pagesCount, autor)
        this.type = 'detective'
    }
}

class Library {
    constructor (name) {
        this.name = name
        this.books = []
    }
    addBook(book){
        if(book.state>30){
            this.books.push(book)
        }
    }
    findBookBy(type, value){
        for(let i = 0; i<this.books.length; i++){
            if(this.books[i].type===value){
                return value;
            }
        }
        // else{
        //     return null;
        // }
    }
    giveBookByName(bookName){
        if(this.books.includes(bookName)){
            // this.books.splice(this.books.indexOf(bookName))
        }else{
            return null;
        }
    }
}

