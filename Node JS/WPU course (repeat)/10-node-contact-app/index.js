import yargs from "yargs/yargs"
import {hideBin} from 'yargs/helpers'
const argv = yargs(hideBin(process.argv))
argv.command('add', 'Add new contact', () => {}, argv => {
    console.log(argv.name)
})

argv.parse()