import fs from 'fs'

const contactPath = './data/contacts.json'
if(!fs.existsSync(contactPath)) {
    fs.mkdirSync('./data')
    fs.writeFileSync(contactPath, '[]')
}

const loadContact = () => {
    const contacts = JSON.parse(fs.readFileSync(contactPath, 'utf-8'))
    return contacts
}

const findContact = name => {
    const contacts = loadContact()
    const contact = contacts.find(contact => contact.name == name)
    return contact
}

const saveContact = contact => {
    fs.writeFileSync(contactPath, JSON.stringify(contact, '', '    '), err => {
        if (err) throw err
    })
}

const addContact = data => {
    const contacts = loadContact()
    contacts.push(data)
    saveContact(contacts)
}

const editContact = data => {
    console.log(data)
    const contacts = loadContact()
    const filteredContact = contacts.filter(contact => contact.name !== data.oldName)
    delete data.oldName
    filteredContact.push(data)
    saveContact(filteredContact)
}

const deleteContact = name => {
    const contacts = loadContact()
    const filteredContact = contacts.filter(contact => contact.name !== name)
    saveContact(filteredContact)
}

const checkDuplicateName = name => {
    const contacts = loadContact()
    return contacts.find(contact => contact.name == name)
}

export {loadContact, findContact, saveContact, addContact, editContact, deleteContact, checkDuplicateName}