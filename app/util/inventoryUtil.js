const defineInventoryStatus = (quantity) => { 
    switch(true) {
        case quantity === 0:
            return {inventoryStatus: "OUTOFSTOCK"};
        case quantity < 10:
            return {inventoryStatus: "LOWSTOCK"};
        default:
            return {inventoryStatus: "INSTOCK"}
    }
};

module.exports = {
    defineInventoryStatus
};