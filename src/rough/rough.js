import skills from "../data/skills.json" assert { type: 'json' };
const skillsGrid = () => {
    return (
          skills.map((skillRow, rowId) => {
            // Get the first key of the current skillRow (either 'languages' or 'frontend')
            const categoryName = Object.keys(skillRow)[0];
            return skillRow[categoryName].map((techCategory, techId) => {
              return (
                <div key={techId} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={techCategory.imageSrc} alt={techCategory.title} />
                  </div>
                  <p>{techCategory.title}</p>
                </div>
              );
            });
          })
    );
  };

  skillsGrid();