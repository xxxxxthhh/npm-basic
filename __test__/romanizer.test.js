import {transform} from "../src/romanizer";

describe("romanizer test",() => {
    it('should return 10 when input 10', function () {
        expect('X').toEqual(transform(10));
    });
})