import React from "react"
import g from "glamorous"
import { withPrefix } from "gatsby-link"
import CStyle from "../../components/site.module.scss"
import { Link } from "gatsby"
import NavMenu from '../../components/menu'


// .form -> .labelCSS, .inputCSS, .contact, .contacts, .submit
const ContactForm = () => (
  <g.Form action="https://formspree.io/xeqkgbvp" method="POST">
    
                <div className={CStyle.imagebg}></div>
                
    <input type="hidden" name="_subject" value="Contact Form" />
    <input name="_next" value={withPrefix(`/thanks`)} type="hidden" />
    
    <div >
                <div className={CStyle.formContainer}>
                  

    <g.Div className={CStyle.row}>
    
      <br />
      
      <p style={{fontSize: 1.2 + 'em'}}>
        {/* Please RSVP below  */}
        Formal invitations to be sent out shortly. Once you receive your invitation, please RSVP here. Langdon Hall will send an email 2 weeks prior to the wedding to provide you with a menu selection.

        <br />

      </p>
    </g.Div>
   
    {/* <g.Div  > */}
      {/* <g.Label className={CStyle.labelCSS}  htmlFor="name">
        Name &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="name" id="name" type="text" />
      </g.Div>
      <g.Div className={CStyle.contact}
    >
      <g.Label className={CStyle.labelCSS} htmlFor="_replyTo">
        Email &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_replyTo" id="_replyTo" type="email" />
      <br /> */}

      {/* <g.Label className={CStyle.labelCSS} htmlFor="_songs">
        Song Requests &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_songs" id="_songs" type="text" /> */}
      {/* </g.Div> */}
      {/* <g.Div className={CStyle.radio}>
      <g.Label className={CStyle.labelCSS} htmlFor="_RSVP">
        Attending? 
      </g.Label>
      
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="yes" checked />
      Yes &nbsp;
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="no" /> No
      </g.Div>  */}
      {/* <g.Div>
      <g.Label className={CStyle.labelCSS} htmlFor="_food">
        Food Choice &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_food" id="_food" display="none" />
      <select id="_food" name="_food">
    <option value="fish">Fish</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="chicken">Chicken</option>
  </select>

    </g.Div> */}

    

    {/* <g.Label className={CStyle.labelCSS} display="block" htmlFor="message">
      Message
    </g.Label>
    <g.Textarea className={CStyle.materializeTextarea} 
      name="message"
      id="message"
      placeholder="Your message"
      required
    />
<g.Label className={CStyle.labelCSS} display="block" htmlFor="message">
<button className={CStyle.submitbtn} type="submit">Submit</button>
    </g.Label> */}
    </div>
                </div>
  </g.Form>
)

export default ContactForm
