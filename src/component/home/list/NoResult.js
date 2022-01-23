import React from 'react'
import { Alert, Col } from 'react-bootstrap'

export default function NoResult() {
    return (
        <Col lg={12}>
            <Alert>
                <strong>The search did not return any results!</strong>
            </Alert>
        </Col>
    )
}
