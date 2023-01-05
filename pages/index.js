
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import nextI18nextConfig from "../next-i18next.config";
import LocaleSwitcher from "../src/components/languageSwitcher";
import { TextField } from "@mui/material";


export default function Home() {
  const { t } = useTranslation();
  console.log('t', t)
  return (
    <>
      <div className="mt-5">
        <h1>{t("home.Home")}</h1>
      </div>
    </>
  )
}
export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'employees'])),
      // Will be passed to the page component as props
    },
  };
}