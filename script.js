// Utility Functions
function getInputValue(id) {
    return document.getElementById(id).value.trim();
  }
  
  function isValidCountrySearch(searchValue) {
    return /^[A-Za-z ]{1,20}$/.test(searchValue);
  }
  
  function isValidCurrencySearch(searchValue) {
    return /^[A-Z]{3}$/.test(searchValue);
  }
  
  function searchByField(field, searchValue) {
    return countries.filter((country) =>
      country[field].toLowerCase().includes(searchValue.toLowerCase())
    );
  }
  
  // Core Filtering Functions
  function filterCountriesByName() {
    const searchValue = getInputValue('searchByName');
  
    if (isValidCountrySearch(searchValue)) {
      const matchingCountries = searchByField('name', searchValue);
      displayResults(matchingCountries);
    } else {
      alert('Please make sure your search only has less than 20 english characters for the country name.');
    }
  }
  
  function filterCountriesByCurrency() {
    const searchValue = getInputValue('searchByCurrency');
  
    if (isValidCurrencySearch(searchValue)) {
      const matchingCountries = searchByField('currency', searchValue.toUpperCase());
      displayResults(matchingCountries);
    } else {
      alert('Please enter exactly 3 capital letters for the currency.');
    }
  }
  
  // Display Function
  function displayResults(results) {
    if (!results.length) {
      alert('No matching countries found.');
      return;
    }
  
    const resultText = results.slice(0, 5)
      .map((country) => `${country.name} - Currency: ${country.currency}`)
      .join('\n');
  
    alert('Matching countries:\n' + resultText);
  }
  
  function handleEnter(event, filterFunction) {
    if (event.key === 'Enter') {
      filterFunction();
    }
  }


//list of countries with their three letter currency code
const countries = [
    {
      name: 'Canada',
      currency: 'CAD',
    },
    {
      name: 'United States of America',
      currency: 'USD',
    },
    {
      name: 'France',
      currency: 'EUR',
    },
    {
      name: 'Belarus',
      currency: 'BLR',
    },
    {
      name: 'Albania',
      currency: 'ALL',
    },
    {
      name: 'Argentina',
      currency: 'ARS',
    },
    {
      name: 'Japan',
      currency: 'JPY',
    },
    {
      name: 'New Zealand',
      currency: 'NZD',
    },
    {
      name: 'Australia',
      currency: 'AUD',
    },
    {
      name: 'Italy',
      currency: 'EUR',
    },
    {
      name: 'Ireland',
      currency: 'EUR',
    },
    {
      name: 'Kenya',
      currency: 'KES',
    },
    {
      name: 'Jamaica',
      currency: 'JMD',
    },
    {
      name: 'North Korea',
      currency: 'KPW',
    },
    {
      name: 'South Korea',
      currency: 'KRW',
    },
    {
      name: 'Malaysia',
      currency: 'MYR',
    },
    {
      name: 'Nigeria',
      currency: 'NGN',
    },
    {
      name: 'China',
      currency: 'CNY',
    },
    {
      name: 'Mexico',
      currency: 'MXN',
    },
    {
      name: 'Bulgaria',
      currency: 'BGN',
    },

  ];