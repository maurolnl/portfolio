import Link from "next/link";
import global_styles from "../../styles/Home.module.css";

const ResultMessage = (props) => {
  const { sended } = props;
  return (
    <p>
      {sended > 1 ? (
        sended === 2 ? (
          <label className={global_styles.alert_label}>
            Your message was{" "}
            <label className={global_styles.alert_label_success}>
              successfully
            </label>{" "}
            sent!
            <br />
            I&apos;ll get back to you as soon as possible.
            <br />
            Go{" "}
            <Link href="/">
              <a className={global_styles.inside_link}>Home</a>
            </Link>
          </label>
        ) : (
          <label className={global_styles.alert_label}>
            An <label className={global_styles.alert_label_error}>Error</label>{" "}
            has occurred.
            <br />
            Try again in a while or contact me via{" "}
            <a
              href="https://twitter.com/maurolquiroga"
              target="_blank"
              rel="noopener noreferrer"
              className={global_styles.inside_link}
            >
              Twitter
            </a>
          </label>
        )
      ) : (
        ""
      )}
    </p>
  );
};

export default ResultMessage;
