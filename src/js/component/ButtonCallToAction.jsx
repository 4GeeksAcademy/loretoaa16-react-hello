import React from "react";

export const ButtonCallToAction = () => {
    const action = {
        text: 'Register',
        background: 'success',
    }

    return(
        <button className={`btn btn-${action.background} px-5 mb-5`} type="button">
            {action.text}
        </button>
    )
}