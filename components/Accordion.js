import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

export default ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Button className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>{question}</Button>
            <Collapse isOpen={isOpen}>
                <Card style={{marginBottom: 20}}>
                    <CardBody style={{color: "#444"}}>
                        {answer}
          </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}