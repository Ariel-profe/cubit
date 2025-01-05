"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaRegStar } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { IoDiamondOutline } from "react-icons/io5";
import { IconType } from "react-icons";

export const Company = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-4">
      <div className="mx-auto max-w-5xl">
        <Tabs selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          {FEATURES.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
              >
                <tab.Feature />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  return (
    <div className="flex">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  Icon: IconType;
  title: string;
  setSelected: (tabNum: number) => void;
  tabNum: number;
}

const Tab = ({ selected, Icon, title, setSelected, tabNum }: TabProps) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4  p-6 transition-colors hover:bg-s4/20 md:flex-col"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-indigo-700 from-10% to-indigo-500 p-3 text-2xl text-white shadow-indigo-400 transition-all duration-300 ${
            selected
              ? "scale-100 opacity-100 shadow-md"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-lg text-slate-200 transition-opacity md:text-center ${
            selected ? "opacity-100" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-indigo-600"
        />
      )}
    </div>
  );
};

interface ExampleFeatureProps {
  Icon: IconType;
  text: string;
}

const ExampleFeature = ({ Icon, text }: ExampleFeatureProps) => (
  <div className="w-full px-0 py-8 md:px-8">
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
     <p>{text}</p>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <Icon />
      </span>
    </div>
  </div>
);

const FEATURES = [
  {
    title: "Lo que somos",
    Icon: FaRegStar,
    Feature: () => <ExampleFeature text={""} Icon={FaRegStar} />,
  },
  {
    title: "Lo que perseguimos",
    Icon: BiTargetLock,
    Feature: () => <ExampleFeature text={""} Icon={BiTargetLock} />,
  },
  {
    title: "Nuestros valores",
    Icon: IoDiamondOutline,
    Feature: () => <ExampleFeature text={""} Icon={IoDiamondOutline} />,
  },
];