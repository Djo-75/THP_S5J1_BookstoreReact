import React, { useState, useEffect } from "react";
import Book from "/home/djo75/Bureau/Code/THP/DEV/S5/S5J1/bookstoreact/src/components/Book/Book.jsx";

const URL = "https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json";

const Books = () => {
    const [booksList, setBooksList] = useState(null);

    const generateBooks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBooksList(data.books[0].slice(0,30));
    };

    useEffect(() => {
        generateBooks(); 
    }, []); // Empty dependency array to call the effect only once // Infinite loop otherwise :D

    return (
        <div class ="container">
            {booksList && booksList.map(book => (
                <Book
                    title={book.title}
                    shortDescription={book.shortDescription}
                    cover={book.thumbnailUrl}
                />
            ))}
        </div>
    );
};

export default Books;
