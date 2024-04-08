import { useCallback, useEffect, useState } from "react";

import { searchApi } from "../services/pages/books-services";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Filter } from "../components/books/components/Filter";
import { TableResult } from "../components/books/components/TableResult";
import { DataItem } from "../components/books/types";

export function Book () {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<DataItem[]>([]);

    const fetchData = useCallback(async (term: string) => {
        try {
          const results = await searchApi(term);
          setSearchResults(results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
    }, []);
    

    useEffect(() => {
        fetchData(searchTerm);
    }, [fetchData, searchTerm]);



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyUp = () => {
        searchEvent();
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchEvent();
    };

    const searchEvent = () => {
        const results = searchResults.filter(
            item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.copiesInUse.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.totalCopies.toString().toLowerCase().includes(searchTerm.toLowerCase())
              
            )
            setSearchResults(results);
    }

    return (
        <div className="container">
            <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Col md="6">
                    <Filter searchTerm={searchTerm}
                        handleChange={handleChange} 
                        handleKeyUp={handleKeyUp}
                        handleSubmit={handleSubmit}/>
                </Col>
                <Col md="3">
                    <NavLink className="btn btn-primary" to="new">New Book</NavLink>
                </Col>
            </Row>
            <TableResult searchResults={searchResults}/>
        </div>
    )
}