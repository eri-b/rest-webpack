const showContact = () =>{
  const contact = document.createElement('div');
  contact.setAttribute("id", "tab");
  contact.innerHTML = "For urgent matters call 1-800-948-8488 (US only)<br>For Hut Rewards call 1-844-244-2552 (US only)"
  document.body.appendChild(contact);
}

export default showContact;
