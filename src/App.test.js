import AppWrapped from "./App";
import ReactDOM from 'react-dom/client';

it('Correct App Component render', ()=>{
    const div = document.createElement("div")
    const root = ReactDOM.createRoot(div)
    root.render(<AppWrapped/>)
    root.unmount()
})