const ContactItem = props => {
    const {contactDetails} = props
    const {name, mobileNo} = contactDetails
    return (
        <div>
            <ul>
                <li>
                    <h1>{name}</h1>
                    <h1>{mobileNo}</h1>
                </li>
            </ul>
        </div>
    )
}

export default ContactItem;