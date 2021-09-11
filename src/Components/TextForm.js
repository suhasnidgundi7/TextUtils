import React, {useState} from 'react'
import { Container, Form, Table, Button, Card } from 'react-bootstrap'

export default function TextForm(props) {

    let FormHeadingStyle = {
        color: "#009dff"
    }

    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    // Button Functions

    // ***** Handle Upper Case *****
    const handleUpperCase = () => {
        let UpperText = text.toUpperCase();
        setText(UpperText)
    }

    // ***** Handle Lower Case *****
    const handleLowerCase = () => {
        let LowerText = text.toLowerCase();
        setText(LowerText)
    }

    // ***** Handle Copy Case *****
    const handleCopyCase = () => {
        let text = document.getElementById("exampleForm.ControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    // ***** Handle Reverse Case *****
    const handleReverseCase = () => {
        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
        
        setText(newText);
    }

    // ***** Handle Extra Space Case *****
    const handleExtraSpaceCase = () => {
        let ExtraSpaceText = text.split(/[ ]+/);
        setText(ExtraSpaceText.join(" "))
    }
    
    // ***** Handle capitalize First Letter Case *****
    const handleCapitalizeFirstLetter = () => {
        var b = text;
        for( var a = 0 ; a<text.length ;a++ )
        { 
            if(a===0) { b = b.slice(0,a) +  b[a].toUpperCase() + b.slice(a+1);}
            if(b[a]===" " && b[a+1]!==" ")
            {  a++;
                b = b.slice(0,a) +  b[a].toUpperCase() + b.slice(a+1);
            }
        }
       setText(b);
    }
    
    // ***** Handle Clear Form Case *****
    const handleRemovePuctuationCase = () => {
        let ClearText = text.replace(text, "");
        setText(ClearText)
    }
    
    // ***** Handle Remove Punctuation Marks Case *****
    const handleRemoveExtraLineCase = () => {
        var sentence = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
        var newSen = sentence.match(/[^_\W]+/g).join(' ');
        console.log(newSen);
    }
    
    // ***** Handle Remove Punctuation Marks Case *****
    const handleClearFormCase = () => {
        let ClearText = text.replace(text, "");
        setText(ClearText)
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <h4 className="mb-3 my-3" style={FormHeadingStyle}>{props.heading}</h4>
                        <Form.Control as="textarea" rows={8} value={text} onChange={handleOnChange} />
                    </Form.Group>
                </Form>

                <Table>
                    <tbody>

                        {/* ****** START ****** */}
                        <tr>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleUpperCase}>
                                        Convert To Upper Case
                                    </Button>
                                </div>
                            </td>                                                                           
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleLowerCase}>
                                        Convert To Lower Case
                                    </Button>
                                </div>
                            </td>                                                                           
                        </tr>
                        {/* ****** END ****** */}

                        {/* ****** START ****** */}

                        <tr>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleReverseCase}>
                                        Reverse All
                                    </Button>
                                </div>
                            </td>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleCopyCase}>
                                        Copy Text
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        
                        {/* ****** END ****** */}                        

                        {/* ****** START ****** */}

                        <tr>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleExtraSpaceCase}>
                                        Remove Extra Space
                                    </Button>
                                </div>
                            </td>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="sg" onClick={handleCapitalizeFirstLetter}>
                                        Capitalize First Letter
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        
                        {/* ****** START ****** */}

                        <tr>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="info" size="sg" onClick={handleRemoveExtraLineCase}>
                                        Remove Extra Line
                                    </Button>
                                </div>
                            </td>                            
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="info" size="sg" onClick={handleRemovePuctuationCase}>
                                        Remove Punctuation Marks
                                    </Button>
                                </div>
                            </td>                            
                        </tr>
                        {/* ****** END ****** */}                        

                    </tbody>
                </Table>

                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-grid gap-2">
                                    <Button variant="danger" size="sg" onClick={handleClearFormCase}>
                                            Clear Form
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>       

                <Card>

                    <Card.Header as="h5">Summary</Card.Header>

                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{text.split(" ").length}</td>
                                    <td>Words</td>
                                </tr>
                                <tr>
                                    <td>{text.length}</td>
                                    <td>Characters</td>
                                </tr>
                                <tr>
                                    <td>{0.008 * text.split(" ").length}</td>
                                    <td>Minutes To Read</td>
                                </tr>
                            </tbody>
                        </Table>                        
                    </Card.Body>
                    
                </Card>         

            </Container>   
        </>
    )
}
