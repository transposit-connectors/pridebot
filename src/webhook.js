({ http_event }) => {
  let body = http_event.parsed_body;
  let recipient = body.From;
  // Trim and lowercase all messages for better matching chance
  let event = api.run('this.get_event', {location: body.Body.trim().toLowerCase()});
  // Check for match
  if (event.length < 1 || event == undefined) {
    let message = 'Sorry, no events in that city. 😞\n\nFrom your friends at transposit.com';
    api.run('this.send_message', {recipient: recipient, message: message, sid: env.get("sid"), phonenum: env.get("phonenum")});
  } else {
    let message = `🏳️‍🌈 ${event[0].title}, ${event[0].date}: ${event[0].url} 🏳️‍🌈\n\nFrom your friends at transposit.com`;
    api.run('this.send_message', {recipient: recipient, message: message, sid: env.get("sid"), phonenum: env.get("phonenum")});
  }
  return { status_code: 200, headers: { "Content-Type": "application/xml" } };
}
