import React from 'react';
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
  LinearProgress,
  Button
} from '@mui/material';
import { X, ExternalLink, BookOpen, Video, FileText, GraduationCap } from 'lucide-react';
import { TechNode } from '../types';
import { techCategories } from '../data/techData';

interface NodeDetailsProps {
  node: TechNode;
  onClose: () => void;
}

const resourceIcons = {
  article: <FileText size={16} />,
  video: <Video size={16} />,
  course: <GraduationCap size={16} />,
  documentation: <BookOpen size={16} />,
  tool: <FileText size={16} />,
  book: <BookOpen size={16} />
};

const NodeDetails: React.FC<NodeDetailsProps> = ({ node, onClose }) => {
  const category = techCategories.find(cat => cat.id === node.category);
  
  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        height: '100%',
        p: 3,
        overflow: 'auto',
        position: 'relative'
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
        size="small"
      >
        <X size={20} />
      </IconButton>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        {node.label}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Chip
          label={node.level}
          size="small"
          color="primary"
        />
        <Chip
          label={category?.name}
          size="small"
          sx={{ backgroundColor: `${category?.color}20` }}
        />
      </Box>

      <Typography variant="body1" paragraph>
        {node.description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Relevance for Roles
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" sx={{ minWidth: 120 }}>
            Product Manager:
          </Typography>
          <Box sx={{ flex: 1, mx: 2 }}>
            <LinearProgress
              variant="determinate"
              value={(node.relevanceForPM || 0) * 10}
              sx={{ height: 8, borderRadius: 4 }}
              color={(node.relevanceForPM || 0) >= 8 ? 'success' : 'primary'}
            />
          </Box>
          <Typography variant="body2" fontWeight="bold">
            {node.relevanceForPM || 0}/10
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ minWidth: 120 }}>
            Business Analyst:
          </Typography>
          <Box sx={{ flex: 1, mx: 2 }}>
            <LinearProgress
              variant="determinate"
              value={(node.relevanceForBA || 0) * 10}
              sx={{ height: 8, borderRadius: 4 }}
              color={(node.relevanceForBA || 0) >= 8 ? 'success' : 'primary'}
            />
          </Box>
          <Typography variant="body2" fontWeight="bold">
            {node.relevanceForBA || 0}/10
          </Typography>
        </Box>
      </Box>

      {node.resources && node.resources.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Learning Resources
          </Typography>
          <List sx={{ p: 0 }}>
            {node.resources.map((resource, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemText
                  primary={
                    <Link
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      {resourceIcons[resource.type]}
                      {resource.title}
                      <ExternalLink size={14} />
                    </Link>
                  }
                  secondary={resource.type}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}

      {node.children && node.children.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Related Topics
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {node.children.map((child) => (
              <Chip
                key={child.id}
                label={child.label}
                size="small"
                variant="outlined"
                sx={{ cursor: 'pointer' }}
              />
            ))}
          </Box>
        </>
      )}

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<GraduationCap size={20} />}
        >
          Add to Learning Path
        </Button>
      </Box>
    </Paper>
  );
};

export default NodeDetails;