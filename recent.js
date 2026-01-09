// Simple API endpoint for recent scripts
const scriptsDB = [
  {
    id: 'a1',
    name: 'Super Speed Script',
    description: 'Makes your character super fast!',
    image: 'https://via.placeholder.com/512x256.png?text=Super+Speed',
    game_link: 'https://roblox.com/games/12345',
    has_key: true,
    downloads: 120,
    created_at: new Date().toISOString(),
    code: '-- lua snippet here'
  },
  {
    id: 'b2',
    name: 'Infinite Jump',
    description: 'Jump infinitely!',
    image: 'https://via.placeholder.com/512x256.png?text=Infinite+Jump',
    game_link: 'https://roblox.com/games/67890',
    has_key: false,
    downloads: 980,
    created_at: new Date(Date.now()-1000*60*60*24).toISOString(),
    code: '-- lua snippet here'
  }
];

module.exports = (req, res) => {
  const limit = Math.min(10, Math.max(1, parseInt(req.query.limit) || 6));
  const sorted = scriptsDB.slice().sort((a,b)=> new Date(b.created_at)-new Date(a.created_at));
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(sorted.slice(0, limit));
};
