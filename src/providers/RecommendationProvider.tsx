import { FEATURED_HOUSE } from "@/data/landing-page";
import { FEATURED_VILLA } from "@/data/landing-page/FEATURED_VILLA";
import { FEATURED_WAREHOUSE } from "@/data/landing-page/FEATURED_WAREHOUSE";
import React from "react";

export type RecommendationType = "house" | "villa" | "warehouse";

interface IProps {
  children: React.ReactNode;
}

export interface IRecommendationContext {
  selected: RecommendationType;
  recommendations: Array<LPFeatured>;
  changeTab: (value: RecommendationType) => void;
}

export const RecommendationContext =
  React.createContext<IRecommendationContext | null>(null);

export default function RecommendationProvider({ children }: IProps) {
  const [selected, setSelected] = React.useState<RecommendationType>("house");
  const [recommendations, setRecommendations] =
    React.useState<Array<LPFeatured>>(FEATURED_HOUSE);

  const changeTab = (value: RecommendationType) => {
    setSelected(value);
    if (value === "house") {
      setRecommendations(FEATURED_HOUSE);
    } else if (value === "villa") {
      setRecommendations(FEATURED_VILLA);
    } else {
      setRecommendations(FEATURED_WAREHOUSE);
    }
  };

  return (
    <RecommendationContext.Provider
      value={{ selected, changeTab, recommendations }}
    >
      {children}
    </RecommendationContext.Provider>
  );
}
