import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Box,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
  Link,
  LinearProgress,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardHeader,
  Alert
} from '@mui/material';
import { 
  X, 
  ExternalLink, 
  BookOpen, 
  Video, 
  FileText, 
  GraduationCap,
  Award,
  MessageCircle,
  Code,
  Clock,
  Target,
  ChevronDown,
  CheckCircle
} from 'lucide-react';
import { TechNode, BestPractice, InterviewQuestion, HandsOnExercise, CourseModule } from '../types';
import { techCategories } from '../data/techData';

interface EnhancedNodeDetailsProps {
  node: TechNode;
  onClose: () => void;
}

const resourceIcons = {
  article: <FileText size={16} />,
  video: <Video size={16} />,
  course: <GraduationCap size={16} />,
  documentation: <BookOpen size={16} />,
  tool: <Code size={16} />,
  book: <BookOpen size={16} />
};

const difficultyColors = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'error'
} as const;

const roleColors = {
  PM: 'primary',
  BA: 'secondary',
  both: 'info'
} as const;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

const EnhancedNodeDetails: React.FC<EnhancedNodeDetailsProps> = ({ node, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const category = techCategories.find(cat => cat.id === node.category);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const CourseOutlineTab = () => (
    <Box>
      {node.courseOutline?.map((module: CourseModule) => (
        <Card key={module.moduleNumber} sx={{ mb: 2 }}>
          <CardHeader
            title={`Module ${module.moduleNumber}: ${module.title}`}
            subheader={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Clock size={16} />
                <Typography variant="body2">{module.duration}</Typography>
              </Box>
            }
          />
          <CardContent>
            <Typography variant="body2" paragraph>
              {module.description}
            </Typography>
            
            <Typography variant="subtitle2" gutterBottom>
              Learning Objectives:
            </Typography>
            <List dense>
              {module.learningObjectives.map((objective, idx) => (
                <ListItem key={idx} sx={{ py: 0 }}>
                  <CheckCircle size={16} style={{ marginRight: 8, color: '#4caf50' }} />
                  <ListItemText primary={objective} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Topics Covered:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {module.topics.map((topic, idx) => (
                  <Chip key={idx} label={topic} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
      {!node.courseOutline?.length && (
        <Alert severity="info">Course outline coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const LearningMaterialsTab = () => (
    <Box>
      {node.learningMaterials?.map((material, idx) => (
        <Accordion key={idx}>
          <AccordionSummary expandIcon={<ChevronDown size={20} />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
              <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                {material.title}
              </Typography>
              <Chip 
                label={material.type} 
                size="small" 
                color="primary" 
                variant="outlined" 
              />
              {material.duration && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Clock size={14} />
                  <Typography variant="caption">{material.duration}</Typography>
                </Box>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
              {material.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {!node.learningMaterials?.length && (
        <Alert severity="info">Learning materials coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const BestPracticesTab = () => (
    <Box>
      {node.bestPractices?.map((practice: BestPractice, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Award size={20} color="#ff9800" />
              <Typography variant="h6">{practice.title}</Typography>
              <Chip 
                label={practice.role} 
                size="small" 
                color={roleColors[practice.role]}
              />
              <Chip 
                label={practice.category} 
                size="small" 
                variant="outlined"
              />
            </Box>
            <Typography variant="body2" paragraph>
              {practice.description}
            </Typography>
            {practice.example && (
              <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Example:
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  {practice.example}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
      {!node.bestPractices?.length && (
        <Alert severity="info">Best practices coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const InterviewQuestionsTab = () => (
    <Box>
      {node.interviewQuestions?.map((question: InterviewQuestion, idx) => (
        <Accordion key={idx}>
          <AccordionSummary expandIcon={<ChevronDown size={20} />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
              <MessageCircle size={16} />
              <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
                {question.question}
              </Typography>
              <Chip 
                label={question.level} 
                size="small" 
                color={difficultyColors[question.level as keyof typeof difficultyColors]}
              />
              <Chip 
                label={question.role} 
                size="small" 
                color={roleColors[question.role]}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography variant="body2" paragraph>
                <strong>Type:</strong> {question.type}
              </Typography>
              {question.sampleAnswer && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Sample Answer:
                  </Typography>
                  <Typography variant="body2" sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1 }}>
                    {question.sampleAnswer}
                  </Typography>
                </Box>
              )}
              {question.followUpQuestions && question.followUpQuestions.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Follow-up Questions:
                  </Typography>
                  <List dense>
                    {question.followUpQuestions.map((followUp, fidx) => (
                      <ListItem key={fidx}>
                        <ListItemText primary={followUp} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
      {!node.interviewQuestions?.length && (
        <Alert severity="info">Interview questions coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const HandsOnExercisesTab = () => (
    <Box>
      {node.handsOnExercises?.map((exercise: HandsOnExercise, idx) => (
        <Card key={idx} sx={{ mb: 2 }}>
          <CardHeader
            title={exercise.title}
            subheader={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Chip 
                  label={exercise.difficulty} 
                  size="small" 
                  color={difficultyColors[exercise.difficulty]}
                />
                <Clock size={16} />
                <Typography variant="body2">{exercise.estimatedTime}</Typography>
              </Box>
            }
          />
          <CardContent>
            <Typography variant="body2" paragraph>
              {exercise.description}
            </Typography>

            {exercise.prerequisites && exercise.prerequisites.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Prerequisites:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {exercise.prerequisites.map((prereq, pidx) => (
                    <Chip key={pidx} label={prereq} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            )}

            <Typography variant="subtitle2" gutterBottom>
              Steps:
            </Typography>
            {exercise.steps.map((step, sidx) => (
              <Box key={sidx} sx={{ mb: 2, border: 1, borderColor: 'grey.200', borderRadius: 1, p: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Step {step.stepNumber}: {step.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {step.description}
                </Typography>
                {step.hints && step.hints.length > 0 && (
                  <Box sx={{ bgcolor: 'info.50', p: 1, borderRadius: 1 }}>
                    <Typography variant="caption" fontWeight="bold">Hints:</Typography>
                    <Typography variant="caption" display="block">
                      {step.hints.join(' • ')}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}

            <Typography variant="subtitle2" gutterBottom>
              Deliverables:
            </Typography>
            <List dense>
              {exercise.deliverables.map((deliverable, didx) => (
                <ListItem key={didx} sx={{ py: 0 }}>
                  <Target size={16} style={{ marginRight: 8 }} />
                  <ListItemText primary={deliverable} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
      {!node.handsOnExercises?.length && (
        <Alert severity="info">Hands-on exercises coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const ResourcesTab = () => (
    <Box>
      {node.resources && node.resources.length > 0 && (
        <List sx={{ p: 0 }}>
          {node.resources.map((resource, index) => (
            <ListItem key={index} sx={{ px: 0, mb: 1 }}>
              <Card sx={{ width: '100%' }}>
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {resourceIcons[resource.type]}
                    <Link
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        flexGrow: 1,
                        '&:hover': { textDecoration: 'underline' }
                      }}
                    >
                      <Typography variant="subtitle2">{resource.title}</Typography>
                      <ExternalLink size={14} />
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Chip label={resource.type} size="small" variant="outlined" />
                    {resource.difficulty && (
                      <Chip 
                        label={resource.difficulty} 
                        size="small" 
                        color={difficultyColors[resource.difficulty]}
                      />
                    )}
                    {resource.duration && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Clock size={14} />
                        <Typography variant="caption">{resource.duration}</Typography>
                      </Box>
                    )}
                    {resource.isFree !== undefined && (
                      <Chip 
                        label={resource.isFree ? 'Free' : 'Paid'} 
                        size="small" 
                        color={resource.isFree ? 'success' : 'default'}
                        variant="outlined"
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
      {(!node.resources || node.resources.length === 0) && (
        <Alert severity="info">Additional resources coming soon for this topic.</Alert>
      )}
    </Box>
  );

  const hasEnrichedContent = !!(
    node.courseOutline?.length ||
    node.learningMaterials?.length ||
    node.bestPractices?.length ||
    node.interviewQuestions?.length ||
    node.handsOnExercises?.length
  );

  return (
    <Paper
      elevation={3}
      sx={{
        width: 600,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
        size="small"
      >
        <X size={20} />
      </IconButton>

      <Box sx={{ p: 3, pb: 0 }}>
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

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Relevance for Roles
          </Typography>
          
          <Box sx={{ mb: 2 }}>
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
        </Box>
      </Box>

      {hasEnrichedContent && (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider', px: 3 }}
          >
            <Tab label="Course" />
            <Tab label="Materials" />
            <Tab label="Best Practices" />
            <Tab label="Interview Q&A" />
            <Tab label="Exercises" />
            <Tab label="Resources" />
          </Tabs>

          <Box sx={{ flex: 1, overflow: 'auto', p: 3 }}>
            <TabPanel value={tabValue} index={0}>
              <CourseOutlineTab />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <LearningMaterialsTab />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <BestPracticesTab />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
              <InterviewQuestionsTab />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
              <HandsOnExercisesTab />
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
              <ResourcesTab />
            </TabPanel>
          </Box>
        </Box>
      )}

      <Box sx={{ p: 3, pt: hasEnrichedContent ? 0 : 3 }}>
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

export default EnhancedNodeDetails;