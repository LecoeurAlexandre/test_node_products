const addPropertiesToObject = (object, otherProperties) => {
    return {
        ...object.get({ plain: true }),
        ...otherProperties
    };
};

module.exports = {
    addPropertiesToObject
};