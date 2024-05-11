import { Country } from './country';
import { countryRegexMap } from './countryRegex';

export const countryHasPostalCodeSystem = (country: Country): boolean =>
  countryRegexMap.has(country);

export function isValidCountryPostalCode(
  postalCode: string,
  country: Country
): boolean {
  if (!countryHasPostalCodeSystem(country)) {
    throw new Error(`The country ${country} doesn't have a postal code system`);
  }

  const regex = countryRegexMap.get(country);
  const postalRegex = new RegExp(regex as string);
  return postalRegex.test(postalCode);
}

export function isValidPostalCode(postalCode: string): boolean {
  let isValid = false;

  Object.values(Country).forEach((country) => {
    if (
      countryHasPostalCodeSystem(country) &&
      isValidCountryPostalCode(postalCode, country)
    ) {
      isValid = true;
    }
  });

  return isValid;
}
