import MembercardBack from "@/components/membercard/membercard-back";
import MembercardFront from "@/components/membercard/membercard-front";
import PreviewLayout from "@/layouts/previewLayout";
import styles from "@/styles/module/preview.module.scss";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function MemberCardPreview() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.front}>
          <MembercardFront holder={String(id)} />
        </div>
        <div className={styles.back}>
          <MembercardBack holder={""} />
        </div>
      </div>
    </div>
  );
}

MemberCardPreview.getLayout = function getLayout(page: ReactElement) {
  return (
    <PreviewLayout>
      {page}
    </PreviewLayout>
  );
}