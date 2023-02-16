import {render} from "../src/component";

describe("component",()=>{
    it("renders p", ()=>{
        const element = render();
        const style = window.getComputedStyle(element);

        expect(element.tagName).toBe('P');
        expect(style.color).toBe('green');
    })
})