import styles from "./pageLink.module.scss"
import Link from "next/link"

type PageLinkProps = {
    href: string
    children: string
}

function PageLink({href, children}: PageLinkProps): JSX.Element {
    return (
        <Link href={href} className={styles.page_link}>
            {children}
        </Link>
    )
}

export default PageLink