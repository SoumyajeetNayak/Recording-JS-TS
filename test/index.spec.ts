import { add } from "../src";
describe("test", () => {
    it("should test", () => {
        expect(1).toBe(1)
    });
    it("should add", () => {
        expect(add(5,6)).toBe(11);
    })
})