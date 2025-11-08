const dataCache = new Map();

const expensiveTask = (id) => {
    console.log("Ran the expensive task for:", id);
    return { id: id, data: `some data for id: ${id}`, timestamp: new Date().getTime() };
};

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("returned from cache");
        return dataCache.get(id)
    }
    console.log("cache missed")
    const data = expensiveTask(id);
    dataCache.set(id, data);
    console.log('added to cache')
    return data;
}
console.log(getData(123));
console.log(getData(123));