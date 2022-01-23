import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function Name() {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search"
      />
    </InputGroup>
  );
}
