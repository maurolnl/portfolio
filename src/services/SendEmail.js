import emailjs from "emailjs-com";

export function sendEmail(target) {
  return emailjs
    .sendForm(
      "service_66ijpyr",
      "template_orr1inm",
      target,
      "user_oGzZ4nffAjKCy2oVpl4j1"
    )
    .then(
      (result) => {
        console.log(result.text);
        if (result.text == "OK") {
          console.log("Email successfully sended");
          return result;
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
}
