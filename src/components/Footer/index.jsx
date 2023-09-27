import { useTheme } from "../Theme";
import mail from "../../assets/images/svg/Mail.svg";
import copy from "../../assets/images/svg/copy.svg";
import phone from "../../assets/images/svg/phone.svg";
import twi from "../../assets/images/svg/twitter.svg";
import fig from "../../assets/images/svg/figma.svg";
import git from "../../assets/images/svg/github.svg";
import "./style.scss";

const index = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <footer
      id="footer"
      className="footer"
      style={isDarkMode ? { background: "#030712" } : { background: "" }}
    >
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer_">Get in touch</div>
          <p className={isDarkMode ? "footer__p footer__p-d" : "footer__p"}>
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
              <a className={isDarkMode ? "ftA" : ""} href="">
                atan60896@gmail.com
              </a>
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
              <a className={isDarkMode ? "ftA" : ""} href="tel:+998930016639">
                +998930016639
              </a>
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
            <p className={isDarkMode ? "findP" : ""}>
              You may also find me on these platforms!
            </p>
            <div>
              <a href="https://github.com/AbdulqosimAzizovich">
                <img src={git} alt="GitHub" />
              </a>
              <a href="https://twitter.com/Ummat_571_634">
                <img src={twi} alt="Twitter" />
              </a>
              <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1229693107521400120">
                <img src={fig} alt="Figma" />
              </a>
            </div>
          </div>

          <div className="footer__end">
            <div className={isDarkMode ? "feD" : ""}>
              © 2023 |{" "}
              <a className={isDarkMode ? "feD" : ""} href="https://t.me/SD6639">
                Designed
              </a>{" "}
              and
              <a
                className={isDarkMode ? "feD" : ""}
                href="https://github.com/AbdulqosimAzizovich"
              >
                coded
              </a>{" "}
              with ❤️️ by NAJOT TA’LIM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
