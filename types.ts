
export enum Language {
  IT = 'it',
  EN = 'en',
}

export interface Content {
  title: string;
  subtitle: string;
  generateApps: {
    title: string;
    description: string;
    steps: {
      title: string;
      text: string;
    }[];
  };
  buildPrompts: {
    title: string;
    description: string;
    principles: {
      title: string;
      text: string;
      badExample: {
        title: string;
        code: string;
      };
      goodExample: {
        title: string;
        code: string;
      };
    }[];
  };
  footer: string;
}
