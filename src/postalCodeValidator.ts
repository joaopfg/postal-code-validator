import { Country } from "./country";
import { countryRegexMap } from "./countryRegex";

export function countryHasPostalCodeSystem(country: Country): boolean {
    return countryRegexMap.has(country);
}

export function isValidCountryPostalCode(postalCode: string, country: Country): boolean {
    if (!countryHasPostalCodeSystem(country)) {
        throw new Error(`The country ${country} doesn't have a postal code system`);
    }

    const regex = countryRegexMap.get(country);
    const postalRegex = new RegExp(regex as string);
    return postalRegex.test(postalCode);
}

export function isValidPostalCode(postalCode: string): boolean {
    for (const country of Object.values(Country)) {
        if (countryHasPostalCodeSystem(country) && isValidCountryPostalCode(postalCode, country)) {
            return true;
        }
    }

    return false;
}