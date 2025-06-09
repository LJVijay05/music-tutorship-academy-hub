
const API_KEY = "API_KEY"; // You'll need to replace this with your actual API key

const headers = new Headers();
headers.append("X-CSCAPI-KEY", API_KEY);

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow' as RequestRedirect
};

export interface Country {
  id: string;
  name: string;
  iso2: string;
}

export interface State {
  id: string;
  name: string;
  country_id: string;
  iso2: string;
}

export interface City {
  id: string;
  name: string;
  state_id: string;
  country_id: string;
}

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

export const fetchStates = async (countryCode: string): Promise<State[]> => {
  try {
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};

export const fetchCities = async (countryCode: string, stateCode: string): Promise<City[]> => {
  try {
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
