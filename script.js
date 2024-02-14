function createElement (type, props, ...children) {
  const $el = document.createElement(type)

  for (const prop in props) {
    $el[prop] = props[prop]
  } 
  
  // declarative approach
  // Object.keys(props).forEach(prop => $el[prop] = props[prop])

  $el.append(...children)
  return $el
}

document.body.prepend(createElement(
  'header',
  { className: 'header' },
  createElement('h1', {className: 'title'}, 'Books')
))

const $books = document.getElementById('books')
for (const book of books) {
  const $title = createElement('h2', {className: 'book-title'}, book.title)
  const $author = createElement('h3', {className: 'book-author'}, book.author)
  const $link = createElement('a', {className: 'book-link', href: book.url}, 'Read more...')
  const $details = createElement('div', {className: 'book-details'}, $title, $author, $link)
  const $bookmark = createElement('div', {className: `bookmark ${book.haveRead ? 'read' : ''}`}) 
  const $book = createElement('div', {className: 'book'}, $bookmark, $details)

  $books.append($book)
}