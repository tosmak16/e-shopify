import NodeCache from 'node-cache';

class CacheService {
  constructor() {
    this.cache = new NodeCache({
      stdTTL: 3600, // 1hr
      checkperiod: 3600 * 0.2,
      useClones: false
    });
  }

  // Set a new value for a specific key.
  set(key, result) {
    this.cache.set(key, result);
  }

  get(key) {
    const value = this.cache.get(key);
    if (value) {
      return Promise.resolve(value);
    }
    return Promise.resolve(null);
  }

  // Delete a key from the cache.
  del(keys) {
    this.cache.del(keys);
  }

  // Delete all keys, and flush the cache.

  flush() {
    this.cache.flushAll();
  }
}

export default CacheService;
