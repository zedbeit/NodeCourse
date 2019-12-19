const fs = require('fs')
const chalk = require('chalk')

const addNote = function(title, body) {
	const notes = loadNotes()

	const duplicateNotes = notes.filter(function(note){
		return note.title === title
	})
	
	if(duplicateNotes.length === 0){
		notes.push({
			title: title,
			body: body
		})	
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added!'))
	}
	else{
		console.log(chalk.red.inverse('Note title taken!'))
	}
}
const loadNotes = function(){
	try{
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON) 
	} catch(e) {
		return []
	}	
}
const saveNotes = function(notes){
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json',dataJSON)
}
const removeNote = function(title) {
	const notes = loadNotes()
	const length = notes.length
	const notesToKeep = notes.filter( function(note) {
		return note.title !== title
	})
	if(notesToKeep.length === length) {
		console.log(chalk.red.inverse('No note found!'))
	}
	else{
		console.log(chalk.green.inverse('Note removed!'))
		saveNotes(notesToKeep)
	}
}
module.exports = {
	addNote: addNote,
	removeNote: removeNote
}