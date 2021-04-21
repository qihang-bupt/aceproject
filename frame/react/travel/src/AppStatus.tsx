import React, {useState} from "react";
interface IContextValue {
    ajaxname: string
    shoppingCart: {
        items: {id: string, name: string}[]
    }
}
const defaultContextValue:IContextValue = {
    ajaxname: '药品订单22',
    shoppingCart: {
        items: []
    }
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContext = React.createContext<undefined |  React.Dispatch<React.SetStateAction<IContextValue>>>(undefined)


export const AppStateProvider: React.FC = (props) => {
    const { children } = props;
    const [ state, setState ] = useState(defaultContextValue)
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
            {children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    )
}


