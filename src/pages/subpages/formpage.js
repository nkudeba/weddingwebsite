
import React from "react"
import Layout from "../../components/layout"
import Form from "./form.module.scss"


const Title = "Contact"

const contact = () => {
  return (
    <Layout>
         <div className={Form.container}>
            <div className={Form.imagebg}></div>
            <div className={Form.container}>
                <div className={Form.formContainer}>
                    <h3>Contact Form</h3> 
                    <div className={Form.row}>
                        
                        
                        <form class="col s12" id="reused_form">
                        <div className={Form.row}>
                                <div className={Form.inputField}>
                                    <input id="name" type="text" name="name" required class="validate"/>
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div className={Form.row}>
                            <div className={Form.inputField}>
                                    <input id="email" type="email" name="email" required class="validate"/>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className={Form.row}>
                            <div className={Form.inputField}>
                                    <textarea id="message" name="message" className={Form.materializeTextarea} class="validate" ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div>
                                <button className={Form.submitbtn} type="submit">Submit</button>
                            </div>
                        </form>


                        <div className={Form.error}>
                            <h4>
                                Error
                            </h4>
                            Sorry there was an error sending your form. 
                        </div>
                        <div className={Form.success}>
                            <h4>
                                Success! Your Message was Sent Successfully.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </Layout>
  )
}

export default contact
       