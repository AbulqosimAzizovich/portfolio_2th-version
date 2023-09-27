import "./style.scss";
import mail from "../../assets/images/svg/Mail.svg";
import copy from "../../assets/images/svg/copy.svg";
import phone from "../../assets/images/svg/phone.svg";
import twi from "../../assets/images/svg/twitter.svg";
import fig from "../../assets/images/svg/figma.svg";
import git from "../../assets/images/svg/github.svg";

const index = () => {
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer_">Get in touch</div>
          <p className="footer__p">
            Imom Buxoriy bobomizning “Al Jome as sahih” kitobining eng birinchi
            hadisi shu hadis bilan boshlangan: “Innamal a’malu bin niyyati”
            ya’ni, “Barcha amallar niyatga bog’liq”.
          </p>

          <div className="contact">
            <div className="mail">
              <img
                src={mail}
                alt="EMail"
                onClick={() => {
                  copyToClipboard("atan60896@gmail.com");
                }}
              />
              <a href="">atan60896@gmail.com</a>
              <img
                src={copy}
                alt="Copy"
                onClick={() => {
                  copyToClipboard("atan60896@gmail.com");
                }}
              />
            </div>

            <div className="phone">
              <img
                src={phone}
                alt="EMail"
                onClick={() => {
                  copyToClipboard("+998930016639");
                }}
              />
              <a href="tel:+998930016639">+998930016639</a>
              <img
                src={copy}
                alt="Copy"
                onClick={() => {
                  copyToClipboard("+998930016639");
                }}
              />
            </div>
          </div>

          <div className="find">
            <p>You may also find me on these platforms!</p>
            <div>
              <a href="">
                <img src={git} alt="GitHub" />
              </a>
              <a href="">
                <img src={twi} alt="Twitter" />
              </a>
              <a href="">
                {" "}
                <img src={fig} alt="Figma" />
              </a>
            </div>
          </div>

          <div className="footer__end">
            <div>
              © 2023 | <a href="">Designed</a> and <a href="">coded</a> with ❤️️
              by NAJOT TA’LIM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
