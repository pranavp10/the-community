import { useTranslations } from "next-intl";
import { OpenAddNewMemberDrawer } from "./component/addNewMember";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <OpenAddNewMemberDrawer addButtonName={t("addNewMember")} />
    </div>
  );
}
