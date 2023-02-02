import { Redis } from "ioredis";
import { promisify } from "util";
const redisClient = new Redis({
  password: "6379",
});
function getRedis(value: string) {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
}
function setRedis(key: string, value: string) {
  const sycnSetRedis = promisify(redisClient.set).bind(redisClient);
  return sycnSetRedis(key, value);
}
export { redisClient, getRedis, setRedis };
