const app = require('./app');
const db = require('./src/models');
require('dotenv').config();


const PORT = process.env.PORT || 3001;


(async () => {
  try {
    await db.sequelize.sync(); // use { force: true } for dev reset
    console.log('Database connected');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
})();
