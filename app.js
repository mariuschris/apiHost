const express = require('express');
const app = express();

// Define the endpoint
app.get('/api', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Validate slackName and track parameters (you can add more validation)
  if (!slackName || !track) {
    return res.status(400).json({ error: 'Missing parameters slack_name and track' });
  }

  // Get current day and UTC time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  // Construct GitHub URLs
  const githubFileUrl = '';
  const githubRepoUrl = 'https://github.com/mariuschris/apiHost.git';

  // Prepare the response JSON object
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  // Send the response as JSON
  res.json(response);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
