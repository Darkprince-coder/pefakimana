import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  type,
  onClick,
  className = ""
}) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon size={17} strokeWidth={2} /> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
