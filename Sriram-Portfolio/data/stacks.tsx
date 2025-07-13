import Image from "next/image";

import {
  SiPython,
  SiNumpy,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  Python: <SiPython size={iconSize} color="currentColor" />,
  NumPy: <SiNumpy size={iconSize} color="currentColor" />,
  MySQL: <SiMysql size={iconSize} color="currentColor" />,
  PostgreSQL: <SiPostgresql size={iconSize} color="currentColor" />,
  Git: <SiGit size={iconSize} color="currentColor" />,
  GitHub: <SiGithub size={iconSize} color="currentColor" />,

  PowerBI: (
    <Image
      src="/skillsLogos/powerbi.png"
      alt="Power BI"
      width={iconSize}
      height={iconSize}
    />
  ),
  Excel: (
    <Image
      src="/skillsLogos/excel.png"
      alt="Microsoft Excel"
      width={iconSize}
      height={iconSize}
    />
  ),
  Word: (
    <Image
      src="/skillsLogos/word.png"
      alt="Microsoft Word"
      width={iconSize}
      height={iconSize}
    />
  ),
  PowerPoint: (
    <Image
      src="/skillsLogos/powerpoint.png"
      alt="Microsoft PowerPoint"
      width={iconSize}
      height={iconSize}
    />
  ),
  VSCode: (
    <Image
      src="/skillsLogos/Visualstudiocode.png"
      alt="Visual Studio Code"
      width={iconSize}
      height={iconSize}
    />
  ),
  HTML: (
    <Image
      src="/skillsLogos/HTML.png"
      alt="HTML"
      width={iconSize}
      height={iconSize}
    />
  ),
  NodeJs: (
    <Image
      src="/skillsLogos/nodejs.png"
      alt="Node.js"
      width={iconSize}
      height={iconSize}
    />
  ),
  FrontEndDevlopment: (
    <Image
      src="/skillsLogos/Front.png"
      alt="Front.js"
      width={iconSize}
      height={iconSize}
    />
  ),
    Javascript: (
    <Image
      src="/skillsLogos/js.png"
      alt="js.js"
      width={iconSize}
      height={iconSize}
    />
  ),
};
