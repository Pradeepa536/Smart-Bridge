public with sharing class ContactFormHandler {
    @AuraEnabled
    public static void saveContact(String firstName, String lastName, String email) {
        Contact newContact = new Contact(
            FirstName = firstName,
            LastName = lastName,
            Email = email
        );
        insert newContact;
    }
}
