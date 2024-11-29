import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// const SkillsGrid = () => {
//   return (
//     <>
//       {
//         skills.map((skillRow, rowId) => {
//           // Get the first key of the current skillRow (either 'languages' or 'frontend')
//           const categoryName = Object.keys(skillRow)[0];
//           return(
//             <div className={styles.skillRow}>
//               {skillRow[categoryName].map((techCategory, techId) => {
//             return (
//               <div key={techId} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={techCategory.imageSrc} alt={techCategory.title} />
//                 </div>
//                 <p>{techCategory.title}</p>
//               </div>
//             );
//           })}
//             </div>
//           ) 
//         })
//       }
//     </>
//   );
// };

const SkillsGrid = () => {
  return (
    <>
      {
        skills.map((skillRow, rowId) => {
          // Get the first key of the current skillRow (either 'languages' or 'frontend')
          const categoryName = Object.keys(skillRow)[0];
          return (
            <div key={rowId} className={styles.skillRow}>
              {/* First set of technologies */}
              {skillRow[categoryName].map((techCategory, techId) => {
                return (
                  <div key={techId} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={techCategory.imageSrc} alt={techCategory.title} />
                    </div>
                    <p>{techCategory.title}</p>
                  </div>
                );
              })}

              
            </div>
          );
        })
      }
    </>
  );
};



export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <SkillsGrid/>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
