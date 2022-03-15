import mongoose, { Schema } from 'mongoose';
import { stringToSlug } from '../utils';
import { ProjectsModel } from './interface';

const schema = new Schema<ProjectsModel>({
  name: { type: String, required: 'Name is required !' },
  slug: String,
  description: { type: String, required: 'Description is required !' },
  language: { type: [String], required: 'Language is required !' },
  library: { type: [String], required: 'Library is required !' },
  framework: { type: [String], required: 'Framework is required !' },
  module: { type: [String], required: 'Module is required !' },
  thumbnail: { type: String, default: () => null },
  image: { type: [String], default: () => null },
  gist: {
    type: [{ name: String, uniqueId: String }],
    required: 'Gist is required !'
  },
  createdAt: { type: Number, default: Date.now }
});

schema.pre('save', function abc(this: ProjectsModel, next) {
  this.slug = stringToSlug(this.name as string);
  next();
});

const modelSchema = mongoose.model<ProjectsModel>('projects', schema);
export default modelSchema;
