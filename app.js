
const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

yargs.command({
	command: 'add',
	describe: 'add a note',
	builder:{
		title:{
			describe: 'Add a title',
			demandOption: true,
			type: 'string'
		},
		body:{
			describe: 'Add body for the note',
			demandOption: true,
			type: 'string'
		},
	},
	handler: function(argv){
		notes.addNote(argv.title, argv.body)
	}
})

yargs.parse()