import React from "react";

import InfoModal from "../InfoModal";
import styles from "./index.module.scss";

interface ISectionProps {
  sectionData: any;
}
const Section: React.FC<ISectionProps> = ({ sectionData }) => {
  return (
    <div className={styles.sectionBox} id={sectionData?.key}>
      <div
        className={styles.headPicBox}
        style={{ backgroundImage: `url(${sectionData?.background_image})` }}
      >
        <div className={styles.borders}>
          <div className={styles.title}>{sectionData?.title}</div>
        </div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.subCard}>
          <div className={styles.title}>{sectionData?.sub_card?.title}</div>
          <div className={styles.content}>{sectionData?.sub_card?.content}</div>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.title}>{sectionData?.main_card?.title}</div>
          <div className={styles.content}>
            {(sectionData?.main_card?.content_list || []).map(
              (ele: any, index: number) => (
                <div key={index} className={styles.contentItem}>
                  <span className={styles.bold}>{ele?.bold_word}</span>
                  {ele?.common_word}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {sectionData?.has_info_modal && (
        <InfoModal infoData={sectionData?.info_modal_list} />
      )}
    </div>
  );
};

export default Section;
