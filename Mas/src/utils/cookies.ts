/* eslint-disable @typescript-eslint/no-explicit-any */

import type { CardList, KeySearchEnum } from "../pages/SharedTypes";


export function setCookie(cname: string, cvalue?: string, clear?: boolean) {
  const d = new Date();
  let expires: string;
  d.setTime(d.getTime() + 23 * 60 * 60 * 1000);
  if (clear) {
    expires = 'expires= Thu, 01 Jan 1970 00:00:00 GMT';
  } else {
    expires = `expires=${d.toUTCString()}`;
  }
  console.log(expires, 'expires', cname);
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

export function getCookie(cname: string) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function checkTokenCookie() {
  const token = getCookie('token');
  if (token !== '') {
    return true;
  }
  return false;
}
export function removeCookie(name: string) {
  document.cookie = `${name}"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"`;
}

export function setCookieNewFeature(value: string, days: number) {
  // const tokenF = getCookie('displayFeature');
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `displayFeature=${value}; ${expires}; path=/`;
}

export function closeFeature() {
  document.cookie =
    'displayFeature=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export function checkCookieFeature() {
  const displayFeature = getCookie('displayFeature');
  if (displayFeature !== '' && displayFeature === 'true') {
    return true;
  }
  return false;
}
// Usage example:
// setCookieNewFeature('username', 'JohnDoe', 7); // Set cookie to expire in 7 days

export function incrementVisitByTitle(title: string, STORAGE_KEY: string) {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return;

  const list: CardList[] = JSON.parse(stored);
  const updated = list.map((item) =>
    (item.title === title
      ? { ...item, visitNumber: (item.visitNumber ?? 0) + 1 }
      : item),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function changeLocalStorageFilterKey(
  keySearchEnum: KeySearchEnum,
  STORAGE_KEY: string,
) {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return;

  const list: any[] = JSON.parse(stored);
  const updated = list.map((res) => ({
    ...res,
    isSelected: res.key === keySearchEnum,
    orderAsc: !res.orderAsc,
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
