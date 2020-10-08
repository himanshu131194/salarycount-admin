import mongoose from 'mongoose'
import redis from 'redis'
import util from 'util'
import CONFIG from '../../config';

const client = redis.createClient(CONFIG.REDIS.URL);
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;
const execAgre = mongoose.Aggregate.prototype.exec;


mongoose.Query.prototype.cache = function(options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    
    return this;
};

mongoose.Query.prototype.exec = async function() {
    console.log("this is inside exec")
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  // See if we have a value for 'key' in redis
  const cacheValue = await client.hget(this.hashKey, key);

  // If we do, return that
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    console.log("its coming form cache");
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }
  console.log("its coming form db");

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);

  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);

  return result;
};

mongoose.Aggregate.prototype.cache = function(options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    return this;
};

mongoose.Aggregate.prototype.exec = async function() {
    if (!this.useCache) {
        return execAgre.apply(this, arguments);
    }    
    console.log(this._model.collection.collectionName);
    let pipeline = this.pipeline();
    const key = JSON.stringify([...pipeline, { collection: this._model.collection.name }]);
    console.log(key);
    const cacheValue = await client.hget(this.hashKey, key);
    // If we do, return that
    if (cacheValue) {
        const doc = JSON.parse(cacheValue);
        console.log("its coming form cache");
        return doc;
    }
    console.log("its coming form db");
    // Otherwise, issue the query and store the result in redis
    const result = await execAgre.apply(this, arguments);  
    client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);
    return result;
};

export default { 
    clearHash: ()=>{
        client.del(JSON.stringify(hashKey));
    }
}
