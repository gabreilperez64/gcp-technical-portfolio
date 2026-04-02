import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'pro-profile',
    'technical-case-studies',
    {
      type: 'category',
      label: 'Portfolio Pillars',
      items: [
        'architecture',
        'security',
        'solutions',
        'devops',
      ],
    },
  ],
};

export default sidebars;
