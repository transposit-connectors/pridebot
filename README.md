# PrideBot

A Twilio bot that sends you info on the sooner pride even in a given city. Read the [blog post](https://www.transposit.com/blog/2019.06.28-pridebot/) we wrote about it to learn more!

This bot uses a custom scraper made in apify to _specifically_ scrape https://www.nighttours.com/gaypride/ for their events. The code for this scraper can be found [here](https://gist.github.com/WingofaGriffin/83f1df1987a5ec39f5a5b38c5d5ce1d0).

`get_event`: A call to pull the items from the apify dataset generated by our scraper.

`send_message`: A Twilio call to send a text message from our bot.

`update_events`: An scheduled task that runs our apify task to re-scrape the website weekly in order to update the dataset.

`webhook`: The operation that listens for Twilio to tell us it received a message, and then run the operations to reply.

## Expansion Ideas

This is an example of a Twilio text bot that uses Apify to scrape data. An easy way to make it your own is to change the scraper to a different schedule, or list that you want to sort through.

[Click here to find more examples using Transposit!](https://www.transposit.com/apps/)
