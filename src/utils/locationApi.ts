
const getApiKey = (): string => {
  const apiKey = localStorage.getItem('csc_api_key');
  if (!apiKey) {
    throw new Error('API key not found. Please set your Country State City API key.');
  }
  return apiKey;
};

export const setApiKey = (apiKey: string): void => {
  localStorage.setItem('csc_api_key', apiKey);
};

export const clearApiKey = (): void => {
  localStorage.removeItem('csc_api_key');
};

export const hasApiKey = (): boolean => {
  return !!localStorage.getItem('csc_api_key');
};

const createRequestOptions = (): RequestInit => {
  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", getApiKey());

  return {
    method: 'GET',
    headers: headers,
    redirect: 'follow' as RequestRedirect
  };
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
    if (!hasApiKey()) {
      console.error('API key not found');
      return [];
    }

    const response = await fetch("https://api.countrystatecity.in/v1/countries", createRequestOptions());
    
    if (!response.ok) {
      console.error('API Error:', response.status, await response.text());
      return [];
    }
    
    const result = await response.json();
    
    if (Array.isArray(result)) {
      return result;
    } else {
      console.error('API returned non-array data:', result);
      return [];
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

export const fetchStates = async (countryCode: string): Promise<State[]> => {
  try {
    if (!countryCode || !hasApiKey()) {
      return [];
    }
    
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, createRequestOptions());
    
    if (!response.ok) {
      console.error('API Error:', response.status, await response.text());
      return [];
    }
    
    const result = await response.json();
    
    if (Array.isArray(result)) {
      return result;
    } else {
      console.error('API returned non-array data:', result);
      return [];
    }
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};

export const fetchCities = async (countryCode: string, stateCode: string): Promise<City[]> => {
  try {
    if (!countryCode || !stateCode || !hasApiKey()) {
      return [];
    }
    
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, createRequestOptions());
    
    if (!response.ok) {
      console.error('API Error:', response.status, await response.text());
      return [];
    }
    
    const result = await response.json();
    
    if (Array.isArray(result)) {
      return result;
    } else {
      console.error('API returned non-array data:', result);
      return [];
    }
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
