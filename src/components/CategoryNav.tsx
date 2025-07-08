import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { Category } from '../types';
import { Bitcoin, Brain, Globe, Database, Code, Building, Cpu } from 'lucide-react';

interface CategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  categories: Category[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  'currency-bitcoin': <Bitcoin size={16} />,
  'brain': <Brain size={16} />,
  'globe': <Globe size={16} />,
  'database': <Database size={16} />,
  'code': <Code size={16} />,
  'building': <Building size={16} />,
  'cpu': <Cpu size={16} />
};

const CategoryNav: React.FC<CategoryNavProps> = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
        Explore by Category
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Chip
          label="All Categories"
          onClick={() => onCategoryChange('all')}
          color={selectedCategory === 'all' ? 'primary' : 'default'}
          variant={selectedCategory === 'all' ? 'filled' : 'outlined'}
        />
        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            icon={iconMap[category.icon] as React.ReactElement}
            onClick={() => onCategoryChange(category.id)}
            color={selectedCategory === category.id ? 'primary' : 'default'}
            variant={selectedCategory === category.id ? 'filled' : 'outlined'}
            sx={{
              borderColor: selectedCategory === category.id ? category.color : undefined,
              '&:hover': {
                borderColor: category.color,
                backgroundColor: `${category.color}10`
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryNav;