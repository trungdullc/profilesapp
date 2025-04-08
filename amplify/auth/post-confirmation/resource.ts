import { defineFunction } from '@aws-amplify/backend';

// defined a Lambda function using Amplify
export const postConfirmation = defineFunction({
  name: 'post-confirmation',
});