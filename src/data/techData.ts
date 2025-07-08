import { Category, TechNode } from '../types';
import { getEnrichedContentByTopic } from './enrichedContent';

export const techCategories: Category[] = [
  {
    id: 'blockchain',
    name: 'Blockchain & Crypto',
    icon: 'currency-bitcoin',
    description: 'Blockchain technology, cryptocurrencies, and DeFi',
    color: '#f7931a'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: 'brain',
    description: 'Artificial Intelligence, ML models, and data science',
    color: '#4285f4'
  },
  {
    id: 'web3',
    name: 'Web3',
    icon: 'globe',
    description: 'Decentralized web, smart contracts, and dApps',
    color: '#627eea'
  },
  {
    id: 'database',
    name: 'Database & Data',
    icon: 'database',
    description: 'SQL, NoSQL, data modeling, and analytics',
    color: '#336791'
  },
  {
    id: 'programming',
    name: 'Programming Languages',
    icon: 'code',
    description: 'Python, JavaScript, and other languages',
    color: '#3776ab'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Development',
    icon: 'building',
    description: 'Enterprise architecture and system design',
    color: '#ff6b6b'
  },
  {
    id: 'ai-infrastructure',
    name: 'AI Infrastructure',
    icon: 'cpu',
    description: 'AI chips, data centers, and computing infrastructure',
    color: '#9c27b0'
  }
];

