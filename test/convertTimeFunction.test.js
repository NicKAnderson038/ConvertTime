const calc = require('../components/convertTimeFunction')

describe(`Calculation tester`, () => {

    test(`The calc exists`, () => {
      expect(calc.convertTimeFunction).toBeTruthy();
    });

    test('calc to convert to 24 PM time', () => {
        expect(calc.convertTimeFunction('01:45:15PM')).toBe("13:45:15");
    });
      
    test('calc to convert to 24 AM time', () => {
        expect(calc.convertTimeFunction('07:45:15AM')).toBe("07:45:15");
    });


})
