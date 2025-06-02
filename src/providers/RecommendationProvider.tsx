import React, { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";

export type RecommendationType = "buy" | "rent";

interface IProps {
  children: React.ReactNode;
}

export interface IRecommendationContext {
  selected: RecommendationType;
  recommendations: Array<any>;
  changeTab: (value: RecommendationType) => void;
  loading: boolean;
}

export const RecommendationContext =
  React.createContext<IRecommendationContext | null>(null);

export default function RecommendationProvider({ children }: IProps) {
  const [selected, setSelected] = useState<RecommendationType>("buy");
  const [recommendations, setRecommendations] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecommendations = async (type: RecommendationType) => {
    setLoading(true);
    try {
      const response = await apiService.get(
        `/warehouse/user/get/warehouse/featured`,
        { rentOrSell: type === "buy" ? "Sell" : "Rent" }
      );
      const typedResponse = response as { data?: any[] };
      setRecommendations(typedResponse.data || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
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
      value={{ selected, changeTab, recommendations, loading }}
    >
      {children}
    </RecommendationContext.Provider>
  );
}
