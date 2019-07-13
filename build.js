'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white.bold('Meraj Sahebdar'),
  handle: chalk.white('itsdrewstiles'),
  work: chalk.white('Linux & Web Developer, Self-Taught Software Engineer'),
  github: chalk.gray('https://github.com/') + chalk.cyan('itsdrewstiles'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('itsdrewstiles'),
  instagram: chalk.gray('https://instagram.com/') + chalk.cyan('itsdrewstiles'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('itsdrewstiles'),
  labelWork: chalk.white.bold('     Work:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelTwitter: chalk.white.bold('  Twitter:'),
  labelInstagram: chalk.white.bold('Instagram:'),
  labelLinkedIn: chalk.white.bold(' LinkedIn:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} — ${data.handle}`
const messege = chalk.white('Hello World!')
const caption = chalk.white('It\'s a 26 y.o. Linux/Web Developer from Iran.')
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const instagramming = `${data.labelInstagram}  ${data.instagram}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading +
               newline + newline +
               messege + newline +
               caption + newline +
               newline + newline +
               working + newline +
               githubing + newline +
               twittering + newline +
               instagramming + newline +
               linkedining + newline

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))
