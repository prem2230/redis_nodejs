// Redis -----------
// 1. WHAT IS REDIS?
// - In-memory data structure store
// - Used as database, cache, message broker
// - Key-value store with rich data types
// - Single-threaded but extremely fast
// - Supports persistence, replication, clustering

// 2. WHY USE REDIS?
// - Speed: In-memory operations are very fast
// - Versatility: Supports various data structures
// - Scalability: Easy to scale with clustering
// - Simplicity: Simple commands and easy to use
// - Community: Large ecosystem and support

//Basic Commands

//SET key value - //SET color red         // Set the value of a key
//GET key                                // Get the value of a key
//SET color red XX                     // Set the value only if the key does not exist
//SET color red NX                     // Set the value only if the key exists
//SET color red EX 10                  // Set the value with an expiration time of 10 seconds
//SET color red PX 10000                // Set the value with an expiration time of 10000 milliseconds
//SET color blue EXAT 1672531199      // Set the value with an expiration time at a specific Unix timestamp
//SET color green PXAT 1672531199000   // Set the value with an expiration time at a specific Unix timestamp in milliseconds
//SET color yellow KEEPTTL             // Set the value while keeping the existing TTL (time to live)
//SETEX color 10 red                  // Set the value of a key with an expiration time of 10 seconds
//SETNX color red                    // Set the value of a key only if it does not exist
//MSET color orange                    // Set the value of a key and return its old value. set multiple keys
//MGET color model                    // Get the values of multiple keys
//MSETNX color purple                 // Set the value of a key only if it does not exist. set multiple keys if not exist
//DEL color                           // Delete a key
//GETRANGE color 0 2                // Get a substring of the value of a key
//SETRANGE color 0 "bl"             // Overwrite part of the value of a key starting at the specified offset
//INCR age                           // Increment the integer value of a key by one
//DECR age                           // Decrement the integer value of a key by one
//INCRBY age 5                       // Increment the integer value of a key by the given amount
//DECRBY age 3                       // Decrement the integer value of a key by the given amount
//INCRBYFLOAT age 2.5                 // Increment the float value of a key by the given amount
//INCRBYFLOAT age -1.5                // Decrement the float value of a key by the given amount
//STRLEN color                       // Get the length of the value of a key
//APPEND color "ish"                 // Append a value to a key

// 3. REDIS DATA TYPES
// - Strings: Simple key-value pairs
        /*
        SET name "John"
        GET name
        INCR counter          - Increment number
        DECR counter          - Decrement number
        APPEND key value      - Append to string
        STRLEN key            - Get string length
        */
// - Lists: Ordered collections of strings
        /*
        LPUSH mylist "item1"  - Add to left
        RPUSH mylist "item2"  - Add to right
        LPOP mylist           - Remove from left
        RPOP mylist           - Remove from right
        LRANGE mylist 0 -1    - Get all items
        LLEN mylist           - Get list length
        */
// - Sets: Unordered collections of unique strings
        /*
        SADD myset "value1"   - Add to set
        SREM myset "value1"   - Remove from set
        SMEMBERS myset        - Get all members
        SISMEMBER myset "val" - Check membership
        SCARD myset           - Get set size
        */
// - Hashes: Key-value pairs within a key - nested key-value pairs
        /*
        HSET user:1 name "John" age 30  - Set fields
        HGET user:1 name      - Get field value
        HGETALL user:1        - Get all fields
        HDEL user:1 age       - Delete field
        HEXISTS user:1 name   - Check field exists
        DEL user:1            - Delete entire hash
        HDEL user:1 name age - Delete multiple fields
        HINCRBY user:1 age 1  - Increment field value
        HINCRBYFLOAT user:1 score 1.5 - Increment float field value
        HINCRBY user:1 visits -1 - Decrement field value
        HINCRBYFLOAT user:1 rating -0.5 - Decrement float field value
        HSTRLEN user:1 name - Get length of field value
        HKEYS user:1 - Get all field names
        HVALS user:1 - Get all field values
        HLEN user:1 - Get number of fields
        */
// - Sorted Sets: Sets with a score for ordering
        /*
        ZADD leaderboard 100 "player1"
        ZRANGE leaderboard 0 -1 WITHSCORES
        ZRANK leaderboard "player1"
        ZREM leaderboard "player1"
        */
// - Bitmaps: Efficient storage of bits
// - HyperLogLogs: Probabilistic data structure for counting unique items
// - Streams: Log-like data structure for messaging
// - Geospatial Indexes: Store and query geospatial data

// 4. BASIC REDIS COMMANDS
// - SET key value: Set the value of a key
// - GET key: Get the value of a key
// - DEL key: Delete a key
// - EXISTS key: Check if a key exists
// - KEYS pattern: Find all keys matching a pattern
// - FLUSHALL: Remove all keys from all databases
// - EXPIRE key seconds: Set a timeout on a key
// - TTL key: Get the time to live of a key
// - INCR key: Increment the integer value of a key
// - DECR key: Decrement the integer value of a key