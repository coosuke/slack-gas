function helloWorld() {
  var url = 'https://hooks.slack.com/services/++++++++++++++++++++++++++'; //Incoming Webhook URL of Slack
  var params = {
    method: 'post',
    contentType: 'application/json',
    payload: '{"text":"Hello, World!"}'
  };
 
  UrlFetchApp.fetch(url, params); 
}
