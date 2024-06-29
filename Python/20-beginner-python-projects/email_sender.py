from email.message import EmailMessage

email_sender = "primanandandhika@gmail.com"
email_password = "e4i12345"

email_receiver = ''

subject = "Please don't make me angry!"
body = """
    Can u make me feel happy at the same time ma bro?
"""

em = EmailMessage()
em["From"] = email_sender
em["To"] = email_receiver
em["Subject"] = subject
em.set_content(body)

