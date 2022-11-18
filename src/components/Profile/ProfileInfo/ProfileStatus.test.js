import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus Component", ()=>{
    test("Span created",()=>{
        const component = create(<ProfileStatus status="Just checking!"/>)
        const root = component.root
        const span = root.findAllByType("span")
        expect(span).not.toBeNull()
    })

    test("Span created with text",()=>{
        const component = create(<ProfileStatus status="Just checking!"/>)
        const root = component.root
        const span = root.findAllByType("span")
        const spanStatusText = span[0].children[0]
        expect(spanStatusText).toBe("Just checking!")
    })

    // test("Callback should be called",()=>{
    //     const mockCallback = jest.fn()
    //     const component = create(<ProfileStatus status="Just checking!" updateStatus={mockCallback}/>)
    //     const instance = component.getInstance()
    //     instance.deactivateEditMode()
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
})