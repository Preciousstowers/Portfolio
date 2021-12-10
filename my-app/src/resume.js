import './style.css';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route, Link} from "react-router-dom";

import { Switch } from "react-router";
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
   

    
    return (
        <div>  
             <Document
        file="PreciousStowers.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

        </div>
    )
};

export default Resume;