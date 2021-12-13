import React, { useRef, useEffect} from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    })
    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(20).keys()).map((n) => (
                    <ChannelMessage
                    author="guii"
                    date="13/12/2021"
                    content="Meu primeiro UI Clone!"
                />
                ))}
                <ChannelMessage
                    author="Pietra"
                    date="13/12/2021"
                    content={
                        <>
                            <Mention>@guii</Mention>, como faz pra ser lindo igual você?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    ) 
};

export default ChannelData;

