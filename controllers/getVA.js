const x = require('../config');

const VirtualAcc = x.VirtualAcc;
const va = new VirtualAcc({});

module.exports = async (req, res) => {
    try {
        const retrievedAcc = await va.getFixedVA({ id: req.params.id });
        
        return res.json(retrievedAcc);
    } catch (e) {
        return res.json(e);
    }
};