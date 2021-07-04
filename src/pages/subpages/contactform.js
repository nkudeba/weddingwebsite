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
        Formal invitations to be sent out shortly. Once you receive your invitation, please RSVP here separately for <u> <b>each person</b></u>. Langdon Hall will send an email 3 weeks prior to the wedding to provide you with a menu selection.

        <br />

      </p>
    </g.Div>

    <g.Div className={CStyle.contact}
    >
    
      

       <g.Label className={CStyle.labelCSS} htmlFor="_name">
        Name &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS2} name="_name" id="_name" type="text" />
      </g.Div>

    {/* <g.Label className={CStyle.labelCSS} htmlFor="_name">
        Name &nbsp;
      </g.Label>

      
      <g.Input className={CStyle.inputCSS} name="_name" id="_name" display="none" />
      <select id="_name" name="_name">
      <option value="-">Submit name of each invitee</option>
    <option value="Amber_Kudeba">Amber Kudeba</option>
    <option value="Brian_Kudeba">Brian Kudeba</option>
    <option value="Ben_Shoemaker">Ben Shoemaker</option>
  </select>
  */}
     <br/>
      <g.Div className={CStyle.radio}>
      <g.Label className={CStyle.labelCSS2} htmlFor="_RSVP">
        Attending? 
      </g.Label>
      
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="yes" checked />
      Yes &nbsp;
      <g.Input className={CStyle.inputCSS} name="_RSVP" id="_RSVP" type="radio" value="no" /> No
      </g.Div> 
       {/* <g.Div>
     

      <g.Label className={CStyle.labelCSS} htmlFor="_name">
        Food Choice &nbsp;
      </g.Label>

      
      <g.Input className={CStyle.inputCSS} name="_name" id="_name" display="none" />
      <select id="_name" name="_name">
    <option value="risotto">Risotto</option>
    <option value="carrots">Carrots</option>
    <option value="ribs">Prime Rib</option>
  </select>

    </g.Div>  */}
    {/* <g.Div className={CStyle.contact}
    >
    
      

       <g.Label className={CStyle.labelCSS} htmlFor="_songs">
        Song Requests &nbsp;
      </g.Label>
      <g.Input className={CStyle.inputCSS} name="_songs" id="_songs" type="text" />
      </g.Div> */}

    <br/>

     <g.Label className={CStyle.labelCSS} display="block" htmlFor="message">
      Message
    </g.Label>
    <g.Textarea className={CStyle.materializeTextarea} 
      name="message"
      id="message"
      placeholder="Your message"
      required
    />
<g.Label className={CStyle.labelCSS} display="block" htmlFor="message">
  <br/>
<button className={CStyle.submitbtn} type="submit">Submit</button>
    </g.Label> 
    </div>
                </div>
  </g.Form>
)

export default ContactForm
