import styles from "./header.module.css";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
