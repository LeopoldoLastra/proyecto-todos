import React from "react";
import { TodoIcon } from "./index";

function CompleteIcon({completed, onCompleted}){
    return(
        <TodoIcon
        type='check'
        color={completed ? '#4caf50' : 'gray'}
        completed={completed}
        onClick={onCompleted}
        />
    )
}

export {CompleteIcon}