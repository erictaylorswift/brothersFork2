import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import {hipster} from 'react-icons-kit/icomoon/hipster';
import {baffled} from 'react-icons-kit/icomoon/baffled';
import {crying} from 'react-icons-kit/icomoon/crying';
import {tongue} from 'react-icons-kit/icomoon/tongue';
import {wink} from 'react-icons-kit/icomoon/wink'



const SideIconContainer =
    withBaseIcon({ size: 43, style: {color: '#D81B60'}})

export const Hipster = () => <SideIconContainer icon={hipster}/>
export const Baffled = () => <SideIconContainer icon={baffled}/>
export const Crying = () => <SideIconContainer icon={crying}/>
export const Tongue = () => <SideIconContainer icon={tongue}/>
export const Wink = () => <SideIconContainer icon={wink}/>
