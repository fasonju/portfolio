import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [dutch, setDutch] = useState(0);
  const [chinese, setChinese] = useState(0);
  const [english, setEnglish] = useState(0);
  const [japanese, setJapanese] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (dutch < 100) {
        setDutch((prevCount) => prevCount + 1);
      }
      if (english < 100) {
        setEnglish((prevCount) => prevCount + 1);
      }
      if (chinese < 90) {
        setChinese((prevCount) => prevCount + 1);
      }
      if (japanese < 40) {
        setJapanese((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [dutch, english, chinese, japanese]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Dutch", value: dutch },
            { label: "English", value: english },
            { label: "Chinese", value: chinese },
          ].map((lang) => (
            <div
              key={lang.label}
              className="flex flex-col items-center gap-y-2 w-[90px]"
            >
              <Progress
                strokeColor="#1fdf64"
                type="circle"
                percent={lang.value}
                size={75}
              />
              <span className="text-xs font-bold text-Snow">{lang.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;

