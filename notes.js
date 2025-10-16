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

// - Lists: Ordered collections of strings, not an array but a linked list, implemented as a doubly linked list, useful for time series data, queues, stacks
        /*
        LPUSH mylist "item1"  - Add to left 
        RPUSH mylist "item2"  - Add to right
        LLEN mylist           - Get list length
        LINDEX mylist 0        - Get item at index
        LINDEX mylist -1      - Get last item
        LRANGE temps 0 3    - Get items in range
        LRANGE temps 1 232323232 - Get all items from index 1 to end
        LRANGE temps 0 -1  - Get all items
        LRANGE temps 0 -2 - Get all items except last
        LPOS temps "value" - Get index of item
        LPOS temps 25 RANK 2 - Get index of 2nd occurrence of item
        LPOS temps 25 COUNT 2 - Get index of item with count limit returns array of indexes
        LPOS temps 25 MAXLEN 10 - Get index of item with max length to scan
        LPOP mylist           - Remove from left
        RPOP mylist           - Remove from right
        LSET mylist 0 "newitem" - Set item at index
        LTRIM mylist 0 2     - Trim list to specified range
        LINSERT mylist BEFORE "item2" "item1.5" - Insert before pivot
        LINSERT mylist AFTER "item2" "item2.5"  - Insert after pivot
        LREM mylist 0 "item" - Remove all occurrences of item
        LREM mylist 2 "item" - Remove first 2 occurrences of item
        LREM mylist -2 "item" - Remove last 2 occurrences of item
        */

