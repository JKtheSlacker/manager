// import { API_ROOT } from '../constants';
// import Request, {
//   setData,
//   setMethod,
//   setParams,
//   setURL,
//   setXFilter
// } from '../request';
import { ResourcePage as Page } from '../types';
import { Firewall, FirewallDevice } from './types';

/**
 * mocked GET firewalls
 */
export const getFirewalls = (
  mockData: Firewall[],
  params: any = {},
  filter: any = {}
): Promise<Page<Firewall>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockData,
        page: 1,
        pages: 1,
        results: mockData.length
      });
    }, 1000);
  }).then((data: any) => {
    return data;
  });
};

export const getFirewallDevices = (
  id: number,
  mockData: FirewallDevice[]
): Promise<Page<FirewallDevice>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: mockData,
        page: 1,
        pages: 1,
        results: mockData.length
      });
    });
  }).then((data: any) => data);
};
