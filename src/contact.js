const showContact = () => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'tab');
  const contactInfo = document.createTextNode('For urgent matters call 1-800-948-8488 (US only). For Hut Rewards call 1-844-244-2552 (US only)');
  contact.appendChild(contactInfo);
  document.body.appendChild(contact);
};

export default showContact;
