class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}
function promptContactInfo() {
    let name = prompt("Enter contact name:");
    let address = prompt("Enter contact address:");
    let phone = prompt("Enter contact phone number:");
    return new Contact(name, address, phone);
}


function sortContactsByName(contacts) {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
}


function main() {
    let contacts = [];

    while (contacts.length < 10) {
        let contact = promptContactInfo();
        contacts.push(contact);

        let addMore = confirm("Do you want to add more contacts?");
        if (!addMore) break;
    }

    if (contacts.length === 10) {
        console.log("Maximum number of contacts reached (10).");
    }

    sortContactsByName(contacts);

    console.log("Sorted Contacts:");
    contacts.forEach(contact => {
        console.log(`Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}`);
    });
}


main();