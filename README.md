#GoStack GoBarber Backend

#Password recovery
**RF**

- The user must be able to recover his password informing his email
- The user should receive an email with password recovery instructions
- The user must be able to reset his password

**RNF**

- Use Mailtrap to test shipments in a development environment
- Use Amazon SES for production shipments
- Sending emails should happen in the background (background job)

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar a antiga

#Profile update
**RF**

- The user must be able to update his profile: Name, email, password and avatar

**RN**

- The user cannot change his email to an email already used
- To update your password, the user must enter the old password
- To update his password, the user needs to confirm the new password

#Provider panel
**RF**

- The provider must be able to list their schedules for a specific day
- The provider must receive a notification whenever there is a new appointment
- The provider must be able to view unread notifications

**RNF**

- The provider's schedules for the day must be cached
- Service provider notifications must be stored in MogoDB
- Service provider notifications must be sent in real time using Socket.io

**RN**

- The notification must have a read or unread status so that the provider can control

#Scheduling services
**RF**

- The user must be able to list all registered service providers
- The user must be able to list the days of a month with at least one available time from a provider
- The user must be able to list available times on a specific day for a provider
- The user must be able to make a new appointment with a provider

**RNF**

- The list of providers must be cached

**RN**

- Each appointment must last exactly 1 hour
- Appointments must be available between 8 am and 6 pm (first at 8 am and the last at 5 pm)
- The user cannot schedule at an already busy time
- The user cannot schedule an appointment that has passed
- The user cannot schedule services with himself
