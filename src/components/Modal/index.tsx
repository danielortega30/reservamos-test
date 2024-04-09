import React, { FC, ReactNode } from 'react';
import './index.css';


export interface Props{
  children: ReactNode
}

export const Modal:FC<Props> = ({children}) => {
  return (
    <div className="modal">
            <div className="modal__children">
               { children }
            </div>
        </div>
  )
}
