import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
}

export default function ChannelButton(props: Props) {
    return (
        <Container className={props.selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{props.channelName}</span>
            </div>
            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container>
    ) 
};