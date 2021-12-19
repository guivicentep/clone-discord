import React from 'react';

import Logo from '../../assets/logo.svg';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

export default function ServerButton(props: Props) {
  return (
      <Button
        isHome={props.isHome}
        hasNotifications={props.hasNotifications}
        mentions={props.mentions}
        className={props.selected ? 'active' : ''}>
          {props.isHome && <img src={Logo} alt="Rocketseat" />}
      </Button>
  )
};
