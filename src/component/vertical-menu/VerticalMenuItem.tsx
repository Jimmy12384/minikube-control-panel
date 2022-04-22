import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "../../styles/component/vertical-menu/VerticalMenuItem.module.css";

interface Props {
  src: string;
  title?: string;
  href: string;
}

const VerticalMenuItem = ({ src, title, href }: Props) => {
  const router = useRouter();
  console.log(router.pathname)
  const selected = router.pathname.includes(href);
  return (
		<Link href={href}>
			<div className={`${styles.link}  ${selected ? styles["active"] : null}`}>
				<div className={styles["menu-image"]}>
					<Image
						className={styles.svg}
						alt={title}
						src={src}
						width="23px"
						height="23px"
					/>
				</div>
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default VerticalMenuItem;
