import { Button, Col, Form, Row } from "react-bootstrap";

interface FilterComponent {
    searchTerm: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyUp: () => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export const Filter = ({ searchTerm, handleChange, handleKeyUp, handleSubmit }: FilterComponent) => {

    return(
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Search Value</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Search by some value"
                        value={searchTerm}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                    />
                    <Button type="submit">Search</Button>
                </Form.Group>  
            </Row>
        </Form>
    )
}