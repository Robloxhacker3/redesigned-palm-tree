// Simple API endpoint for search
// Place this in a Node-compatible serverless environment (or in your VPS under /api/search)
// Query: /api/search?query=term
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
  const q = (req.query && req.query.query) ? String(req.query.query).toLowerCase() : '';
  if (!q) return res.status(400).json([]);
  const results = scriptsDB.filter(s => (s.name && s.name.toLowerCase().includes(q)) || (s.description && s.description.toLowerCase().includes(q)));
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(results);
};
