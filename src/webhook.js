({ http_event }) => {
  let qs = require('qs.js');
  let body = qs.parse(http_event.parsed_body);
  let recipient = body.From;
  let event = api.run('this.get_event', {location: body.Body.trim()});
  if (event.length < 1 || event == undefined) {
    let message = 'Sorry, no events in your area. 😞\n\nFrom your friends at transposit.com';
    api.run('this.send_message', {recipient: recipient, message: message});
  }
  else {
    let message = `🏳️‍🌈 ${event[0].title}, ${event[0].date}: ${event[0].url} 🏳️‍🌈\n\nFrom your friends at transposit.com`;
    api.run('this.send_message', {recipient: recipient, message: message});
  }
  return { status_code: 200 };
}
