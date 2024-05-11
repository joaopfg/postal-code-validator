import {
  countryHasPostalCodeSystem,
  isValidPostalCode,
  isValidCountryPostalCode,
} from '../src/postalCodeValidator';
import {
  CountryWithNoPostalCode,
  CountryWithPostalCode,
  castCountryWithNoPostalCode,
  castCountryWithPostalCode,
  validPostalCodes,
  invalidPostalCodes,
  validPostalCodesArray,
  invalidPostalCodesArray,
} from './utils';

describe('countryHasPostalCodeRules', () => {
  test.each(Object.keys(CountryWithNoPostalCode))(
    'should return false for %s',
    (countryKey) => {
      const country =
        CountryWithNoPostalCode[
          countryKey as keyof typeof CountryWithNoPostalCode
        ];
      expect(
        countryHasPostalCodeSystem(castCountryWithNoPostalCode(country))
      ).toBe(false);
    }
  );

  test.each(Object.keys(CountryWithPostalCode))(
    'should return true for %s',
    (countryKey) => {
      const country =
        CountryWithPostalCode[countryKey as keyof typeof CountryWithPostalCode];
      expect(
        countryHasPostalCodeSystem(castCountryWithPostalCode(country))
      ).toBe(true);
    }
  );
});

describe('isValidCountryPostalCode', () => {
  test.each(validPostalCodes)(
    'returns true for valid postal code in specified country',
    (entry) => {
      const result = isValidCountryPostalCode(entry.postalCode, entry.country);
      expect(result).toBe(true);
    }
  );

  test.each(invalidPostalCodes)(
    'returns false for invalid postal code in specified country',
    (entry) => {
      const result = isValidCountryPostalCode(entry.postalCode, entry.country);
      expect(result).toBe(false);
    }
  );
});

describe('isValidPostalCode', () => {
  test.each(validPostalCodesArray)(
    'should return true for %s',
    (postalCode) => {
      const result = isValidPostalCode(postalCode);
      expect(result).toBe(true);
    }
  );

  test.each(invalidPostalCodesArray)(
    'should return false for %s',
    (postalCode) => {
      const result = isValidPostalCode(postalCode);
      expect(result).toBe(false);
    }
  );
});
