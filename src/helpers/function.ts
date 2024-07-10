import { BookProps } from "../content/typed";

export async function fetchBooks(setArray: React.Dispatch<React.SetStateAction<BookProps[]>>) {
    try {
        const response = await fetch('./src/db/books.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const uniqueBooksArray = data.reduce((acc: BookProps[], current: BookProps) => {
            const existing = acc.find(item => item.id === current.id);
            if (!existing) {
                acc.push(current);
            }
            return acc;
        }, []);

        setArray(uniqueBooksArray);
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}