function contact() {
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');
    
    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    contactContent.append(topHomeBorder);
    contactContent.append(bottomHomeBorder);

    return contactContent;
}

export default contact;