const pushups = [];

async function index(req, res) {
    res.json(pushups);
}

async function show(req, res) {
    let { id } = req.params;
    res.json(pushups[id]);
}

async function create(req, res) {
    const { challenger_name, number_pushups, time_interval } = req.body;
    pushups.push({ challenger_name, number_pushups, time_interval });
    
    res.json(pushups[pushups.length - 1]);
}

module.exports = {
    index,
    show,
    create
}