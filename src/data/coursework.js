/**
 * Comprehensive Coursework Data
 * Detailed syllabus, practical experience, and references for key courses
 */

export const courseworkData = [
  {
    id: 'ds',
    name: 'Data Structures',
    code: 'Core CS Course',
    semester: '2nd Year',
    credits: 4,
    description: 'Master fundamental data structures including arrays, linked lists, stacks, queues, trees, and heaps to organize and manipulate data efficiently.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to Data Structures',
        topics: [
          'Data, Data Objects, Abstract Data Types (ADT)',
          'Types of Data Structures: Linear vs Non-linear, Static vs Dynamic',
          'Sequential vs Dynamic Memory Organization',
          'Data Structure Operations: Insert, Delete, Search, Traverse'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Linear Data Structures & Advanced Arrays',
        topics: [
          'Arrays as ADT, Sequential Organization',
          'Address Calculation: Row Major, Column Major Ordering',
          'Multidimensional Arrays & Ordered Lists',
          'Single Variable Polynomial: Representation, Addition, Evaluation, Multiplication',
          'Sparse Matrix: Representation, Addition, Simple & Fast Transpose',
          'Time-Space Trade-offs in Sparse Matrix Operations'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Stacks & Queues',
        topics: [
          'Stack as ADT: Representation, Operations (Push/Pop/Peek)',
          'Stack Applications: Expression Conversion (Infix/Postfix/Prefix), Evaluation',
          'Linked Stack Implementation & Recursion',
          'Queue as ADT: Sequential & Linked Representation',
          'Queue Variants: Circular Queue, Deque (Input-Restricted, Output-Restricted)',
          'Queue Applications: Job Scheduling in Operating Systems'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Linked Lists',
        topics: [
          'Linked List as ADT: Sequential vs Dynamic Organization',
          'Linked List Types: Singly, Circular, Doubly Linked',
          'Primitive Operations: Insert, Delete, Traverse',
          'Polynomial Manipulations using Linked Lists',
          'Generalized Linked List (GLL) Concept & Representation',
          'Case Study: Garbage Collection Algorithms'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Trees & Heaps',
        topics: [
          'Binary Tree Properties, Conversions, Sequential & Linked Representation',
          'Binary Tree Creation & Traversals (Inorder, Preorder, Postorder)',
          'Binary Search Tree (BST): Insert, Delete, Search Operations',
          'Threaded Binary Trees: Creation & In-order Traversal',
          'Heap as Priority Queue Structure',
          'Heap Sort Algorithm & Time Complexity Analysis'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Sparse Matrix Operations',
        description: 'Implement sparse matrix representation and perform efficient transpose operations.',
        tasks: [
          'Represent sparse matrix using 3-tuple (row, col, value) format',
          'Implement Simple Transpose algorithm',
          'Implement Fast Transpose algorithm with optimization',
          'Compare space and time complexity between methods',
          'Handle edge cases: all zeros, single element matrices'
        ],
        skills: ['Sparse Matrices', 'Matrix Operations', 'Optimization', 'Memory Management', 'C']
      },
      {
        lab: 'Lab 2',
        title: 'Stack-based Expression Conversion',
        description: 'Implement stack ADT and use it for expression conversion and evaluation.',
        tasks: [
          'Implement Stack ADT with Push/Pop/Peek operations',
          'Convert Infix to Postfix notation using stack',
          'Convert Infix to Prefix notation using stack',
          'Evaluate Postfix expressions using stack',
          'Handle operator precedence and associativity'
        ],
        skills: ['Stack ADT', 'Expression Parsing', 'Algorithm Design', 'Operator Precedence', 'C']
      },
      {
        lab: 'Lab 3',
        title: 'Job Queue Simulation',
        description: 'Simulate operating system job scheduling using queue data structure.',
        tasks: [
          'Design job structure with priority and arrival time',
          'Implement Queue ADT with Enqueue/Dequeue operations',
          'Simulate FIFO job scheduling',
          'Track job completion time and turnaround time',
          'Display queue state at various intervals'
        ],
        skills: ['Queue ADT', 'OS Concepts', 'Scheduling Algorithms', 'Simulation', 'C']
      },
      {
        lab: 'Lab 4',
        title: 'Club Membership Management (Singly Linked List)',
        description: 'Maintain club member information using singly linked list with special nodes for president and secretary.',
        tasks: [
          'Design node structure with PRN, Name, Year',
          'Implement Insert/Delete operations (maintain president at head, secretary at tail)',
          'Display all members with roles',
          'Compute total member count',
          'Implement merge of two member lists',
          'Reverse linked list using three pointers'
        ],
        skills: ['Linked Lists', 'Node Management', 'Pointer Manipulation', 'List Operations', 'C']
      },
      {
        lab: 'Lab 5',
        title: 'Binary Tree Operations',
        description: 'Implement binary tree creation and traversals using recursive and non-recursive approaches.',
        tasks: [
          'Create binary tree using array representation',
          'Implement Recursive Traversals: Inorder, Preorder, Postorder',
          'Implement Non-recursive Traversals using Stack',
          'Calculate tree height and depth of nodes',
          'Verify BST property for binary search tree'
        ],
        skills: ['Binary Trees', 'Tree Traversals', 'Recursion', 'Stack-based Iteration', 'C']
      },
      {
        lab: 'Lab 6',
        title: 'Binary Search Tree Dictionary',
        description: 'Implement a dictionary using BST with keyword-meaning pairs.',
        tasks: [
          'Design BST node with keyword and meaning fields',
          'Implement Insert operation maintaining BST property',
          'Implement Search for keyword lookup',
          'Implement Delete operation (3 cases: leaf, one child, two children)',
          'Create mirror image of tree',
          'Display level-wise traversal',
          'Copy entire tree structure'
        ],
        skills: ['Binary Search Trees', 'Dictionary Implementation', 'Tree Balancing Concepts', 'Deep Copy', 'C']
      },
      {
        lab: 'Lab 7',
        title: 'Threaded Binary Tree Traversal',
        description: 'Implement threaded binary tree structure for efficient traversal without recursion.',
        tasks: [
          'Design threaded node with thread pointers',
          'Convert binary tree to threaded binary tree',
          'Implement In-order traversal on threaded tree',
          'Compare with traditional recursive traversal',
          'Analyze space and time complexity improvements'
        ],
        skills: ['Threaded Trees', 'Tree Optimization', 'Pointer Threading', 'Efficient Traversal', 'C']
      },
      {
        lab: 'Lab 8',
        title: 'Heap Sort and Priority Queue',
        description: 'Implement heap data structure for sorting and priority-based operations.',
        tasks: [
          'Create min/max heap from array of elements',
          'Implement Heapify operation (top-down)',
          'Implement Heap Sort algorithm',
          'Use heap as priority queue for student marks',
          'Find max/min marks efficiently',
          'Analyze time complexity: O(n log n) for heap sort'
        ],
        skills: ['Heaps', 'Priority Queues', 'Heap Sort', 'Tree-based Structures', 'C']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Array Operations', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Linked Lists', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Stack Implementation', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Queue Implementation', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Tree Traversals', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Binary Search Trees', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Heaps', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Pointer Manipulation', proficiency: 'Advanced', category: 'C Programming' },
      { skill: 'Memory Management', proficiency: 'Proficient', category: 'Programming' },
      { skill: 'Recursion', proficiency: 'Proficient', category: 'Programming' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Fundamentals of Data Structures',
          authors: 'E. Horowitz, S. Sahni, S. Freed',
          publisher: 'Universities Press',
          rating: 5,
          focus: 'Comprehensive foundation with practical examples'
        },
        {
          title: 'Data Structures and Algorithms',
          authors: 'A. V. Aho, J. E. Hopcroft, J. D. Ullman',
          publisher: 'Pearson',
          rating: 5,
          focus: 'Theoretical foundations and rigorous analysis'
        }
      ],
      referenceBooks: [
        {
          title: 'The Art of Computer Programming: Volume 1 - Fundamental Algorithms',
          authors: 'Donald E. Knuth',
          publisher: 'Addison-Wesley',
          rating: 5,
          focus: 'In-depth algorithmic techniques and analysis'
        },
        {
          title: 'Introduction to Algorithms',
          authors: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
          publisher: 'The MIT Press',
          rating: 5,
          focus: 'Advanced algorithms, CLRS - Gold standard in CS'
        },
        {
          title: 'Open Data Structures: An Introduction',
          authors: 'Pat Morin',
          publisher: 'UBC Press (31st Edition)',
          rating: 4,
          focus: 'Modern data structures with pseudocode approach'
        }
      ],
      supplementaryReadings: [
        {
          title: 'Data Structures using C',
          authors: 'Aaron Tanenbaum',
          publisher: 'Pearson Education',
          focus: 'Practical C implementation with clear examples'
        },
        {
          title: 'Data Structures: A Pseudocode Approach with C',
          authors: 'R. Gilberg, B. Forouzan',
          publisher: 'Cengage Learning',
          ISBN: '9788131503140',
          focus: 'Pseudocode-first approach with C translations'
        }
      ],
      webResources: [
        {
          title: 'TutorialsPoint Data Structures & Algorithms',
          url: 'https://www.tutorialspoint.com/data_structures_algorithms/',
          type: 'Tutorial',
          description: 'Interactive tutorials and examples'
        }
      ],
      moocs: [
        {
          title: 'NPTEL - Data Structures',
          url: 'http://nptel.ac.in/courses/106102064/1',
          provider: 'NPTEL (IIT)',
          description: 'Free video lectures on data structures'
        },
        {
          title: 'NPTEL - Algorithms',
          url: 'https://nptel.ac.in/courses/106103069/',
          provider: 'NPTEL (IIT)',
          description: 'Free video lectures on algorithms'
        }
      ]
    }
  },
  {
    id: 'daa',
    name: 'Design and Analysis of Algorithms',
    code: 'Core CS Course',
    semester: '2nd Year',
    credits: 4,
    description: 'Master algorithm design paradigms, complexity analysis, and optimization techniques to solve computational problems efficiently and evaluate algorithmic performance.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Analysis of Algorithm',
        topics: [
          'Efficiency: Analysis Framework',
          'Asymptotic Notations: Big-O, Theta (Θ), Omega (Ω)',
          'Analysis of Non-recursive and Recursive Algorithms',
          'Solving Recurrence Equations using Masters Theorem and Substitution Method',
          'Search Techniques: Sequential Search, Linear Search, Binary Search'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Divide and Conquer',
        topics: [
          'Introduction to Divide and Conquer',
          'Simple Control Abstraction',
          'Quick Sort Algorithm and Analysis',
          'Merge Sort Algorithm and Analysis',
          'Large Integer Multiplication',
          'Stressen Matrix Multiplication'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Greedy Strategy & Graph Algorithms',
        topics: [
          'Greedy Strategy: Principle and Control Abstraction',
          'Knapsack Problem (Fractional)',
          'Job Sequencing with Deadlines',
          'Huffman Encoding',
          'Graph Terminology: Directed, Undirected Graphs, Various Representations',
          'Graph Traversals and Applications',
          'Minimum Spanning Tree: Prim\'s and Kruskal\'s Algorithms',
          'Dijkstra\'s Single Source Shortest Path',
          'Analysis Complexity of Algorithms',
          'Topological Sorting'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Dynamic Programming & Backtracking',
        topics: [
          'Dynamic Programming: Principle of Optimality',
          '0/1 Knapsack Problem',
          'Largest Common Subsequence (LCS)',
          'Multistage Graph Problem using Forward/Backward Computation',
          'Traveling Salesman Problem',
          'Backtracking: Recursive Backtracking Algorithm',
          'Iterative Backtracking Method',
          '8-Queens Problem',
          'Hamiltonian Cycle',
          '0/1 Knapsack Problem using Backtracking'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Branch and Bound, Hashing & Complexity Theory',
        topics: [
          'Branch-N-Bound: Branch-N-Bound Method',
          'Control Abstractions for Least Cost Search',
          'Bounding, FIFO Branch and Bound',
          'LC Branch and Bound',
          'Computational Complexity: NP, NP Complete, NP Hard',
          'Hashing Concepts: Hash Table, Hash Function',
          'Basic Operations: Bucket, Collision, Probe, Synonym',
          'Overflow, Open Hashing, Closed Hashing',
          'Perfect Hash Function, Load Density, Full Table, Load Factor',
          'Rehashing Issues and Good Hash Functions',
          'Properties of Good Hash Functions: Division, Mid-square, Folding, Universal',
          'Collision Resolution Strategies: Open Addressing and Chaining',
          'Hash Table Overflow: Open Addressing and Chaining'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Sorting Algorithm Performance Analysis',
        description: 'Implement and compare various sorting algorithms with time complexity measurements.',
        tasks: [
          'Implement Bubble Sort, Insertion Sort, Selection Sort',
          'Implement Quick Sort with different pivot strategies',
          'Implement Merge Sort with divide-and-conquer',
          'Measure actual execution time for different input sizes',
          'Compare theoretical vs empirical complexity',
          'Generate performance graphs for different algorithms'
        ],
        skills: ['Sorting Algorithms', 'Performance Analysis', 'Time Complexity', 'Benchmarking', 'C++']
      },
      {
        lab: 'Lab 2',
        title: 'Greedy Algorithms Implementation',
        description: 'Implement greedy algorithms for optimization problems.',
        tasks: [
          'Solve Activity Selection Problem',
          'Implement Fractional Knapsack algorithm',
          'Build Huffman Coding tree for data compression',
          'Implement Dijkstra\'s shortest path algorithm',
          'Compare greedy solutions with optimal solutions'
        ],
        skills: ['Greedy Algorithms', 'Optimization', 'Graph Algorithms', 'Huffman Coding', 'C++']
      },
      {
        lab: 'Lab 3',
        title: 'Dynamic Programming Solutions',
        description: 'Solve complex problems using dynamic programming techniques.',
        tasks: [
          'Implement 0/1 Knapsack with memoization',
          'Solve Longest Common Subsequence problem',
          'Implement Matrix Chain Multiplication',
          'Build DP table and trace back solution',
          'Compare recursive vs DP approach in terms of performance'
        ],
        skills: ['Dynamic Programming', 'Memoization', 'Optimization', 'Algorithm Design', 'C++']
      },
      {
        lab: 'Lab 4',
        title: 'Divide and Conquer Algorithms',
        description: 'Implement divide and conquer algorithms and analyze their complexity.',
        tasks: [
          'Implement Merge Sort with step-by-step visualization',
          'Implement Quick Sort with random pivot selection',
          'Solve Binary Search recursively and iteratively',
          'Implement Strassen\'s matrix multiplication',
          'Analyze recurrence relations using Master Theorem'
        ],
        skills: ['Divide and Conquer', 'Recursion', 'Matrix Operations', 'Analysis', 'C++']
      },
      {
        lab: 'Lab 5',
        title: 'Graph Algorithms',
        description: 'Implement fundamental graph algorithms for pathfinding and spanning trees.',
        tasks: [
          'Implement graph representation (Adjacency Matrix/List)',
          'Implement Prim\'s algorithm for MST',
          'Implement Kruskal\'s algorithm for MST',
          'Implement Dijkstra\'s shortest path algorithm',
          'Compare MST algorithms based on graph density'
        ],
        skills: ['Graph Algorithms', 'MST', 'Shortest Path', 'Graph Theory', 'C++']
      },
      {
        lab: 'Lab 6',
        title: 'Backtracking Problems',
        description: 'Solve constraint satisfaction problems using backtracking.',
        tasks: [
          'Solve N-Queens problem with backtracking',
          'Implement Graph Coloring algorithm',
          'Solve Sudoku puzzle using backtracking',
          'Implement Hamiltonian Cycle detection',
          'Visualize solution space exploration'
        ],
        skills: ['Backtracking', 'Constraint Satisfaction', 'Recursion', 'Problem Solving', 'C++']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Algorithm Analysis', proficiency: 'Advanced', category: 'Core CS' },
      { skill: 'Big-O Notation', proficiency: 'Advanced', category: 'Analysis' },
      { skill: 'Sorting Algorithms', proficiency: 'Advanced', category: 'Algorithms' },
      { skill: 'Divide and Conquer', proficiency: 'Proficient', category: 'Algorithm Design' },
      { skill: 'Greedy Algorithms', proficiency: 'Proficient', category: 'Algorithm Design' },
      { skill: 'Dynamic Programming', proficiency: 'Advanced', category: 'Algorithm Design' },
      { skill: 'Backtracking', proficiency: 'Proficient', category: 'Algorithm Design' },
      { skill: 'Graph Algorithms', proficiency: 'Advanced', category: 'Algorithms' },
      { skill: 'Complexity Analysis', proficiency: 'Advanced', category: 'Analysis' },
      { skill: 'Problem Solving', proficiency: 'Advanced', category: 'Core CS' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Introduction to Algorithm',
          authors: 'Thomas H Cormen and Charles E.L Leiserson',
          publisher: 'PHI',
          edition: 'Third Edition',
          rating: 5,
          focus: 'CLRS - Gold standard for algorithms, comprehensive coverage'
        },
        {
          title: 'Fundamentals of Computer Algorithms',
          authors: 'Horowitz, Sahni & Rajasekaran',
          publisher: 'University Press',
          edition: '2ND Edition',
          rating: 5,
          focus: 'Comprehensive coverage of fundamental algorithms'
        }
      ],
      referenceBooks: [
        {
          title: 'Fundamental of Algorithms',
          authors: 'Gilles Brassard and Paul Bartley',
          publisher: 'PHI',
          location: 'New Delhi',
          rating: 5,
          focus: 'Comprehensive algorithmic techniques'
        },
        {
          title: 'Introduction to the Design and Analysis of Algorithms',
          authors: 'Anany Levitin',
          publisher: 'Pearson Education',
          rating: 5,
          focus: 'Modern approach to algorithm design'
        },
        {
          title: 'Design and analysis of Algorithms',
          authors: 'Parag Dave, Himanshu B Dave',
          publisher: 'Pearson',
          rating: 4,
          focus: 'Practical approach to algorithm design'
        },
        {
          title: 'Algorithms',
          authors: 'S. Dasgupta, C. H. Papadimitriou, and U. V. Vazirani',
          publisher: 'McGraw-Hill Education',
          edition: '1st Edition',
          rating: 5,
          focus: 'Modern algorithms with clear explanations'
        }
      ],
      supplementaryReadings: [
        {
          title: 'Algorithm Design',
          authors: 'Jon Kleinberg, EvasTardos',
          publisher: 'Pearson Education',
          focus: 'Modern approach to algorithm design with real-world applications'
        },
        {
          title: 'Design and Analysis of Algorithm',
          authors: 'S. Srihar',
          publisher: 'Oxford University Press',
          focus: 'Comprehensive coverage with examples'
        }
      ],
      webResources: [
        {
          title: 'NPTEL - Design and Analysis of Algorithms',
          url: 'https://nptel.ac.in/courses/106106131/',
          type: 'Video Lectures',
          description: 'Free video lectures from IIT professors'
        },
        {
          title: 'NPTEL Syllabus',
          url: 'https://nptel.ac.in/syllabus/106101060/',
          type: 'Course Material',
          description: 'Comprehensive syllabus and course material'
        },
        {
          title: 'MIT OCW - Design and Analysis of Algorithms',
          url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-notes/',
          type: 'Lecture Notes',
          description: 'MIT course lecture notes and materials'
        }
      ],
      webLinks: [
        {
          title: 'MIT OCW - Algorithm Videos',
          url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/',
          type: 'Video Lectures',
          description: 'Complete MIT video lecture series'
        }
      ],
      moocs: [
        {
          title: 'Swayam - Design and Analysis of Algorithms',
          url: 'https://swayam.gov.in/nd1_noc19_cs47/preview',
          provider: 'SWAYAM (Government of India)',
          description: 'Free online course with certification'
        },
        {
          title: 'Algorithm Design Analysis - PennX',
          url: 'https://www.edx.org/course/algorithm-design-analysis-pennx-sd3x',
          provider: 'University of Pennsylvania (edX)',
          description: 'Professional algorithm design course'
        },
        {
          title: 'Algorithms Specialization',
          url: 'https://www.coursera.org/specializations/algorithms',
          provider: 'Stanford University (Coursera)',
          description: 'Tim Roughgarden\'s acclaimed algorithms course'
        }
      ]
    }
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence and Expert Systems',
    code: 'Core CS Course',
    semester: '3rd Year',
    credits: 4,
    description: 'Explore intelligent systems design, search strategies, knowledge representation, machine learning, and expert systems to build AI-powered applications.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to AI and Search Strategies',
        topics: [
          'Introduction to Artificial Intelligence and AI Development Types',
          'Search Strategies: State Space Search',
          'Uninformed and Informed Search Techniques',
          'Heuristic Function, A* Search'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Game Playing and Knowledge Representation',
        topics: [
          'Game Playing: Minimax and Alpha-Beta Pruning',
          'Propositional Logic and Predicate Logic',
          'Semantic Nets, Conceptual Dependency, Frames and Scripts',
          'Inference: Resolution in Predicate Logic',
          'Unification Algorithms',
          'Forward and Backward Chaining'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Uncertainty and Probabilistic Reasoning',
        topics: [
          'Acting under Uncertainty',
          'Basic Probability Notations',
          'Inference Using Full Joint Distributions',
          'Bayes Rule and Its Uses',
          'Bayesian Networks: Representation and Semantics',
          'Other Approaches to Uncertain Reasoning',
          'Fuzzy Sets and Fuzzy Logic'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Planning and Expert Systems',
        topics: [
          'Planning: Forward and Backward Planning',
          'Goal Stack Planning',
          'Hierarchical Planning',
          'Expert Systems',
          'Expert System Expert system: Role of Expert systems',
          'Capabilities of Expert Systems',
          'Software engines for Expert Systems: Inference engines, Rule Interpreter',
          'Expert system Shells',
          'Applications of Expert systems: MYCIN',
          'Case study of Expert systems'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Advanced Topics in AI',
        topics: [
          'Introduction to Machine Learning',
          'Artificial Neural Network',
          'Deep learning',
          'Natural Language Processing',
          'Generative AI, AI ethics',
          'Types of Machine Learning: Supervised and Self-driving cars'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'A* Algorithm for 8-Puzzle Problem',
        description: 'Implement problem solver using A* algorithm to solve 8 puzzle problem.',
        tasks: [
          'Implement state representation for 8-puzzle',
          'Design heuristic function (Manhattan distance or misplaced tiles)',
          'Implement A* search algorithm',
          'Track path from initial to goal state',
          'Analyze time and space complexity',
          'Compare with other search algorithms'
        ],
        skills: ['A* Search', 'Heuristic Functions', 'Problem Solving', 'State Space Search', 'Python']
      },
      {
        lab: 'Lab 2',
        title: 'Game AI with Local Search',
        description: 'Implement a local search algorithm or genetic algorithm for game problems like chess, n-queens, or travelling salesman.',
        tasks: [
          'Choose problem domain (chess, n-queens, TSP)',
          'Implement local search or genetic algorithm',
          'Design fitness function',
          'Implement selection, crossover, and mutation (for GA)',
          'Optimize solution quality',
          'Visualize search progress'
        ],
        skills: ['Genetic Algorithms', 'Local Search', 'Optimization', 'Game AI', 'Python']
      },
      {
        lab: 'Lab 3',
        title: 'Constraint Satisfaction Problem',
        description: 'Write a program to solve Constraint Satisfaction problem (Map coloring, Crypt-arithmetic, or Sudoku).',
        tasks: [
          'Choose CSP problem (Map coloring/Sudoku/Crypt-arithmetic)',
          'Implement constraint propagation',
          'Implement backtracking search',
          'Apply forward checking and arc consistency',
          'Optimize with heuristics (MRV, Degree, LCV)',
          'Visualize solution process'
        ],
        skills: ['CSP', 'Backtracking', 'Constraint Propagation', 'Problem Solving', 'Python']
      },
      {
        lab: 'Lab 4',
        title: 'Adversarial Search - Game Playing',
        description: 'Implement game play with adversarial search using mini-max algorithm (Tic-tac-toe, Chess).',
        tasks: [
          'Implement game state representation',
          'Implement Minimax algorithm',
          'Add Alpha-Beta pruning for optimization',
          'Design evaluation function',
          'Create AI opponent with different difficulty levels',
          'Build interactive game interface'
        ],
        skills: ['Minimax', 'Alpha-Beta Pruning', 'Game Theory', 'Adversarial Search', 'Python']
      },
      {
        lab: 'Lab 5',
        title: 'Mini-Expert System',
        description: 'Implement any Mini-Expert system for specific domain knowledge.',
        tasks: [
          'Choose domain (Medical diagnosis, Career counseling, etc.)',
          'Design knowledge base with rules',
          'Implement inference engine (Forward/Backward chaining)',
          'Create user interface for queries',
          'Add explanation facility',
          'Test with real-world scenarios'
        ],
        skills: ['Expert Systems', 'Knowledge Representation', 'Inference Engine', 'Rule-based Systems', 'Python']
      },
      {
        lab: 'Lab 6',
        title: 'Chatbot Application',
        description: 'Implement Chat bot application using NLP techniques.',
        tasks: [
          'Design conversation flow',
          'Implement intent recognition',
          'Use NLP libraries (NLTK, spaCy)',
          'Create response generation system',
          'Add context management',
          'Deploy chatbot interface'
        ],
        skills: ['NLP', 'Chatbots', 'Intent Recognition', 'Text Processing', 'Python']
      },
      {
        lab: 'Lab 7',
        title: 'Face Recognition Application',
        description: 'Implement a real life application such as Face Recognition using computer vision.',
        tasks: [
          'Collect and preprocess face dataset',
          'Implement face detection (Haar Cascade/MTCNN)',
          'Extract facial features',
          'Train recognition model (CNN/SVM)',
          'Implement real-time recognition',
          'Evaluate accuracy and performance'
        ],
        skills: ['Computer Vision', 'Deep Learning', 'Face Recognition', 'OpenCV', 'Python']
      },
      {
        lab: 'Lab 8',
        title: 'AI Mini Project',
        description: 'Develop an AI-based mini project applying learned concepts.',
        tasks: [
          'Identify real-world AI problem',
          'Design system architecture',
          'Implement AI algorithms',
          'Train and test models',
          'Create user interface',
          'Document and present project'
        ],
        skills: ['Project Management', 'AI Implementation', 'Problem Solving', 'Full Stack AI', 'Python']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Search Algorithms', proficiency: 'Advanced', category: 'AI' },
      { skill: 'Knowledge Representation', proficiency: 'Proficient', category: 'AI' },
      { skill: 'Machine Learning', proficiency: 'Proficient', category: 'AI/ML' },
      { skill: 'Expert Systems', proficiency: 'Proficient', category: 'AI' },
      { skill: 'Game AI', proficiency: 'Advanced', category: 'AI' },
      { skill: 'Natural Language Processing', proficiency: 'Intermediate', category: 'AI/ML' },
      { skill: 'Computer Vision', proficiency: 'Intermediate', category: 'AI/ML' },
      { skill: 'Neural Networks', proficiency: 'Proficient', category: 'Deep Learning' },
      { skill: 'Probabilistic Reasoning', proficiency: 'Proficient', category: 'AI' },
      { skill: 'Constraint Satisfaction', proficiency: 'Advanced', category: 'AI' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Artificial Intelligence: A Modern Approach',
          authors: 'Stuart Russell and Peter Norvig',
          publisher: 'Pearson Education',
          edition: '2003',
          rating: 5,
          focus: 'Comprehensive AI textbook, industry standard'
        },
        {
          title: 'Artificial Intelligence',
          authors: 'E. Rich and K. Knight',
          publisher: 'Tata McGraw Hill',
          edition: '1992',
          rating: 4,
          focus: 'Classic AI concepts and techniques'
        }
      ],
      referenceBooks: [
        {
          title: 'Introduction to Machine Learning',
          authors: 'Ethem Alpaydin',
          publisher: 'PHI',
          edition: '2013',
          rating: 5,
          focus: 'Machine learning fundamentals'
        },
        {
          title: 'Intelligent Projects using Python',
          authors: 'Santanu Patttanayak',
          publisher: 'Packt Publications',
          rating: 4,
          focus: 'Practical AI implementation with Python'
        },
        {
          title: 'Introduction to Artificial Intelligence & Expert Systems',
          authors: 'Dan W Patterson',
          publisher: 'PHI',
          edition: '2010',
          rating: 4,
          focus: 'Expert systems design and implementation'
        },
        {
          title: 'Artificial Intelligence',
          authors: 'S Kaushik',
          publisher: 'Cengage Learning',
          edition: '1st ed.2011',
          rating: 4,
          focus: 'AI concepts with Indian context'
        }
      ],
      webResources: [
        {
          title: 'IIT Kanpur - CS365',
          url: 'https://www.cse.iitk.ac.in/users/cs365/2016/',
          type: 'Course Material',
          description: 'Comprehensive AI course materials from IIT Kanpur'
        },
        {
          title: 'Khan Academy - Computer Science',
          url: 'https://www.khanacademy.org/computing/computer-science/',
          type: 'Tutorial',
          description: 'Interactive computer science tutorials'
        },
        {
          title: 'HackerRank Contests',
          url: 'https://www.hackerrank.com/contests',
          type: 'Practice',
          description: 'AI and algorithm practice challenges'
        }
      ],
      webLinks: [
        {
          title: 'NPTEL - AI Course',
          url: 'www.nptel.ac.in/course.php',
          type: 'Video Lectures',
          description: 'Free AI video lectures from IIT professors'
        },
        {
          title: 'Videoken',
          url: 'https://videoken.com',
          type: 'Video Lectures',
          description: 'AI conference talks and tutorials'
        },
        {
          title: 'TutorialsPoint',
          url: 'https://www.tutorialspoint.com',
          type: 'Tutorial',
          description: 'AI and ML tutorials with examples'
        }
      ],
      moocs: []
    }
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Computing and DevOps',
    code: 'Core CS Course',
    semester: '5th Semester',
    credits: 4,
    description: 'Master cloud computing architectures, DevOps practices, and modern deployment strategies using AWS, Azure, Google Cloud, and containerization technologies.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to Cloud Computing',
        topics: [
          'Cloud Computing Models: IaaS, PaaS, SaaS',
          'Virtualization in Cloud',
          'Service Providers: AWS, Azure, Google Cloud',
          'Cloud Security and Privacy'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Cloud Storage Solutions',
        topics: [
          'Cloud Storage Services: AWS S3, Azure Blob Storage',
          'Data Backup and Recovery',
          'Cloud Database Services: RDS, DynamoDB, CosmosDB'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Cloud Computing Architectures',
        topics: [
          'Microservices Architecture',
          'Serverless Computing',
          'Edge Computing',
          'Hybrid Cloud Architectures'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'DevOps Fundamentals',
        topics: [
          'Pipeline Development: Continuous Integration and Continuous Deployment (CI/CD)',
          'Version Control: Git, GitHub, GitLab',
          'Configuration Management Tools: Ansible, Chef, Puppet, ConfigureRadar',
          'Docker, Kubernetes',
          'Monitoring and Logging'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Advanced Topics in Cloud and DevOps',
        topics: [
          'Advanced Security in Cloud Computing',
          'Cloud Cost Management',
          'Cloud Compliance and Governance',
          'Infrastructure as Code: Terraform, CloudFormation',
          'Kubernetes Orchestration'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Introduction to Cloud Platforms',
        description: 'Familiarize students with various cloud platforms and basic cloud operations.',
        tasks: [
          'Set up an account on AWS/Azure/Google Cloud',
          'Launch a Linux Virtual machine (VM) instance',
          'Install a web server on the VM and host a simple website',
          'Configure security groups and firewall rules'
        ],
        skills: ['Cloud Platforms', 'VM Management', 'AWS/Azure/GCP', 'Linux', 'Web Hosting']
      },
      {
        lab: 'Lab 2',
        title: 'Cloud Storage and Backup',
        description: 'Implement cloud storage solutions and backup strategies.',
        tasks: [
          'Create a VM instance with a hosted static website',
          'Set up cloud storage (AWS S3 or Azure Blob Storage)',
          'Implement and test cloud storage services for data storage and backup',
          'Write a script to automate the backup of cloud files to the cloud storage',
          'Retrieve and restore files from the cloud storage to a local/original location'
        ],
        skills: ['Cloud Storage', 'S3', 'Azure Blob', 'Backup Automation', 'Scripting']
      },
      {
        lab: 'Lab 3',
        title: 'Cloud Database Services',
        description: 'Implement cloud storage solution with automated backup and restore scripts.',
        tasks: [
          'Set up an RDS instance or a VM or a Cloud SQL instance on Google Cloud',
          'Create a database and a table similar to a lab for a local database',
          'Insert sample data into the table and perform basic SQL queries (SELECT, INSERT, UPDATE, DELETE)',
          'Take snapshots or backups of the cloud database',
          'A running cloud database instance with sample data',
          'Successful connection to the cloud database and CRUD operations'
        ],
        skills: ['RDS', 'Cloud SQL', 'Database Management', 'SQL', 'Backup & Restore']
      },
      {
        lab: 'Lab 4',
        title: 'Microservices and Serverless Architectures',
        description: 'Build microservices and serverless applications.',
        tasks: [
          'Develop a simple microservice-based application with serverless functions',
          'Configure an API Gateway to manage API calls',
          'Demonstrate the microservice using Node.js',
          'Deploy the microservice functions in AWS ECE or in Kubernetes',
          'Configure an API gateway to receive and route requests to the serverless functions and manages with the responses',
          'Test and remediate function and recomposes transaction',
          'Understanding of serverless and microservices architecture',
          'A serverless function that interacts with the resources like the database',
          'A trigger initiated API response running in a container'
        ],
        skills: ['Microservices', 'Serverless', 'AWS Lambda', 'API Gateway', 'Node.js']
      },
      {
        lab: 'Lab 5',
        title: 'CI/CD Pipeline Implementation',
        description: 'Set up and configure a CI/CD pipeline for automated testing and deployment.',
        tasks: [
          'Set up a Git repository for the application code',
          'Install and configure Jenkins or GitLab CI/CD',
          'Configure the pipeline to automatically build, test, and deploy a simple application',
          'Trigger the deployment from a code commit and verify that changes are deployed automatically'
        ],
        skills: ['CI/CD', 'Jenkins', 'GitLab CI', 'Git', 'Automation']
      },
      {
        lab: 'Lab 6',
        title: 'Docker Containerization',
        description: 'Containerize applications using Docker.',
        tasks: [
          'Introducing CI/CD pipeline in Jenkins',
          'A simple Node.js application on GitHub',
          'Jenkins configuration to trigger on code commit and deployment',
          'Successful automated build, test, and deploy triggered by code commit'
        ],
        skills: ['Docker', 'Containerization', 'CI/CD', 'Jenkins', 'Node.js']
      },
      {
        lab: 'Lab 7',
        title: 'Kubernetes Orchestration',
        description: 'Deploy containerized applications and Kubernetes Cluster using Alternatives.',
        tasks: [
          'Containerize a simple application using Docker',
          'Write a Dockerfile and build a Docker image for the application',
          'Push the Docker image to a container registry',
          'A Docker image of the sample application pushed to a container registry',
          'Understanding of Docker containerization and basic Docker commands',
          'Kubernetes cluster for deploying and managing the application'
        ],
        skills: ['Kubernetes', 'Docker', 'Container Registry', 'K8s Deployment', 'Orchestration']
      },
      {
        lab: 'Lab 8',
        title: 'Monitoring and Logging',
        description: 'Set up monitoring and logging for cloud-based applications.',
        tasks: [
          'Set up Prometheus or CloudWatch for application monitoring',
          'Configure Grafana for the application using a logging framework (e.g., ELK Stack, Fluentd)',
          'Create dashboards in Prometheus/Grafana or in AWS CloudWatch or GCP Stackdriver',
          'Visualize the monitoring and logging data using a dashboard (e.g., Grafana)',
          'A trigger dashboard showing metrics and logs'
        ],
        skills: ['Prometheus', 'Grafana', 'CloudWatch', 'Logging', 'Monitoring']
      },
      {
        lab: 'Lab 9',
        title: 'Infrastructure as Code with Terraform',
        description: 'Automate infrastructure provisioning using Terraform scripts and review cloud resources.',
        tasks: [
          'Write a Terraform script to automate infrastructure setup (e.g., VM, storage)',
          'Deploy the infrastructure using Terraform on cloud platforms',
          'Understand how to manage infrastructure state and track resources',
          'Connect the private cloud with a public cloud using e.g., AWS, Azure',
          'Create and manage an application in the private cloud from AWS EC2 or Azure VMs',
          'A hybrid cloud environment integrating private and public cloud',
          'A deployed application utilizing both AWS or Azure and the private cloud'
        ],
        skills: ['Terraform', 'IaC', 'AWS', 'Azure', 'Hybrid Cloud']
      },
      {
        lab: 'Lab 10',
        title: 'Cloud Security and Compliance',
        description: 'Implement security best practices in cloud environments.',
        tasks: [
          'Configure IAM roles and policies in AWS/Azure',
          'Set up VPC and security groups',
          'Implement encryption for data at rest and in transit',
          'Audit cloud resources using AWS Config or Azure Policy'
        ],
        skills: ['Cloud Security', 'IAM', 'VPC', 'Encryption', 'Compliance']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Cloud Platforms (AWS/Azure/GCP)', proficiency: 'Advanced', category: 'Cloud Computing' },
      { skill: 'Docker & Containerization', proficiency: 'Advanced', category: 'DevOps' },
      { skill: 'Kubernetes Orchestration', proficiency: 'Proficient', category: 'DevOps' },
      { skill: 'CI/CD Pipeline', proficiency: 'Advanced', category: 'DevOps' },
      { skill: 'Infrastructure as Code', proficiency: 'Proficient', category: 'DevOps' },
      { skill: 'Microservices Architecture', proficiency: 'Proficient', category: 'Cloud Architecture' },
      { skill: 'Serverless Computing', proficiency: 'Proficient', category: 'Cloud Computing' },
      { skill: 'Monitoring & Logging', proficiency: 'Advanced', category: 'DevOps' },
      { skill: 'Cloud Security', proficiency: 'Proficient', category: 'Security' },
      { skill: 'Terraform', proficiency: 'Proficient', category: 'IaC' },
      { skill: 'Git & Version Control', proficiency: 'Advanced', category: 'DevOps' }
    ],

    // Learning Resources
    resources: {
      textbooks: [],
      referenceBooks: [
        {
          title: 'Cloud Computing: Concepts, Technology & Architecture',
          authors: 'Thomas Erl',
          publisher: 'Prentice Hall',
          rating: 5,
          focus: 'Comprehensive cloud computing concepts and architecture'
        },
        {
          title: 'The DevOps Handbook',
          authors: 'Gene Kim, Patrick Debois, John Willis, and Jez Humble',
          publisher: 'IT Revolution Press',
          rating: 5,
          focus: 'DevOps best practices and implementation strategies'
        }
      ],
      supplementaryReadings: [
        {
          title: 'Site Reliability Engineering',
          authors: 'Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff',
          publisher: 'O\'Reilly Media',
          focus: 'Google\'s approach to DevOps and SRE practices'
        }
      ],
      webResources: [],
      webLinks: [
        {
          title: 'AWS Documentation',
          url: 'https://docs.aws.amazon.com/',
          type: 'Documentation',
          description: 'Official AWS documentation and tutorials'
        },
        {
          title: 'Azure Documentation',
          url: 'https://docs.microsoft.com/azure/',
          type: 'Documentation',
          description: 'Official Azure documentation and guides'
        },
        {
          title: 'Google Cloud Documentation',
          url: 'https://cloud.google.com/docs',
          type: 'Documentation',
          description: 'Official Google Cloud documentation'
        }
      ],
      moocs: [
        {
          title: 'Cloud Computing Courses',
          url: 'https://www.coursera.org/',
          provider: 'Coursera, edX, Udacity',
          description: 'Specific courses on Cloud Computing and DevOps'
        }
      ]
    }
  },
  {
    id: 'networks',
    name: 'Computer Networks',
    code: 'Core CS Course',
    semester: '3rd Year',
    credits: 4,
    description: 'Understand networking fundamentals from physical transmission to application layer protocols, mastering data communication, network architectures, and real-world networking challenges.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Fundamentals of Networking and Data Communication',
        topics: [
          'Analog Transmission: Analog-to-Analog conversion, Digital-to-Analog conversion',
          'Digital Transmission: Digital-to-Digital conversion (Line coding, Block coding, Scrambling)',
          'Analog-Digital Conversion: Pulse Code Modulation (PCM), Delta Modulation',
          'Introduction to Inter-networking Devices and Intra Networking',
          'Network Topologies: Bus, Star, Ring, Mesh, Hybrid',
          'Types of Networks: LAN, MAN, WAN',
          'Network Architectures: Centralized, Distributed, Hybrid',
          'Transmission Media: Guided (Twisted pair, Coaxial, Fiber optic) and Unguided (Radio, Microwave, Infrared)',
          'OSI Model: 7-Layer Reference Model Overview',
          'Ethernet Standards and TCP/IP Reference Model'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Data Link Layer Services',
        topics: [
          'Types of Errors: Single Bit Error, Burst Error',
          'Block Coding: Parity Check, Cyclic Redundancy Check (CRC)',
          'Hamming Code: Error Detection and Correction',
          'Checksum: Concept and Implementation',
          'Sliding Window Protocols: Selective Repeat (SR), Go-Back-N (GBN)',
          'Channel Allocation Techniques: ALOHA, CSMA/CD, CSMA/CA',
          'Multiple Access Protocols Overview',
          'Ethernet Frame Format and Standards',
          'Media Access Control (MAC) Addressing'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Network Layer',
        topics: [
          'Network Layer Services: Routing, Switching Techniques',
          'Datagram Approach and Virtual-Circuit Approach',
          'Internet Protocol (IP): IPv4 and IPv6',
          'Classful Addressing: Class A, B, C, D, E',
          'Classless Addressing (CIDR): Supernetting and Subnetting',
          'IP Addressing: Private addresses, Special addresses',
          'Network Address Translation (NAT)',
          'Internet Control Message Protocol (ICMP)',
          'Address Resolution Protocol (ARP)',
          'Reverse Address Resolution Protocol (RARP)',
          'Routing Algorithms: Distance-Vector (DV) Routing, Link State (LS) Routing',
          'Routing Protocols: RIP, OSPF, BGP'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Transport Layer',
        topics: [
          'Transport Layer Services: Connection-oriented, Connectionless',
          'Multiplexing and Demultiplexing',
          'Socket Programming Concepts',
          'User Datagram Protocol (UDP): Features, Segment Structure',
          'Reliability Transfer Protocol (RTP)',
          'Transmission Control Protocol (TCP): Services, Features, Segment Structure',
          'TCP Connection (Three-Way Handshake)',
          'Flow Control: Stop-and-Wait, Sliding Window',
          'Silly Window Syndrome',
          'Congestion Control: Leaky Bucket Algorithm, Token Bucket Algorithm',
          'Quality of Service (QoS): Concepts and Implementation'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Application Layer',
        topics: [
          'Dynamic Host Control Protocol (DHCP)',
          'Hypertext Transfer Protocol (HTTP): Versions, Methods, Status Codes',
          'File Transfer Protocol (FTP): Control Connection, Data Connection',
          'TELNET: Remote Login Protocol',
          'Simple Mail Transfer Protocol (SMTP): Message Transfer',
          'Post Office Protocol (POP3): Mail Retrieval',
          'Internet Message Access Protocol (IMAP)',
          'Multipurpose Internet Mail Extensions (MIME): Message Format',
          'Domain Name System (DNS): Name Resolution, Record Types',
          'Simple Network Management Protocol (SNMP): Management Framework'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Network Topology Design & Configuration',
        description: 'Design and simulate different network topologies with proper addressing and device configuration.',
        tasks: [
          'Design LAN topology using Cisco Packet Tracer or similar tool',
          'Configure routers with appropriate IP addresses',
          'Implement subnetting for different network segments',
          'Test connectivity between network segments',
          'Analyze network traffic and performance metrics',
          'Document topology with IP addressing scheme'
        ],
        skills: ['Network Design', 'Router Configuration', 'IP Addressing', 'Subnetting', 'Network Simulation']
      },
      {
        lab: 'Lab 2',
        title: 'Error Detection & Correction Implementation',
        description: 'Implement error detection and correction mechanisms at the data link layer.',
        tasks: [
          'Implement Hamming Code for single-bit error correction',
          'Calculate and verify CRC (Cyclic Redundancy Check)',
          'Implement Parity Check mechanisms',
          'Simulate error injection and detection',
          'Compare efficiency of different error detection methods',
          'Analyze error patterns and correction success rates'
        ],
        skills: ['Error Detection', 'Error Correction', 'Hamming Code', 'CRC', 'Data Link Layer']
      },
      {
        lab: 'Lab 3',
        title: 'MAC Protocols & Channel Access',
        description: 'Implement and analyze different MAC layer protocols and channel access methods.',
        tasks: [
          'Simulate ALOHA protocol (Pure and Slotted)',
          'Implement CSMA/CD protocol for collision detection',
          'Implement CSMA/CA for collision avoidance',
          'Analyze throughput for different access methods',
          'Simulate network congestion scenarios',
          'Compare performance metrics of various protocols'
        ],
        skills: ['MAC Protocols', 'Channel Access', 'ALOHA', 'CSMA/CD', 'CSMA/CA', 'Simulation']
      },
      {
        lab: 'Lab 4',
        title: 'IP Addressing, Subnetting & NAT',
        description: 'Master IP addressing schemes, subnetting strategies, and network address translation.',
        tasks: [
          'Perform subnetting calculations for given IP ranges',
          'Design hierarchical subnetting schemes',
          'Implement Private IP addressing with RFC 1918',
          'Configure Network Address Translation (NAT)',
          'Convert between Classful and Classless addressing',
          'Troubleshoot addressing conflicts and overlaps'
        ],
        skills: ['IP Addressing', 'Subnetting', 'CIDR', 'NAT', 'Network Planning']
      },
      {
        lab: 'Lab 5',
        title: 'Routing Algorithms & Protocol Implementation',
        description: 'Implement and compare different routing algorithms and protocols.',
        tasks: [
          'Implement Distance-Vector routing (RIP)',
          'Implement Link State routing (OSPF)',
          'Simulate routing table updates',
          'Analyze convergence time for different protocols',
          'Detect and handle routing loops',
          'Compare efficiency and scalability of routing protocols'
        ],
        skills: ['Routing Algorithms', 'RIP', 'OSPF', 'BGP', 'Routing Protocols', 'Network Analysis']
      },
      {
        lab: 'Lab 6',
        title: 'UDP Socket Programming',
        description: 'Implement UDP client-server applications with connectionless communication.',
        tasks: [
          'Write UDP server application',
          'Write UDP client application',
          'Implement datagram sending/receiving',
          'Handle packet loss and timeouts',
          'Implement request-response pattern',
          'Test with multiple concurrent clients'
        ],
        skills: ['Socket Programming', 'UDP', 'Client-Server', 'C/Python', 'Network Programming']
      },
      {
        lab: 'Lab 7',
        title: 'TCP Socket Programming & Connection Management',
        description: 'Implement TCP client-server applications with reliable connection-oriented communication.',
        tasks: [
          'Write TCP server with connection handling',
          'Write TCP client application',
          'Implement Three-Way Handshake simulation',
          'Handle connection states and transitions',
          'Implement graceful connection termination',
          'Test concurrent connections with thread management'
        ],
        skills: ['Socket Programming', 'TCP', 'Three-Way Handshake', 'Threading', 'C/Python']
      },
      {
        lab: 'Lab 8',
        title: 'DNS Resolution & Domain Name System',
        description: 'Understand DNS architecture and implement DNS queries and responses.',
        tasks: [
          'Query DNS servers for different record types (A, MX, CNAME)',
          'Implement basic DNS resolver',
          'Understand DNS caching mechanisms',
          'Analyze DNS protocol packets',
          'Implement recursive and iterative resolution',
          'Troubleshoot DNS resolution issues'
        ],
        skills: ['DNS', 'Domain Names', 'DNS Protocol', 'Query Types', 'Network Tools']
      },
      {
        lab: 'Lab 9',
        title: 'HTTP Protocol & Web Application Communication',
        description: 'Explore HTTP protocol, request-response cycle, and web application development.',
        tasks: [
          'Analyze HTTP requests and responses',
          'Implement basic HTTP server',
          'Implement HTTP client for GET/POST requests',
          'Handle different HTTP status codes',
          'Implement persistent connections',
          'Test with various HTTP methods and headers'
        ],
        skills: ['HTTP Protocol', 'Web Development', 'REST Concepts', 'Client-Server', 'Web Protocols']
      },
      {
        lab: 'Lab 10',
        title: 'Traffic Analysis & Network Monitoring',
        description: 'Analyze real network traffic using packet analyzers and monitoring tools.',
        tasks: [
          'Capture network packets using Wireshark',
          'Analyze OSI layer protocols in packet traces',
          'Identify different protocol patterns',
          'Monitor bandwidth usage and network performance',
          'Detect anomalies and suspicious traffic',
          'Generate traffic analysis reports'
        ],
        skills: ['Wireshark', 'Packet Analysis', 'Network Monitoring', 'Troubleshooting', 'Security']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'OSI Model Understanding', proficiency: 'Advanced', category: 'Networking Fundamentals' },
      { skill: 'TCP/IP Protocol Suite', proficiency: 'Advanced', category: 'Networking Fundamentals' },
      { skill: 'IP Addressing & Subnetting', proficiency: 'Advanced', category: 'Network Design' },
      { skill: 'Routing Algorithms', proficiency: 'Proficient', category: 'Network Routing' },
      { skill: 'Network Protocols (TCP/UDP)', proficiency: 'Advanced', category: 'Protocols' },
      { skill: 'HTTP & Application Layer Protocols', proficiency: 'Proficient', category: 'Protocols' },
      { skill: 'Socket Programming', proficiency: 'Proficient', category: 'Programming' },
      { skill: 'Error Detection & Correction', proficiency: 'Proficient', category: 'Data Link Layer' },
      { skill: 'MAC Protocols & Channel Access', proficiency: 'Proficient', category: 'Data Link Layer' },
      { skill: 'Network Simulation Tools', proficiency: 'Proficient', category: 'Tools' },
      { skill: 'Packet Analysis (Wireshark)', proficiency: 'Proficient', category: 'Tools' },
      { skill: 'DNS & Name Resolution', proficiency: 'Proficient', category: 'Protocols' },
      { skill: 'Network Troubleshooting', proficiency: 'Proficient', category: 'Skills' },
      { skill: 'Quality of Service (QoS)', proficiency: 'Intermediate', category: 'Network Management' },
      { skill: 'Network Security Basics', proficiency: 'Intermediate', category: 'Security' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Data Communications and Networking',
          authors: 'Behrouz A. Forouzan',
          publisher: 'McGraw Hill',
          edition: '5th Edition',
          rating: 5,
          focus: 'Comprehensive networking fundamentals with clear explanations'
        },
        {
          title: 'Computer Networks',
          authors: 'Andrew S. Tanenbaum and David J. Wetherall',
          publisher: 'Prentice Hall',
          edition: '5th Edition',
          rating: 5,
          focus: 'In-depth coverage of networking concepts and protocols'
        }
      ],
      referenceBooks: [
        {
          title: 'Computer Networking: Principles, Protocols and Practice',
          authors: 'Olivier Bonaventure',
          publisher: 'The Saylor Foundation',
          edition: '2nd Edition',
          rating: 5,
          focus: 'Modern networking practices and protocol design'
        },
        {
          title: 'Computer Networks: A Systems Approach',
          authors: 'Larry L. Peterson and Bruce S. Davis',
          publisher: 'Elsevier Science',
          edition: '4th Edition',
          rating: 5,
          focus: 'Systems perspective on networking architecture'
        },
        {
          title: 'TCP/IP Protocol Suite',
          authors: 'Behrouz A. Forouzan',
          publisher: 'McGraw Hill',
          rating: 4,
          focus: 'Deep dive into TCP/IP protocols and implementation'
        }
      ],
      supplementaryReadings: [
        {
          title: 'Hands-On Networking Fundamentals',
          authors: 'Michael Palmer and Terry Schmidt',
          publisher: 'Course Technology/Cengage Learning',
          edition: '2nd Edition',
          focus: 'Practical networking labs and hands-on exercises'
        },
        {
          title: 'Computer Networking Problems and Solutions',
          authors: 'Russ White and Ethan Banks',
          publisher: 'Pearson Education',
          edition: '3rd Edition',
          focus: 'Real-world networking problems and solutions'
        }
      ],
      webResources: [
        {
          title: 'NetAcad',
          url: 'https://www.netacad.com/',
          type: 'Tutorial',
          description: 'Cisco Networking Academy with comprehensive networking courses'
        },
        {
          title: 'Wireshark Official Documentation',
          url: 'https://www.wireshark.org/',
          type: 'Tool & Documentation',
          description: 'Network packet analyzer and official documentation'
        },
        {
          title: 'IETF (Internet Engineering Task Force)',
          url: 'https://www.ietf.org/',
          type: 'Standards',
          description: 'RFC standards for internet protocols and specifications'
        }
      ],
      moocs: [
        {
          title: 'NPTEL - Computer Networks (IIT Kharagpur)',
          url: 'https://nptel.ac.in/courses/106102062/',
          provider: 'NPTEL (IIT)',
          description: 'Comprehensive video lectures on computer networks'
        },
        {
          title: 'Coursera - Computer Networks Specialization',
          url: 'https://www.coursera.org/specializations/computer-communications',
          provider: 'Coursera',
          description: 'Specialization covering networking from fundamentals to advanced topics'
        }
      ]
    }
  },
  {
    id: 'dbms',
    name: 'Database Management Systems',
    code: 'Core CS Course',
    semester: '3rd Year',
    credits: 4,
    description: 'Master relational database design, normalization, SQL programming, and transaction management to build scalable and reliable data systems.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to DBMS and Data Modeling',
        topics: [
          'DBMS vs File Systems: Advantages and disadvantages',
          'Database System Architecture',
          'Database Architectures: Centralized, Client-Server, Parallel, Distributed',
          'Data Abstraction: Levels of data abstraction',
          'Data Independence: Logical and Physical independence',
          'Data Definition Language (DDL) and Data Manipulation Language (DML)',
          'Data Models: Entity-Relationship, Hierarchical, Network, Relational',
          'Entity-Relationship (E-R) Diagram: Components, Conventions',
          'Keys: Primary, Foreign, Candidate, Composite keys',
          'Enhanced Entity-Relationship (EER) Model',
          'Reducing E-R Diagram into Tables'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Relational Database Design and Normalization',
        topics: [
          'Relational Model Fundamentals: Attributes, Tuples, Domains',
          'Codd\'s 12 Rules for RDBMS',
          'Relational Integrity Constraints',
          'Referential Integrity and Entity Integrity',
          'Enterprise Constraints',
          'Functional Dependencies: Definition and Properties',
          'Normalization Process',
          'First Normal Form (1NF)',
          'Second Normal Form (2NF)',
          'Third Normal Form (3NF)',
          'Boyce-Codd Normal Form (BCNF)',
          'Decomposition and Data Redundancy',
          'Query Processing: Overview',
          'Measures of Query Cost',
          'Selection and Join Operations',
          'Evaluation of Expressions'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Relational Algebra and SQL Fundamentals',
        topics: [
          'Relational Algebra: Operations and Properties',
          'Basic Operations: Selection, Projection, Union, Difference, Cartesian Product',
          'Relational Calculus: Tuple Calculus and Domain Calculus',
          'Introduction to SQL: Features and Characteristics',
          'SQL Advantages: Simplicity, Portability, Standardization',
          'SQL Data Types: Numeric, String, Date/Time, Boolean',
          'Data Definition Language (DDL) Commands: CREATE, ALTER, DROP',
          'Data Control Language (DCL) Commands: GRANT, REVOKE',
          'Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE',
          'SELECT Query Clauses: WHERE, ORDER BY, GROUP BY, HAVING',
          'Creating, Modifying, and Deleting Tables',
          'Views: Creating, Dropping, Updating Views',
          'Indexes: Creating and managing indexes',
          'Set Operations: UNION, INTERSECT, EXCEPT',
          'Predicates and Joins: INNER, LEFT, RIGHT, OUTER, CROSS joins',
          'Set Membership: IN, NOT IN operations',
          'Grouping and Aggregation Functions',
          'Nested Queries and Subqueries'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Programming in SQL (PL/SQL)',
        topics: [
          'PL/SQL Concepts: Block structure and execution',
          'PL/SQL Data Types and Variables',
          'Basic PL/SQL Block: Declaration, Execution, Exception Handling sections',
          'PL/SQL Functions: Creation and invocation',
          'PL/SQL Procedures: Creation with different modes',
          'Procedure Modes: IN, OUT, IN OUT parameters',
          'Functions vs Procedures: Key differences',
          'Cursors: Definition, types, and operations',
          'Explicit Cursors: OPEN, FETCH, CLOSE',
          'Database Triggers: Row-level and statement-level',
          'Trigger Types: BEFORE, AFTER, INSTEAD OF',
          'Exception Handling: Predefined and user-defined exceptions',
          'Application of DBMS in real-world scenarios'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Transaction Management and Concurrency Control',
        topics: [
          'ACID Properties: Atomicity, Consistency, Isolation, Durability',
          'Transactions: Definition and Properties',
          'Transaction States: Active, Partially Committed, Committed, Failed, Aborted',
          'Schedules and Concurrent Execution of Transactions',
          'Serializability: View serializability and Conflict serializability',
          'Concurrency Control: Lock-based Protocols',
          'Lock Protocols: Simple locks, 2-Phase Locking (2PL)',
          'Rigorous 2-Phase Locking and Strict 2-Phase Locking',
          'Cascade-less Schedules and Recoverable Schedules',
          'Deadlocks: Prevention Techniques (Wait-Die, Wound-Wait)',
          'Deadlock Detection and Recovery',
          'Database Recovery: Failure Classification',
          'Recovery and Atomicity',
          'Log-based Recovery: Redo and Undo operations',
          'Shadow Paging: Copy-on-write technique'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'E-R Diagram Design and Normalization',
        description: 'Design E-R diagrams for complex scenarios and convert them to relational schema with proper normalization.',
        tasks: [
          'Analyze business requirements and identify entities',
          'Identify attributes and relationships between entities',
          'Create E-R diagram using proper conventions and notations',
          'Design primary and foreign keys',
          'Convert E-R diagram to relational tables',
          'Verify and normalize tables up to BCNF'
        ],
        skills: ['E-R Modeling', 'Database Design', 'Normalization', 'Schema Design', 'DBMS Planning']
      },
      {
        lab: 'Lab 2',
        title: 'Database Creation and Table Management',
        description: 'Create databases, tables, and establish relationships using DDL commands.',
        tasks: [
          'Create database with appropriate naming conventions',
          'Design and create multiple related tables',
          'Implement primary key and foreign key constraints',
          'Create composite keys and candidate keys',
          'Modify table structure using ALTER commands',
          'Implement constraints: NOT NULL, UNIQUE, CHECK, DEFAULT'
        ],
        skills: ['DDL Commands', 'Table Design', 'Constraints', 'Database Creation', 'Schema Management']
      },
      {
        lab: 'Lab 3',
        title: 'SQL DML Queries and Joins',
        description: 'Master SELECT queries with various clauses, joins, and set operations.',
        tasks: [
          'Write SELECT queries with WHERE, ORDER BY clauses',
          'Implement different types of joins: INNER, LEFT, RIGHT, OUTER, CROSS',
          'Use set operations: UNION, INTERSECT, EXCEPT',
          'Implement IN, BETWEEN, LIKE predicates',
          'Write queries with aggregate functions: COUNT, SUM, AVG, MIN, MAX',
          'Create GROUP BY and HAVING clauses'
        ],
        skills: ['SQL Queries', 'JOIN Operations', 'Set Operations', 'Predicates', 'Aggregate Functions']
      },
      {
        lab: 'Lab 4',
        title: 'Advanced SQL: Views, Indexes, and Nested Queries',
        description: 'Create views, manage indexes, and write nested subqueries for complex data retrieval.',
        tasks: [
          'Create views from single and multiple tables',
          'Update and delete through views',
          'Create indexes on frequently queried columns',
          'Analyze query performance with and without indexes',
          'Write nested subqueries (correlated and non-correlated)',
          'Implement EXISTS, NOT EXISTS operators'
        ],
        skills: ['Views', 'Indexes', 'Nested Queries', 'Query Optimization', 'Performance Tuning']
      },
      {
        lab: 'Lab 5',
        title: 'Data Modification and Transaction Control',
        description: 'Implement INSERT, UPDATE, DELETE operations with transaction control.',
        tasks: [
          'Insert data into single and multiple tables',
          'Update records with various conditions',
          'Delete records with cascading effects',
          'Implement COMMIT and ROLLBACK operations',
          'Use SAVEPOINT for partial rollback',
          'Handle referential integrity violations'
        ],
        skills: ['DML Operations', 'INSERT/UPDATE/DELETE', 'Transaction Control', 'Data Integrity', 'Referential Integrity']
      },
      {
        lab: 'Lab 6',
        title: 'PL/SQL Functions and Procedures',
        description: 'Develop PL/SQL functions and procedures with parameter handling and logic.',
        tasks: [
          'Write stored procedures with IN, OUT, IN OUT parameters',
          'Implement conditional logic in procedures',
          'Create user-defined functions',
          'Handle local variables and cursors',
          'Implement loops: FOR, WHILE, simple loops',
          'Test procedures with various parameter combinations'
        ],
        skills: ['PL/SQL', 'Stored Procedures', 'Functions', 'Parameter Modes', 'Control Flow']
      },
      {
        lab: 'Lab 7',
        title: 'Cursors and Iterative Processing',
        description: 'Work with explicit cursors for row-by-row processing of data.',
        tasks: [
          'Declare and use explicit cursors',
          'Implement OPEN, FETCH, CLOSE cursor operations',
          'Process cursor results in loops',
          'Handle cursor attributes: %FOUND, %NOTFOUND, %ROWCOUNT',
          'Implement parameterized cursors',
          'Handle multiple cursors in nested loops'
        ],
        skills: ['Cursors', 'Row Processing', 'Cursor Attributes', 'Iterative Logic', 'PL/SQL']
      },
      {
        lab: 'Lab 8',
        title: 'Database Triggers and Exception Handling',
        description: 'Implement triggers for automated actions and handle exceptions in PL/SQL.',
        tasks: [
          'Create row-level and statement-level triggers',
          'Implement BEFORE/AFTER triggers',
          'Create INSTEAD OF triggers for views',
          'Use :NEW and :OLD referencing for trigger data',
          'Implement exception handling with TRY-CATCH blocks',
          'Create user-defined exceptions'
        ],
        skills: ['Triggers', 'Exception Handling', 'Automated Actions', 'Error Management', 'PL/SQL']
      },
      {
        lab: 'Lab 9',
        title: 'Transaction Management and Concurrency',
        description: 'Understand ACID properties, transactions, and implement concurrency control.',
        tasks: [
          'Demonstrate ACID properties in transactions',
          'Implement serializable transaction schedules',
          'Simulate deadlock scenarios',
          'Implement 2-Phase Locking protocol',
          'Use lock modes: Shared, Exclusive locks',
          'Recover from transaction failures'
        ],
        skills: ['ACID Properties', 'Transactions', 'Locks', 'Deadlock Handling', 'Concurrency Control']
      },
      {
        lab: 'Lab 10',
        title: 'Database Recovery and Logging',
        description: 'Implement log-based recovery and understand failure recovery mechanisms.',
        tasks: [
          'Implement transaction logging (UNDO/REDO logs)',
          'Perform forward recovery after crash',
          'Perform backward recovery (undo)',
          'Implement checkpoint mechanism',
          'Simulate various failure scenarios',
          'Implement shadow paging technique'
        ],
        skills: ['Database Recovery', 'Logging', 'Checkpoints', 'Failure Recovery', 'Shadow Paging']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Database Design', proficiency: 'Advanced', category: 'DBMS Fundamentals' },
      { skill: 'E-R Modeling', proficiency: 'Advanced', category: 'Data Modeling' },
      { skill: 'Relational Model', proficiency: 'Advanced', category: 'DBMS Concepts' },
      { skill: 'Normalization (BCNF)', proficiency: 'Advanced', category: 'Database Design' },
      { skill: 'SQL Queries', proficiency: 'Advanced', category: 'SQL' },
      { skill: 'JOIN Operations', proficiency: 'Advanced', category: 'SQL' },
      { skill: 'Views and Indexes', proficiency: 'Proficient', category: 'SQL' },
      { skill: 'Stored Procedures', proficiency: 'Proficient', category: 'PL/SQL' },
      { skill: 'PL/SQL Functions', proficiency: 'Proficient', category: 'PL/SQL' },
      { skill: 'Cursors', proficiency: 'Proficient', category: 'PL/SQL' },
      { skill: 'Database Triggers', proficiency: 'Proficient', category: 'PL/SQL' },
      { skill: 'Exception Handling', proficiency: 'Proficient', category: 'PL/SQL' },
      { skill: 'ACID Properties', proficiency: 'Proficient', category: 'Transactions' },
      { skill: 'Concurrency Control', proficiency: 'Proficient', category: 'Transactions' },
      { skill: 'Transaction Management', proficiency: 'Proficient', category: 'Transactions' },
      { skill: 'Locking Protocols', proficiency: 'Intermediate', category: 'Concurrency' },
      { skill: 'Database Recovery', proficiency: 'Intermediate', category: 'Reliability' },
      { skill: 'Query Optimization', proficiency: 'Intermediate', category: 'Performance' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Fundamentals of Database Systems',
          authors: 'Ramez Elmasri and Shamkant B. Navathe',
          publisher: 'Pearson',
          edition: '7th Edition',
          rating: 5,
          focus: 'Comprehensive coverage of DBMS concepts and design'
        },
        {
          title: 'Database System Concepts',
          authors: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan',
          publisher: 'McGraw Hill',
          edition: '6th Edition',
          rating: 5,
          focus: 'In-depth coverage of database theory and implementation'
        }
      ],
      referenceBooks: [
        {
          title: 'Learning SQL',
          authors: 'Alan Beaulieu',
          publisher: 'O\'Reilly Media',
          edition: '3rd Edition',
          rating: 5,
          focus: 'Practical SQL programming with clear examples'
        },
        {
          title: 'SQL Performance Explained',
          authors: 'Markus Winand',
          publisher: 'SQL Performance Explained',
          rating: 4,
          focus: 'Query optimization and performance tuning'
        },
        {
          title: 'Expert One-on-One: Oracle',
          authors: 'Tom Kyte',
          publisher: 'Apress',
          rating: 5,
          focus: 'Advanced Oracle database programming'
        }
      ],
      supplementaryReadings: [
        {
          title: 'SQL Cookbook',
          authors: 'Anthony Molinaro',
          publisher: 'O\'Reilly Media',
          focus: 'Practical SQL recipes and solutions'
        },
        {
          title: 'Designing Data-Intensive Applications',
          authors: 'Martin Kleppmann',
          publisher: 'O\'Reilly Media',
          focus: 'Modern database architecture and design patterns'
        }
      ],
      webResources: [
        {
          title: 'SQLZoo',
          url: 'https://sqlzoo.net/',
          type: 'Interactive Tutorial',
          description: 'Interactive SQL tutorials and exercises'
        },
        {
          title: 'DB-Engines',
          url: 'https://db-engines.com/',
          type: 'Reference',
          description: 'Database ranking and comparison tool'
        },
        {
          title: 'MySQL Official Documentation',
          url: 'https://dev.mysql.com/doc/',
          type: 'Documentation',
          description: 'Official MySQL reference and guides'
        }
      ],
      moocs: [
        {
          title: 'NPTEL - Database Management System',
          url: 'https://nptel.ac.in/courses/106105152/',
          provider: 'NPTEL (IIT)',
          description: 'Comprehensive video lectures on database systems'
        },
        {
          title: 'Coursera - Databases Specialization',
          url: 'https://www.coursera.org/specializations/databases',
          provider: 'Coursera (University of Colorado)',
          description: 'Specialization covering database design and implementation'
        }
      ]
    }
  },
  {
    id: 'iot',
    name: 'Internet of Things',
    code: 'Core CS Course',
    semester: '5th Semester',
    credits: 4,
    description: 'Explore IoT architecture, development platforms, sensor integration, communication protocols, and real-world IoT applications across various domains.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'IoT Architecture and Development Platforms',
        topics: [
          'Study of IoT architecture',
          'Development platforms and various ARM SOCs',
          'Raspberry Pi, Pico, ESP8266 boards, Arduino Uno etc.',
          'To perform OS installation in these devices'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Sensor Integration and Data Acquisition',
        topics: [
          'Interface sensors: Temperature, Ultrasonic, Gas sensors',
          'Interface with Pico/ESP8266 boards/Arduino etc.',
          'Demonstrate data acquisition and processing',
          'Real-time data monitoring and logging'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Actuator Control and Automation',
        topics: [
          'Interface actuators: DC/Servo/Stepper motors, Relays',
          'Control with Raspberry Pi/Pico/ESP8266/Arduino',
          'Automation and control systems',
          'Motor speed and direction control'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'IoT Communication Protocols',
        topics: [
          'MQTT/COAP protocols for IoT',
          'Subscribe and publish sensor data using MQTT',
          'ThingSpeak, Ubidots cloud platforms',
          'Cloud IoT data storage and analytics'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Advanced IoT Applications',
        topics: [
          'Web Server and IoT platform integration',
          'Mobile phone applications for IoT control',
          'IoT in Healthcare, Manufacturing, Agriculture',
          'Smart Cities and Industrial IoT',
          'Energy, Retails, Logistics, Education sectors',
          'Real estate and land records management',
          'Process management and monitoring'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'IoT Platform Setup and OS Installation',
        description: 'Study of IoT architecture, development platforms and ARM SOCs. Install OS on Raspberry Pi/Pico/ESP8266/Arduino Uno.',
        tasks: [
          'Study IoT architecture and components',
          'Explore development platforms (Raspberry Pi, Arduino, ESP8266)',
          'Install operating system on Raspberry Pi',
          'Configure and test basic GPIO operations',
          'Install necessary libraries and tools',
          'Verify platform functionality with simple LED blink'
        ],
        skills: ['IoT Architecture', 'Raspberry Pi', 'Arduino', 'ESP8266', 'OS Installation', 'GPIO']
      },
      {
        lab: 'Lab 2',
        title: 'Temperature and Ultrasonic Sensor Integration',
        description: 'Interface sensors such as Temperature or Ultrasonic sensors with Pico/ESP8266 boards/Arduino and demonstrate data acquisition.',
        tasks: [
          'Connect temperature sensor (DHT11/DHT22/LM35) to development board',
          'Write code to read temperature and humidity data',
          'Interface ultrasonic sensor (HC-SR04) for distance measurement',
          'Display sensor readings on serial monitor/LCD',
          'Log sensor data to file or database',
          'Implement data visualization'
        ],
        skills: ['Sensor Integration', 'Temperature Sensors', 'Ultrasonic Sensors', 'Data Acquisition', 'Arduino/ESP8266']
      },
      {
        lab: 'Lab 3',
        title: 'Actuator Control with Raspberry Pi',
        description: 'Interface actuators such as DC/Servo/Stepper motor, relays with Raspberry Pi/Pico/ESP8266/Arduino.',
        tasks: [
          'Connect DC motor with L298N motor driver',
          'Control motor speed using PWM',
          'Interface servo motor for precise angle control',
          'Control stepper motor for rotational positioning',
          'Use relay module to control high voltage devices',
          'Implement automated control sequences'
        ],
        skills: ['Actuator Control', 'DC Motors', 'Servo Motors', 'Stepper Motors', 'Relays', 'PWM']
      },
      {
        lab: 'Lab 4',
        title: 'MQTT Protocol Implementation',
        description: 'Demonstrate MQTT/COAP protocols to subscribe and publish sensor data using MQTT with ThingSpeak/Ubidots.',
        tasks: [
          'Set up MQTT broker (Mosquitto/HiveMQ)',
          'Configure MQTT client on IoT device',
          'Publish sensor data to MQTT topics',
          'Subscribe to topics and receive data',
          'Integrate with ThingSpeak or Ubidots cloud platform',
          'Visualize data on cloud dashboard'
        ],
        skills: ['MQTT', 'COAP', 'ThingSpeak', 'Ubidots', 'Cloud IoT', 'Protocols']
      },
      {
        lab: 'Lab 5',
        title: 'IoT Data Analytics and Visualization',
        description: 'Acquire and disseminate sensor data, perform spatial data presentation and analysis, demonstrate actuator interfacing with cloud IoT.',
        tasks: [
          'Collect multi-sensor data from IoT devices',
          'Store data in cloud database (Firebase/MongoDB)',
          'Perform data preprocessing and cleaning',
          'Create data analytics and visualizations',
          'Implement spatial data mapping',
          'Control actuators based on analyzed data'
        ],
        skills: ['Data Analytics', 'Cloud Storage', 'Data Visualization', 'Spatial Data', 'IoT Cloud']
      },
      {
        lab: 'Lab 6',
        title: 'Raspberry Pi/ESP8266 Web Server',
        description: 'Use Raspberry Pi/Pico/ESP8266 boards/Beagle board/Arduino Uno with Thing Speak, Ubidots for cloud integration.',
        tasks: [
          'Set up web server on Raspberry Pi or ESP8266',
          'Create web interface for IoT device control',
          'Integrate sensor data display on web page',
          'Implement REST API for device communication',
          'Connect to ThingSpeak/Ubidots for data logging',
          'Enable remote monitoring and control'
        ],
        skills: ['Web Server', 'HTTP', 'REST API', 'Web Development', 'Cloud Integration']
      },
      {
        lab: 'Lab 7',
        title: 'IoT Web Application with Sensor Data',
        description: 'Demonstrate IoT web application to acquire and disseminate sensor data using Web Server technology or IoT platform or device as a service at a shop.',
        tasks: [
          'Design IoT web application architecture',
          'Implement backend server for data handling',
          'Create frontend dashboard for data visualization',
          'Integrate real-time sensor data updates',
          'Implement user authentication and authorization',
          'Deploy application for shop/business monitoring'
        ],
        skills: ['Web Application', 'Full Stack Development', 'Real-time Data', 'IoT Platform', 'Dashboard']
      },
      {
        lab: 'Lab 8',
        title: 'Mobile Application for IoT Control',
        description: 'Write or use mobile phone application to monitor and control an IoT appliance.',
        tasks: [
          'Develop mobile app using MIT App Inventor or Flutter',
          'Implement Bluetooth/WiFi communication',
          'Create UI for device monitoring and control',
          'Send commands to IoT devices from mobile app',
          'Display sensor readings in real-time',
          'Implement push notifications for alerts'
        ],
        skills: ['Mobile Development', 'MIT App Inventor', 'Flutter', 'Bluetooth', 'WiFi', 'IoT Control']
      },
      {
        lab: 'Lab 9',
        title: 'IoT Platform Integration',
        description: 'IoT Platform or device as a service or you may use AWS Cloud platform or Firebase.',
        tasks: [
          'Set up IoT service on AWS IoT Core or Firebase',
          'Register and configure IoT devices',
          'Implement device shadow for state management',
          'Create rules for data processing and routing',
          'Set up alerts and notifications',
          'Monitor device fleet and analytics'
        ],
        skills: ['AWS IoT', 'Firebase', 'Cloud Platforms', 'Device Management', 'IoT Services']
      },
      {
        lab: 'Lab 10',
        title: 'IoT Domain Application Project',
        description: 'IoT Mini project in various domains like Healthcare, Manufacturing, Agriculture, Smart Cities, Energy, Retail, Logistics, Education, Real estate, etc.',
        tasks: [
          'Select specific domain for IoT application',
          'Identify problem statement and requirements',
          'Design complete IoT solution architecture',
          'Implement hardware integration and software development',
          'Test and demonstrate working prototype',
          'Present project with demonstration and report'
        ],
        skills: ['Project Development', 'Domain Knowledge', 'System Design', 'Implementation', 'Presentation']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'IoT Architecture', proficiency: 'Advanced', category: 'IoT' },
      { skill: 'Raspberry Pi Programming', proficiency: 'Advanced', category: 'Embedded Systems' },
      { skill: 'Arduino Development', proficiency: 'Advanced', category: 'Embedded Systems' },
      { skill: 'ESP8266/ESP32', proficiency: 'Advanced', category: 'Embedded Systems' },
      { skill: 'Sensor Integration', proficiency: 'Advanced', category: 'IoT' },
      { skill: 'Actuator Control', proficiency: 'Proficient', category: 'IoT' },
      { skill: 'MQTT Protocol', proficiency: 'Advanced', category: 'IoT Protocols' },
      { skill: 'Cloud IoT Platforms', proficiency: 'Proficient', category: 'Cloud' },
      { skill: 'Web Server Development', proficiency: 'Proficient', category: 'Web Development' },
      { skill: 'Mobile IoT Apps', proficiency: 'Intermediate', category: 'Mobile Development' },
      { skill: 'Data Acquisition', proficiency: 'Advanced', category: 'IoT' },
      { skill: 'IoT Security', proficiency: 'Intermediate', category: 'Security' }
    ],

    // Learning Resources
    resources: {
      textbooks: [],
      referenceBooks: [],
      supplementaryReadings: [],
      webResources: [],
      webLinks: [],
      moocs: []
    }
  },
  {
    id: 'os',
    name: 'Operating Systems',
    code: 'Core CS Course',
    semester: '3rd Year',
    credits: 4,
    description: 'Understand operating system fundamentals including process management, memory management, file systems, deadlocks, and synchronization with hands-on Linux/Unix experience.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to Operating Systems',
        topics: [
          'Concept of Operating Systems',
          'Types of OS: Batch, Multiprogramming, Time sharing, Real-time OS',
          'Distributed OS, Parallel OS',
          'Process Management: Process, Memory Management, Storage Management',
          'I/O Management, Protection and Security',
          'Case Study: Linux commands, Linux OS file system, shell programming'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Process Management',
        topics: [
          'Process Definition: Process Relationships',
          'Different states of a Process',
          'Process State transitions',
          'Process Control Block (PCB)',
          'Context switching',
          'Thread Definition: Benefits, Types of threads',
          'Concept of multithreading',
          'Process Scheduling: Foundation and Scheduling objectives',
          'Types of Schedulers',
          'Scheduling criteria: CPU utilization, Throughput, Turnaround time, Waiting Time, Response time',
          'Scheduling algorithms: Pre-emptive and non-pre-emptive',
          'FCFS, SJF, RR'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Inter-Process Communication and Synchronization',
        topics: [
          'Concurrent processes',
          'Critical Section',
          'Race Conditions',
          'Mutual Exclusion',
          'Hardware Solution',
          'Semaphores, Monitors, Message Passing',
          'Classical Problems of Synchronization: Producer-Consumer Problem',
          'Deadlocks: Definition',
          'Necessary and sufficient conditions for Deadlocks',
          'Deadlock Prevention',
          'Deadlock Avoidance: Banker\'s algorithm',
          'Deadlock detection and Recovery'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Memory Management',
        topics: [
          'Memory Partitioning: Fixed Partitioning, Dynamic Partitioning',
          'Internal and External Fragmentation',
          'Compaction, Concept of Virtual memory',
          'Segmentation, Paging, Page allocation',
          'Page fault, Concept of Demand Paging, Swapping, Page Thrashing',
          'Page Replacement Algorithms: FIFO, LRU, Optimal',
          'I/O and File Management: I/O Hardware',
          'I/O devices, Device controllers',
          'Direct Memory Access',
          'Principles of I/O'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'File Systems',
        topics: [
          'Concept of File',
          'Access methods, File types, File operation',
          'Directory structure, File System structure',
          'Allocation methods (contiguous, linked, indexed)',
          'Disk Management: Disk structure',
          'Disk scheduling: FCFS, SSTF, SCAN, C-SCAN',
          'Disk reliability, Disk formatting',
          'Boot block, Bad blocks'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Linux Commands and Shell Scripting',
        description: 'Write a program to implement Shell Scripting with arithmetic operations.',
        tasks: [
          'Learn basic Linux commands (ls, cd, pwd, mkdir, rm, cp, mv)',
          'Understand file permissions and ownership',
          'Write shell scripts for arithmetic operations',
          'Implement conditional statements (if-else)',
          'Use loops (for, while) in shell scripts',
          'Practice command-line arguments and variables'
        ],
        skills: ['Linux', 'Shell Scripting', 'Bash', 'Command Line', 'File Operations']
      },
      {
        lab: 'Lab 2',
        title: 'Process Management - Process Control',
        description: 'Write a program using fork() to create a child process. Parent and child should sort elements in different orders.',
        tasks: [
          'Implement fork() system call to create child process',
          'Parent process sorts elements in ascending order',
          'Child process sorts elements in descending order',
          'Demonstrate Orphan Process',
          'Demonstrate Zombie Process',
          'Use wait() and exit() system calls'
        ],
        skills: ['Process Creation', 'Fork', 'System Calls', 'Process States', 'C Programming']
      },
      {
        lab: 'Lab 3',
        title: 'Process Scheduling Algorithms',
        description: 'Write a program to simulate First Come First Serve (FCFS) or Shortest Remaining Time First (SRTF) CPU scheduling algorithms.',
        tasks: [
          'Implement FCFS (Non Pre-emptive) scheduling',
          'Implement SRTF (Pre-emptive) scheduling',
          'Calculate waiting time for each process',
          'Calculate turnaround time for each process',
          'Calculate average waiting and turnaround time',
          'Display Gantt chart representation'
        ],
        skills: ['CPU Scheduling', 'FCFS', 'SRTF', 'Algorithm Implementation', 'C Programming']
      },
      {
        lab: 'Lab 4',
        title: 'Inter-Process Communication',
        description: 'Implement Pipe and/or Shared Memory Concept for inter-process communication.',
        tasks: [
          'Implement communication using Pipes',
          'Implement Shared Memory concept',
          'Demonstrate data exchange between processes',
          'Handle synchronization issues',
          'Compare Pipe vs Shared Memory performance',
          'Error handling and process termination'
        ],
        skills: ['IPC', 'Pipes', 'Shared Memory', 'Process Communication', 'C Programming']
      },
      {
        lab: 'Lab 5',
        title: 'Process Synchronization - Deadlocks',
        description: 'Write a program to simulate Bankers algorithm for deadlock avoidance.',
        tasks: [
          'Implement Banker\'s algorithm for deadlock avoidance',
          'Accept resources and process requirements',
          'Calculate available, allocation, need matrices',
          'Find safe sequence if it exists',
          'Check if new request can be granted safely',
          'Display system state and safety status'
        ],
        skills: ['Deadlock Avoidance', 'Banker\'s Algorithm', 'Resource Allocation', 'Safety Algorithm', 'C']
      },
      {
        lab: 'Lab 6',
        title: 'Process Synchronization - Semaphores',
        description: 'Implement Readers-Writers or Producer-Consumer Problem using semaphores.',
        tasks: [
          'Implement Producer-Consumer problem using semaphores',
          'Use mutex for critical section protection',
          'Implement bounded buffer solution',
          'OR Implement Readers-Writers problem',
          'Demonstrate multiple readers/writers scenario',
          'Prevent race conditions and ensure synchronization'
        ],
        skills: ['Semaphores', 'Mutual Exclusion', 'Producer-Consumer', 'Readers-Writers', 'C']
      },
      {
        lab: 'Lab 7',
        title: 'Memory Management - Page Replacement',
        description: 'Write a program to simulate FIFO and Least Recently Used (LRU) page replacement algorithm.',
        tasks: [
          'Implement FIFO page replacement algorithm',
          'Implement LRU page replacement algorithm',
          'Count page faults for each algorithm',
          'Compare performance of FIFO vs LRU',
          'Display page frames at each step',
          'Calculate hit ratio and miss ratio'
        ],
        skills: ['Memory Management', 'FIFO', 'LRU', 'Page Replacement', 'Virtual Memory', 'C']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'OS Fundamentals', proficiency: 'Advanced', category: 'Operating Systems' },
      { skill: 'Process Management', proficiency: 'Advanced', category: 'OS' },
      { skill: 'CPU Scheduling', proficiency: 'Advanced', category: 'OS' },
      { skill: 'Memory Management', proficiency: 'Advanced', category: 'OS' },
      { skill: 'File Systems', proficiency: 'Proficient', category: 'OS' },
      { skill: 'Deadlock Handling', proficiency: 'Advanced', category: 'OS' },
      { skill: 'Process Synchronization', proficiency: 'Advanced', category: 'OS' },
      { skill: 'Linux/Unix Commands', proficiency: 'Advanced', category: 'Linux' },
      { skill: 'Shell Scripting', proficiency: 'Proficient', category: 'Linux' },
      { skill: 'System Calls', proficiency: 'Advanced', category: 'Programming' },
      { skill: 'IPC Mechanisms', proficiency: 'Proficient', category: 'OS' },
      { skill: 'Virtual Memory', proficiency: 'Proficient', category: 'OS' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Operating System Concepts Essentials',
          authors: 'Abraham Silberschatz, Peter Baer Galvin and Greg Gagne',
          publisher: 'Wiley',
          rating: 5,
          focus: 'Comprehensive OS textbook with practical examples'
        },
        {
          title: 'Operating Systems: Internals and Design Principles',
          authors: 'William Stallings',
          publisher: 'Pearson',
          rating: 5,
          focus: 'In-depth coverage of OS design and implementation'
        }
      ],
      referenceBooks: [
        {
          title: 'Operating Crowley: System: A Design-oriented Approach',
          authors: 'Charles Crowley',
          publisher: 'McGraw-Hill',
          rating: 4,
          focus: 'Design-oriented approach to OS concepts'
        },
        {
          title: 'Operating Systems: A Modern Perspective',
          authors: 'Gary J. Nutt',
          publisher: 'Addison-Wesley',
          rating: 4,
          focus: 'Modern perspective on OS implementation'
        },
        {
          title: 'Design of the Unix Operating Systems',
          authors: 'Maurice J. Bach',
          publisher: 'Prentice Hall',
          rating: 5,
          focus: 'Classic Unix OS design and architecture'
        },
        {
          title: 'Understanding the Linux Kernel',
          authors: 'Daniel Pierre Bovet, Marco Cesati',
          publisher: 'O\'Reilly Media',
          rating: 5,
          focus: 'Deep dive into Linux kernel internals'
        },
        {
          title: 'Unix concepts and applications',
          authors: 'Sumitabha Das',
          publisher: 'McGraw-Hill',
          rating: 4,
          focus: 'Practical Unix concepts and shell programming'
        }
      ],
      supplementaryReadings: [
        {
          title: 'Modern Operating Systems',
          authors: 'Andrew Tanenbaum',
          publisher: 'Pearson',
          edition: '4th Edition',
          focus: 'Modern OS concepts with real-world examples'
        }
      ],
      webResources: [],
      webLinks: [
        {
          title: 'Operating System Concepts Blog',
          url: 'http://engineeringppt.blogspot.in/2009/07/operating-system-concepts-8th-edition.html',
          type: 'Blog',
          description: 'OS concepts and tutorials'
        }
      ],
      moocs: []
    }
  },
  {
    id: 'oop',
    name: 'Object Oriented Programming (OOP)',
    code: 'Core CS Course',
    semester: '2nd Year',
    credits: 4,
    description: 'Master object-oriented programming fundamentals using C++, including classes, objects, inheritance, polymorphism, templates, and exception handling.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to OOP',
        topics: [
          'Introduction to OOP: Fundamentals of object-oriented programming',
          'Classes, Objects, methods, Data Abstraction',
          'Data Encapsulation, Information hiding, Instances',
          'Polymorphism, Benefits of OOP',
          'Introduction to C++: Basics of C++',
          'Class, Object, Array of objects',
          'Data Members, Member Function',
          'Access Specifiers, Function prototype, Passing and Returning objects in Functions',
          'Inline function, Scope Resolution Operator, Friend Class, Friend Function',
          'Static members: variables and function'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Inheritance and Polymorphism',
        topics: [
          'Inheritance: Base and Derived Classes',
          'Types of inheritance: protected',
          'Data member and Member Function',
          'Member Access Control',
          'Inheriting Constructors and Destructors',
          'Overriding Member Functions',
          'Ambiguity in Multiple Inheritance'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Polymorphism',
        topics: [
          'Introduction to Polymorphism',
          'Types of Polymorphism: Static polymorphism, Dynamic polymorphism',
          'Function overloading, Operator overloading',
          'Pure Virtual function, Abstract base Class'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Exception Handling, File and IO Streams',
        topics: [
          'Exception Handling: Introduction',
          'Exception Handling Mechanism: try, catch and throw',
          'Multiple Exceptions',
          'File IO Streams: Stream and Files',
          'Stream Classes, File Pointers',
          'File I/O with Member Functions',
          'Case study/examples in C++'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Templates',
        topics: [
          'Introduction to Template',
          'Types of templates: Function Template, overloading Function Templates',
          'Class Template',
          'Standard components: Containers',
          'Sequence Containers and Associative Containers',
          'Container Adapters, Applications of Container vector, list',
          'Algorithms- searching and sorting',
          'Iterators'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Classes and Objects Basics',
        description: 'Implement basic C++ programs demonstrating classes, objects, and member functions.',
        tasks: [
          'Create a class with data members and member functions',
          'Implement constructor and destructor',
          'Demonstrate data encapsulation and abstraction',
          'Use access specifiers (public, private, protected)',
          'Create array of objects',
          'Implement inline functions and scope resolution operator'
        ],
        skills: ['C++', 'Classes', 'Objects', 'Constructors', 'Encapsulation']
      },
      {
        lab: 'Lab 2',
        title: 'Friend Functions and Static Members',
        description: 'Implement friend functions, friend classes, and static members.',
        tasks: [
          'Create friend function to access private members',
          'Implement friend class',
          'Use static data members and static member functions',
          'Demonstrate data sharing among objects using static',
          'Show difference between instance and static members'
        ],
        skills: ['Friend Functions', 'Static Members', 'Access Control', 'C++']
      },
      {
        lab: 'Lab 3',
        title: 'Inheritance Implementation',
        description: 'Implement different types of inheritance in C++.',
        tasks: [
          'Implement single inheritance',
          'Implement multiple inheritance',
          'Implement multilevel inheritance',
          'Implement hierarchical inheritance',
          'Demonstrate constructor/destructor call order in inheritance',
          'Handle ambiguity in multiple inheritance'
        ],
        skills: ['Inheritance', 'Base Classes', 'Derived Classes', 'Multiple Inheritance', 'C++']
      },
      {
        lab: 'Lab 4',
        title: 'Function and Operator Overloading',
        description: 'Implement function overloading and operator overloading.',
        tasks: [
          'Implement function overloading with different parameters',
          'Overload arithmetic operators (+, -, *, /)',
          'Overload comparison operators (==, !=, <, >)',
          'Overload increment/decrement operators (++, --)',
          'Overload stream insertion (<<) and extraction (>>) operators',
          'Demonstrate polymorphism through overloading'
        ],
        skills: ['Function Overloading', 'Operator Overloading', 'Polymorphism', 'C++']
      },
      {
        lab: 'Lab 5',
        title: 'Virtual Functions and Polymorphism',
        description: 'Implement virtual functions, pure virtual functions, and abstract classes.',
        tasks: [
          'Create base class with virtual functions',
          'Override virtual functions in derived classes',
          'Demonstrate runtime polymorphism',
          'Implement pure virtual functions',
          'Create abstract base class',
          'Use pointers to base class for polymorphic behavior'
        ],
        skills: ['Virtual Functions', 'Runtime Polymorphism', 'Abstract Classes', 'Pure Virtual', 'C++']
      },
      {
        lab: 'Lab 6',
        title: 'Exception Handling',
        description: 'Implement exception handling using try, catch, and throw.',
        tasks: [
          'Implement basic try-catch-throw mechanism',
          'Handle multiple exceptions with different catch blocks',
          'Implement exception handling in functions',
          'Create custom exception classes',
          'Demonstrate exception propagation',
          'Use catch-all handler'
        ],
        skills: ['Exception Handling', 'Try-Catch-Throw', 'Error Handling', 'C++']
      },
      {
        lab: 'Lab 7',
        title: 'File I/O Operations',
        description: 'Implement file handling using C++ streams.',
        tasks: [
          'Read and write text files using fstream',
          'Implement file operations: open, close, read, write',
          'Use file pointers and seek operations',
          'Read/write objects to binary files',
          'Handle file errors and exceptions',
          'Implement student/employee record management system'
        ],
        skills: ['File Handling', 'Streams', 'fstream', 'File I/O', 'C++']
      },
      {
        lab: 'Lab 8',
        title: 'Function Templates',
        description: 'Implement function templates for generic programming.',
        tasks: [
          'Create generic function templates',
          'Implement template functions for sorting',
          'Implement template functions for searching',
          'Overload function templates',
          'Use template specialization',
          'Demonstrate type-independent code'
        ],
        skills: ['Templates', 'Function Templates', 'Generic Programming', 'Template Specialization', 'C++']
      },
      {
        lab: 'Lab 9',
        title: 'Class Templates',
        description: 'Implement class templates and template classes.',
        tasks: [
          'Create generic class templates',
          'Implement template class for Stack',
          'Implement template class for Queue',
          'Create template class for Array/Vector',
          'Use class templates with multiple type parameters',
          'Demonstrate template class instantiation'
        ],
        skills: ['Class Templates', 'Template Classes', 'Generic Data Structures', 'C++']
      },
      {
        lab: 'Lab 10',
        title: 'STL Containers and Algorithms',
        description: 'Use Standard Template Library containers, iterators, and algorithms.',
        tasks: [
          'Use vector container and operations',
          'Use list container and operations',
          'Use map/set associative containers',
          'Implement iterators for traversal',
          'Use STL algorithms: sort, search, find',
          'Demonstrate container adapters: stack, queue'
        ],
        skills: ['STL', 'Vectors', 'Lists', 'Maps', 'Iterators', 'Algorithms', 'C++']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Object Oriented Programming', proficiency: 'Advanced', category: 'Programming' },
      { skill: 'C++ Programming', proficiency: 'Advanced', category: 'Programming' },
      { skill: 'Classes and Objects', proficiency: 'Advanced', category: 'OOP' },
      { skill: 'Inheritance', proficiency: 'Advanced', category: 'OOP' },
      { skill: 'Polymorphism', proficiency: 'Advanced', category: 'OOP' },
      { skill: 'Templates', proficiency: 'Proficient', category: 'C++' },
      { skill: 'Exception Handling', proficiency: 'Proficient', category: 'C++' },
      { skill: 'File I/O', proficiency: 'Proficient', category: 'C++' },
      { skill: 'STL (Standard Template Library)', proficiency: 'Proficient', category: 'C++' },
      { skill: 'Operator Overloading', proficiency: 'Advanced', category: 'C++' },
      { skill: 'Virtual Functions', proficiency: 'Advanced', category: 'OOP' },
      { skill: 'Generic Programming', proficiency: 'Proficient', category: 'Programming' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Object-Oriented Programming in C++',
          authors: 'Robert Lafore',
          publisher: 'Sams Publishing',
          edition: 'Fourth Edition',
          ISBN: '0672323087 / ISBN-13: 9780672323089',
          rating: 5,
          focus: 'Comprehensive C++ and OOP concepts'
        },
        {
          title: 'C++ The Complete Reference',
          authors: 'Herbert Schildt',
          publisher: 'McGraw Hill Professional',
          edition: 'Eighth Edition',
          ISBN: '0072226803',
          rating: 5,
          focus: 'Complete C++ reference and guide'
        },
        {
          title: 'The C++ Programming language',
          authors: 'Bjarne Stroustrup',
          publisher: 'Pearson Education',
          edition: 'Seventh Edition',
          ISBN: '9788131703212',
          rating: 5,
          focus: 'Definitive guide by C++ creator'
        },
        {
          title: 'Object-Oriented programming with C++',
          authors: 'E Balagurusamy',
          publisher: 'Tata McGraw Hill Education',
          edition: '7th edition',
          ISBN: '10:9352607900 ISBN 13:9789352607990',
          rating: 5,
          focus: 'Indian author, excellent for beginners'
        }
      ],
      referenceBooks: [],
      supplementaryReadings: [],
      webResources: [
        {
          title: 'C++ Documentation - Springer',
          url: 'https://link.springer.com/gp/book/9781432534593',
          type: 'Documentation',
          description: 'Official C++ documentation and resources'
        },
        {
          title: 'Object Oriented Programming in C++',
          url: 'https://www.theobjectfinder.com/object-oriented-programming-in-c-epub-pdf/',
          type: 'Tutorial',
          description: 'Comprehensive OOP tutorials'
        }
      ],
      webLinks: [],
      moocs: [
        {
          title: 'C++ Courses',
          url: 'https://www.coursera.org/learn/c-plus-plus-a',
          provider: 'Coursera',
          description: 'C++ programming courses'
        },
        {
          title: 'NPTEL - OOP Course',
          url: 'https://nptel.ac.in/courses/106/106/151/',
          provider: 'NPTEL (IIT)',
          description: 'Object Oriented Programming video lectures'
        }
      ]
    }
  },
  {
    id: 'se',
    name: 'Software Engineering and Modelling',
    code: 'Core CS Course',
    semester: '4th Semester',
    credits: 4,
    description: 'Learn software development lifecycle, process models, requirements engineering, design principles, testing methodologies, and agile practices for building quality software systems.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Software Engineering',
        topics: [
          'Meaning and importance of Software Engineering',
          'Software engineering process',
          'Software Process models: Process and Project',
          'Software development Process Models: Waterfall, Prototyping',
          'Iterative development, Rational Unified Process',
          'Spiral Model, Agile Model',
          'Software Myths',
          'Requirement Engineering: Software Requirements, User requirements, System requirements'
        ]
      },
      {
        unit: 'Unit 2',
        title: 'Software Requirements and Design',
        topics: [
          'Software Requirements Specification',
          'Requirement Engineering Process',
          'SRS Functional Specification and Non-functional specifications',
          'Software Design: Abstraction, Modularity, Cohesion & Coupling',
          'Scenario based modeling, SSAD (ER diagram, Data Flow Diagram DFD)',
          'OOAD (Unified Modeling Language UML)',
          'Static modeling: Class diagrams',
          'Finding analysis and Design Classes, Object diagrams, Composite structure diagrams',
          'Package diagrams, Deployment Diagrams',
          'Dynamic Modeling: Use case diagram, Activity diagram',
          'Interaction & Interaction overview diagram',
          'Sequence diagram, Timing diagram, Communication diagram',
          'Advance state machine diagram'
        ]
      },
      {
        unit: 'Unit 3',
        title: 'Software Project Management',
        topics: [
          'Project Management Principles, Process and Project Metrics',
          'Function Point analysis',
          'LOC, Make/Buy Decision',
          'COCOMO II - Project Planning',
          'Functions of manager',
          'PERT, CPM',
          'Risk Management'
        ]
      },
      {
        unit: 'Unit 4',
        title: 'Testing',
        topics: [
          'Testing concepts',
          'Principles of software testing, verification and validation',
          'V-test model, defect management',
          'Testing strategies: unit, integration and system testing',
          'Acceptance, alpha, beta, performance, security testing',
          'White box and black box testing',
          'Basis path testing, control structure testing'
        ]
      },
      {
        unit: 'Unit 5',
        title: 'Trends in Software Engineering',
        topics: [
          'Agile Practices: Agile manifesto',
          'The Essentials of Agile Software Development',
          'Aspects of Agile Approaches, Practices and Processes',
          'Techniques in Agile Projects',
          'Extreme Programming',
          'DevOps: Introduction-Definition, DevOps Foot chain',
          'Why DevOps? Goals, Benefits',
          'Relationship to Agile and DevOps (continuous delivery)',
          'DevOps Tools',
          'Role of Software engineering in IoT applications',
          'Data Hooks - Engineering, cloud computing and cyber security applications'
        ]
      }
    ],

    // Practical Labs
    practicalExperience: [
      {
        lab: 'Lab 1',
        title: 'Software Process Models and Project Planning',
        description: 'Develop a project plan for given problem statement using one of the software process models (waterfall, RAD and incremental) and agile. Perform comparative analysis.',
        tasks: [
          'Select a problem statement for software development',
          'Choose appropriate software process model (Waterfall/RAD/Incremental/Agile)',
          'Create detailed project plan with phases/stages',
          'Identify key activities and deliverables',
          'Define timelines, resource requirements, and milestones',
          'Compare advantages and challenges of different models',
          'Document the selected model with justification'
        ],
        skills: ['Project Planning', 'SDLC', 'Process Models', 'Agile', 'Waterfall', 'Documentation']
      },
      {
        lab: 'Lab 2',
        title: 'Requirements Engineering',
        description: 'Develop and refine software requirements, enhancing students\' skills in capturing user and system requirements.',
        tasks: [
          'Gather initial set of requirements from stakeholders',
          'Document functional requirements',
          'Document non-functional requirements',
          'Create Software Requirements Specification (SRS) document',
          'Perform requirements validation and verification',
          'Handle requirements changes and traceability'
        ],
        skills: ['Requirements Engineering', 'SRS', 'Functional Requirements', 'Non-functional Requirements']
      },
      {
        lab: 'Lab 3',
        title: 'System Analysis and Design with SSAD',
        description: 'Perform Structured System Analysis and Design (SSAD) for a given problem statement and create Data Flow Diagram (DFD) at various levels.',
        tasks: [
          'Analyze the given problem statement',
          'Create Context Level DFD (Level 0)',
          'Create Level 1 DFD with major processes',
          'Create Level 2 DFD with detailed processes',
          'Draw Entity-Relationship (ER) diagram',
          'Create Data Dictionary',
          'Validate DFDs for consistency and completeness'
        ],
        skills: ['SSAD', 'DFD', 'ER Diagram', 'System Analysis', 'Structured Design']
      },
      {
        lab: 'Lab 4',
        title: 'Object-Oriented Analysis and Design',
        description: 'Develop system using Object-Oriented Analysis and Design (OOAD) techniques by creating use case diagrams and class diagrams.',
        tasks: [
          'Identify actors and use cases for the system',
          'Create use case diagrams',
          'Write use case descriptions',
          'Identify analysis and design classes',
          'Create class diagrams with attributes and methods',
          'Show relationships: association, aggregation, composition, inheritance',
          'Create object diagrams for specific scenarios'
        ],
        skills: ['OOAD', 'UML', 'Use Case Diagrams', 'Class Diagrams', 'Object Diagrams']
      },
      {
        lab: 'Lab 5',
        title: 'UML Behavioral Diagrams',
        description: 'Explore a sequence diagram for a given problem scenario as follows.',
        tasks: [
          'Identify objects and their interactions',
          'Create sequence diagrams showing message flow',
          'Create activity diagrams for workflows',
          'Draw state machine diagrams for object states',
          'Create communication diagrams',
          'Develop interaction overview diagrams',
          'Ensure diagrams capture all functional requirements'
        ],
        skills: ['Sequence Diagrams', 'Activity Diagrams', 'State Diagrams', 'UML', 'Behavioral Modeling']
      },
      {
        lab: 'Lab 6',
        title: 'Critical Path Method and PERT',
        description: 'Develop a project plan, working on a project to develop a new feature for their application with multiple tasks and dependencies.',
        tasks: [
          'Identify all project tasks and activities',
          'Determine task dependencies and relationships',
          'Estimate task durations (optimistic, pessimistic, most likely)',
          'Create PERT network diagram',
          'Calculate critical path using CPM',
          'Identify tasks on critical path',
          'Calculate project completion time and slack time',
          'Optimize project schedule'
        ],
        skills: ['Project Management', 'PERT', 'CPM', 'Critical Path', 'Scheduling']
      },
      {
        lab: 'Lab 7',
        title: 'White Box Testing Techniques',
        description: 'Demonstrate and compare various White Box Testing Methods. Aim is to ensure thorough testing by utilizing Black Box Testing, Boundary Value Analysis, and Basis Path Testing.',
        tasks: [
          'Study different types of white box testing techniques',
          'Implement basis path testing with control flow graphs',
          'Calculate cyclomatic complexity',
          'Design test cases based on code structure',
          'Perform statement coverage, branch coverage, path coverage',
          'Use tools for code coverage analysis',
          'Discuss tools used and compare white box test cases'
        ],
        skills: ['White Box Testing', 'Basis Path Testing', 'Code Coverage', 'Control Flow', 'Testing']
      },
      {
        lab: 'Lab 8',
        title: 'Black Box Testing and Test Case Generation',
        description: 'Test case generation using white box testing techniques. Goal is to ensure by studying white box testing methods, identifying a feature or component to test.',
        tasks: [
          'Identify features/components for testing',
          'Design test cases using equivalence partitioning',
          'Apply boundary value analysis',
          'Create decision table for complex logic',
          'Generate test cases based on requirements',
          'Execute test cases and record results',
          'Calculate test coverage percentage',
          'Design test cases to achieve maximum branch coverage using white box testing principles'
        ],
        skills: ['Black Box Testing', 'Test Case Design', 'Equivalence Partitioning', 'Boundary Value Analysis']
      },
      {
        lab: 'Lab 9',
        title: 'Software Testing - Integration and System Testing',
        description: 'Understand and apply testing techniques for software application.',
        tasks: [
          'Perform unit testing on individual modules',
          'Conduct integration testing (top-down, bottom-up)',
          'Perform system testing on complete application',
          'Execute functional and non-functional tests',
          'Conduct acceptance testing',
          'Document test results and defects',
          'Generate test reports and metrics'
        ],
        skills: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing', 'Test Reporting']
      }
    ],

    // Key Concepts & Skills
    keySkillsAcquired: [
      { skill: 'Software Development Life Cycle', proficiency: 'Advanced', category: 'Software Engineering' },
      { skill: 'Requirements Engineering', proficiency: 'Advanced', category: 'Software Engineering' },
      { skill: 'UML Modeling', proficiency: 'Advanced', category: 'Design' },
      { skill: 'System Analysis and Design', proficiency: 'Advanced', category: 'Software Engineering' },
      { skill: 'Software Testing', proficiency: 'Advanced', category: 'Quality Assurance' },
      { skill: 'Agile Methodologies', proficiency: 'Proficient', category: 'Software Engineering' },
      { skill: 'Project Management', proficiency: 'Proficient', category: 'Management' },
      { skill: 'PERT/CPM', proficiency: 'Proficient', category: 'Project Management' },
      { skill: 'DevOps Practices', proficiency: 'Intermediate', category: 'DevOps' },
      { skill: 'White Box Testing', proficiency: 'Advanced', category: 'Testing' },
      { skill: 'Black Box Testing', proficiency: 'Advanced', category: 'Testing' },
      { skill: 'Software Design Patterns', proficiency: 'Proficient', category: 'Design' }
    ],

    // Learning Resources
    resources: {
      textbooks: [
        {
          title: 'Software Engineering',
          authors: 'Ian Sommerville',
          publisher: 'Pearson',
          edition: '10th Edition',
          rating: 5,
          focus: 'Comprehensive software engineering textbook'
        },
        {
          title: 'Software Engineering: A Practitioner\'s Approach',
          authors: 'Rogers S. Pressman and Bruce R. Maxim',
          publisher: 'McGraw-Hill',
          edition: '8th Edition',
          rating: 5,
          focus: 'Practical approach to software engineering'
        }
      ],
      referenceBooks: [
        {
          title: 'The Essentials of Modern Software Engineering: Free the Practices from the Method Prisons!',
          authors: 'Ivar Jacobson, Pan-Wei Ng, Paul E. McMahon, Ian Spence, and Svante Lidman',
          publisher: 'ACM Books',
          rating: 4,
          focus: 'Modern software engineering practices'
        },
        {
          title: 'Fundamentals of Software Engineering',
          authors: 'Carlo Ghezzi, Jazayeri Mehdi and Mandrioli Dino',
          publisher: 'Prentice Hall',
          rating: 5,
          focus: 'Software engineering fundamentals'
        },
        {
          title: 'Software Requirements and Specification: A Lexicon of Practice, Principles and Prejudices',
          authors: 'Michael Jackson',
          publisher: 'Addison-Wesley',
          rating: 4,
          focus: 'Requirements engineering in depth'
        },
        {
          title: 'Software Development Process',
          authors: 'Ivar Jacobson, Grady Booch and James Rumbaugh',
          publisher: 'Addison-Wesley',
          rating: 5,
          focus: 'Unified software development process'
        }
      ],
      supplementaryReadings: [],
      webResources: [],
      webLinks: [],
      moocs: []
    }
  }
];
