import React from "react";

export const Alert = () => {
    const message = {
        text: 'A simple message',
        style: 'success',
        visible: true
    }

    return (
        <div class={`alert alert-${message.style} ${message.visible ? '' : 'd-none'}`} role="alert">
        {message.text}
        </div>
    ) 
}