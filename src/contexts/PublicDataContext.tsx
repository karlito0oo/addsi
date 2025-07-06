import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminService } from '../services/admin.service';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  category: 'leadership' | 'support';
  order: number;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: 'government' | 'nongovernment' | 'private';
  order: number;
}

interface WastoAchievement {
  id: number;
  title: string;
  description: string;
  image: string;
  achievement_date: string | null;
  order: number;
}

interface WastoProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  type: string;
  order: number;
}

interface PublicData {
  settings: Record<string, Record<string, string>>;
  teamMembers: TeamMember[];
  partners: Partner[];
  wastoAchievements: WastoAchievement[];
  wastoProducts: WastoProduct[];
}

interface PublicDataContextType {
  data: PublicData;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const defaultPublicData: PublicData = {
  settings: {},
  teamMembers: [],
  partners: [],
  wastoAchievements: [],
  wastoProducts: []
};

const PublicDataContext = createContext<PublicDataContextType>({
  data: defaultPublicData,
  loading: true,
  error: null,
  refreshData: async () => {},
});

export const usePublicData = () => useContext(PublicDataContext);

export const PublicDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PublicData>(defaultPublicData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await adminService.getPublicData();
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error('Failed to load public data:', err);
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    data,
    loading,
    error,
    refreshData: fetchData,
  };

  return (
    <PublicDataContext.Provider value={value}>
      {children}
    </PublicDataContext.Provider>
  );
}; 