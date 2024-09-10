import { FEATURED_Buy } from "@/data/landing-page/FEATURED_BUY";
import { FEATURED_Rent } from "@/data/landing-page/FEATURED_RENT";
import React from "react";

export type RecommendationType = "buy" | "rent"; // Update to use "buy" and "rent"

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
  const [selected, setSelected] = React.useState<RecommendationType>("buy"); // Default to "buy"
  const [recommendations, setRecommendations] =
    React.useState<Array<LPFeatured>>(FEATURED_Buy);

  const changeTab = (value: RecommendationType) => {
    setSelected(value);
    if (value === "buy") {
      setRecommendations(FEATURED_Buy);
    } else if (value === "rent") {
      setRecommendations(FEATURED_Rent);
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
