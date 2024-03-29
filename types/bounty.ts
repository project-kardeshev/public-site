export type Sponsor = {
  name: string;
  address: string;
  image: string;
};

export type Resource = {
  title: string;
  url: string;
};

export type Bounty = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  sponsors: Sponsor[];
  resources: Resource[];
  terms: string[];
  expiration: number;
  requiresApproval: boolean;
};
