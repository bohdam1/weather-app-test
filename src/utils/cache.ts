export const setCache = (key: string, data: any, ttlMinutes = 5) => {
    const expiry = new Date().getTime() + ttlMinutes * 60000;
    localStorage.setItem(key, JSON.stringify({ data, expiry }));
  };
  
  export const getCache = (key: string) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
  
    const { data, expiry } = JSON.parse(cached);
    if (new Date().getTime() > expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return data;
  };