let saints = [{
    saint:"Seiya", star: "Pegaso"
},{
    saint:"Hyoga", star: "Cisne"
},{
    saint:"Shiryu", star: "Dragón"
},{
    saint:"Ikky", star: "Fénix"
},{
    saint:"Shun", star: "Andrómeda"
}];

const getSaints = (req, res) => {
    return res.json(saints);
}

const createSaint = (req, res) => {
    saints.push(req.body);
    return res.json(saints);
}

module.exports = {getSaints, createSaint};