// - Sets: Unordered collections of unique strings
        /*
        SADD myset "value1"   - Add to set only if not exists
        SMEMBERS myset        - Get all members
        SUNION set1 set2   - Union of sets give all unique members
        SINTER set1 set2   - Intersection of sets give common members
        SDIFF set1 set2    - Difference of sets give members in set1 not in set2
        SUNIONSTORE dest set1 set2 - Store union in new set
        SINTERSTORE dest set1 set2 - Store intersection in new set
        SDIFFSTORE dest set1 set2  - Store difference in new set
        SISMEMBER myset "val" - Check membership (1 if exists, 0 if not)
        SMISMEMBER myset "val1" "val2" - Check multiple memberships (1 if exists, 0 if not) gives array of results
        SCARD myset           - Get set size (number of members)
        SREM myset "value1"   - Remove from set if exists
        SSCAN myset 0 MATCH pattern COUNT 10 - Iterate over set members with pattern matching and count limit
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

// - Sorted Sets: Sets with a score for ordering - a key that points to a data structure that holds unique values ordered by a score
        /*
        ZADD leaderboard 100 "player1" - Add with score (only if not exists)
        ZADD leaderboard 150 "player2" - Add with score (only if not exists)
        ZSCORE leaderboard "player1" - Get score of member
        ZREM leaderboard "player1" - Remove member
        ZCARD leaderboard - Get number of members
        ZCOUNT leaderboard 100 200 - Count members with scores between min and max (0 
        (50 means not including the number
        ZCOUNT leaderboard -inf +inf) - Count all members ex- 15 +inf means all the way to positive infinity
        ZPOPMAX leaderboard - Remove and return member with highest score
        ZPOPMIN leaderboard - Remove and return member with lowest score
        ZINCRBY leaderboard 10 "player2" - Increment score of member
        ZINCRBY leaderboard -5 "player2" - Decrement score of member
        ZRANGE leaderboard 1 2 - Get all members by index range in ascending order
        ZRANGE leaderboard 0 -1 WITHSCORES - Get all members with scores in ascending order
        ZRANGE leaderboard 0 -1 BYSCORE WITHSCORES - Get all members with scores in ascending order by score
        ZRANGE leaderboard 0 2 REV WITHSCORES - Get top N members with scores in descending order
        ZRANGE leaderboard 0 -1 BYSCORE LIMIT 0 10 - Get members with scores in ascending order by score with limit
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

//5.REASON TO STORE AS HASH 
// - The record has many attributes or fields
// - A collection of these records have to be sorted many different ways
// - Often need to access a single record at a time

//6.DONT USE HASH WHEN
// - The record is only for counting or enforcing uniqueness
// - Record stores only one or two attributes
// - Used only for creating relations between different records
// - The record is only used for time series data

//7. SERIALIZATION and DESERIALIZATION
// serialize() - Convert data structure to string for storage
//             - Gets an object ready to go INTO redis as a hash
//             - Removes ID
//             - Turns dates into a queryable format
// deserialize() - Convert string back to original data structure
//               - Formats data coming OUT of redis
//               - Adds ID back in
//               - Parse string numbers into plain numbers
//Date time formats - Unix Time Seconds (1672531199) or Unix Time Milliseconds (1672531199000)

//7. PIPELINES
// - Group multiple commands into a single request
// - Reduces network round-trips
// - Improves performance for bulk operations
// - Example: Using pipelines to set multiple keys at once

//8.SORT COMMAND
// - SORT command operates on lists, sets, and sorted sets
// - SORT can be operates on members in sorted sets not scores
// - SORT books:likes ALPHA - Sorts members of the set "books:likes" alphabetically
// - SORT books:likes LIMIT 1 2 ALPHA - Sorts members of the set "books:likes" alphabetically and returns 2 members starting from index 1
// - SORT books:likes BY books:*->title ALPHA - Sorts members of the set "books:likes" based on the "title" field in the hash "books:<member>"
// - SORT books:likes BY books:*->year - Sorts members of the set "books:likes" based on the "year" field in the hash "books:<member>"
// - SORT books:likes BY books:*->year GET books:*->title - Sorts members of the set "books:likes" based on the "year" field in the hash "books:<member>" and returns the "title" field
// - SORT books:likes BY books:*->year GET books:*->title GET books:*->year - Sorts members of the set "books:likes" based on the "year" field in the hash "books:<member>" and returns both the "title" and "year" fields
// - SORT books:likes BY books:*->year GET # GET books:*->title GET books:*->year - Sorts members of the set "books:likes" based on the "year" field in the hash "books:<member>" and returns the member, "title", and "year" fields
// - SORT books:likes BY nosort GET # GET books:*->title GET books:*->year - Sorts members of the set "books:likes" without sorting and returns the member, "title", and "year" fields. nosort is not presumably a real word but it is a keyword in redis sort command
// - SORT books:likes BY nosort DESC GET # GET books:*->title GET books:*->year - Sorts members of the set "books:likes" without sorting in descending order and returns the member, "title", and "year" fields
// - SORT books:likes BY nosort ASC GET # GET books:*->title GET books:*->year - Sorts members of the set "books:likes" without sorting in ascending order and returns the member, "title", and "year" fields

//9. HYPERLOGLOG
// - Probabilistic data structure for counting unique items
// - Uses fixed amount of memory (12kB) regardless of number of items
// - will not store the actual items, just an approximation of the count
// - Commands:
// - PFADD key item [item ...]: Add items to the HyperLogLog
// - PFCOUNT key [key ...]: Get the approximate count of unique items

//10. ATOMIC OPERATIONS
// - Redis operations are atomic, meaning they are executed as a single, indivisible operation 
// - This ensures data consistency even in concurrent environments
// - Example: INCR command to safely increment a counter, HINCBY to increment a field in a hash, HSETNX to set a field only if it does not exist

//11. TRANSACTIONS
// - Group multiple commands into a single transaction using MULTI and EXEC
// - Ensures all commands are executed atomically
// - Example: Using transactions to transfer funds between accounts
// - Commands:
// - MULTI: Start a transaction
// - EXEC: Execute all commands in the transaction
// - DISCARD: Discard all commands in the transaction
// - WATCH key [key ...]: Watch keys for changes before executing a transaction
// - UNWATCH: Unwatch all keys

//12. LUA SCRIPTING
// - Access sorted sets, lists, hashes, and other data structures
// - LUA scripts written in Lua programming language
// - Write custom scripts in Lua to execute complex operations atomically
// - Scripts are stored and executed on the Redis server
// BASIC SNIPPETS OF LUA SCRIPTS
/*       print("Hello, World!")
        print('Hello world')
        print(123)

        local sum = 1+1
        print(sum)

        if sum > 0 then
        print('sum is greater than 0')
        end

        if sum~=0 then
        print('sum is not equal to 0')
        end

        if sum==0 then
        print('sum is equal to 0')
        end

        if 0 and '' then 
        print('0 is truthy')
        end

        if false or not true then 

        end

        if nil then 
        print('wont run')
        end

        local colors = {'red', 'green', 'blue'}
        print(colors[1])

        print(#colors)

        table.insert(colors, 'orange')
        print(colors[4])

        for i, v in ipairs(colors) do 
        print(i, v)
        end

        for i=5, 10 do
        print(i)
        end

        local user = {id = 'a1', name = 'samanatha'}

        print(user['id'])

        for k, v in pairs(user) do
        print(k,v)
        end
*/
// - Commands:
// - SCRIPT LOAD 'return 1+1' - Load a script into the script cache and return its SHA1 hash
// - EVALSHA sha numkeys - Execute a cached script by its SHA1 hash
// - SCRIPT LOAD 'return 1 + tonumber(ARGV[1])' - Load a script that takes an argument and returns the sum of 1 and the argument
// - EVALSHA sha 0 5 - Execute the cached script with the argument 5, returns 6
// - SCRIPT LOAD 'return redis.call("GET", KEYS[1])' - Load a script that gets the value of a key
// - EVALSHA sha 1 mykey - Execute the cached script with the key "mykey", returns the value of "mykey"
// When to use scripts -
// - Limiting the amount of data exchanged between server + redis
// - Solving some concurrency issues
// - Minimizing the number of round trips between server + redis
//Adding a script with Node - Redis
// - Name of the function like js
// - The script itself
// - # of keys that will be provided (for the EVALSHA command)
// - Instruction on how to pass the arguments to the script (KEYS + ARGV)
// - Instruction on how to parse the response from the script