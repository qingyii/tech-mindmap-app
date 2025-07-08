import React, { useMemo, useCallback, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  Handle,
  Position,
  NodeProps,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box, Paper, Typography, Chip, Tooltip } from '@mui/material';
import { techMindMapData, techCategories } from '../data/techData';
import { TechNode } from '../types';
import EnhancedNodeDetails from './EnhancedNodeDetails';

interface MindMapViewProps {
  selectedCategory: string;
}

const CustomNode: React.FC<NodeProps> = ({ data }) => {
  const nodeData = data as unknown as TechNode;
  const category = techCategories.find(cat => cat.id === nodeData.category);
  const bgColor = category?.color || '#666';
  
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        borderRadius: 2,
        border: `2px solid ${bgColor}`,
        backgroundColor: 'white',
        minWidth: 200,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: `0 8px 16px ${bgColor}40`
        }
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: bgColor }} />
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {nodeData.label}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {nodeData.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5, mb: 1 }}>
          <Chip label={nodeData.level} size="small" color="primary" variant="outlined" />
          <Chip label={category?.name} size="small" sx={{ backgroundColor: `${bgColor}20` }} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Relevance for Product Manager">
            <Chip
              label={`PM: ${nodeData.relevanceForPM}/10`}
              size="small"
              color={(nodeData.relevanceForPM || 0) >= 8 ? 'success' : 'default'}
              variant="filled"
            />
          </Tooltip>
          <Tooltip title="Relevance for Business Analyst">
            <Chip
              label={`BA: ${nodeData.relevanceForBA}/10`}
              size="small"
              color={(nodeData.relevanceForBA || 0) >= 8 ? 'success' : 'default'}
              variant="filled"
            />
          </Tooltip>
        </Box>
      </Box>
      <Handle type="source" position={Position.Bottom} style={{ background: bgColor }} />
    </Paper>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const MindMapView: React.FC<MindMapViewProps> = ({ selectedCategory }) => {
  const [selectedNode, setSelectedNode] = useState<TechNode | null>(null);

  const generateNodesAndEdges = useCallback((
    data: TechNode[],
    parentId?: string,
    level = 0,
    xOffset = 0
  ): { nodes: Node[]; edges: Edge[] } => {
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let currentX = xOffset;

    data.forEach((item, index) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return;
      }

      const nodeId = item.id;
      const yPosition = level * 200;
      const xPosition = currentX + index * 300;

      nodes.push({
        id: nodeId,
        type: 'custom',
        position: { x: xPosition, y: yPosition },
        data: item as any,
      });

      if (parentId) {
        edges.push({
          id: `${parentId}-${nodeId}`,
          source: parentId,
          target: nodeId,
          animated: true,
          style: { stroke: techCategories.find(cat => cat.id === item.category)?.color || '#666' }
        });
      }

      if (item.children) {
        const childrenData = generateNodesAndEdges(
          item.children,
          nodeId,
          level + 1,
          xPosition - (item.children.length - 1) * 150
        );
        nodes = [...nodes, ...childrenData.nodes];
        edges = [...edges, ...childrenData.edges];
      }
    });

    return { nodes, edges };
  }, [selectedCategory]);

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => generateNodesAndEdges(techMindMapData),
    [generateNodesAndEdges]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  React.useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = generateNodesAndEdges(techMindMapData);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [selectedCategory, generateNodesAndEdges, setNodes, setEdges]);

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.data as unknown as TechNode);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 2, height: '70vh' }}>
      <Paper elevation={1} sx={{ flex: 1, overflow: 'hidden' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </Paper>
      {selectedNode && (
        <EnhancedNodeDetails
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </Box>
  );
};

export default MindMapView;