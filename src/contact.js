const showContact = () =>{
  const contact = document.createElement('div');
  contact.setAttribute("id", "tab");
  contact.innerHTML = "Contact here"
  document.body.appendChild(contact);
}

export default showContact;
