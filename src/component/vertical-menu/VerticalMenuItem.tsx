import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/component/vertical-menu/VerticalMenuItem.module.css";

interface Props {
  src: string;
  title?: string;
  href: string;
}

const VerticalMenuItem = ({ src, title, href }: Props) => {
  const router = useRouter();
  console.log(router.pathname);
  const selected = router.pathname.includes(href);
  return (
    <Link href={href} passHref>
      <a
        role="menuitem"
        className={`${styles.link}  ${selected ? styles["active"] : null}`}
        tabIndex={0}
      >
        <div className={styles["menu-image"]}>
          <Image
            className={styles.svg}
            alt={title}
            src={src}
            width="23px"
            height="23px"
            layout="fixed"
            aria-label={title}
          />
        </div>
        <div className={styles["menu-title-wrapper"]}>
          <div className={styles["menu-title-box"]}>
            <p className={styles.title}>{title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default VerticalMenuItem;
