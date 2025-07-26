import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

// Custom scalar resolvers
export const DateTime = new GraphQLScalarType({
   name: 'DateTime',
   serialize: (date: Date) => date.toISOString(),
   parseValue: (value: string) => new Date(value),
   parseLiteral: (ast) => {
      if (ast.kind === Kind.STRING) {
         return new Date(ast.value);
      }
      return null;
   },
});

export const JSON = new GraphQLScalarType({
   name: 'JSON',
   serialize: (value: any) => value,
   parseValue: (value: any) => value,
   parseLiteral: (ast) => {
      if (ast.kind === Kind.STRING) {
         try {
            return JSON.parse(ast.value);
         } catch {
            return null;
         }
      }
      return null;
   },
});
