function storeData(dataType, data) {

    if (!data) {
        const outputData = localStorage.getItem(dataType);
    
        return JSON.parse(outputData);
    }

    localStorage.setItem(dataType, JSON.stringify(data))
}

export default storeData;
