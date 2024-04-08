import { useState } from "react";
import { DataItem } from "../types";
import { Button, Card, Form, Row } from "react-bootstrap";
import { newBook } from "../../../services/pages/books-services";
import { redirect } from "react-router-dom";



function NewBook() {
    const [book, setBook] = useState<DataItem>({
        id: 0,
        title: '',
        firstName: '',
        lastName: '',
        totalCopies: 0,
        copiesInUse: 0,
        type: '',
        isbn: '',
        category: '',
    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBook({ ...book, [event.target.name]: event.target.value });
    };
    
    const handleDropDownChange = (event: any) => {
        setBook({ ...book, category: event.target.value })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        console.log('Submitted book data:', book);

        await newBook(book);

        setBook({
            id: 0,
            title: '',
            firstName: '',
            lastName: '',
            totalCopies: 0,
            copiesInUse: 0,
            type: '',
            isbn: '',
            category: '',
        });
        redirect("/book")

    };

    
    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter book title"
                        value={book.title}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                            <Row>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={book.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={book.lastName}
                                    onChange={handleChange}
                                    className="ms-2"
                                    required
                                />
                        </Row>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicCopies">
                        <Form.Label>Total Copies</Form.Label>
                        <Form.Control
                        type="number"
                        name="totalCopies"
                        placeholder="Enter total number of copies"
                        value={book.totalCopies}
                        onChange={handleChange}
                        required
                        min={0}
                        />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicCopiesInUse">
                        <Form.Label>Copies In Use</Form.Label>
                        <Form.Control
                        type="number"
                        name="copiesInUse"
                        placeholder="Enter number of copies currently in use"
                        value={book.copiesInUse}
                        onChange={handleChange}
                        required
                        min={0}
                        max={book.totalCopies} // Ensure copies in use <= total copies
                        />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                        type="text"
                        name="type"
                        placeholder="Enter book type (e.g., hardcover, paperback)"
                        value={book.type}
                        onChange={handleChange}
                        />
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicISBN">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control
                            type="text"
                            name="isbn"
                            placeholder="Enter ISBN number"
                            value={book.isbn}
                            onChange={handleChange}
                            required
                            pattern="^\d{13}$" // Basic ISBN validation (13 digits)
                            />
                            <Form.Text className="text-muted">
                            ISBN must be 13 digits long.
                            </Form.Text>
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                            name="category"
                            value={book.category}
                            onChange={handleDropDownChange}
                            required
                            >
                            <option value="">Select Category</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Science Fiction">Science Fiction</option>
                            <option value="Biography">Biography</option>
                            {/* Add more category options as needed */}
                            </Form.Select>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit">
                            Register Book
                        </Button>
                    </Form>
            </Card.Body>
        </Card>
        

          );              
}

export default NewBook;


