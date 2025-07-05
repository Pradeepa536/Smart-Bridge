import { LightningElement, track } from 'lwc';
import saveContact from '@salesforce/apex/ContactFormHandler.saveContact';

export default class ContactForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track email = '';

    handleInputChange(event) {
        const field = event.target.name;
        this[field] = event.target.value;
    }

    handleSubmit() {
        saveContact({ firstName: this.firstName, lastName: this.lastName, email: this.email })
            .then(() => {
                alert('Contact saved successfully!');
                this.firstName = '';
                this.lastName = '';
                this.email = '';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
