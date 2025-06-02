import React, { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";

export type RecommendationType = "buy" | "rent";

interface IProps {
  children: React.ReactNode;
}

export interface IRecommendationContext {
  selected: RecommendationType;
  recommendations: Array<any>; // Adjust type based on API response structure
  changeTab: (value: RecommendationType) => void;
}

export const RecommendationContext =
  React.createContext<IRecommendationContext | null>(null);

export default function RecommendationProvider({ children }: IProps) {
  const [selected, setSelected] = useState<RecommendationType>("buy");
  const [recommendations, setRecommendations] = useState<Array<any>>([]);

  const fetchRecommendations = async (type: RecommendationType) => {
    try {
      const response = await apiService.get(
        `/warehouse/user/get/warehouse/featured`,
        { rentOrSell: type === "buy" ? "Sell" : "Rent" }
      );
      console.log(response);
      const typedResponse = response as { data?: any[] };
      setRecommendations(typedResponse.data || []); // Ensure we set an array even if response is undefined
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendations([]); // Set empty array on error
    }
  };

  useEffect(() => {
    fetchRecommendations(selected);
  }, [selected]);

  const changeTab = (value: RecommendationType) => {
    setSelected(value);
  };

  return (
    <RecommendationContext.Provider
      value={{ selected, changeTab, recommendations }}
    >
      {children}
    </RecommendationContext.Provider>
  );
}
