import { useState, useEffect } from "react";
import { BookItem } from "../components/BookItem"
import { BookProps } from "../content/typed";
import {fetchBooks} from "../helpers/function"

export const BooksList = () => {
    const [ books, setBooks] = useState<BookProps[]>([]);

    useEffect(() => {
        fetchBooks(setBooks)
    }, [])
    
    return ( 
        <main className="flex flex-wrap items-center justify-center min-h-screen gap-3 p-5 bg-zinc-400">
          {books && books.map((book) => (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                type={book.type}
                photo={book.photo}
              />      
          ))}
      </main>
    );
  }
