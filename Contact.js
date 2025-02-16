function openEmailClient() {
    console.log("openEmailClient() called");
    const email = "support@freshbiteco.com";
    const subject = "Inquiry from Freshbite Co. Website";
    const body = "Hello Freshbite Co.,\n\nI would like to inquire about...";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}