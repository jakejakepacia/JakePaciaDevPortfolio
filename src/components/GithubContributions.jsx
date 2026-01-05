import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

function GithubContributions() {
  const [blockSize, setBlockSize] = useState(14);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) {
        setBlockSize(8);     // mobile
      } else if (window.innerWidth < 768) {
        setBlockSize(10);    // tablet
      } else {
        setBlockSize(14);    // desktop
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
 <div className="github-calendar">
      <h3>GitHub Contributions</h3>
      <GitHubCalendar
        username="jakejakepacia"
        blockSize={blockSize}
        blockMargin={4}
        fontSize={12}
      />
    </div>
    
  );
}

export default GithubContributions;
