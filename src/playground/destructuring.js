const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: firstName= 'Self-Published'} = book.publisher
console.log(`the name is ${firstName}`)