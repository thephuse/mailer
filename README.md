# Mailer

We've all been there. There's no headache quite like the kind that travels through time from the previous century. Let's face it, emailers are a pain.

Enter Mailer: a modern workflow based on Jade and Stylus, that inlines CSS and bundles the whole thing into a distributable folder. It watches your changes using Browser Sync, and can automatically export your emailer for testing in Litmus.

Now you really _can_ party like it's 1999.

## Prerequisites

* node.js > 5.0.0

## Installation

Install dependencies by entering `npm install` into a terminal window and hitting enter

## Build Tools

* `npm run copy` copies all assets from `src/assets` to `dist/assets`
* `npm run build` builds the emailer and drops it in `dist`
* `npm run test` builds the emailer and sends it to Litmus for testing

And the piece de resistance...

* `npm run watch` runs `copy` and `build`, then watches for changes.
    You'll see a code snippet to include in your emailer's `<body>` tag. Just remember to remove it when you're ready to release your emailer.

## Settings

* Copy `settings.example.json` to `settings.json` and change as needs must

## TO DO

* Add an FTP/SFTP capability to upload assets ahead of submission to Litmus
