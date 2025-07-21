import { pluck, range } from "./utils";

describe('utils', () => {
    
    describe('range', () => {
        it('should return correct range from 1 to 5', () => {
            expect(range(1, 5)).toEqual([1, 2, 3, 4]);
        });

        it('should return correct range from 44 to 47', () => {
            expect(range(44, 47)).toEqual([44, 45, 46]);
        });
    });

    describe('pluck', () => {
        it('Test', () => {
            const data = [
                { id: 1, name: 'foo' },
                { id: 2, name: 'bar' },
                { id: 3, name: 'ana' },
            ];
            expect(pluck(data, 'name')).toEqual(['foo', 'bar', 'ana']);
        });
    });
    
});
