import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

// TODO === > change lan and rtl
export default function LanguageSwitcher() {
    const router = useRouter();

    const { locales, locale: activeLocale } = router;

    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale && locale !== "default"
    );
    useEffect(() => {
        let dir = router.locale == "fa" ? "rtl" : "ltr";
        let lang = router.locale == "fa" ? "fa" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [router.locale]);

    return (
        <span className="text-muted cursor-pointer">
            {otherLocales?.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                    <span key={"locale-" + locale}>
                        <Link href={`${pathname, query}`} as={asPath} locale={locale}>
                            {locale === "en" ? "English" : locale === "fa" ? "پارسی" : null}
                        </Link>
                    </span>
                );
            })}
        </span>
    );
}