import { useTranslations } from "next-intl";
import { OpenAddNewMemberDrawer } from "./component/addNewMember";

const Page = () => {
  const t = useTranslations();

  return (
    <div>
      <OpenAddNewMemberDrawer addButtonName={t("addNewMember")} />
    </div>
  );
};

export default Page;
