const fs = require('fs').promises;
const path = require('path');

const TASKS_FILE = path.join(__dirname, '../../tasks.json');

class Database {
  async readTasks() {
    try {
      const data = await fs.readFile(TASKS_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  async writeTasks(tasks) {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
  }
}

module.exports = new Database();