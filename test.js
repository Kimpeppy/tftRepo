import { RiotApi, Constants } from 'twisted';

const api = new RiotApi();

export async function getAccount() {
  try {
    // Recommended to use the nearest routing value to your server: americas, asia, europe
    const result = await api.Account.getByRiotId("Kimpeppy", "NA1", Constants.RegionGroups.AMERICAS);
    return result.response;
  } catch (error) {
    console.error('Error during API call:', error);
    throw error; // Re-throw the error to be handled by the caller if needed
  }
}

// Using async/await
async function fetchData() {
  try {
    const accountData = await getAccount();
    console.log(accountData);
  } catch (error) {
    // Handle errors here if needed
  }
}

const accountData = await getAccount();
console.log(accountData);
