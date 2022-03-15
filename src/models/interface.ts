export interface ProjectsModel {
  name?: string;
  slug: string;
  description?: string;
  language?: string[];
  library?: string[];
  framework?: string[];
  module?: string[];
  thumbnail: string | null;
  image: string[] | null;
  gist?: [{ name: string; uniqueId: string }];
  createdAt?: Date;
}
