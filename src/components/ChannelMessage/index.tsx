import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
}

export default function ChannelMessage(props: Props){
    return (
        <Container className={props.hasMention ? 'mention' : ''}>
            <Avatar className={props.isBot ? 'bot' : ''}/>

            <Message>
                <Header>
                    <strong>{props.author}</strong>

                    {props.isBot && <span>Bot</span>}

                    <time>{props.date}</time>
                </Header>
                <Content>{props.content}</Content>
            </Message>
        </Container>
    ) 
};


