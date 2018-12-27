const calc = require('../components/convertTimeFunction')

describe(`Time Converter Calculation Tester`, () => {

    test(`The time calc function exists`, () => {
      expect(calc.convertTimeFunction).toBeTruthy();
    });

    test('time calc convert to 24 PM', () => {
        expect(calc.convertTimeFunction('01:45:15PM')).toBe("13:45:15");
    });
      
    test('time calc convert to 24 AM', () => {
        expect(calc.convertTimeFunction('07:45:15AM')).toBe("07:45:15");
    });


})
