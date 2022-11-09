import React from "react";

export const Old_storeContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <Old_storeContext.Provider value={props.store}>
            {props.child}
        </Old_storeContext.Provider>
    )
}