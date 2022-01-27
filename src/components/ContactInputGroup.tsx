import React, { FormEvent, useState } from "react";
import styled from 'styled-components';
import { gql, useMutation } from "urql";

const Div = styled.div`
    max-width: 563px;

    @media screen and (max-width: 680px) {
        width: 90%;
    }
`

const Span = styled.span`
    margin-bottom: 1rem;

    height: 58px;

    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 130%;

    color: #3E3E3E;
`

const Input = styled.input`
    margin-top: 1rem;
    padding: 2rem;

    width: 100%;
    height: 93px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;

    color: #2D2D2D;

    ::placeholder {
        font-family: Apercu Arabic Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;

        color: #2D2D2D;
    }
`

const TextArea = styled.textarea`
    margin-top: 1rem;
    padding: 2rem;

    width: 100%;
    height: 189px;

    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    border-radius: 10px;

    color: #2D2D2D;

    resize: none;

    ::placeholder {
        font-family: Apercu Arabic Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 180%;

        position: relative;
        top: -9px;

        color: #2D2D2D;
    }
`

const Button = styled.button`
    margin-top: 1rem;

    width: 218px;
    height: 73px;

    background: #FAD34F;
    border: none;
    border-radius: 500px;

    font-family: Apercu Arabic Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;

    color: #FFFFFF;;

    @media screen and (max-width: 680px) {
        width: 100%;
    }
`

const ContactMutation = gql`
    mutation CreateContact($input: ContactInput!){
        createContact(input: $input) {
            id
            name
            email
            message
        }
    }
`

export const ContactInputGroup: React.FC = ({ }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [state, executeMutation] = useMutation(ContactMutation)

    const sendContact = (event: FormEvent) => {
        event.preventDefault();
        const input = {
            name,
            email,
            message,
        }
        executeMutation({ input });
    }

    return (
        <>
            <Div>
                <form onSubmit={sendContact}>
                    <Span>Reach out to us!</Span>
                    <Input
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your name*" />
                    <Input
                        name="email"
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email*" />
                    <TextArea
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Your message*" />
                    <Button disabled={state.fetching} type="submit">Send message</Button>
                </form>
            </Div>
        </>
    )
}
