import Button from '../../components/Button';
import './styles.scss';

const Contact = () => {

  const handleStartChattingClick = () => {
    window.open("mailto:worsleygrant@hotmail.com");
  };

  return (
    <div
      id='contact'
      className="contact-section">
      <div
        className="header">
        <h1 className="title">Lets Chat?</h1>
        <hr className="start divider" />
      </div>
      <div
        className="contact-paragraph">
        <span>
          Please reach out if you want to hear more about any of my experience or projects, or have any feedback on anything at all, my virtual door is always open to conversation. I hope this page was useful for yourself and look forward to chatting.
        </span>
      </div>
      <Button
        onClick={handleStartChattingClick}>
        Start Chatting?
      </Button>
    </div>
  );
}

export default Contact;
