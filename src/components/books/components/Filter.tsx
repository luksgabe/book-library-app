import { Button, Form } from "react-bootstrap";

interface FilterComponent {
    searchTerm: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleKeyUp: () => void,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export const Filter = ({ searchTerm, handleChange, handleKeyUp, handleSubmit }: FilterComponent) => {

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom01" className="col-md-12">
                <Form.Label>Search Value</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Search by some value"
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                />
                <Button type="submit" style={{ marginTop: "5px" }}>Search</Button>
            </Form.Group> 
        </Form>
    )
}