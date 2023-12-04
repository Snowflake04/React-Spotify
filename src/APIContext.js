import { createContext, useContext } from 'react';

const data = {
  baseURL: 'https://corsproxy.io/?https://api-v2.soundcloud.com/',
  clientId: 'p6P1SBAGjAk2DsXC4aZogH5BmoR7epWS',
  Authorization: 'OAuth 2-294516-982792804-8duMRDvxiP829q',
};
const APIContest = createContext();

export function GetAPI() {
  return useContext(APIContest);
}
export const APIProvider = ({ children }) => {
  return <APIContest.Provider value={data}>{children}</APIContest.Provider>;
};
