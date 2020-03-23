import React from "react"
import g from "glamorous"
import { withPrefix } from "gatsby-link"
import CStyle from "../../components/site.module.scss"
import CStyles from "../../components/contact.module.scss"


const ContactForm = () => (
  <g.Form className={CStyles.form} action="https://formspree.io/xeqkgbvp" method="POST">
    <input type="hidden" name="_subject" value="Contact Form" />
    <input name="_next" value={withPrefix(`/thanks`)} type="hidden" />

    <g.Div>
      <p>
        Please RSVP below <br />
        <span role="img" aria-label="Slightly Smiling Face">
          🙂
        </span>
      </p>
    </g.Div>
   
    <g.Div 
    >
      <g.Label className={CStyle.labelCSS} htmlFor="name">
        Name
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="name" id="name" type="text" />
      </g.Div>
      <g.Div className={CStyle.contact}
    >
      <g.Label className={CStyle.labelCSS} htmlFor="_replyTo">
        Email
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_replyTo" id="_replyTo" type="email" />

      <g.Label className={CStyle.labelCSS} htmlFor="_songs">
        Song Requests
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_songs" id="_songs" type="text" />
      </g.Div>
      <g.Div className={CStyle.radio}>
      <g.Label className={CStyle.labelCSS} htmlFor="_RSVP">
        Attending? 
      </g.Label>
      
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="yes" checked />
      Yes
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="no" /> No
      </g.Div>
      <g.Div>
      <g.Label className={CStyle.labelCSS} htmlFor="_food">
        Food Choice
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_food" id="_food" type="text" />

    </g.Div>

    

    <g.Label className={CStyle.labelCSS} display="block" htmlFor="message">
      Message
    </g.Label>
    <g.Textarea className={CStyle.contacts}
      name="message"
      id="message"
      placeholder="Your message"
      required
    />

    <g.Div className={CStyle.submit}>
      <button type="submit">Submit</button>
    </g.Div>
  </g.Form>
)

export default ContactForm