export const techMindMapData: TechNode[] = [
  {
    id: 'stablecoins',
    label: 'Stablecoins',
    category: 'blockchain',
    level: 'intermediate',
    description: 'Cryptocurrencies designed to minimize price volatility',
    relevanceForPM: 8,
    relevanceForBA: 7,
    children: [
      {
        id: 'fiat-collateralized',
        label: 'Fiat-Collateralized',
        category: 'blockchain',
        level: 'beginner',
        description: 'Backed by fiat currency reserves',
        relevanceForPM: 8,
        relevanceForBA: 7,
        resources: [
          {
            title: 'Understanding USDT and USDC',
            url: 'https://www.coinbase.com/learn/crypto-basics/what-is-a-stablecoin',
            type: 'article'
          }
        ]
      },
      {
        id: 'crypto-collateralized',
        label: 'Crypto-Collateralized',
        category: 'blockchain',
        level: 'intermediate',
        description: 'Backed by cryptocurrency reserves',
        relevanceForPM: 7,
        relevanceForBA: 6
      },
      {
        id: 'algorithmic',
        label: 'Algorithmic Stablecoins',
        category: 'blockchain',
        level: 'advanced',
        description: 'Maintain stability through algorithms',
        relevanceForPM: 6,
        relevanceForBA: 5
      }
    ]
  },
  {
    id: 'rag',
    label: 'RAG (Retrieval-Augmented Generation)',
    category: 'ai-ml',
    level: 'advanced',
    description: 'Enhancing LLMs with external knowledge retrieval',
    relevanceForPM: 9,
    relevanceForBA: 8,
    learningMaterials: getEnrichedContentByTopic('rag').learningMaterials,
    bestPractices: getEnrichedContentByTopic('rag').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('rag').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('rag').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('rag').courseOutline,
    children: [
      {
        id: 'vector-db',
        label: 'Vector Databases',
        category: 'ai-ml',
        level: 'intermediate',
        description: 'Storing and retrieving embeddings',
        relevanceForPM: 8,
        relevanceForBA: 7,
        resources: [
          {
            title: 'Introduction to Vector Databases',
            url: 'https://www.pinecone.io/learn/vector-database/',
            type: 'article'
          }
        ]
      },
      {
        id: 'embedding-models',
        label: 'Embedding Models',
        category: 'ai-ml',
        level: 'intermediate',
        description: 'Converting text to vector representations',
        relevanceForPM: 7,
        relevanceForBA: 6
      },
      {
        id: 'retrieval-strategies',
        label: 'Retrieval Strategies',
        category: 'ai-ml',
        level: 'advanced',
        description: 'Semantic search and hybrid retrieval',
        relevanceForPM: 8,
        relevanceForBA: 7
      }
    ]
  },
  {
    id: 'llm',
    label: 'Large Language Models',
    category: 'ai-ml',
    level: 'intermediate',
    description: 'AI models trained on vast amounts of text data',
    relevanceForPM: 10,
    relevanceForBA: 9,
    learningMaterials: getEnrichedContentByTopic('llm').learningMaterials,
    bestPractices: getEnrichedContentByTopic('llm').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('llm').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('llm').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('llm').courseOutline,
    children: [
      {
        id: 'transformer-arch',
        label: 'Transformer Architecture',
        category: 'ai-ml',
        level: 'advanced',
        description: 'Attention mechanism and model structure',
        relevanceForPM: 6,
        relevanceForBA: 5
      },
      {
        id: 'prompt-engineering',
        label: 'Prompt Engineering',
        category: 'ai-ml',
        level: 'beginner',
        description: 'Crafting effective prompts for LLMs',
        relevanceForPM: 10,
        relevanceForBA: 10,
        learningMaterials: getEnrichedContentByTopic('prompt-engineering').learningMaterials,
    bestPractices: getEnrichedContentByTopic('prompt-engineering').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('prompt-engineering').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('prompt-engineering').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('prompt-engineering').courseOutline,
        resources: [
          {
            title: 'Prompt Engineering Guide',
            url: 'https://www.promptingguide.ai/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'fine-tuning',
        label: 'Fine-tuning',
        category: 'ai-ml',
        level: 'advanced',
        description: 'Customizing models for specific tasks',
        relevanceForPM: 7,
        relevanceForBA: 6
      }
    ]
  },
  {
    id: 'web3-tech',
    label: 'Web3 Technologies',
    category: 'web3',
    level: 'intermediate',
    description: 'Decentralized web infrastructure and protocols',
    relevanceForPM: 8,
    relevanceForBA: 7,
    children: [
      {
        id: 'smart-contracts',
        label: 'Smart Contracts',
        category: 'web3',
        level: 'intermediate',
        description: 'Self-executing contracts on blockchain',
        relevanceForPM: 8,
        relevanceForBA: 7
      },
      {
        id: 'dapps',
        label: 'Decentralized Applications',
        category: 'web3',
        level: 'intermediate',
        description: 'Applications running on blockchain',
        relevanceForPM: 9,
        relevanceForBA: 8
      },
      {
        id: 'defi',
        label: 'DeFi Protocols',
        category: 'web3',
        level: 'advanced',
        description: 'Decentralized financial services',
        relevanceForPM: 7,
        relevanceForBA: 6
      }
    ]
  },
  {
    id: 'sql',
    label: 'SQL & Databases',
    category: 'database',
    level: 'beginner',
    description: 'Structured Query Language for data management',
    relevanceForPM: 9,
    relevanceForBA: 10,
    learningMaterials: getEnrichedContentByTopic('sql').learningMaterials,
    bestPractices: getEnrichedContentByTopic('sql').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('sql').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('sql').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('sql').courseOutline,
    children: [
      {
        id: 'basic-queries',
        label: 'Basic SQL Queries',
        category: 'database',
        level: 'beginner',
        description: 'SELECT, INSERT, UPDATE, DELETE',
        relevanceForPM: 9,
        relevanceForBA: 10
      },
      {
        id: 'joins',
        label: 'Joins & Relationships',
        category: 'database',
        level: 'intermediate',
        description: 'Combining data from multiple tables',
        relevanceForPM: 8,
        relevanceForBA: 9
      },
      {
        id: 'optimization',
        label: 'Query Optimization',
        category: 'database',
        level: 'advanced',
        description: 'Improving query performance',
        relevanceForPM: 6,
        relevanceForBA: 7
      }
    ]
  },
  {
    id: 'python',
    label: 'Python Programming',
    category: 'programming',
    level: 'beginner',
    description: 'Versatile programming language for multiple domains',
    relevanceForPM: 8,
    relevanceForBA: 9,
    children: [
      {
        id: 'python-basics',
        label: 'Python Fundamentals',
        category: 'programming',
        level: 'beginner',
        description: 'Variables, functions, data structures',
        relevanceForPM: 8,
        relevanceForBA: 9
      },
      {
        id: 'data-analysis',
        label: 'Data Analysis Libraries',
        category: 'programming',
        level: 'intermediate',
        description: 'Pandas, NumPy, Matplotlib',
        relevanceForPM: 9,
        relevanceForBA: 10
      },
      {
        id: 'web-frameworks',
        label: 'Web Frameworks',
        category: 'programming',
        level: 'intermediate',
        description: 'Django, Flask, FastAPI',
        relevanceForPM: 7,
        relevanceForBA: 6
      }
    ]
  },
  {
    id: 'enterprise-dev',
    label: 'Enterprise Application Development',
    category: 'enterprise',
    level: 'advanced',
    description: 'Building scalable enterprise solutions',
    relevanceForPM: 9,
    relevanceForBA: 8,
    children: [
      {
        id: 'microservices',
        label: 'Microservices Architecture',
        category: 'enterprise',
        level: 'advanced',
        description: 'Distributed system design',
        relevanceForPM: 9,
        relevanceForBA: 7
      },
      {
        id: 'api-design',
        label: 'API Design & Management',
        category: 'enterprise',
        level: 'intermediate',
        description: 'RESTful APIs, GraphQL, gRPC',
        relevanceForPM: 10,
        relevanceForBA: 9,
        learningMaterials: getEnrichedContentByTopic('api-design').learningMaterials,
    bestPractices: getEnrichedContentByTopic('api-design').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('api-design').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('api-design').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('api-design').courseOutline
      },
      {
        id: 'cloud-platforms',
        label: 'Cloud Platforms',
        category: 'enterprise',
        level: 'intermediate',
        description: 'AWS, Azure, Google Cloud',
        relevanceForPM: 9,
        relevanceForBA: 8
      }
    ]
  },
  {
    id: 'ai-infrastructure',
    label: 'AI Infrastructure & Chips',
    category: 'ai-infrastructure',
    level: 'advanced',
    description: 'Cutting-edge AI chip technologies, megaclusters, and infrastructure strategies',
    relevanceForPM: 10,
    relevanceForBA: 8,
    learningMaterials: getEnrichedContentByTopic('ai-infrastructure').learningMaterials,
    bestPractices: getEnrichedContentByTopic('ai-infrastructure').bestPractices,
    interviewQuestions: getEnrichedContentByTopic('ai-infrastructure').interviewQuestions,
    handsOnExercises: getEnrichedContentByTopic('ai-infrastructure').handsOnExercises,
    courseOutline: getEnrichedContentByTopic('ai-infrastructure').courseOutline,
    resources: getEnrichedContentByTopic('ai-infrastructure').resources,
    children: [
      {
        id: 'ai-chips',
        label: 'AI Chip Architecture',
        category: 'ai-infrastructure',
        level: 'intermediate',
        description: 'NVIDIA GPUs, TSMC manufacturing, and chip economics',
        relevanceForPM: 9,
        relevanceForBA: 7
      },
      {
        id: 'megaclusters',
        label: 'AI Megaclusters',
        category: 'ai-infrastructure',
        level: 'advanced',
        description: 'Large-scale AI computing infrastructure',
        relevanceForPM: 10,
        relevanceForBA: 8
      },
      {
        id: 'deepseek-efficiency',
        label: 'DeepSeek Efficiency Model',
        category: 'ai-infrastructure',
        level: 'intermediate',
        description: 'Mixture-of-experts and algorithmic efficiency',
        relevanceForPM: 10,
        relevanceForBA: 9
      }
    ]
  }
];

export const learningPaths = [
  {
    id: 'pm-essentials',
    title: 'Tech PM Essentials',
    role: 'PM' as const,
    description: 'Core technical concepts every Product Manager should understand',
    nodes: ['llm', 'prompt-engineering', 'api-design', 'sql', 'basic-queries', 'python-basics'],
    estimatedTime: '3-4 months'
  },
  {
    id: 'ba-fundamentals',
    title: 'Tech BA Fundamentals',
    role: 'BA' as const,
    description: 'Essential technical skills for Business Analysts',
    nodes: ['sql', 'joins', 'data-analysis', 'api-design', 'llm', 'prompt-engineering'],
    estimatedTime: '4-5 months'
  },
  {
    id: 'web3-pm',
    title: 'Web3 for Product Managers',
    role: 'PM' as const,
    description: 'Understanding blockchain and Web3 technologies',
    nodes: ['web3-tech', 'smart-contracts', 'dapps', 'stablecoins'],
    estimatedTime: '2-3 months'
  }
];