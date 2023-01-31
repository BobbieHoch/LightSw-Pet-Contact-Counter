import { Contact}from "../../interfaces/Contact" 


interface ContactCardProps{
    contact:Contact
}



function ContactCard(props:ContactCardProps) {
    return (
        <div className="ContactCard">
        <p>First Name: {props.contact.firstName}</p>
        <p>Last Name: {props.contact.lastName}</p>
        <p>Phone Number: {props.contact.mobile}</p>

        </div>
    )
}

export default ContactCard