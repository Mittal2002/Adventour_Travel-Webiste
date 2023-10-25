import "./ContactFormStyles.css";
 function ContactForm() {
   return (
     <div className="form-container">
       <h2 className="Contact_form">Send a message to us!</h2>
       <form>
         <input placeholder="Name" />
         <input placeholder="Email" />
        <input placeholder="Subject" />
         <textarea placeholder="Message" rows="4"></textarea>
         <button>Send Message</button>
       </form>
     </div>
  );
 }
export default ContactForm;