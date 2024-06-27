import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function ContactoCollapse(args) {
const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)

    return (
        <React.StrictMode>
        <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>
            + info
        </Button>
        <Collapse isOpen={isOpen} {...args}>
            <div className='alert alert-success'>
                Info de contacto o formulario de contacto
            </div>
            {/* <Card>
            <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
            </CardBody>
            </Card> */}
        </Collapse>
        </React.StrictMode>
)
}

export default ContactoCollapse