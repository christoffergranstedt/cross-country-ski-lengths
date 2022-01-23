import * as yup from 'yup'
import { skierInputSchema } from '../Validations/SkierInputValidation';

export interface SkierInput extends yup.InferType<typeof skierInputSchema> {}
