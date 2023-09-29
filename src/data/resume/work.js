/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'The Linux Foundation',
    position: 'Senior Architect, Technical Project Manager',
    url: 'https://linuxfoundation.org',
    startDate: '2022-04-01',
    summary: 'The Linux Foundation is a non-profit organization established in 2000 to support Linux development and open-source software projects. After contributing to different opensource projects in the Linux Foundation, I decided to join the foundation itself as an Architect. I work with different communities managing few projects and exploring different aspects in the domain of Networking.',
    highlights: [
      'Manage DENT, eBPF Foundation, OPI and O-RAN-SC Projects',
    ],
  },
  {
    name: 'Spirent Communications',
    position: 'Senior Architect',
    url: 'https://spirent.com',
    startDate: '2015-10-01',
    endDate: '2022-03-31',
    summary: 'Working with Telcos in and around India and Contribution to the opensources',
    highlights: [
      'Deployment of multi-vendor Edge-Cloud for vEPC for Major Telco in India.',
      'Technology Consultant for 10+ Telcos across the globe.',
      'Kubernetes CNI Benchmarking for Telco Usecases.',
      'NFV infrastructure benchmarking.',
      'Live monitoring and End-to-End test automation for Telco clouds.',
      'Edge-cloud Lifecyle Management – Automated Deployment and testing with Airship and OPNFV.',
      'CNTT-RI – Deployment, Validation and Testing.Built production, online, end-to-end optimized machine learning pipelines for time-series prediction.',
      'Defining SDN and NFV product roadmap',
      'Contribution to OPNFV-VSPERF, OPNFV-CIRV, OPNFV-AIRSHIP',
      'Demo at ONS-NA 2019. Talks at all LFN events over past 2 years.',
    ],
  },
  {
    name: 'NEC',
    position: 'Research Lead, Senior Architect, Associate General Manager ',
    url: 'http://in.nec.com',
    startDate: '2010-04-01',
    endDate: '2015-09-30',
    summary: 'Design, PoC Development, Technical Guidance, Application Proposal, indipendent contributions and research activities',
    highlights: [
      'Reverse-engineering of OpenStack Neutron Implementation – can be found at https://github.com/sknrao/openstack-neutron-revengg',
      'Analysis of Bare-metal switches and its role in software-defined networking. Analysis of SDN-ecosystem development with respect to APIs, SDK, prospective products for interoperability, etc.',
      'Analysis of Open-source SDN Controllers – Trema, NOX/POX, RYU, ODL, ONOS, Floodlight.',
      'Following the NFV Standardization (Ecosystem) Process at ETSI and Openflow standardization at  ONF. Technical Blogs at http://www.newstack.io and www.opennetsummit.org',
      'Worked on Programmable-Flow Controllers – Design, PoC Development, and Technical Guidance for development team. Worked Extensively in Network Virtualization support in programmable flow-controllers – Hop-by-hop and Virtual Overlays. Reverse engineering of the complete controller architecture.Feature additions – Designs for scalability, Northbound APIs, Reusability of openflow-libraries across multiple controllers.',
      'Working on Virtual Switches - Design, PoC Development, and Technical Guidance. Enhancements of OpenVswitch – statistics, remote configuration, rest-API support, etc. VSwitches for Hyper-V – OVS in Microsoft Hyper-V.',
      'SDN-application development – Application Proposal and Technical Guidance. In-house development of various SDN-applications for OpenDayLight Platform: Yet Another Overlay Network, The Cable Guy, The Usher, etc. In-house development work on Openstack - Neutron agent, Events Management and Visualization.',
      'On-Site Solution Designing – Independent Contributions. Communication architecture for Automatic Passenger Movers. Openflow in Handheld devices. Programmable Flow in Microsoft VSEM.',
    ],
  },
  {
    name: 'Microsoft Innovation Center - Politechnico Di Torino',
    position: 'Research Fellow',
    url: 'https://polito.it',
    startDate: '2008-06-01',
    endDate: '2010-03-31',
    summary: 'Part of post-doctoral research. Wireless Networks solution design and development using .net microframework',
    highlights: [
      'Hello',
    ],
  },
  {
    name: 'Institute for Infocomm Research',
    position: 'Research Fellow',
    url: 'https://www.a-star.edu.sg/i2r',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: 'Hi',
    highlights: [
      'Wireless Network Deployments - Design, development and deployment: WiMAX - IEEE 802.16 WiMaX Wireless Mesh Networks, for maritime communications.',
    ],
  },
  {
    name: 'Himachal Futuristic Communications Limited',
    position: 'Co-founder',
    url: 'https://matroid.com',
    startDate: '2015-07-01',
    endDate: '2016-01-01',
    summary: `Matroid is a computer vision platform for creating and deploying detectors. Detectors help customers identify objects,
    events, or patterns in images and videos without requiring machine learning or coding expertise. I played a crucial role in
    defining the company's vision. I was responsible for architecting and building the initial product. I left shortly after the
    Series A to focus on Arthena.`,
    highlights: [
      'Developed end to end machine learning pipeline to train visual classifiers from keywords using Caffe, Node.JS, Redis, MongoDB, and other technologies.',
    ],
  },
];

export default work;
