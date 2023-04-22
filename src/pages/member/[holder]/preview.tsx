import { useRouter } from "next/router";
import styles from "../styles/membership.module.scss";
import MembercardFront from "../../../components/membercard/membercard-front";
import MembercardBack from "../../../components/membercard/membercard-back";

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