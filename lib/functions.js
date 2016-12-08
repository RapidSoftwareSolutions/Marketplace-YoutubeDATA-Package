module.exports.reqError = (obj) => {
    let arr = [];
    for(let key in obj)
        if(!obj[key]) arr.push(key);

    return {
        status_code: 'REQUIRED_FIELDS',
        status_message: 'Please, check and fill in required fields.',
        fields: arr
    }
}

module.exports.parseError = (str) => {
    return {
        status_code: 'JSON_VALIDATION',
        status_message: 'Syntax error. Incorrect input JSON. Please, check fields with JSON input' + (str ? ': ' + str : '.'),
    }
}

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}

module.exports.randomString = () => Math.random().toString(36).substring(10);