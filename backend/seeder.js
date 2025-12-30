const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Analytics = require('./models/Analytics'); 

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const sampleData = [
  { label: 'Jan', value: 400, category: 'Revenue' },
  { label: 'Feb', value: 700, category: 'Revenue' },
  { label: 'Mar', value: 1200, category: 'Revenue' },
  { label: 'Apr', value: 900, category: 'Revenue' },
  { label: 'May', value: 1500, category: 'Revenue' },
  { label: 'Jun', value: 1800, category: 'Revenue' },
  { label: 'Active Users', value: 1250, category: 'KPI' },
  { label: 'New Signups', value: 320, category: 'KPI' }
];

const importData = async () => {
  try {
    await Analytics.deleteMany();
    
    await Analytics.insertMany(sampleData);

    console.log(' Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

importData();