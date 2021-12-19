import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

export function UserRow(props: UserProps) {
    return (
        <User>
            <Avatar className={props.isBot ? 'bot' : ''}/>

            <strong>{props.nickname}</strong>

            {props.isBot && <span>Bot</span>}
        </User>
    )
}

export default function UserList() {
    return (
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickname="guii" />

            <Role>Offline - 10</Role>

            <UserRow nickname="Jóbson" isBot/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
        </Container>
    ) 
};


