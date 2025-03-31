export type Service = {
  title: string;
  description: string;
  icon?: string;
  isNew?: boolean;
};

export const services: Service[] = [
  {
    title: 'Develop applications in a short time',
    description:
      'Accelerate your time-to-market by leveraging pre-built backend solutions, enabling rapid application delivery without compromising quality.',
    icon: 'rocket.gif'
  },
  {
    title: 'Easy-to-Use Content Management',
    description:
      'Take control of your WebApplication or Website content without the technical hassle.',
    icon: 'like.gif'
  },
  {
    title: 'Headless CMS Integration',
    description:
      'Intuitive Content Management Systems (CMS): Implement user-friendly CMS platforms that make updating your website a breeze.',
    icon: 'idea.gif'
  },
  {
    title: 'Training & Support',
    description:
      'Provide guidance and support to help you manage your content effectively.',
    icon: 'mortarboard.gif'
  }
];
