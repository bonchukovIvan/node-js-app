const Contact = require("../models/contact");
const createPath = require("../helpers/create-path");

const getContact = (req, res) => {
    const title = 'Contacts';
    Contact
        .find()
        .then((contacts) => 
            res.render(createPath('contacts'), { contacts, title }))
        .catch((error) =>{
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        });
};

const redirectContact = (req, res) => {
    res.redirect('/contacts');
};

module.exports = {
    getContact,
    redirectContact,
}