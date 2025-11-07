/**
 * Comprehensive Coursework Data
 * Detailed syllabus, practical experience, and references for key courses
 */

export const courseworkData = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    code: 'Core CS Course',
    semester: '2nd Year',
    credits: 4,
    description: 'Master fundamental data structures and algorithm analysis to write efficient, scalable code for complex problem-solving.',
    
    // Syllabus Units
    units: [
      {
        unit: 'Unit 1',
        title: 'Introduction to Data Structures & Algorithm Analysis',
        topics: [
          'Data, Data Objects, Abstract Data Types (ADT)',
          'Types of Data Structures: Linear vs Non-linear, Static vs Dynamic',
          'Space Complexity & Time Complexity',
          'Asymptotic Notations: Big-O, Theta (Θ), Omega (Ω)',
          'Sorting Fundamentals: Internal vs External, Stability, Efficiency',
          'Comparison-Based Sorting: Bubble Sort, Insertion Sort, Selection Sort, Shell Sort'
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
        title: 'Student Database with Sorting',
        description: 'Create a student database using array of structures and implement multiple sorting techniques.',
        tasks: [
          'Design student record structure (ID, Name, GPA, etc.)',
          'Implement Bubble Sort with comparison count',
          'Implement Insertion Sort with operation analysis',
          'Implement Selection Sort and compare performance',
          'Analyze time & space complexity for each sorting algorithm'
        ],
        skills: ['Arrays', 'Structures', 'Sorting Algorithms', 'Performance Analysis', 'C Programming']
      },
      {
        lab: 'Lab 2',
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
        lab: 'Lab 3',
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
        lab: 'Lab 4',
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
        lab: 'Lab 5',
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
        lab: 'Lab 6',
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
        lab: 'Lab 7',
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
        lab: 'Lab 8',
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
        lab: 'Lab 9',
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
      { skill: 'Algorithm Analysis', proficiency: 'Advanced', category: 'Core CS' },
      { skill: 'Big-O Notation', proficiency: 'Advanced', category: 'Analysis' },
      { skill: 'Array Operations', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Linked Lists', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Stack Implementation', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Queue Implementation', proficiency: 'Advanced', category: 'Data Structures' },
      { skill: 'Tree Traversals', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Binary Search Trees', proficiency: 'Proficient', category: 'Data Structures' },
      { skill: 'Sorting Algorithms', proficiency: 'Advanced', category: 'Algorithms' },
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
  }
];
