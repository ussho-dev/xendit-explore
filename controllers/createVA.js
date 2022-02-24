const x = require('../config');

const VirtualAcc = x.VirtualAcc;
const va = new VirtualAcc({});

module.exports = async (req, res) => {
    try {
        const fixedAcc = await va.createFixedVA(req.body);
        
        return res.json(fixedAcc);
    } catch (e) {
        return res.json(e);
    }
};