/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Task
 *
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>;
/**
 * Model Subtask
 *
 */
export type Subtask = $Result.DefaultSelection<Prisma.$SubtaskPayload>;
/**
 * Model TaskDependency
 *
 */
export type TaskDependency = $Result.DefaultSelection<Prisma.$TaskDependencyPayload>;
/**
 * Model TaskMasterMetadata
 *
 */
export type TaskMasterMetadata = $Result.DefaultSelection<Prisma.$TaskMasterMetadataPayload>;
/**
 * Model SyncOperation
 *
 */
export type SyncOperation = $Result.DefaultSelection<Prisma.$SyncOperationPayload>;
/**
 * Model SyncConflict
 *
 */
export type SyncConflict = $Result.DefaultSelection<Prisma.$SyncConflictPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
   ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
   U = 'log' extends keyof ClientOptions
      ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
         ? Prisma.GetEvents<ClientOptions['log']>
         : never
      : never,
   ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
   [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

   /**
    * ##  Prisma Client ʲˢ
    *
    * Type-safe database client for TypeScript & Node.js
    * @example
    * ```
    * const prisma = new PrismaClient()
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    *
    *
    * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
    */

   constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
   $on<V extends U>(
      eventType: V,
      callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
   ): PrismaClient;

   /**
    * Connect with the database
    */
   $connect(): $Utils.JsPromise<void>;

   /**
    * Disconnect from the database
    */
   $disconnect(): $Utils.JsPromise<void>;

   /**
    * Add a middleware
    * @deprecated since 4.16.0. For new code, prefer client extensions instead.
    * @see https://pris.ly/d/extensions
    */
   $use(cb: Prisma.Middleware): void;

   /**
    * Executes a prepared raw query and returns the number of affected rows.
    * @example
    * ```
    * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
    * ```
    *
    * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
    */
   $executeRaw<T = unknown>(
      query: TemplateStringsArray | Prisma.Sql,
      ...values: any[]
   ): Prisma.PrismaPromise<number>;

   /**
    * Executes a raw query and returns the number of affected rows.
    * Susceptible to SQL injections, see documentation.
    * @example
    * ```
    * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
    * ```
    *
    * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
    */
   $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

   /**
    * Performs a prepared raw query and returns the `SELECT` data.
    * @example
    * ```
    * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
    * ```
    *
    * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
    */
   $queryRaw<T = unknown>(
      query: TemplateStringsArray | Prisma.Sql,
      ...values: any[]
   ): Prisma.PrismaPromise<T>;

   /**
    * Performs a raw query and returns the `SELECT` data.
    * Susceptible to SQL injections, see documentation.
    * @example
    * ```
    * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
    * ```
    *
    * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
    */
   $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

   /**
    * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
    * @example
    * ```
    * const [george, bob, alice] = await prisma.$transaction([
    *   prisma.user.create({ data: { name: 'George' } }),
    *   prisma.user.create({ data: { name: 'Bob' } }),
    *   prisma.user.create({ data: { name: 'Alice' } }),
    * ])
    * ```
    *
    * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
    */
   $transaction<P extends Prisma.PrismaPromise<any>[]>(
      arg: [...P],
      options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
   ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

   $transaction<R>(
      fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
      options?: {
         maxWait?: number;
         timeout?: number;
         isolationLevel?: Prisma.TransactionIsolationLevel;
      }
   ): $Utils.JsPromise<R>;

   $extends: $Extensions.ExtendsHook<
      'extends',
      Prisma.TypeMapCb<ClientOptions>,
      ExtArgs,
      $Utils.Call<
         Prisma.TypeMapCb<ClientOptions>,
         {
            extArgs: ExtArgs;
         }
      >
   >;

   /**
    * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
   get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

   /**
    * `prisma.subtask`: Exposes CRUD operations for the **Subtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtasks
    * const subtasks = await prisma.subtask.findMany()
    * ```
    */
   get subtask(): Prisma.SubtaskDelegate<ExtArgs, ClientOptions>;

   /**
    * `prisma.taskDependency`: Exposes CRUD operations for the **TaskDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskDependencies
    * const taskDependencies = await prisma.taskDependency.findMany()
    * ```
    */
   get taskDependency(): Prisma.TaskDependencyDelegate<ExtArgs, ClientOptions>;

   /**
    * `prisma.taskMasterMetadata`: Exposes CRUD operations for the **TaskMasterMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskMasterMetadata
    * const taskMasterMetadata = await prisma.taskMasterMetadata.findMany()
    * ```
    */
   get taskMasterMetadata(): Prisma.TaskMasterMetadataDelegate<ExtArgs, ClientOptions>;

   /**
    * `prisma.syncOperation`: Exposes CRUD operations for the **SyncOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncOperations
    * const syncOperations = await prisma.syncOperation.findMany()
    * ```
    */
   get syncOperation(): Prisma.SyncOperationDelegate<ExtArgs, ClientOptions>;

   /**
    * `prisma.syncConflict`: Exposes CRUD operations for the **SyncConflict** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncConflicts
    * const syncConflicts = await prisma.syncConflict.findMany()
    * ```
    */
   get syncConflict(): Prisma.SyncConflictDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
   export import DMMF = runtime.DMMF;

   export type PrismaPromise<T> = $Public.PrismaPromise<T>;

   /**
    * Validator
    */
   export import validator = runtime.Public.validator;

   /**
    * Prisma Errors
    */
   export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
   export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
   export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
   export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
   export import PrismaClientValidationError = runtime.PrismaClientValidationError;

   /**
    * Re-export of sql-template-tag
    */
   export import sql = runtime.sqltag;
   export import empty = runtime.empty;
   export import join = runtime.join;
   export import raw = runtime.raw;
   export import Sql = runtime.Sql;

   /**
    * Decimal.js
    */
   export import Decimal = runtime.Decimal;

   export type DecimalJsLike = runtime.DecimalJsLike;

   /**
    * Metrics
    */
   export type Metrics = runtime.Metrics;
   export type Metric<T> = runtime.Metric<T>;
   export type MetricHistogram = runtime.MetricHistogram;
   export type MetricHistogramBucket = runtime.MetricHistogramBucket;

   /**
    * Extensions
    */
   export import Extension = $Extensions.UserArgs;
   export import getExtensionContext = runtime.Extensions.getExtensionContext;
   export import Args = $Public.Args;
   export import Payload = $Public.Payload;
   export import Result = $Public.Result;
   export import Exact = $Public.Exact;

   /**
    * Prisma Client JS version: 6.12.0
    * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
    */
   export type PrismaVersion = {
      client: string;
   };

   export const prismaVersion: PrismaVersion;

   /**
    * Utility Types
    */

   export import JsonObject = runtime.JsonObject;
   export import JsonArray = runtime.JsonArray;
   export import JsonValue = runtime.JsonValue;
   export import InputJsonObject = runtime.InputJsonObject;
   export import InputJsonArray = runtime.InputJsonArray;
   export import InputJsonValue = runtime.InputJsonValue;

   /**
    * Types of the values used to represent different kinds of `null` values when working with JSON fields.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
   namespace NullTypes {
      /**
       * Type of `Prisma.DbNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class DbNull {
         private DbNull: never;
         private constructor();
      }

      /**
       * Type of `Prisma.JsonNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class JsonNull {
         private JsonNull: never;
         private constructor();
      }

      /**
       * Type of `Prisma.AnyNull`.
       *
       * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
       *
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
       */
      class AnyNull {
         private AnyNull: never;
         private constructor();
      }
   }

   /**
    * Helper for filtering JSON entries that have `null` on the database (empty on the db)
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
   export const DbNull: NullTypes.DbNull;

   /**
    * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
   export const JsonNull: NullTypes.JsonNull;

   /**
    * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
   export const AnyNull: NullTypes.AnyNull;

   type SelectAndInclude = {
      select: any;
      include: any;
   };

   type SelectAndOmit = {
      select: any;
      omit: any;
   };

   /**
    * Get the type of the value, that the Promise holds.
    */
   export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

   /**
    * Get the return type of a function which returns a Promise.
    */
   export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
      ReturnType<T>
   >;

   /**
    * From T, pick a set of properties whose keys are in the union K
    */
   type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
   };

   export type Enumerable<T> = T | Array<T>;

   export type RequiredKeys<T> = {
      [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
   }[keyof T];

   export type TruthyKeys<T> = keyof {
      [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
   };

   export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

   /**
    * Subset
    * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
    */
   export type Subset<T, U> = {
      [key in keyof T]: key extends keyof U ? T[key] : never;
   };

   /**
    * SelectSubset
    * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
    * Additionally, it validates, if both select and include are present. If the case, it errors.
    */
   export type SelectSubset<T, U> = {
      [key in keyof T]: key extends keyof U ? T[key] : never;
   } & (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {});

   /**
    * Subset + Intersection
    * @desc From `T` pick properties that exist in `U` and intersect `K`
    */
   export type SubsetIntersection<T, U, K> = {
      [key in keyof T]: key extends keyof U ? T[key] : never;
   } & K;

   type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

   /**
    * XOR is needed to have a real mutually exclusive union type
    * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
    */
   type XOR<T, U> = T extends object
      ? U extends object
         ? (Without<T, U> & U) | (Without<U, T> & T)
         : U
      : T;

   /**
    * Is T a Record?
    */
   type IsObject<T extends any> =
      T extends Array<any>
         ? False
         : T extends Date
           ? False
           : T extends Uint8Array
             ? False
             : T extends BigInt
               ? False
               : T extends object
                 ? True
                 : False;

   /**
    * If it's T[], return T
    */
   export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

   /**
    * From ts-toolbelt
    */

   type __Either<O extends object, K extends Key> = Omit<O, K> &
      {
         // Merge all but K
         [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
      }[K];

   type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

   type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

   type _Either<O extends object, K extends Key, strict extends Boolean> = {
      1: EitherStrict<O, K>;
      0: EitherLoose<O, K>;
   }[strict];

   type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
      ? _Either<O, K, strict>
      : never;

   export type Union = any;

   type PatchUndefined<O extends object, O1 extends object> = {
      [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
   } & {};

   /** Helper Types for "Merge" **/
   export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
      k: infer I
   ) => void
      ? I
      : never;

   export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
   } & {};

   type _Merge<U extends object> = IntersectOf<
      Overwrite<
         U,
         {
            [K in keyof U]-?: At<U, K>;
         }
      >
   >;

   type Key = string | number | symbol;
   type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
   type AtStrict<O extends object, K extends Key> = O[K & keyof O];
   type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
   export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
   }[strict];

   export type ComputeRaw<A extends any> = A extends Function
      ? A
      : {
           [K in keyof A]: A[K];
        } & {};

   export type OptionalFlat<O> = {
      [K in keyof O]?: O[K];
   } & {};

   type _Record<K extends keyof any, T> = {
      [P in K]: T;
   };

   // cause typescript not to expand types and preserve names
   type NoExpand<T> = T extends unknown ? T : never;

   // this type assumes the passed object is entirely optional
   type AtLeast<O extends object, K extends string> = NoExpand<
      O extends unknown
         ?
              | (K extends keyof O ? { [P in K]: O[P] } & O : O)
              | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
         : never
   >;

   type _Strict<U, _U = U> = U extends unknown
      ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
      : never;

   export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
   /** End Helper Types for "Merge" **/

   export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

   /**
  A [[Boolean]]
  */
   export type Boolean = True | False;

   // /**
   // 1
   // */
   export type True = 1;

   /**
  0
  */
   export type False = 0;

   export type Not<B extends Boolean> = {
      0: 1;
      1: 0;
   }[B];

   export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
      ? 0 // anything `never` is false
      : A1 extends A2
        ? 1
        : 0;

   export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

   export type Or<B1 extends Boolean, B2 extends Boolean> = {
      0: {
         0: 0;
         1: 1;
      };
      1: {
         0: 1;
         1: 1;
      };
   }[B1][B2];

   export type Keys<U extends Union> = U extends unknown ? keyof U : never;

   type Cast<A, B> = A extends B ? A : B;

   export const type: unique symbol;

   /**
    * Used by group by
    */

   export type GetScalarType<T, O> = O extends object
      ? {
           [P in keyof T]: P extends keyof O ? O[P] : never;
        }
      : never;

   type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
      IsObject<T> extends True ? U : T;

   type GetHavingFields<T> = {
      [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
         ? // infer is only needed to not hit TS limit
           // based on the brilliant idea of Pierre-Antoine Mills
           // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
           T[K] extends infer TK
            ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
            : never
         : {} extends FieldPaths<T[K]>
           ? never
           : K;
   }[keyof T];

   /**
    * Convert tuple to union
    */
   type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
   type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
   type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

   /**
    * Like `Pick`, but additionally can also accept an array of keys
    */
   type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
      T,
      MaybeTupleToUnion<K>
   >;

   /**
    * Exclude all keys with underscores
    */
   type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

   export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

   type FieldRefInputType<Model, FieldType> = Model extends never
      ? never
      : FieldRef<Model, FieldType>;

   export const ModelName: {
      Task: 'Task';
      Subtask: 'Subtask';
      TaskDependency: 'TaskDependency';
      TaskMasterMetadata: 'TaskMasterMetadata';
      SyncOperation: 'SyncOperation';
      SyncConflict: 'SyncConflict';
   };

   export type ModelName = (typeof ModelName)[keyof typeof ModelName];

   export type Datasources = {
      db?: Datasource;
   };

   interface TypeMapCb<ClientOptions = {}>
      extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
      returns: Prisma.TypeMap<
         this['params']['extArgs'],
         ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
      >;
   }

   export type TypeMap<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > = {
      globalOmitOptions: {
         omit: GlobalOmitOptions;
      };
      meta: {
         modelProps:
            | 'task'
            | 'subtask'
            | 'taskDependency'
            | 'taskMasterMetadata'
            | 'syncOperation'
            | 'syncConflict';
         txIsolationLevel: Prisma.TransactionIsolationLevel;
      };
      model: {
         Task: {
            payload: Prisma.$TaskPayload<ExtArgs>;
            fields: Prisma.TaskFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.TaskFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               findFirst: {
                  args: Prisma.TaskFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               findMany: {
                  args: Prisma.TaskFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
               };
               create: {
                  args: Prisma.TaskCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               createMany: {
                  args: Prisma.TaskCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
               };
               delete: {
                  args: Prisma.TaskDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               update: {
                  args: Prisma.TaskUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               deleteMany: {
                  args: Prisma.TaskDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.TaskUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
               };
               upsert: {
                  args: Prisma.TaskUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
               };
               aggregate: {
                  args: Prisma.TaskAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateTask>;
               };
               groupBy: {
                  args: Prisma.TaskGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<TaskGroupByOutputType>[];
               };
               count: {
                  args: Prisma.TaskCountArgs<ExtArgs>;
                  result: $Utils.Optional<TaskCountAggregateOutputType> | number;
               };
            };
         };
         Subtask: {
            payload: Prisma.$SubtaskPayload<ExtArgs>;
            fields: Prisma.SubtaskFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.SubtaskFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.SubtaskFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               findFirst: {
                  args: Prisma.SubtaskFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.SubtaskFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               findMany: {
                  args: Prisma.SubtaskFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[];
               };
               create: {
                  args: Prisma.SubtaskCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               createMany: {
                  args: Prisma.SubtaskCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.SubtaskCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[];
               };
               delete: {
                  args: Prisma.SubtaskDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               update: {
                  args: Prisma.SubtaskUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               deleteMany: {
                  args: Prisma.SubtaskDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.SubtaskUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.SubtaskUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>[];
               };
               upsert: {
                  args: Prisma.SubtaskUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SubtaskPayload>;
               };
               aggregate: {
                  args: Prisma.SubtaskAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateSubtask>;
               };
               groupBy: {
                  args: Prisma.SubtaskGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<SubtaskGroupByOutputType>[];
               };
               count: {
                  args: Prisma.SubtaskCountArgs<ExtArgs>;
                  result: $Utils.Optional<SubtaskCountAggregateOutputType> | number;
               };
            };
         };
         TaskDependency: {
            payload: Prisma.$TaskDependencyPayload<ExtArgs>;
            fields: Prisma.TaskDependencyFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.TaskDependencyFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.TaskDependencyFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               findFirst: {
                  args: Prisma.TaskDependencyFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.TaskDependencyFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               findMany: {
                  args: Prisma.TaskDependencyFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>[];
               };
               create: {
                  args: Prisma.TaskDependencyCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               createMany: {
                  args: Prisma.TaskDependencyCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.TaskDependencyCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>[];
               };
               delete: {
                  args: Prisma.TaskDependencyDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               update: {
                  args: Prisma.TaskDependencyUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               deleteMany: {
                  args: Prisma.TaskDependencyDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.TaskDependencyUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.TaskDependencyUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>[];
               };
               upsert: {
                  args: Prisma.TaskDependencyUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskDependencyPayload>;
               };
               aggregate: {
                  args: Prisma.TaskDependencyAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateTaskDependency>;
               };
               groupBy: {
                  args: Prisma.TaskDependencyGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<TaskDependencyGroupByOutputType>[];
               };
               count: {
                  args: Prisma.TaskDependencyCountArgs<ExtArgs>;
                  result: $Utils.Optional<TaskDependencyCountAggregateOutputType> | number;
               };
            };
         };
         TaskMasterMetadata: {
            payload: Prisma.$TaskMasterMetadataPayload<ExtArgs>;
            fields: Prisma.TaskMasterMetadataFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.TaskMasterMetadataFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.TaskMasterMetadataFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               findFirst: {
                  args: Prisma.TaskMasterMetadataFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.TaskMasterMetadataFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               findMany: {
                  args: Prisma.TaskMasterMetadataFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>[];
               };
               create: {
                  args: Prisma.TaskMasterMetadataCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               createMany: {
                  args: Prisma.TaskMasterMetadataCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.TaskMasterMetadataCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>[];
               };
               delete: {
                  args: Prisma.TaskMasterMetadataDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               update: {
                  args: Prisma.TaskMasterMetadataUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               deleteMany: {
                  args: Prisma.TaskMasterMetadataDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.TaskMasterMetadataUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.TaskMasterMetadataUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>[];
               };
               upsert: {
                  args: Prisma.TaskMasterMetadataUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$TaskMasterMetadataPayload>;
               };
               aggregate: {
                  args: Prisma.TaskMasterMetadataAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateTaskMasterMetadata>;
               };
               groupBy: {
                  args: Prisma.TaskMasterMetadataGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<TaskMasterMetadataGroupByOutputType>[];
               };
               count: {
                  args: Prisma.TaskMasterMetadataCountArgs<ExtArgs>;
                  result: $Utils.Optional<TaskMasterMetadataCountAggregateOutputType> | number;
               };
            };
         };
         SyncOperation: {
            payload: Prisma.$SyncOperationPayload<ExtArgs>;
            fields: Prisma.SyncOperationFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.SyncOperationFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.SyncOperationFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               findFirst: {
                  args: Prisma.SyncOperationFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.SyncOperationFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               findMany: {
                  args: Prisma.SyncOperationFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>[];
               };
               create: {
                  args: Prisma.SyncOperationCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               createMany: {
                  args: Prisma.SyncOperationCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.SyncOperationCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>[];
               };
               delete: {
                  args: Prisma.SyncOperationDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               update: {
                  args: Prisma.SyncOperationUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               deleteMany: {
                  args: Prisma.SyncOperationDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.SyncOperationUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.SyncOperationUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>[];
               };
               upsert: {
                  args: Prisma.SyncOperationUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncOperationPayload>;
               };
               aggregate: {
                  args: Prisma.SyncOperationAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateSyncOperation>;
               };
               groupBy: {
                  args: Prisma.SyncOperationGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<SyncOperationGroupByOutputType>[];
               };
               count: {
                  args: Prisma.SyncOperationCountArgs<ExtArgs>;
                  result: $Utils.Optional<SyncOperationCountAggregateOutputType> | number;
               };
            };
         };
         SyncConflict: {
            payload: Prisma.$SyncConflictPayload<ExtArgs>;
            fields: Prisma.SyncConflictFieldRefs;
            operations: {
               findUnique: {
                  args: Prisma.SyncConflictFindUniqueArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload> | null;
               };
               findUniqueOrThrow: {
                  args: Prisma.SyncConflictFindUniqueOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               findFirst: {
                  args: Prisma.SyncConflictFindFirstArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload> | null;
               };
               findFirstOrThrow: {
                  args: Prisma.SyncConflictFindFirstOrThrowArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               findMany: {
                  args: Prisma.SyncConflictFindManyArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>[];
               };
               create: {
                  args: Prisma.SyncConflictCreateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               createMany: {
                  args: Prisma.SyncConflictCreateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               createManyAndReturn: {
                  args: Prisma.SyncConflictCreateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>[];
               };
               delete: {
                  args: Prisma.SyncConflictDeleteArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               update: {
                  args: Prisma.SyncConflictUpdateArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               deleteMany: {
                  args: Prisma.SyncConflictDeleteManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateMany: {
                  args: Prisma.SyncConflictUpdateManyArgs<ExtArgs>;
                  result: BatchPayload;
               };
               updateManyAndReturn: {
                  args: Prisma.SyncConflictUpdateManyAndReturnArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>[];
               };
               upsert: {
                  args: Prisma.SyncConflictUpsertArgs<ExtArgs>;
                  result: $Utils.PayloadToResult<Prisma.$SyncConflictPayload>;
               };
               aggregate: {
                  args: Prisma.SyncConflictAggregateArgs<ExtArgs>;
                  result: $Utils.Optional<AggregateSyncConflict>;
               };
               groupBy: {
                  args: Prisma.SyncConflictGroupByArgs<ExtArgs>;
                  result: $Utils.Optional<SyncConflictGroupByOutputType>[];
               };
               count: {
                  args: Prisma.SyncConflictCountArgs<ExtArgs>;
                  result: $Utils.Optional<SyncConflictCountAggregateOutputType> | number;
               };
            };
         };
      };
   } & {
      other: {
         payload: any;
         operations: {
            $executeRaw: {
               args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
               result: any;
            };
            $executeRawUnsafe: {
               args: [query: string, ...values: any[]];
               result: any;
            };
            $queryRaw: {
               args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
               result: any;
            };
            $queryRawUnsafe: {
               args: [query: string, ...values: any[]];
               result: any;
            };
         };
      };
   };
   export const defineExtension: $Extensions.ExtendsHook<
      'define',
      Prisma.TypeMapCb,
      $Extensions.DefaultArgs
   >;
   export type DefaultPrismaClient = PrismaClient;
   export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
   export interface PrismaClientOptions {
      /**
       * Overwrites the datasource url from your schema.prisma file
       */
      datasources?: Datasources;
      /**
       * Overwrites the datasource url from your schema.prisma file
       */
      datasourceUrl?: string;
      /**
       * @default "colorless"
       */
      errorFormat?: ErrorFormat;
      /**
       * @example
       * ```
       * // Defaults to stdout
       * log: ['query', 'info', 'warn', 'error']
       *
       * // Emit as events
       * log: [
       *   { emit: 'stdout', level: 'query' },
       *   { emit: 'stdout', level: 'info' },
       *   { emit: 'stdout', level: 'warn' }
       *   { emit: 'stdout', level: 'error' }
       * ]
       * ```
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
       */
      log?: (LogLevel | LogDefinition)[];
      /**
       * The default values for transactionOptions
       * maxWait ?= 2000
       * timeout ?= 5000
       */
      transactionOptions?: {
         maxWait?: number;
         timeout?: number;
         isolationLevel?: Prisma.TransactionIsolationLevel;
      };
      /**
       * Global configuration for omitting model fields by default.
       *
       * @example
       * ```
       * const prisma = new PrismaClient({
       *   omit: {
       *     user: {
       *       password: true
       *     }
       *   }
       * })
       * ```
       */
      omit?: Prisma.GlobalOmitConfig;
   }
   export type GlobalOmitConfig = {
      task?: TaskOmit;
      subtask?: SubtaskOmit;
      taskDependency?: TaskDependencyOmit;
      taskMasterMetadata?: TaskMasterMetadataOmit;
      syncOperation?: SyncOperationOmit;
      syncConflict?: SyncConflictOmit;
   };

   /* Types for Logging */
   export type LogLevel = 'info' | 'query' | 'warn' | 'error';
   export type LogDefinition = {
      level: LogLevel;
      emit: 'stdout' | 'event';
   };

   export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
      ? T['emit'] extends 'event'
         ? T['level']
         : never
      : never;
   export type GetEvents<T extends any> =
      T extends Array<LogLevel | LogDefinition>
         ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
         : never;

   export type QueryEvent = {
      timestamp: Date;
      query: string;
      params: string;
      duration: number;
      target: string;
   };

   export type LogEvent = {
      timestamp: Date;
      message: string;
      target: string;
   };
   /* End Types for Logging */

   export type PrismaAction =
      | 'findUnique'
      | 'findUniqueOrThrow'
      | 'findMany'
      | 'findFirst'
      | 'findFirstOrThrow'
      | 'create'
      | 'createMany'
      | 'createManyAndReturn'
      | 'update'
      | 'updateMany'
      | 'updateManyAndReturn'
      | 'upsert'
      | 'delete'
      | 'deleteMany'
      | 'executeRaw'
      | 'queryRaw'
      | 'aggregate'
      | 'count'
      | 'runCommandRaw'
      | 'findRaw'
      | 'groupBy';

   /**
    * These options are being passed into the middleware as "params"
    */
   export type MiddlewareParams = {
      model?: ModelName;
      action: PrismaAction;
      args: any;
      dataPath: string[];
      runInTransaction: boolean;
   };

   /**
    * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
    */
   export type Middleware<T = any> = (
      params: MiddlewareParams,
      next: (params: MiddlewareParams) => $Utils.JsPromise<T>
   ) => $Utils.JsPromise<T>;

   // tested in getLogLevel.test.ts
   export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

   /**
    * `PrismaClient` proxy available in interactive transactions.
    */
   export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

   export type Datasource = {
      url?: string;
   };

   /**
    * Count Types
    */

   /**
    * Count Type TaskCountOutputType
    */

   export type TaskCountOutputType = {
      subtasks: number;
      dependencies: number;
      dependents: number;
   };

   export type TaskCountOutputTypeSelect<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs;
      dependencies?: boolean | TaskCountOutputTypeCountDependenciesArgs;
      dependents?: boolean | TaskCountOutputTypeCountDependentsArgs;
   };

   // Custom InputTypes
   /**
    * TaskCountOutputType without action
    */
   export type TaskCountOutputTypeDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskCountOutputType
       */
      select?: TaskCountOutputTypeSelect<ExtArgs> | null;
   };

   /**
    * TaskCountOutputType without action
    */
   export type TaskCountOutputTypeCountSubtasksArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: SubtaskWhereInput;
   };

   /**
    * TaskCountOutputType without action
    */
   export type TaskCountOutputTypeCountDependenciesArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: TaskDependencyWhereInput;
   };

   /**
    * TaskCountOutputType without action
    */
   export type TaskCountOutputTypeCountDependentsArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: TaskDependencyWhereInput;
   };

   /**
    * Models
    */

   /**
    * Model Task
    */

   export type AggregateTask = {
      _count: TaskCountAggregateOutputType | null;
      _avg: TaskAvgAggregateOutputType | null;
      _sum: TaskSumAggregateOutputType | null;
      _min: TaskMinAggregateOutputType | null;
      _max: TaskMaxAggregateOutputType | null;
   };

   export type TaskAvgAggregateOutputType = {
      id: number | null;
      complexity: number | null;
   };

   export type TaskSumAggregateOutputType = {
      id: number | null;
      complexity: number | null;
   };

   export type TaskMinAggregateOutputType = {
      id: number | null;
      title: string | null;
      description: string | null;
      details: string | null;
      testStrategy: string | null;
      priority: string | null;
      status: string | null;
      complexity: number | null;
      createdAt: Date | null;
      updatedAt: Date | null;
   };

   export type TaskMaxAggregateOutputType = {
      id: number | null;
      title: string | null;
      description: string | null;
      details: string | null;
      testStrategy: string | null;
      priority: string | null;
      status: string | null;
      complexity: number | null;
      createdAt: Date | null;
      updatedAt: Date | null;
   };

   export type TaskCountAggregateOutputType = {
      id: number;
      title: number;
      description: number;
      details: number;
      testStrategy: number;
      priority: number;
      status: number;
      complexity: number;
      createdAt: number;
      updatedAt: number;
      _all: number;
   };

   export type TaskAvgAggregateInputType = {
      id?: true;
      complexity?: true;
   };

   export type TaskSumAggregateInputType = {
      id?: true;
      complexity?: true;
   };

   export type TaskMinAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      priority?: true;
      status?: true;
      complexity?: true;
      createdAt?: true;
      updatedAt?: true;
   };

   export type TaskMaxAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      priority?: true;
      status?: true;
      complexity?: true;
      createdAt?: true;
      updatedAt?: true;
   };

   export type TaskCountAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      priority?: true;
      status?: true;
      complexity?: true;
      createdAt?: true;
      updatedAt?: true;
      _all?: true;
   };

   export type TaskAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which Task to aggregate.
       */
      where?: TaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tasks to fetch.
       */
      orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: TaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Tasks
       **/
      _count?: true | TaskCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: TaskAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: TaskSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: TaskMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: TaskMaxAggregateInputType;
   };

   export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
      [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateTask[P]>
         : GetScalarType<T[P], AggregateTask[P]>;
   };

   export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         where?: TaskWhereInput;
         orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[];
         by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
         having?: TaskScalarWhereWithAggregatesInput;
         take?: number;
         skip?: number;
         _count?: TaskCountAggregateInputType | true;
         _avg?: TaskAvgAggregateInputType;
         _sum?: TaskSumAggregateInputType;
         _min?: TaskMinAggregateInputType;
         _max?: TaskMaxAggregateInputType;
      };

   export type TaskGroupByOutputType = {
      id: number;
      title: string;
      description: string;
      details: string | null;
      testStrategy: string | null;
      priority: string;
      status: string;
      complexity: number | null;
      createdAt: Date;
      updatedAt: Date;
      _count: TaskCountAggregateOutputType | null;
      _avg: TaskAvgAggregateOutputType | null;
      _sum: TaskSumAggregateOutputType | null;
      _min: TaskMinAggregateOutputType | null;
      _max: TaskMaxAggregateOutputType | null;
   };

   type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
      Array<
         PickEnumerable<TaskGroupByOutputType, T['by']> & {
            [P in keyof T & keyof TaskGroupByOutputType]: P extends '_count'
               ? T[P] extends boolean
                  ? number
                  : GetScalarType<T[P], TaskGroupByOutputType[P]>
               : GetScalarType<T[P], TaskGroupByOutputType[P]>;
         }
      >
   >;

   export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      $Extensions.GetSelect<
         {
            id?: boolean;
            title?: boolean;
            description?: boolean;
            details?: boolean;
            testStrategy?: boolean;
            priority?: boolean;
            status?: boolean;
            complexity?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            subtasks?: boolean | Task$subtasksArgs<ExtArgs>;
            dependencies?: boolean | Task$dependenciesArgs<ExtArgs>;
            dependents?: boolean | Task$dependentsArgs<ExtArgs>;
            _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
         },
         ExtArgs['result']['task']
      >;

   export type TaskSelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         title?: boolean;
         description?: boolean;
         details?: boolean;
         testStrategy?: boolean;
         priority?: boolean;
         status?: boolean;
         complexity?: boolean;
         createdAt?: boolean;
         updatedAt?: boolean;
      },
      ExtArgs['result']['task']
   >;

   export type TaskSelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         title?: boolean;
         description?: boolean;
         details?: boolean;
         testStrategy?: boolean;
         priority?: boolean;
         status?: boolean;
         complexity?: boolean;
         createdAt?: boolean;
         updatedAt?: boolean;
      },
      ExtArgs['result']['task']
   >;

   export type TaskSelectScalar = {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      details?: boolean;
      testStrategy?: boolean;
      priority?: boolean;
      status?: boolean;
      complexity?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
   };

   export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      $Extensions.GetOmit<
         | 'id'
         | 'title'
         | 'description'
         | 'details'
         | 'testStrategy'
         | 'priority'
         | 'status'
         | 'complexity'
         | 'createdAt'
         | 'updatedAt',
         ExtArgs['result']['task']
      >;
   export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
      subtasks?: boolean | Task$subtasksArgs<ExtArgs>;
      dependencies?: boolean | Task$dependenciesArgs<ExtArgs>;
      dependents?: boolean | Task$dependentsArgs<ExtArgs>;
      _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
   };
   export type TaskIncludeCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {};
   export type TaskIncludeUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {};

   export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
      name: 'Task';
      objects: {
         subtasks: Prisma.$SubtaskPayload<ExtArgs>[];
         dependencies: Prisma.$TaskDependencyPayload<ExtArgs>[];
         dependents: Prisma.$TaskDependencyPayload<ExtArgs>[];
      };
      scalars: $Extensions.GetPayloadResult<
         {
            id: number;
            title: string;
            description: string;
            details: string | null;
            testStrategy: string | null;
            priority: string;
            status: string;
            complexity: number | null;
            createdAt: Date;
            updatedAt: Date;
         },
         ExtArgs['result']['task']
      >;
      composites: {};
   };

   type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<
      Prisma.$TaskPayload,
      S
   >;

   type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
      TaskFindManyArgs,
      'select' | 'include' | 'distinct' | 'omit'
   > & {
      select?: TaskCountAggregateInputType | true;
   };

   export interface TaskDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task']; meta: { name: 'Task' } };
      /**
       * Find zero or one Task that matches the filter.
       * @param {TaskFindUniqueArgs} args - Arguments to find a Task
       * @example
       * // Get one Task
       * const task = await prisma.task.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends TaskFindUniqueArgs>(
         args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one Task that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
       * @example
       * // Get one Task
       * const task = await prisma.task.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(
         args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first Task that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskFindFirstArgs} args - Arguments to find a Task
       * @example
       * // Get one Task
       * const task = await prisma.task.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends TaskFindFirstArgs>(
         args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first Task that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
       * @example
       * // Get one Task
       * const task = await prisma.task.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(
         args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more Tasks that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Tasks
       * const tasks = await prisma.task.findMany()
       *
       * // Get first 10 Tasks
       * const tasks = await prisma.task.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
       *
       */
      findMany<T extends TaskFindManyArgs>(
         args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      >;

      /**
       * Create a Task.
       * @param {TaskCreateArgs} args - Arguments to create a Task.
       * @example
       * // Create one Task
       * const Task = await prisma.task.create({
       *   data: {
       *     // ... data to create a Task
       *   }
       * })
       *
       */
      create<T extends TaskCreateArgs>(
         args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many Tasks.
       * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
       * @example
       * // Create many Tasks
       * const task = await prisma.task.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends TaskCreateManyArgs>(
         args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many Tasks and returns the data saved in the database.
       * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
       * @example
       * // Create many Tasks
       * const task = await prisma.task.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many Tasks and only return the `id`
       * const taskWithIdOnly = await prisma.task.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(
         args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a Task.
       * @param {TaskDeleteArgs} args - Arguments to delete one Task.
       * @example
       * // Delete one Task
       * const Task = await prisma.task.delete({
       *   where: {
       *     // ... filter to delete one Task
       *   }
       * })
       *
       */
      delete<T extends TaskDeleteArgs>(
         args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one Task.
       * @param {TaskUpdateArgs} args - Arguments to update one Task.
       * @example
       * // Update one Task
       * const task = await prisma.task.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends TaskUpdateArgs>(
         args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more Tasks.
       * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
       * @example
       * // Delete a few Tasks
       * const { count } = await prisma.task.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends TaskDeleteManyArgs>(
         args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more Tasks.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Tasks
       * const task = await prisma.task.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends TaskUpdateManyArgs>(
         args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more Tasks and returns the data updated in the database.
       * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
       * @example
       * // Update many Tasks
       * const task = await prisma.task.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more Tasks and only return the `id`
       * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(
         args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one Task.
       * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
       * @example
       * // Update or create a Task
       * const task = await prisma.task.upsert({
       *   create: {
       *     // ... data to create a Task
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the Task we want to update
       *   }
       * })
       */
      upsert<T extends TaskUpsertArgs>(
         args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
      ): Prisma__TaskClient<
         $Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of Tasks.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
       * @example
       * // Count the number of Tasks
       * const count = await prisma.task.count({
       *   where: {
       *     // ... the filter for the Tasks we want to count
       *   }
       * })
       **/
      count<T extends TaskCountArgs>(
         args?: Subset<T, TaskCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], TaskCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a Task.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends TaskAggregateArgs>(
         args: Subset<T, TaskAggregateArgs>
      ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

      /**
       * Group by Task.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends TaskGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: TaskGroupByArgs['orderBy'] }
            : { orderBy?: TaskGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the Task model
       */
      readonly fields: TaskFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for Task.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__TaskClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(
         args?: Subset<T, Task$subtasksArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
      >;
      dependencies<T extends Task$dependenciesArgs<ExtArgs> = {}>(
         args?: Subset<T, Task$dependenciesArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         | $Result.GetResult<
              Prisma.$TaskDependencyPayload<ExtArgs>,
              T,
              'findMany',
              GlobalOmitOptions
           >
         | Null
      >;
      dependents<T extends Task$dependentsArgs<ExtArgs> = {}>(
         args?: Subset<T, Task$dependentsArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         | $Result.GetResult<
              Prisma.$TaskDependencyPayload<ExtArgs>,
              T,
              'findMany',
              GlobalOmitOptions
           >
         | Null
      >;
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the Task model
    */
   interface TaskFieldRefs {
      readonly id: FieldRef<'Task', 'Int'>;
      readonly title: FieldRef<'Task', 'String'>;
      readonly description: FieldRef<'Task', 'String'>;
      readonly details: FieldRef<'Task', 'String'>;
      readonly testStrategy: FieldRef<'Task', 'String'>;
      readonly priority: FieldRef<'Task', 'String'>;
      readonly status: FieldRef<'Task', 'String'>;
      readonly complexity: FieldRef<'Task', 'Int'>;
      readonly createdAt: FieldRef<'Task', 'DateTime'>;
      readonly updatedAt: FieldRef<'Task', 'DateTime'>;
   }

   // Custom InputTypes
   /**
    * Task findUnique
    */
   export type TaskFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskInclude<ExtArgs> | null;
      /**
       * Filter, which Task to fetch.
       */
      where: TaskWhereUniqueInput;
   };

   /**
    * Task findUniqueOrThrow
    */
   export type TaskFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskInclude<ExtArgs> | null;
      /**
       * Filter, which Task to fetch.
       */
      where: TaskWhereUniqueInput;
   };

   /**
    * Task findFirst
    */
   export type TaskFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskInclude<ExtArgs> | null;
      /**
       * Filter, which Task to fetch.
       */
      where?: TaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tasks to fetch.
       */
      orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Tasks.
       */
      cursor?: TaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Tasks.
       */
      distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
   };

   /**
    * Task findFirstOrThrow
    */
   export type TaskFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskInclude<ExtArgs> | null;
      /**
       * Filter, which Task to fetch.
       */
      where?: TaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tasks to fetch.
       */
      orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Tasks.
       */
      cursor?: TaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Tasks.
       */
      distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
   };

   /**
    * Task findMany
    */
   export type TaskFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskInclude<ExtArgs> | null;
      /**
       * Filter, which Tasks to fetch.
       */
      where?: TaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tasks to fetch.
       */
      orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Tasks.
       */
      cursor?: TaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tasks.
       */
      skip?: number;
      distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
   };

   /**
    * Task create
    */
   export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         /**
          * Select specific fields to fetch from the Task
          */
         select?: TaskSelect<ExtArgs> | null;
         /**
          * Omit specific fields from the Task
          */
         omit?: TaskOmit<ExtArgs> | null;
         /**
          * Choose, which related nodes to fetch as well
          */
         include?: TaskInclude<ExtArgs> | null;
         /**
          * The data needed to create a Task.
          */
         data: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
      };

   /**
    * Task createMany
    */
   export type TaskCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many Tasks.
       */
      data: TaskCreateManyInput | TaskCreateManyInput[];
   };

   /**
    * Task createManyAndReturn
    */
   export type TaskCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * The data used to create many Tasks.
       */
      data: TaskCreateManyInput | TaskCreateManyInput[];
   };

   /**
    * Task update
    */
   export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         /**
          * Select specific fields to fetch from the Task
          */
         select?: TaskSelect<ExtArgs> | null;
         /**
          * Omit specific fields from the Task
          */
         omit?: TaskOmit<ExtArgs> | null;
         /**
          * Choose, which related nodes to fetch as well
          */
         include?: TaskInclude<ExtArgs> | null;
         /**
          * The data needed to update a Task.
          */
         data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
         /**
          * Choose, which Task to update.
          */
         where: TaskWhereUniqueInput;
      };

   /**
    * Task updateMany
    */
   export type TaskUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update Tasks.
       */
      data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
      /**
       * Filter which Tasks to update
       */
      where?: TaskWhereInput;
      /**
       * Limit how many Tasks to update.
       */
      limit?: number;
   };

   /**
    * Task updateManyAndReturn
    */
   export type TaskUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Task
       */
      select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the Task
       */
      omit?: TaskOmit<ExtArgs> | null;
      /**
       * The data used to update Tasks.
       */
      data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
      /**
       * Filter which Tasks to update
       */
      where?: TaskWhereInput;
      /**
       * Limit how many Tasks to update.
       */
      limit?: number;
   };

   /**
    * Task upsert
    */
   export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         /**
          * Select specific fields to fetch from the Task
          */
         select?: TaskSelect<ExtArgs> | null;
         /**
          * Omit specific fields from the Task
          */
         omit?: TaskOmit<ExtArgs> | null;
         /**
          * Choose, which related nodes to fetch as well
          */
         include?: TaskInclude<ExtArgs> | null;
         /**
          * The filter to search for the Task to update in case it exists.
          */
         where: TaskWhereUniqueInput;
         /**
          * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
          */
         create: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
         /**
          * In case the Task was found with the provided `where` argument, update it with this data.
          */
         update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
      };

   /**
    * Task delete
    */
   export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         /**
          * Select specific fields to fetch from the Task
          */
         select?: TaskSelect<ExtArgs> | null;
         /**
          * Omit specific fields from the Task
          */
         omit?: TaskOmit<ExtArgs> | null;
         /**
          * Choose, which related nodes to fetch as well
          */
         include?: TaskInclude<ExtArgs> | null;
         /**
          * Filter which Task to delete.
          */
         where: TaskWhereUniqueInput;
      };

   /**
    * Task deleteMany
    */
   export type TaskDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which Tasks to delete
       */
      where?: TaskWhereInput;
      /**
       * Limit how many Tasks to delete.
       */
      limit?: number;
   };

   /**
    * Task.subtasks
    */
   export type Task$subtasksArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      where?: SubtaskWhereInput;
      orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[];
      cursor?: SubtaskWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[];
   };

   /**
    * Task.dependencies
    */
   export type Task$dependenciesArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      where?: TaskDependencyWhereInput;
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      cursor?: TaskDependencyWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[];
   };

   /**
    * Task.dependents
    */
   export type Task$dependentsArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      where?: TaskDependencyWhereInput;
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      cursor?: TaskDependencyWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[];
   };

   /**
    * Task without action
    */
   export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         /**
          * Select specific fields to fetch from the Task
          */
         select?: TaskSelect<ExtArgs> | null;
         /**
          * Omit specific fields from the Task
          */
         omit?: TaskOmit<ExtArgs> | null;
         /**
          * Choose, which related nodes to fetch as well
          */
         include?: TaskInclude<ExtArgs> | null;
      };

   /**
    * Model Subtask
    */

   export type AggregateSubtask = {
      _count: SubtaskCountAggregateOutputType | null;
      _avg: SubtaskAvgAggregateOutputType | null;
      _sum: SubtaskSumAggregateOutputType | null;
      _min: SubtaskMinAggregateOutputType | null;
      _max: SubtaskMaxAggregateOutputType | null;
   };

   export type SubtaskAvgAggregateOutputType = {
      parentId: number | null;
   };

   export type SubtaskSumAggregateOutputType = {
      parentId: number | null;
   };

   export type SubtaskMinAggregateOutputType = {
      id: string | null;
      title: string | null;
      description: string | null;
      details: string | null;
      testStrategy: string | null;
      status: string | null;
      parentId: number | null;
      dependencies: string | null;
      createdAt: Date | null;
      updatedAt: Date | null;
   };

   export type SubtaskMaxAggregateOutputType = {
      id: string | null;
      title: string | null;
      description: string | null;
      details: string | null;
      testStrategy: string | null;
      status: string | null;
      parentId: number | null;
      dependencies: string | null;
      createdAt: Date | null;
      updatedAt: Date | null;
   };

   export type SubtaskCountAggregateOutputType = {
      id: number;
      title: number;
      description: number;
      details: number;
      testStrategy: number;
      status: number;
      parentId: number;
      dependencies: number;
      createdAt: number;
      updatedAt: number;
      _all: number;
   };

   export type SubtaskAvgAggregateInputType = {
      parentId?: true;
   };

   export type SubtaskSumAggregateInputType = {
      parentId?: true;
   };

   export type SubtaskMinAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      status?: true;
      parentId?: true;
      dependencies?: true;
      createdAt?: true;
      updatedAt?: true;
   };

   export type SubtaskMaxAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      status?: true;
      parentId?: true;
      dependencies?: true;
      createdAt?: true;
      updatedAt?: true;
   };

   export type SubtaskCountAggregateInputType = {
      id?: true;
      title?: true;
      description?: true;
      details?: true;
      testStrategy?: true;
      status?: true;
      parentId?: true;
      dependencies?: true;
      createdAt?: true;
      updatedAt?: true;
      _all?: true;
   };

   export type SubtaskAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which Subtask to aggregate.
       */
      where?: SubtaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Subtasks to fetch.
       */
      orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: SubtaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Subtasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Subtasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Subtasks
       **/
      _count?: true | SubtaskCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: SubtaskAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: SubtaskSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: SubtaskMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: SubtaskMaxAggregateInputType;
   };

   export type GetSubtaskAggregateType<T extends SubtaskAggregateArgs> = {
      [P in keyof T & keyof AggregateSubtask]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateSubtask[P]>
         : GetScalarType<T[P], AggregateSubtask[P]>;
   };

   export type SubtaskGroupByArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: SubtaskWhereInput;
      orderBy?: SubtaskOrderByWithAggregationInput | SubtaskOrderByWithAggregationInput[];
      by: SubtaskScalarFieldEnum[] | SubtaskScalarFieldEnum;
      having?: SubtaskScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: SubtaskCountAggregateInputType | true;
      _avg?: SubtaskAvgAggregateInputType;
      _sum?: SubtaskSumAggregateInputType;
      _min?: SubtaskMinAggregateInputType;
      _max?: SubtaskMaxAggregateInputType;
   };

   export type SubtaskGroupByOutputType = {
      id: string;
      title: string;
      description: string;
      details: string | null;
      testStrategy: string | null;
      status: string;
      parentId: number;
      dependencies: string;
      createdAt: Date;
      updatedAt: Date;
      _count: SubtaskCountAggregateOutputType | null;
      _avg: SubtaskAvgAggregateOutputType | null;
      _sum: SubtaskSumAggregateOutputType | null;
      _min: SubtaskMinAggregateOutputType | null;
      _max: SubtaskMaxAggregateOutputType | null;
   };

   type GetSubtaskGroupByPayload<T extends SubtaskGroupByArgs> = Prisma.PrismaPromise<
      Array<
         PickEnumerable<SubtaskGroupByOutputType, T['by']> & {
            [P in keyof T & keyof SubtaskGroupByOutputType]: P extends '_count'
               ? T[P] extends boolean
                  ? number
                  : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
               : GetScalarType<T[P], SubtaskGroupByOutputType[P]>;
         }
      >
   >;

   export type SubtaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      $Extensions.GetSelect<
         {
            id?: boolean;
            title?: boolean;
            description?: boolean;
            details?: boolean;
            testStrategy?: boolean;
            status?: boolean;
            parentId?: boolean;
            dependencies?: boolean;
            createdAt?: boolean;
            updatedAt?: boolean;
            parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
         },
         ExtArgs['result']['subtask']
      >;

   export type SubtaskSelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         title?: boolean;
         description?: boolean;
         details?: boolean;
         testStrategy?: boolean;
         status?: boolean;
         parentId?: boolean;
         dependencies?: boolean;
         createdAt?: boolean;
         updatedAt?: boolean;
         parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['subtask']
   >;

   export type SubtaskSelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         title?: boolean;
         description?: boolean;
         details?: boolean;
         testStrategy?: boolean;
         status?: boolean;
         parentId?: boolean;
         dependencies?: boolean;
         createdAt?: boolean;
         updatedAt?: boolean;
         parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['subtask']
   >;

   export type SubtaskSelectScalar = {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      details?: boolean;
      testStrategy?: boolean;
      status?: boolean;
      parentId?: boolean;
      dependencies?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
   };

   export type SubtaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      $Extensions.GetOmit<
         | 'id'
         | 'title'
         | 'description'
         | 'details'
         | 'testStrategy'
         | 'status'
         | 'parentId'
         | 'dependencies'
         | 'createdAt'
         | 'updatedAt',
         ExtArgs['result']['subtask']
      >;
   export type SubtaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
      };
   export type SubtaskIncludeCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
   };
   export type SubtaskIncludeUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      parentTask?: boolean | TaskDefaultArgs<ExtArgs>;
   };

   export type $SubtaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      {
         name: 'Subtask';
         objects: {
            parentTask: Prisma.$TaskPayload<ExtArgs>;
         };
         scalars: $Extensions.GetPayloadResult<
            {
               id: string;
               title: string;
               description: string;
               details: string | null;
               testStrategy: string | null;
               status: string;
               parentId: number;
               dependencies: string;
               createdAt: Date;
               updatedAt: Date;
            },
            ExtArgs['result']['subtask']
         >;
         composites: {};
      };

   type SubtaskGetPayload<S extends boolean | null | undefined | SubtaskDefaultArgs> =
      $Result.GetResult<Prisma.$SubtaskPayload, S>;

   type SubtaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
      SubtaskFindManyArgs,
      'select' | 'include' | 'distinct' | 'omit'
   > & {
      select?: SubtaskCountAggregateInputType | true;
   };

   export interface SubtaskDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: {
         types: Prisma.TypeMap<ExtArgs>['model']['Subtask'];
         meta: { name: 'Subtask' };
      };
      /**
       * Find zero or one Subtask that matches the filter.
       * @param {SubtaskFindUniqueArgs} args - Arguments to find a Subtask
       * @example
       * // Get one Subtask
       * const subtask = await prisma.subtask.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends SubtaskFindUniqueArgs>(
         args: SelectSubset<T, SubtaskFindUniqueArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'findUnique',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one Subtask that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {SubtaskFindUniqueOrThrowArgs} args - Arguments to find a Subtask
       * @example
       * // Get one Subtask
       * const subtask = await prisma.subtask.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends SubtaskFindUniqueOrThrowArgs>(
         args: SelectSubset<T, SubtaskFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'findUniqueOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first Subtask that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskFindFirstArgs} args - Arguments to find a Subtask
       * @example
       * // Get one Subtask
       * const subtask = await prisma.subtask.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends SubtaskFindFirstArgs>(
         args?: SelectSubset<T, SubtaskFindFirstArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'findFirst',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first Subtask that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskFindFirstOrThrowArgs} args - Arguments to find a Subtask
       * @example
       * // Get one Subtask
       * const subtask = await prisma.subtask.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends SubtaskFindFirstOrThrowArgs>(
         args?: SelectSubset<T, SubtaskFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'findFirstOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more Subtasks that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all Subtasks
       * const subtasks = await prisma.subtask.findMany()
       *
       * // Get first 10 Subtasks
       * const subtasks = await prisma.subtask.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const subtaskWithIdOnly = await prisma.subtask.findMany({ select: { id: true } })
       *
       */
      findMany<T extends SubtaskFindManyArgs>(
         args?: SelectSubset<T, SubtaskFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      >;

      /**
       * Create a Subtask.
       * @param {SubtaskCreateArgs} args - Arguments to create a Subtask.
       * @example
       * // Create one Subtask
       * const Subtask = await prisma.subtask.create({
       *   data: {
       *     // ... data to create a Subtask
       *   }
       * })
       *
       */
      create<T extends SubtaskCreateArgs>(
         args: SelectSubset<T, SubtaskCreateArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many Subtasks.
       * @param {SubtaskCreateManyArgs} args - Arguments to create many Subtasks.
       * @example
       * // Create many Subtasks
       * const subtask = await prisma.subtask.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends SubtaskCreateManyArgs>(
         args?: SelectSubset<T, SubtaskCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many Subtasks and returns the data saved in the database.
       * @param {SubtaskCreateManyAndReturnArgs} args - Arguments to create many Subtasks.
       * @example
       * // Create many Subtasks
       * const subtask = await prisma.subtask.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many Subtasks and only return the `id`
       * const subtaskWithIdOnly = await prisma.subtask.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends SubtaskCreateManyAndReturnArgs>(
         args?: SelectSubset<T, SubtaskCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a Subtask.
       * @param {SubtaskDeleteArgs} args - Arguments to delete one Subtask.
       * @example
       * // Delete one Subtask
       * const Subtask = await prisma.subtask.delete({
       *   where: {
       *     // ... filter to delete one Subtask
       *   }
       * })
       *
       */
      delete<T extends SubtaskDeleteArgs>(
         args: SelectSubset<T, SubtaskDeleteArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one Subtask.
       * @param {SubtaskUpdateArgs} args - Arguments to update one Subtask.
       * @example
       * // Update one Subtask
       * const subtask = await prisma.subtask.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends SubtaskUpdateArgs>(
         args: SelectSubset<T, SubtaskUpdateArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more Subtasks.
       * @param {SubtaskDeleteManyArgs} args - Arguments to filter Subtasks to delete.
       * @example
       * // Delete a few Subtasks
       * const { count } = await prisma.subtask.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends SubtaskDeleteManyArgs>(
         args?: SelectSubset<T, SubtaskDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more Subtasks.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many Subtasks
       * const subtask = await prisma.subtask.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends SubtaskUpdateManyArgs>(
         args: SelectSubset<T, SubtaskUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more Subtasks and returns the data updated in the database.
       * @param {SubtaskUpdateManyAndReturnArgs} args - Arguments to update many Subtasks.
       * @example
       * // Update many Subtasks
       * const subtask = await prisma.subtask.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more Subtasks and only return the `id`
       * const subtaskWithIdOnly = await prisma.subtask.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends SubtaskUpdateManyAndReturnArgs>(
         args: SelectSubset<T, SubtaskUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SubtaskPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one Subtask.
       * @param {SubtaskUpsertArgs} args - Arguments to update or create a Subtask.
       * @example
       * // Update or create a Subtask
       * const subtask = await prisma.subtask.upsert({
       *   create: {
       *     // ... data to create a Subtask
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the Subtask we want to update
       *   }
       * })
       */
      upsert<T extends SubtaskUpsertArgs>(
         args: SelectSubset<T, SubtaskUpsertArgs<ExtArgs>>
      ): Prisma__SubtaskClient<
         $Result.GetResult<Prisma.$SubtaskPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of Subtasks.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskCountArgs} args - Arguments to filter Subtasks to count.
       * @example
       * // Count the number of Subtasks
       * const count = await prisma.subtask.count({
       *   where: {
       *     // ... the filter for the Subtasks we want to count
       *   }
       * })
       **/
      count<T extends SubtaskCountArgs>(
         args?: Subset<T, SubtaskCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], SubtaskCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a Subtask.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends SubtaskAggregateArgs>(
         args: Subset<T, SubtaskAggregateArgs>
      ): Prisma.PrismaPromise<GetSubtaskAggregateType<T>>;

      /**
       * Group by Subtask.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SubtaskGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends SubtaskGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: SubtaskGroupByArgs['orderBy'] }
            : { orderBy?: SubtaskGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, SubtaskGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors ? GetSubtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the Subtask model
       */
      readonly fields: SubtaskFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for Subtask.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__SubtaskClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      parentTask<T extends TaskDefaultArgs<ExtArgs> = {}>(
         args?: Subset<T, TaskDefaultArgs<ExtArgs>>
      ): Prisma__TaskClient<
         | $Result.GetResult<
              Prisma.$TaskPayload<ExtArgs>,
              T,
              'findUniqueOrThrow',
              GlobalOmitOptions
           >
         | Null,
         Null,
         ExtArgs,
         GlobalOmitOptions
      >;
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the Subtask model
    */
   interface SubtaskFieldRefs {
      readonly id: FieldRef<'Subtask', 'String'>;
      readonly title: FieldRef<'Subtask', 'String'>;
      readonly description: FieldRef<'Subtask', 'String'>;
      readonly details: FieldRef<'Subtask', 'String'>;
      readonly testStrategy: FieldRef<'Subtask', 'String'>;
      readonly status: FieldRef<'Subtask', 'String'>;
      readonly parentId: FieldRef<'Subtask', 'Int'>;
      readonly dependencies: FieldRef<'Subtask', 'String'>;
      readonly createdAt: FieldRef<'Subtask', 'DateTime'>;
      readonly updatedAt: FieldRef<'Subtask', 'DateTime'>;
   }

   // Custom InputTypes
   /**
    * Subtask findUnique
    */
   export type SubtaskFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter, which Subtask to fetch.
       */
      where: SubtaskWhereUniqueInput;
   };

   /**
    * Subtask findUniqueOrThrow
    */
   export type SubtaskFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter, which Subtask to fetch.
       */
      where: SubtaskWhereUniqueInput;
   };

   /**
    * Subtask findFirst
    */
   export type SubtaskFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter, which Subtask to fetch.
       */
      where?: SubtaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Subtasks to fetch.
       */
      orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Subtasks.
       */
      cursor?: SubtaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Subtasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Subtasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Subtasks.
       */
      distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[];
   };

   /**
    * Subtask findFirstOrThrow
    */
   export type SubtaskFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter, which Subtask to fetch.
       */
      where?: SubtaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Subtasks to fetch.
       */
      orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Subtasks.
       */
      cursor?: SubtaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Subtasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Subtasks.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Subtasks.
       */
      distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[];
   };

   /**
    * Subtask findMany
    */
   export type SubtaskFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter, which Subtasks to fetch.
       */
      where?: SubtaskWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Subtasks to fetch.
       */
      orderBy?: SubtaskOrderByWithRelationInput | SubtaskOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Subtasks.
       */
      cursor?: SubtaskWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Subtasks from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Subtasks.
       */
      skip?: number;
      distinct?: SubtaskScalarFieldEnum | SubtaskScalarFieldEnum[];
   };

   /**
    * Subtask create
    */
   export type SubtaskCreateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * The data needed to create a Subtask.
       */
      data: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>;
   };

   /**
    * Subtask createMany
    */
   export type SubtaskCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many Subtasks.
       */
      data: SubtaskCreateManyInput | SubtaskCreateManyInput[];
   };

   /**
    * Subtask createManyAndReturn
    */
   export type SubtaskCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * The data used to create many Subtasks.
       */
      data: SubtaskCreateManyInput | SubtaskCreateManyInput[];
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskIncludeCreateManyAndReturn<ExtArgs> | null;
   };

   /**
    * Subtask update
    */
   export type SubtaskUpdateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * The data needed to update a Subtask.
       */
      data: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>;
      /**
       * Choose, which Subtask to update.
       */
      where: SubtaskWhereUniqueInput;
   };

   /**
    * Subtask updateMany
    */
   export type SubtaskUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update Subtasks.
       */
      data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyInput>;
      /**
       * Filter which Subtasks to update
       */
      where?: SubtaskWhereInput;
      /**
       * Limit how many Subtasks to update.
       */
      limit?: number;
   };

   /**
    * Subtask updateManyAndReturn
    */
   export type SubtaskUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * The data used to update Subtasks.
       */
      data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyInput>;
      /**
       * Filter which Subtasks to update
       */
      where?: SubtaskWhereInput;
      /**
       * Limit how many Subtasks to update.
       */
      limit?: number;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskIncludeUpdateManyAndReturn<ExtArgs> | null;
   };

   /**
    * Subtask upsert
    */
   export type SubtaskUpsertArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * The filter to search for the Subtask to update in case it exists.
       */
      where: SubtaskWhereUniqueInput;
      /**
       * In case the Subtask found by the `where` argument doesn't exist, create a new Subtask with this data.
       */
      create: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>;
      /**
       * In case the Subtask was found with the provided `where` argument, update it with this data.
       */
      update: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>;
   };

   /**
    * Subtask delete
    */
   export type SubtaskDeleteArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
      /**
       * Filter which Subtask to delete.
       */
      where: SubtaskWhereUniqueInput;
   };

   /**
    * Subtask deleteMany
    */
   export type SubtaskDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which Subtasks to delete
       */
      where?: SubtaskWhereInput;
      /**
       * Limit how many Subtasks to delete.
       */
      limit?: number;
   };

   /**
    * Subtask without action
    */
   export type SubtaskDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the Subtask
       */
      select?: SubtaskSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Subtask
       */
      omit?: SubtaskOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SubtaskInclude<ExtArgs> | null;
   };

   /**
    * Model TaskDependency
    */

   export type AggregateTaskDependency = {
      _count: TaskDependencyCountAggregateOutputType | null;
      _avg: TaskDependencyAvgAggregateOutputType | null;
      _sum: TaskDependencySumAggregateOutputType | null;
      _min: TaskDependencyMinAggregateOutputType | null;
      _max: TaskDependencyMaxAggregateOutputType | null;
   };

   export type TaskDependencyAvgAggregateOutputType = {
      id: number | null;
      taskId: number | null;
      dependsOnId: number | null;
   };

   export type TaskDependencySumAggregateOutputType = {
      id: number | null;
      taskId: number | null;
      dependsOnId: number | null;
   };

   export type TaskDependencyMinAggregateOutputType = {
      id: number | null;
      taskId: number | null;
      dependsOnId: number | null;
      createdAt: Date | null;
   };

   export type TaskDependencyMaxAggregateOutputType = {
      id: number | null;
      taskId: number | null;
      dependsOnId: number | null;
      createdAt: Date | null;
   };

   export type TaskDependencyCountAggregateOutputType = {
      id: number;
      taskId: number;
      dependsOnId: number;
      createdAt: number;
      _all: number;
   };

   export type TaskDependencyAvgAggregateInputType = {
      id?: true;
      taskId?: true;
      dependsOnId?: true;
   };

   export type TaskDependencySumAggregateInputType = {
      id?: true;
      taskId?: true;
      dependsOnId?: true;
   };

   export type TaskDependencyMinAggregateInputType = {
      id?: true;
      taskId?: true;
      dependsOnId?: true;
      createdAt?: true;
   };

   export type TaskDependencyMaxAggregateInputType = {
      id?: true;
      taskId?: true;
      dependsOnId?: true;
      createdAt?: true;
   };

   export type TaskDependencyCountAggregateInputType = {
      id?: true;
      taskId?: true;
      dependsOnId?: true;
      createdAt?: true;
      _all?: true;
   };

   export type TaskDependencyAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which TaskDependency to aggregate.
       */
      where?: TaskDependencyWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskDependencies to fetch.
       */
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: TaskDependencyWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskDependencies from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskDependencies.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned TaskDependencies
       **/
      _count?: true | TaskDependencyCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: TaskDependencyAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: TaskDependencySumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: TaskDependencyMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: TaskDependencyMaxAggregateInputType;
   };

   export type GetTaskDependencyAggregateType<T extends TaskDependencyAggregateArgs> = {
      [P in keyof T & keyof AggregateTaskDependency]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateTaskDependency[P]>
         : GetScalarType<T[P], AggregateTaskDependency[P]>;
   };

   export type TaskDependencyGroupByArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: TaskDependencyWhereInput;
      orderBy?:
         | TaskDependencyOrderByWithAggregationInput
         | TaskDependencyOrderByWithAggregationInput[];
      by: TaskDependencyScalarFieldEnum[] | TaskDependencyScalarFieldEnum;
      having?: TaskDependencyScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: TaskDependencyCountAggregateInputType | true;
      _avg?: TaskDependencyAvgAggregateInputType;
      _sum?: TaskDependencySumAggregateInputType;
      _min?: TaskDependencyMinAggregateInputType;
      _max?: TaskDependencyMaxAggregateInputType;
   };

   export type TaskDependencyGroupByOutputType = {
      id: number;
      taskId: number;
      dependsOnId: number;
      createdAt: Date;
      _count: TaskDependencyCountAggregateOutputType | null;
      _avg: TaskDependencyAvgAggregateOutputType | null;
      _sum: TaskDependencySumAggregateOutputType | null;
      _min: TaskDependencyMinAggregateOutputType | null;
      _max: TaskDependencyMaxAggregateOutputType | null;
   };

   type GetTaskDependencyGroupByPayload<T extends TaskDependencyGroupByArgs> = Prisma.PrismaPromise<
      Array<
         PickEnumerable<TaskDependencyGroupByOutputType, T['by']> & {
            [P in keyof T & keyof TaskDependencyGroupByOutputType]: P extends '_count'
               ? T[P] extends boolean
                  ? number
                  : GetScalarType<T[P], TaskDependencyGroupByOutputType[P]>
               : GetScalarType<T[P], TaskDependencyGroupByOutputType[P]>;
         }
      >
   >;

   export type TaskDependencySelect<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         taskId?: boolean;
         dependsOnId?: boolean;
         createdAt?: boolean;
         task?: boolean | TaskDefaultArgs<ExtArgs>;
         dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['taskDependency']
   >;

   export type TaskDependencySelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         taskId?: boolean;
         dependsOnId?: boolean;
         createdAt?: boolean;
         task?: boolean | TaskDefaultArgs<ExtArgs>;
         dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['taskDependency']
   >;

   export type TaskDependencySelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         taskId?: boolean;
         dependsOnId?: boolean;
         createdAt?: boolean;
         task?: boolean | TaskDefaultArgs<ExtArgs>;
         dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['taskDependency']
   >;

   export type TaskDependencySelectScalar = {
      id?: boolean;
      taskId?: boolean;
      dependsOnId?: boolean;
      createdAt?: boolean;
   };

   export type TaskDependencyOmit<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetOmit<
      'id' | 'taskId' | 'dependsOnId' | 'createdAt',
      ExtArgs['result']['taskDependency']
   >;
   export type TaskDependencyInclude<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
   };
   export type TaskDependencyIncludeCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
   };
   export type TaskDependencyIncludeUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      dependsOn?: boolean | TaskDefaultArgs<ExtArgs>;
   };

   export type $TaskDependencyPayload<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      name: 'TaskDependency';
      objects: {
         task: Prisma.$TaskPayload<ExtArgs>;
         dependsOn: Prisma.$TaskPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
         {
            id: number;
            taskId: number;
            dependsOnId: number;
            createdAt: Date;
         },
         ExtArgs['result']['taskDependency']
      >;
      composites: {};
   };

   type TaskDependencyGetPayload<S extends boolean | null | undefined | TaskDependencyDefaultArgs> =
      $Result.GetResult<Prisma.$TaskDependencyPayload, S>;

   type TaskDependencyCountArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = Omit<TaskDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskDependencyCountAggregateInputType | true;
   };

   export interface TaskDependencyDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: {
         types: Prisma.TypeMap<ExtArgs>['model']['TaskDependency'];
         meta: { name: 'TaskDependency' };
      };
      /**
       * Find zero or one TaskDependency that matches the filter.
       * @param {TaskDependencyFindUniqueArgs} args - Arguments to find a TaskDependency
       * @example
       * // Get one TaskDependency
       * const taskDependency = await prisma.taskDependency.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends TaskDependencyFindUniqueArgs>(
         args: SelectSubset<T, TaskDependencyFindUniqueArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'findUnique',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one TaskDependency that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {TaskDependencyFindUniqueOrThrowArgs} args - Arguments to find a TaskDependency
       * @example
       * // Get one TaskDependency
       * const taskDependency = await prisma.taskDependency.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends TaskDependencyFindUniqueOrThrowArgs>(
         args: SelectSubset<T, TaskDependencyFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'findUniqueOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first TaskDependency that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyFindFirstArgs} args - Arguments to find a TaskDependency
       * @example
       * // Get one TaskDependency
       * const taskDependency = await prisma.taskDependency.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends TaskDependencyFindFirstArgs>(
         args?: SelectSubset<T, TaskDependencyFindFirstArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'findFirst',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first TaskDependency that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyFindFirstOrThrowArgs} args - Arguments to find a TaskDependency
       * @example
       * // Get one TaskDependency
       * const taskDependency = await prisma.taskDependency.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends TaskDependencyFindFirstOrThrowArgs>(
         args?: SelectSubset<T, TaskDependencyFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'findFirstOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more TaskDependencies that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all TaskDependencies
       * const taskDependencies = await prisma.taskDependency.findMany()
       *
       * // Get first 10 TaskDependencies
       * const taskDependencies = await prisma.taskDependency.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const taskDependencyWithIdOnly = await prisma.taskDependency.findMany({ select: { id: true } })
       *
       */
      findMany<T extends TaskDependencyFindManyArgs>(
         args?: SelectSubset<T, TaskDependencyFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      >;

      /**
       * Create a TaskDependency.
       * @param {TaskDependencyCreateArgs} args - Arguments to create a TaskDependency.
       * @example
       * // Create one TaskDependency
       * const TaskDependency = await prisma.taskDependency.create({
       *   data: {
       *     // ... data to create a TaskDependency
       *   }
       * })
       *
       */
      create<T extends TaskDependencyCreateArgs>(
         args: SelectSubset<T, TaskDependencyCreateArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many TaskDependencies.
       * @param {TaskDependencyCreateManyArgs} args - Arguments to create many TaskDependencies.
       * @example
       * // Create many TaskDependencies
       * const taskDependency = await prisma.taskDependency.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends TaskDependencyCreateManyArgs>(
         args?: SelectSubset<T, TaskDependencyCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many TaskDependencies and returns the data saved in the database.
       * @param {TaskDependencyCreateManyAndReturnArgs} args - Arguments to create many TaskDependencies.
       * @example
       * // Create many TaskDependencies
       * const taskDependency = await prisma.taskDependency.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many TaskDependencies and only return the `id`
       * const taskDependencyWithIdOnly = await prisma.taskDependency.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends TaskDependencyCreateManyAndReturnArgs>(
         args?: SelectSubset<T, TaskDependencyCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a TaskDependency.
       * @param {TaskDependencyDeleteArgs} args - Arguments to delete one TaskDependency.
       * @example
       * // Delete one TaskDependency
       * const TaskDependency = await prisma.taskDependency.delete({
       *   where: {
       *     // ... filter to delete one TaskDependency
       *   }
       * })
       *
       */
      delete<T extends TaskDependencyDeleteArgs>(
         args: SelectSubset<T, TaskDependencyDeleteArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one TaskDependency.
       * @param {TaskDependencyUpdateArgs} args - Arguments to update one TaskDependency.
       * @example
       * // Update one TaskDependency
       * const taskDependency = await prisma.taskDependency.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends TaskDependencyUpdateArgs>(
         args: SelectSubset<T, TaskDependencyUpdateArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more TaskDependencies.
       * @param {TaskDependencyDeleteManyArgs} args - Arguments to filter TaskDependencies to delete.
       * @example
       * // Delete a few TaskDependencies
       * const { count } = await prisma.taskDependency.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends TaskDependencyDeleteManyArgs>(
         args?: SelectSubset<T, TaskDependencyDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more TaskDependencies.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many TaskDependencies
       * const taskDependency = await prisma.taskDependency.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends TaskDependencyUpdateManyArgs>(
         args: SelectSubset<T, TaskDependencyUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more TaskDependencies and returns the data updated in the database.
       * @param {TaskDependencyUpdateManyAndReturnArgs} args - Arguments to update many TaskDependencies.
       * @example
       * // Update many TaskDependencies
       * const taskDependency = await prisma.taskDependency.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more TaskDependencies and only return the `id`
       * const taskDependencyWithIdOnly = await prisma.taskDependency.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends TaskDependencyUpdateManyAndReturnArgs>(
         args: SelectSubset<T, TaskDependencyUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskDependencyPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one TaskDependency.
       * @param {TaskDependencyUpsertArgs} args - Arguments to update or create a TaskDependency.
       * @example
       * // Update or create a TaskDependency
       * const taskDependency = await prisma.taskDependency.upsert({
       *   create: {
       *     // ... data to create a TaskDependency
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the TaskDependency we want to update
       *   }
       * })
       */
      upsert<T extends TaskDependencyUpsertArgs>(
         args: SelectSubset<T, TaskDependencyUpsertArgs<ExtArgs>>
      ): Prisma__TaskDependencyClient<
         $Result.GetResult<Prisma.$TaskDependencyPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of TaskDependencies.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyCountArgs} args - Arguments to filter TaskDependencies to count.
       * @example
       * // Count the number of TaskDependencies
       * const count = await prisma.taskDependency.count({
       *   where: {
       *     // ... the filter for the TaskDependencies we want to count
       *   }
       * })
       **/
      count<T extends TaskDependencyCountArgs>(
         args?: Subset<T, TaskDependencyCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], TaskDependencyCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a TaskDependency.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends TaskDependencyAggregateArgs>(
         args: Subset<T, TaskDependencyAggregateArgs>
      ): Prisma.PrismaPromise<GetTaskDependencyAggregateType<T>>;

      /**
       * Group by TaskDependency.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskDependencyGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends TaskDependencyGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: TaskDependencyGroupByArgs['orderBy'] }
            : { orderBy?: TaskDependencyGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, TaskDependencyGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors
         ? GetTaskDependencyGroupByPayload<T>
         : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the TaskDependency model
       */
      readonly fields: TaskDependencyFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for TaskDependency.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__TaskDependencyClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      task<T extends TaskDefaultArgs<ExtArgs> = {}>(
         args?: Subset<T, TaskDefaultArgs<ExtArgs>>
      ): Prisma__TaskClient<
         | $Result.GetResult<
              Prisma.$TaskPayload<ExtArgs>,
              T,
              'findUniqueOrThrow',
              GlobalOmitOptions
           >
         | Null,
         Null,
         ExtArgs,
         GlobalOmitOptions
      >;
      dependsOn<T extends TaskDefaultArgs<ExtArgs> = {}>(
         args?: Subset<T, TaskDefaultArgs<ExtArgs>>
      ): Prisma__TaskClient<
         | $Result.GetResult<
              Prisma.$TaskPayload<ExtArgs>,
              T,
              'findUniqueOrThrow',
              GlobalOmitOptions
           >
         | Null,
         Null,
         ExtArgs,
         GlobalOmitOptions
      >;
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the TaskDependency model
    */
   interface TaskDependencyFieldRefs {
      readonly id: FieldRef<'TaskDependency', 'Int'>;
      readonly taskId: FieldRef<'TaskDependency', 'Int'>;
      readonly dependsOnId: FieldRef<'TaskDependency', 'Int'>;
      readonly createdAt: FieldRef<'TaskDependency', 'DateTime'>;
   }

   // Custom InputTypes
   /**
    * TaskDependency findUnique
    */
   export type TaskDependencyFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter, which TaskDependency to fetch.
       */
      where: TaskDependencyWhereUniqueInput;
   };

   /**
    * TaskDependency findUniqueOrThrow
    */
   export type TaskDependencyFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter, which TaskDependency to fetch.
       */
      where: TaskDependencyWhereUniqueInput;
   };

   /**
    * TaskDependency findFirst
    */
   export type TaskDependencyFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter, which TaskDependency to fetch.
       */
      where?: TaskDependencyWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskDependencies to fetch.
       */
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for TaskDependencies.
       */
      cursor?: TaskDependencyWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskDependencies from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskDependencies.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of TaskDependencies.
       */
      distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[];
   };

   /**
    * TaskDependency findFirstOrThrow
    */
   export type TaskDependencyFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter, which TaskDependency to fetch.
       */
      where?: TaskDependencyWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskDependencies to fetch.
       */
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for TaskDependencies.
       */
      cursor?: TaskDependencyWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskDependencies from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskDependencies.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of TaskDependencies.
       */
      distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[];
   };

   /**
    * TaskDependency findMany
    */
   export type TaskDependencyFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter, which TaskDependencies to fetch.
       */
      where?: TaskDependencyWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskDependencies to fetch.
       */
      orderBy?: TaskDependencyOrderByWithRelationInput | TaskDependencyOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing TaskDependencies.
       */
      cursor?: TaskDependencyWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskDependencies from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskDependencies.
       */
      skip?: number;
      distinct?: TaskDependencyScalarFieldEnum | TaskDependencyScalarFieldEnum[];
   };

   /**
    * TaskDependency create
    */
   export type TaskDependencyCreateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * The data needed to create a TaskDependency.
       */
      data: XOR<TaskDependencyCreateInput, TaskDependencyUncheckedCreateInput>;
   };

   /**
    * TaskDependency createMany
    */
   export type TaskDependencyCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many TaskDependencies.
       */
      data: TaskDependencyCreateManyInput | TaskDependencyCreateManyInput[];
   };

   /**
    * TaskDependency createManyAndReturn
    */
   export type TaskDependencyCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * The data used to create many TaskDependencies.
       */
      data: TaskDependencyCreateManyInput | TaskDependencyCreateManyInput[];
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyIncludeCreateManyAndReturn<ExtArgs> | null;
   };

   /**
    * TaskDependency update
    */
   export type TaskDependencyUpdateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * The data needed to update a TaskDependency.
       */
      data: XOR<TaskDependencyUpdateInput, TaskDependencyUncheckedUpdateInput>;
      /**
       * Choose, which TaskDependency to update.
       */
      where: TaskDependencyWhereUniqueInput;
   };

   /**
    * TaskDependency updateMany
    */
   export type TaskDependencyUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update TaskDependencies.
       */
      data: XOR<TaskDependencyUpdateManyMutationInput, TaskDependencyUncheckedUpdateManyInput>;
      /**
       * Filter which TaskDependencies to update
       */
      where?: TaskDependencyWhereInput;
      /**
       * Limit how many TaskDependencies to update.
       */
      limit?: number;
   };

   /**
    * TaskDependency updateManyAndReturn
    */
   export type TaskDependencyUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * The data used to update TaskDependencies.
       */
      data: XOR<TaskDependencyUpdateManyMutationInput, TaskDependencyUncheckedUpdateManyInput>;
      /**
       * Filter which TaskDependencies to update
       */
      where?: TaskDependencyWhereInput;
      /**
       * Limit how many TaskDependencies to update.
       */
      limit?: number;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyIncludeUpdateManyAndReturn<ExtArgs> | null;
   };

   /**
    * TaskDependency upsert
    */
   export type TaskDependencyUpsertArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * The filter to search for the TaskDependency to update in case it exists.
       */
      where: TaskDependencyWhereUniqueInput;
      /**
       * In case the TaskDependency found by the `where` argument doesn't exist, create a new TaskDependency with this data.
       */
      create: XOR<TaskDependencyCreateInput, TaskDependencyUncheckedCreateInput>;
      /**
       * In case the TaskDependency was found with the provided `where` argument, update it with this data.
       */
      update: XOR<TaskDependencyUpdateInput, TaskDependencyUncheckedUpdateInput>;
   };

   /**
    * TaskDependency delete
    */
   export type TaskDependencyDeleteArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
      /**
       * Filter which TaskDependency to delete.
       */
      where: TaskDependencyWhereUniqueInput;
   };

   /**
    * TaskDependency deleteMany
    */
   export type TaskDependencyDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which TaskDependencies to delete
       */
      where?: TaskDependencyWhereInput;
      /**
       * Limit how many TaskDependencies to delete.
       */
      limit?: number;
   };

   /**
    * TaskDependency without action
    */
   export type TaskDependencyDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskDependency
       */
      select?: TaskDependencySelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskDependency
       */
      omit?: TaskDependencyOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TaskDependencyInclude<ExtArgs> | null;
   };

   /**
    * Model TaskMasterMetadata
    */

   export type AggregateTaskMasterMetadata = {
      _count: TaskMasterMetadataCountAggregateOutputType | null;
      _avg: TaskMasterMetadataAvgAggregateOutputType | null;
      _sum: TaskMasterMetadataSumAggregateOutputType | null;
      _min: TaskMasterMetadataMinAggregateOutputType | null;
      _max: TaskMasterMetadataMaxAggregateOutputType | null;
   };

   export type TaskMasterMetadataAvgAggregateOutputType = {
      id: number | null;
   };

   export type TaskMasterMetadataSumAggregateOutputType = {
      id: number | null;
   };

   export type TaskMasterMetadataMinAggregateOutputType = {
      id: number | null;
      created: Date | null;
      updated: Date | null;
      description: string | null;
   };

   export type TaskMasterMetadataMaxAggregateOutputType = {
      id: number | null;
      created: Date | null;
      updated: Date | null;
      description: string | null;
   };

   export type TaskMasterMetadataCountAggregateOutputType = {
      id: number;
      created: number;
      updated: number;
      description: number;
      _all: number;
   };

   export type TaskMasterMetadataAvgAggregateInputType = {
      id?: true;
   };

   export type TaskMasterMetadataSumAggregateInputType = {
      id?: true;
   };

   export type TaskMasterMetadataMinAggregateInputType = {
      id?: true;
      created?: true;
      updated?: true;
      description?: true;
   };

   export type TaskMasterMetadataMaxAggregateInputType = {
      id?: true;
      created?: true;
      updated?: true;
      description?: true;
   };

   export type TaskMasterMetadataCountAggregateInputType = {
      id?: true;
      created?: true;
      updated?: true;
      description?: true;
      _all?: true;
   };

   export type TaskMasterMetadataAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which TaskMasterMetadata to aggregate.
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskMasterMetadata to fetch.
       */
      orderBy?:
         | TaskMasterMetadataOrderByWithRelationInput
         | TaskMasterMetadataOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: TaskMasterMetadataWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskMasterMetadata from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskMasterMetadata.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned TaskMasterMetadata
       **/
      _count?: true | TaskMasterMetadataCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: TaskMasterMetadataAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: TaskMasterMetadataSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: TaskMasterMetadataMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: TaskMasterMetadataMaxAggregateInputType;
   };

   export type GetTaskMasterMetadataAggregateType<T extends TaskMasterMetadataAggregateArgs> = {
      [P in keyof T & keyof AggregateTaskMasterMetadata]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateTaskMasterMetadata[P]>
         : GetScalarType<T[P], AggregateTaskMasterMetadata[P]>;
   };

   export type TaskMasterMetadataGroupByArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: TaskMasterMetadataWhereInput;
      orderBy?:
         | TaskMasterMetadataOrderByWithAggregationInput
         | TaskMasterMetadataOrderByWithAggregationInput[];
      by: TaskMasterMetadataScalarFieldEnum[] | TaskMasterMetadataScalarFieldEnum;
      having?: TaskMasterMetadataScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: TaskMasterMetadataCountAggregateInputType | true;
      _avg?: TaskMasterMetadataAvgAggregateInputType;
      _sum?: TaskMasterMetadataSumAggregateInputType;
      _min?: TaskMasterMetadataMinAggregateInputType;
      _max?: TaskMasterMetadataMaxAggregateInputType;
   };

   export type TaskMasterMetadataGroupByOutputType = {
      id: number;
      created: Date;
      updated: Date;
      description: string;
      _count: TaskMasterMetadataCountAggregateOutputType | null;
      _avg: TaskMasterMetadataAvgAggregateOutputType | null;
      _sum: TaskMasterMetadataSumAggregateOutputType | null;
      _min: TaskMasterMetadataMinAggregateOutputType | null;
      _max: TaskMasterMetadataMaxAggregateOutputType | null;
   };

   type GetTaskMasterMetadataGroupByPayload<T extends TaskMasterMetadataGroupByArgs> =
      Prisma.PrismaPromise<
         Array<
            PickEnumerable<TaskMasterMetadataGroupByOutputType, T['by']> & {
               [P in keyof T & keyof TaskMasterMetadataGroupByOutputType]: P extends '_count'
                  ? T[P] extends boolean
                     ? number
                     : GetScalarType<T[P], TaskMasterMetadataGroupByOutputType[P]>
                  : GetScalarType<T[P], TaskMasterMetadataGroupByOutputType[P]>;
            }
         >
      >;

   export type TaskMasterMetadataSelect<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         created?: boolean;
         updated?: boolean;
         description?: boolean;
      },
      ExtArgs['result']['taskMasterMetadata']
   >;

   export type TaskMasterMetadataSelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         created?: boolean;
         updated?: boolean;
         description?: boolean;
      },
      ExtArgs['result']['taskMasterMetadata']
   >;

   export type TaskMasterMetadataSelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         created?: boolean;
         updated?: boolean;
         description?: boolean;
      },
      ExtArgs['result']['taskMasterMetadata']
   >;

   export type TaskMasterMetadataSelectScalar = {
      id?: boolean;
      created?: boolean;
      updated?: boolean;
      description?: boolean;
   };

   export type TaskMasterMetadataOmit<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetOmit<
      'id' | 'created' | 'updated' | 'description',
      ExtArgs['result']['taskMasterMetadata']
   >;

   export type $TaskMasterMetadataPayload<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      name: 'TaskMasterMetadata';
      objects: {};
      scalars: $Extensions.GetPayloadResult<
         {
            id: number;
            created: Date;
            updated: Date;
            description: string;
         },
         ExtArgs['result']['taskMasterMetadata']
      >;
      composites: {};
   };

   type TaskMasterMetadataGetPayload<
      S extends boolean | null | undefined | TaskMasterMetadataDefaultArgs,
   > = $Result.GetResult<Prisma.$TaskMasterMetadataPayload, S>;

   type TaskMasterMetadataCountArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = Omit<TaskMasterMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskMasterMetadataCountAggregateInputType | true;
   };

   export interface TaskMasterMetadataDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: {
         types: Prisma.TypeMap<ExtArgs>['model']['TaskMasterMetadata'];
         meta: { name: 'TaskMasterMetadata' };
      };
      /**
       * Find zero or one TaskMasterMetadata that matches the filter.
       * @param {TaskMasterMetadataFindUniqueArgs} args - Arguments to find a TaskMasterMetadata
       * @example
       * // Get one TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends TaskMasterMetadataFindUniqueArgs>(
         args: SelectSubset<T, TaskMasterMetadataFindUniqueArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'findUnique',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one TaskMasterMetadata that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {TaskMasterMetadataFindUniqueOrThrowArgs} args - Arguments to find a TaskMasterMetadata
       * @example
       * // Get one TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends TaskMasterMetadataFindUniqueOrThrowArgs>(
         args: SelectSubset<T, TaskMasterMetadataFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'findUniqueOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first TaskMasterMetadata that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataFindFirstArgs} args - Arguments to find a TaskMasterMetadata
       * @example
       * // Get one TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends TaskMasterMetadataFindFirstArgs>(
         args?: SelectSubset<T, TaskMasterMetadataFindFirstArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'findFirst',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first TaskMasterMetadata that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataFindFirstOrThrowArgs} args - Arguments to find a TaskMasterMetadata
       * @example
       * // Get one TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends TaskMasterMetadataFindFirstOrThrowArgs>(
         args?: SelectSubset<T, TaskMasterMetadataFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'findFirstOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more TaskMasterMetadata that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findMany()
       *
       * // Get first 10 TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const taskMasterMetadataWithIdOnly = await prisma.taskMasterMetadata.findMany({ select: { id: true } })
       *
       */
      findMany<T extends TaskMasterMetadataFindManyArgs>(
         args?: SelectSubset<T, TaskMasterMetadataFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'findMany',
            GlobalOmitOptions
         >
      >;

      /**
       * Create a TaskMasterMetadata.
       * @param {TaskMasterMetadataCreateArgs} args - Arguments to create a TaskMasterMetadata.
       * @example
       * // Create one TaskMasterMetadata
       * const TaskMasterMetadata = await prisma.taskMasterMetadata.create({
       *   data: {
       *     // ... data to create a TaskMasterMetadata
       *   }
       * })
       *
       */
      create<T extends TaskMasterMetadataCreateArgs>(
         args: SelectSubset<T, TaskMasterMetadataCreateArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'create',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many TaskMasterMetadata.
       * @param {TaskMasterMetadataCreateManyArgs} args - Arguments to create many TaskMasterMetadata.
       * @example
       * // Create many TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends TaskMasterMetadataCreateManyArgs>(
         args?: SelectSubset<T, TaskMasterMetadataCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many TaskMasterMetadata and returns the data saved in the database.
       * @param {TaskMasterMetadataCreateManyAndReturnArgs} args - Arguments to create many TaskMasterMetadata.
       * @example
       * // Create many TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many TaskMasterMetadata and only return the `id`
       * const taskMasterMetadataWithIdOnly = await prisma.taskMasterMetadata.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends TaskMasterMetadataCreateManyAndReturnArgs>(
         args?: SelectSubset<T, TaskMasterMetadataCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a TaskMasterMetadata.
       * @param {TaskMasterMetadataDeleteArgs} args - Arguments to delete one TaskMasterMetadata.
       * @example
       * // Delete one TaskMasterMetadata
       * const TaskMasterMetadata = await prisma.taskMasterMetadata.delete({
       *   where: {
       *     // ... filter to delete one TaskMasterMetadata
       *   }
       * })
       *
       */
      delete<T extends TaskMasterMetadataDeleteArgs>(
         args: SelectSubset<T, TaskMasterMetadataDeleteArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'delete',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one TaskMasterMetadata.
       * @param {TaskMasterMetadataUpdateArgs} args - Arguments to update one TaskMasterMetadata.
       * @example
       * // Update one TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends TaskMasterMetadataUpdateArgs>(
         args: SelectSubset<T, TaskMasterMetadataUpdateArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'update',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more TaskMasterMetadata.
       * @param {TaskMasterMetadataDeleteManyArgs} args - Arguments to filter TaskMasterMetadata to delete.
       * @example
       * // Delete a few TaskMasterMetadata
       * const { count } = await prisma.taskMasterMetadata.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends TaskMasterMetadataDeleteManyArgs>(
         args?: SelectSubset<T, TaskMasterMetadataDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more TaskMasterMetadata.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends TaskMasterMetadataUpdateManyArgs>(
         args: SelectSubset<T, TaskMasterMetadataUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more TaskMasterMetadata and returns the data updated in the database.
       * @param {TaskMasterMetadataUpdateManyAndReturnArgs} args - Arguments to update many TaskMasterMetadata.
       * @example
       * // Update many TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more TaskMasterMetadata and only return the `id`
       * const taskMasterMetadataWithIdOnly = await prisma.taskMasterMetadata.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends TaskMasterMetadataUpdateManyAndReturnArgs>(
         args: SelectSubset<T, TaskMasterMetadataUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one TaskMasterMetadata.
       * @param {TaskMasterMetadataUpsertArgs} args - Arguments to update or create a TaskMasterMetadata.
       * @example
       * // Update or create a TaskMasterMetadata
       * const taskMasterMetadata = await prisma.taskMasterMetadata.upsert({
       *   create: {
       *     // ... data to create a TaskMasterMetadata
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the TaskMasterMetadata we want to update
       *   }
       * })
       */
      upsert<T extends TaskMasterMetadataUpsertArgs>(
         args: SelectSubset<T, TaskMasterMetadataUpsertArgs<ExtArgs>>
      ): Prisma__TaskMasterMetadataClient<
         $Result.GetResult<
            Prisma.$TaskMasterMetadataPayload<ExtArgs>,
            T,
            'upsert',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of TaskMasterMetadata.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataCountArgs} args - Arguments to filter TaskMasterMetadata to count.
       * @example
       * // Count the number of TaskMasterMetadata
       * const count = await prisma.taskMasterMetadata.count({
       *   where: {
       *     // ... the filter for the TaskMasterMetadata we want to count
       *   }
       * })
       **/
      count<T extends TaskMasterMetadataCountArgs>(
         args?: Subset<T, TaskMasterMetadataCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], TaskMasterMetadataCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a TaskMasterMetadata.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends TaskMasterMetadataAggregateArgs>(
         args: Subset<T, TaskMasterMetadataAggregateArgs>
      ): Prisma.PrismaPromise<GetTaskMasterMetadataAggregateType<T>>;

      /**
       * Group by TaskMasterMetadata.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {TaskMasterMetadataGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends TaskMasterMetadataGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: TaskMasterMetadataGroupByArgs['orderBy'] }
            : { orderBy?: TaskMasterMetadataGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, TaskMasterMetadataGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors
         ? GetTaskMasterMetadataGroupByPayload<T>
         : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the TaskMasterMetadata model
       */
      readonly fields: TaskMasterMetadataFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for TaskMasterMetadata.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__TaskMasterMetadataClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the TaskMasterMetadata model
    */
   interface TaskMasterMetadataFieldRefs {
      readonly id: FieldRef<'TaskMasterMetadata', 'Int'>;
      readonly created: FieldRef<'TaskMasterMetadata', 'DateTime'>;
      readonly updated: FieldRef<'TaskMasterMetadata', 'DateTime'>;
      readonly description: FieldRef<'TaskMasterMetadata', 'String'>;
   }

   // Custom InputTypes
   /**
    * TaskMasterMetadata findUnique
    */
   export type TaskMasterMetadataFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter, which TaskMasterMetadata to fetch.
       */
      where: TaskMasterMetadataWhereUniqueInput;
   };

   /**
    * TaskMasterMetadata findUniqueOrThrow
    */
   export type TaskMasterMetadataFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter, which TaskMasterMetadata to fetch.
       */
      where: TaskMasterMetadataWhereUniqueInput;
   };

   /**
    * TaskMasterMetadata findFirst
    */
   export type TaskMasterMetadataFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter, which TaskMasterMetadata to fetch.
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskMasterMetadata to fetch.
       */
      orderBy?:
         | TaskMasterMetadataOrderByWithRelationInput
         | TaskMasterMetadataOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for TaskMasterMetadata.
       */
      cursor?: TaskMasterMetadataWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskMasterMetadata from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskMasterMetadata.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of TaskMasterMetadata.
       */
      distinct?: TaskMasterMetadataScalarFieldEnum | TaskMasterMetadataScalarFieldEnum[];
   };

   /**
    * TaskMasterMetadata findFirstOrThrow
    */
   export type TaskMasterMetadataFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter, which TaskMasterMetadata to fetch.
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskMasterMetadata to fetch.
       */
      orderBy?:
         | TaskMasterMetadataOrderByWithRelationInput
         | TaskMasterMetadataOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for TaskMasterMetadata.
       */
      cursor?: TaskMasterMetadataWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskMasterMetadata from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskMasterMetadata.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of TaskMasterMetadata.
       */
      distinct?: TaskMasterMetadataScalarFieldEnum | TaskMasterMetadataScalarFieldEnum[];
   };

   /**
    * TaskMasterMetadata findMany
    */
   export type TaskMasterMetadataFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter, which TaskMasterMetadata to fetch.
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of TaskMasterMetadata to fetch.
       */
      orderBy?:
         | TaskMasterMetadataOrderByWithRelationInput
         | TaskMasterMetadataOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing TaskMasterMetadata.
       */
      cursor?: TaskMasterMetadataWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` TaskMasterMetadata from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` TaskMasterMetadata.
       */
      skip?: number;
      distinct?: TaskMasterMetadataScalarFieldEnum | TaskMasterMetadataScalarFieldEnum[];
   };

   /**
    * TaskMasterMetadata create
    */
   export type TaskMasterMetadataCreateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * The data needed to create a TaskMasterMetadata.
       */
      data: XOR<TaskMasterMetadataCreateInput, TaskMasterMetadataUncheckedCreateInput>;
   };

   /**
    * TaskMasterMetadata createMany
    */
   export type TaskMasterMetadataCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many TaskMasterMetadata.
       */
      data: TaskMasterMetadataCreateManyInput | TaskMasterMetadataCreateManyInput[];
   };

   /**
    * TaskMasterMetadata createManyAndReturn
    */
   export type TaskMasterMetadataCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * The data used to create many TaskMasterMetadata.
       */
      data: TaskMasterMetadataCreateManyInput | TaskMasterMetadataCreateManyInput[];
   };

   /**
    * TaskMasterMetadata update
    */
   export type TaskMasterMetadataUpdateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * The data needed to update a TaskMasterMetadata.
       */
      data: XOR<TaskMasterMetadataUpdateInput, TaskMasterMetadataUncheckedUpdateInput>;
      /**
       * Choose, which TaskMasterMetadata to update.
       */
      where: TaskMasterMetadataWhereUniqueInput;
   };

   /**
    * TaskMasterMetadata updateMany
    */
   export type TaskMasterMetadataUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update TaskMasterMetadata.
       */
      data: XOR<
         TaskMasterMetadataUpdateManyMutationInput,
         TaskMasterMetadataUncheckedUpdateManyInput
      >;
      /**
       * Filter which TaskMasterMetadata to update
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * Limit how many TaskMasterMetadata to update.
       */
      limit?: number;
   };

   /**
    * TaskMasterMetadata updateManyAndReturn
    */
   export type TaskMasterMetadataUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * The data used to update TaskMasterMetadata.
       */
      data: XOR<
         TaskMasterMetadataUpdateManyMutationInput,
         TaskMasterMetadataUncheckedUpdateManyInput
      >;
      /**
       * Filter which TaskMasterMetadata to update
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * Limit how many TaskMasterMetadata to update.
       */
      limit?: number;
   };

   /**
    * TaskMasterMetadata upsert
    */
   export type TaskMasterMetadataUpsertArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * The filter to search for the TaskMasterMetadata to update in case it exists.
       */
      where: TaskMasterMetadataWhereUniqueInput;
      /**
       * In case the TaskMasterMetadata found by the `where` argument doesn't exist, create a new TaskMasterMetadata with this data.
       */
      create: XOR<TaskMasterMetadataCreateInput, TaskMasterMetadataUncheckedCreateInput>;
      /**
       * In case the TaskMasterMetadata was found with the provided `where` argument, update it with this data.
       */
      update: XOR<TaskMasterMetadataUpdateInput, TaskMasterMetadataUncheckedUpdateInput>;
   };

   /**
    * TaskMasterMetadata delete
    */
   export type TaskMasterMetadataDeleteArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
      /**
       * Filter which TaskMasterMetadata to delete.
       */
      where: TaskMasterMetadataWhereUniqueInput;
   };

   /**
    * TaskMasterMetadata deleteMany
    */
   export type TaskMasterMetadataDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which TaskMasterMetadata to delete
       */
      where?: TaskMasterMetadataWhereInput;
      /**
       * Limit how many TaskMasterMetadata to delete.
       */
      limit?: number;
   };

   /**
    * TaskMasterMetadata without action
    */
   export type TaskMasterMetadataDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the TaskMasterMetadata
       */
      select?: TaskMasterMetadataSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the TaskMasterMetadata
       */
      omit?: TaskMasterMetadataOmit<ExtArgs> | null;
   };

   /**
    * Model SyncOperation
    */

   export type AggregateSyncOperation = {
      _count: SyncOperationCountAggregateOutputType | null;
      _avg: SyncOperationAvgAggregateOutputType | null;
      _sum: SyncOperationSumAggregateOutputType | null;
      _min: SyncOperationMinAggregateOutputType | null;
      _max: SyncOperationMaxAggregateOutputType | null;
   };

   export type SyncOperationAvgAggregateOutputType = {
      retryCount: number | null;
      maxRetries: number | null;
   };

   export type SyncOperationSumAggregateOutputType = {
      retryCount: number | null;
      maxRetries: number | null;
   };

   export type SyncOperationMinAggregateOutputType = {
      id: string | null;
      type: string | null;
      status: string | null;
      source: string | null;
      timestamp: Date | null;
      completedAt: Date | null;
      data: string | null;
      rollbackData: string | null;
      metadata: string | null;
      retryCount: number | null;
      maxRetries: number | null;
      error: string | null;
      taskIds: string | null;
   };

   export type SyncOperationMaxAggregateOutputType = {
      id: string | null;
      type: string | null;
      status: string | null;
      source: string | null;
      timestamp: Date | null;
      completedAt: Date | null;
      data: string | null;
      rollbackData: string | null;
      metadata: string | null;
      retryCount: number | null;
      maxRetries: number | null;
      error: string | null;
      taskIds: string | null;
   };

   export type SyncOperationCountAggregateOutputType = {
      id: number;
      type: number;
      status: number;
      source: number;
      timestamp: number;
      completedAt: number;
      data: number;
      rollbackData: number;
      metadata: number;
      retryCount: number;
      maxRetries: number;
      error: number;
      taskIds: number;
      _all: number;
   };

   export type SyncOperationAvgAggregateInputType = {
      retryCount?: true;
      maxRetries?: true;
   };

   export type SyncOperationSumAggregateInputType = {
      retryCount?: true;
      maxRetries?: true;
   };

   export type SyncOperationMinAggregateInputType = {
      id?: true;
      type?: true;
      status?: true;
      source?: true;
      timestamp?: true;
      completedAt?: true;
      data?: true;
      rollbackData?: true;
      metadata?: true;
      retryCount?: true;
      maxRetries?: true;
      error?: true;
      taskIds?: true;
   };

   export type SyncOperationMaxAggregateInputType = {
      id?: true;
      type?: true;
      status?: true;
      source?: true;
      timestamp?: true;
      completedAt?: true;
      data?: true;
      rollbackData?: true;
      metadata?: true;
      retryCount?: true;
      maxRetries?: true;
      error?: true;
      taskIds?: true;
   };

   export type SyncOperationCountAggregateInputType = {
      id?: true;
      type?: true;
      status?: true;
      source?: true;
      timestamp?: true;
      completedAt?: true;
      data?: true;
      rollbackData?: true;
      metadata?: true;
      retryCount?: true;
      maxRetries?: true;
      error?: true;
      taskIds?: true;
      _all?: true;
   };

   export type SyncOperationAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which SyncOperation to aggregate.
       */
      where?: SyncOperationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncOperations to fetch.
       */
      orderBy?: SyncOperationOrderByWithRelationInput | SyncOperationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: SyncOperationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncOperations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncOperations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned SyncOperations
       **/
      _count?: true | SyncOperationCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: SyncOperationAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: SyncOperationSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: SyncOperationMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: SyncOperationMaxAggregateInputType;
   };

   export type GetSyncOperationAggregateType<T extends SyncOperationAggregateArgs> = {
      [P in keyof T & keyof AggregateSyncOperation]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateSyncOperation[P]>
         : GetScalarType<T[P], AggregateSyncOperation[P]>;
   };

   export type SyncOperationGroupByArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: SyncOperationWhereInput;
      orderBy?:
         | SyncOperationOrderByWithAggregationInput
         | SyncOperationOrderByWithAggregationInput[];
      by: SyncOperationScalarFieldEnum[] | SyncOperationScalarFieldEnum;
      having?: SyncOperationScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: SyncOperationCountAggregateInputType | true;
      _avg?: SyncOperationAvgAggregateInputType;
      _sum?: SyncOperationSumAggregateInputType;
      _min?: SyncOperationMinAggregateInputType;
      _max?: SyncOperationMaxAggregateInputType;
   };

   export type SyncOperationGroupByOutputType = {
      id: string;
      type: string;
      status: string;
      source: string;
      timestamp: Date;
      completedAt: Date | null;
      data: string;
      rollbackData: string | null;
      metadata: string | null;
      retryCount: number;
      maxRetries: number;
      error: string | null;
      taskIds: string;
      _count: SyncOperationCountAggregateOutputType | null;
      _avg: SyncOperationAvgAggregateOutputType | null;
      _sum: SyncOperationSumAggregateOutputType | null;
      _min: SyncOperationMinAggregateOutputType | null;
      _max: SyncOperationMaxAggregateOutputType | null;
   };

   type GetSyncOperationGroupByPayload<T extends SyncOperationGroupByArgs> = Prisma.PrismaPromise<
      Array<
         PickEnumerable<SyncOperationGroupByOutputType, T['by']> & {
            [P in keyof T & keyof SyncOperationGroupByOutputType]: P extends '_count'
               ? T[P] extends boolean
                  ? number
                  : GetScalarType<T[P], SyncOperationGroupByOutputType[P]>
               : GetScalarType<T[P], SyncOperationGroupByOutputType[P]>;
         }
      >
   >;

   export type SyncOperationSelect<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         type?: boolean;
         status?: boolean;
         source?: boolean;
         timestamp?: boolean;
         completedAt?: boolean;
         data?: boolean;
         rollbackData?: boolean;
         metadata?: boolean;
         retryCount?: boolean;
         maxRetries?: boolean;
         error?: boolean;
         taskIds?: boolean;
      },
      ExtArgs['result']['syncOperation']
   >;

   export type SyncOperationSelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         type?: boolean;
         status?: boolean;
         source?: boolean;
         timestamp?: boolean;
         completedAt?: boolean;
         data?: boolean;
         rollbackData?: boolean;
         metadata?: boolean;
         retryCount?: boolean;
         maxRetries?: boolean;
         error?: boolean;
         taskIds?: boolean;
      },
      ExtArgs['result']['syncOperation']
   >;

   export type SyncOperationSelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         type?: boolean;
         status?: boolean;
         source?: boolean;
         timestamp?: boolean;
         completedAt?: boolean;
         data?: boolean;
         rollbackData?: boolean;
         metadata?: boolean;
         retryCount?: boolean;
         maxRetries?: boolean;
         error?: boolean;
         taskIds?: boolean;
      },
      ExtArgs['result']['syncOperation']
   >;

   export type SyncOperationSelectScalar = {
      id?: boolean;
      type?: boolean;
      status?: boolean;
      source?: boolean;
      timestamp?: boolean;
      completedAt?: boolean;
      data?: boolean;
      rollbackData?: boolean;
      metadata?: boolean;
      retryCount?: boolean;
      maxRetries?: boolean;
      error?: boolean;
      taskIds?: boolean;
   };

   export type SyncOperationOmit<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetOmit<
      | 'id'
      | 'type'
      | 'status'
      | 'source'
      | 'timestamp'
      | 'completedAt'
      | 'data'
      | 'rollbackData'
      | 'metadata'
      | 'retryCount'
      | 'maxRetries'
      | 'error'
      | 'taskIds',
      ExtArgs['result']['syncOperation']
   >;

   export type $SyncOperationPayload<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      name: 'SyncOperation';
      objects: {};
      scalars: $Extensions.GetPayloadResult<
         {
            id: string;
            type: string;
            status: string;
            source: string;
            timestamp: Date;
            completedAt: Date | null;
            data: string;
            rollbackData: string | null;
            metadata: string | null;
            retryCount: number;
            maxRetries: number;
            error: string | null;
            taskIds: string;
         },
         ExtArgs['result']['syncOperation']
      >;
      composites: {};
   };

   type SyncOperationGetPayload<S extends boolean | null | undefined | SyncOperationDefaultArgs> =
      $Result.GetResult<Prisma.$SyncOperationPayload, S>;

   type SyncOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      Omit<SyncOperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
         select?: SyncOperationCountAggregateInputType | true;
      };

   export interface SyncOperationDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: {
         types: Prisma.TypeMap<ExtArgs>['model']['SyncOperation'];
         meta: { name: 'SyncOperation' };
      };
      /**
       * Find zero or one SyncOperation that matches the filter.
       * @param {SyncOperationFindUniqueArgs} args - Arguments to find a SyncOperation
       * @example
       * // Get one SyncOperation
       * const syncOperation = await prisma.syncOperation.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends SyncOperationFindUniqueArgs>(
         args: SelectSubset<T, SyncOperationFindUniqueArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'findUnique',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one SyncOperation that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {SyncOperationFindUniqueOrThrowArgs} args - Arguments to find a SyncOperation
       * @example
       * // Get one SyncOperation
       * const syncOperation = await prisma.syncOperation.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends SyncOperationFindUniqueOrThrowArgs>(
         args: SelectSubset<T, SyncOperationFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'findUniqueOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first SyncOperation that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationFindFirstArgs} args - Arguments to find a SyncOperation
       * @example
       * // Get one SyncOperation
       * const syncOperation = await prisma.syncOperation.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends SyncOperationFindFirstArgs>(
         args?: SelectSubset<T, SyncOperationFindFirstArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'findFirst',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first SyncOperation that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationFindFirstOrThrowArgs} args - Arguments to find a SyncOperation
       * @example
       * // Get one SyncOperation
       * const syncOperation = await prisma.syncOperation.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends SyncOperationFindFirstOrThrowArgs>(
         args?: SelectSubset<T, SyncOperationFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'findFirstOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more SyncOperations that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all SyncOperations
       * const syncOperations = await prisma.syncOperation.findMany()
       *
       * // Get first 10 SyncOperations
       * const syncOperations = await prisma.syncOperation.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const syncOperationWithIdOnly = await prisma.syncOperation.findMany({ select: { id: true } })
       *
       */
      findMany<T extends SyncOperationFindManyArgs>(
         args?: SelectSubset<T, SyncOperationFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$SyncOperationPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      >;

      /**
       * Create a SyncOperation.
       * @param {SyncOperationCreateArgs} args - Arguments to create a SyncOperation.
       * @example
       * // Create one SyncOperation
       * const SyncOperation = await prisma.syncOperation.create({
       *   data: {
       *     // ... data to create a SyncOperation
       *   }
       * })
       *
       */
      create<T extends SyncOperationCreateArgs>(
         args: SelectSubset<T, SyncOperationCreateArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<Prisma.$SyncOperationPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many SyncOperations.
       * @param {SyncOperationCreateManyArgs} args - Arguments to create many SyncOperations.
       * @example
       * // Create many SyncOperations
       * const syncOperation = await prisma.syncOperation.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends SyncOperationCreateManyArgs>(
         args?: SelectSubset<T, SyncOperationCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many SyncOperations and returns the data saved in the database.
       * @param {SyncOperationCreateManyAndReturnArgs} args - Arguments to create many SyncOperations.
       * @example
       * // Create many SyncOperations
       * const syncOperation = await prisma.syncOperation.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many SyncOperations and only return the `id`
       * const syncOperationWithIdOnly = await prisma.syncOperation.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends SyncOperationCreateManyAndReturnArgs>(
         args?: SelectSubset<T, SyncOperationCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a SyncOperation.
       * @param {SyncOperationDeleteArgs} args - Arguments to delete one SyncOperation.
       * @example
       * // Delete one SyncOperation
       * const SyncOperation = await prisma.syncOperation.delete({
       *   where: {
       *     // ... filter to delete one SyncOperation
       *   }
       * })
       *
       */
      delete<T extends SyncOperationDeleteArgs>(
         args: SelectSubset<T, SyncOperationDeleteArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<Prisma.$SyncOperationPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one SyncOperation.
       * @param {SyncOperationUpdateArgs} args - Arguments to update one SyncOperation.
       * @example
       * // Update one SyncOperation
       * const syncOperation = await prisma.syncOperation.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends SyncOperationUpdateArgs>(
         args: SelectSubset<T, SyncOperationUpdateArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<Prisma.$SyncOperationPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more SyncOperations.
       * @param {SyncOperationDeleteManyArgs} args - Arguments to filter SyncOperations to delete.
       * @example
       * // Delete a few SyncOperations
       * const { count } = await prisma.syncOperation.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends SyncOperationDeleteManyArgs>(
         args?: SelectSubset<T, SyncOperationDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more SyncOperations.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many SyncOperations
       * const syncOperation = await prisma.syncOperation.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends SyncOperationUpdateManyArgs>(
         args: SelectSubset<T, SyncOperationUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more SyncOperations and returns the data updated in the database.
       * @param {SyncOperationUpdateManyAndReturnArgs} args - Arguments to update many SyncOperations.
       * @example
       * // Update many SyncOperations
       * const syncOperation = await prisma.syncOperation.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more SyncOperations and only return the `id`
       * const syncOperationWithIdOnly = await prisma.syncOperation.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends SyncOperationUpdateManyAndReturnArgs>(
         args: SelectSubset<T, SyncOperationUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SyncOperationPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one SyncOperation.
       * @param {SyncOperationUpsertArgs} args - Arguments to update or create a SyncOperation.
       * @example
       * // Update or create a SyncOperation
       * const syncOperation = await prisma.syncOperation.upsert({
       *   create: {
       *     // ... data to create a SyncOperation
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the SyncOperation we want to update
       *   }
       * })
       */
      upsert<T extends SyncOperationUpsertArgs>(
         args: SelectSubset<T, SyncOperationUpsertArgs<ExtArgs>>
      ): Prisma__SyncOperationClient<
         $Result.GetResult<Prisma.$SyncOperationPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of SyncOperations.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationCountArgs} args - Arguments to filter SyncOperations to count.
       * @example
       * // Count the number of SyncOperations
       * const count = await prisma.syncOperation.count({
       *   where: {
       *     // ... the filter for the SyncOperations we want to count
       *   }
       * })
       **/
      count<T extends SyncOperationCountArgs>(
         args?: Subset<T, SyncOperationCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], SyncOperationCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a SyncOperation.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends SyncOperationAggregateArgs>(
         args: Subset<T, SyncOperationAggregateArgs>
      ): Prisma.PrismaPromise<GetSyncOperationAggregateType<T>>;

      /**
       * Group by SyncOperation.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncOperationGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends SyncOperationGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: SyncOperationGroupByArgs['orderBy'] }
            : { orderBy?: SyncOperationGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, SyncOperationGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors
         ? GetSyncOperationGroupByPayload<T>
         : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the SyncOperation model
       */
      readonly fields: SyncOperationFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for SyncOperation.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__SyncOperationClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the SyncOperation model
    */
   interface SyncOperationFieldRefs {
      readonly id: FieldRef<'SyncOperation', 'String'>;
      readonly type: FieldRef<'SyncOperation', 'String'>;
      readonly status: FieldRef<'SyncOperation', 'String'>;
      readonly source: FieldRef<'SyncOperation', 'String'>;
      readonly timestamp: FieldRef<'SyncOperation', 'DateTime'>;
      readonly completedAt: FieldRef<'SyncOperation', 'DateTime'>;
      readonly data: FieldRef<'SyncOperation', 'String'>;
      readonly rollbackData: FieldRef<'SyncOperation', 'String'>;
      readonly metadata: FieldRef<'SyncOperation', 'String'>;
      readonly retryCount: FieldRef<'SyncOperation', 'Int'>;
      readonly maxRetries: FieldRef<'SyncOperation', 'Int'>;
      readonly error: FieldRef<'SyncOperation', 'String'>;
      readonly taskIds: FieldRef<'SyncOperation', 'String'>;
   }

   // Custom InputTypes
   /**
    * SyncOperation findUnique
    */
   export type SyncOperationFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter, which SyncOperation to fetch.
       */
      where: SyncOperationWhereUniqueInput;
   };

   /**
    * SyncOperation findUniqueOrThrow
    */
   export type SyncOperationFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter, which SyncOperation to fetch.
       */
      where: SyncOperationWhereUniqueInput;
   };

   /**
    * SyncOperation findFirst
    */
   export type SyncOperationFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter, which SyncOperation to fetch.
       */
      where?: SyncOperationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncOperations to fetch.
       */
      orderBy?: SyncOperationOrderByWithRelationInput | SyncOperationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for SyncOperations.
       */
      cursor?: SyncOperationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncOperations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncOperations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of SyncOperations.
       */
      distinct?: SyncOperationScalarFieldEnum | SyncOperationScalarFieldEnum[];
   };

   /**
    * SyncOperation findFirstOrThrow
    */
   export type SyncOperationFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter, which SyncOperation to fetch.
       */
      where?: SyncOperationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncOperations to fetch.
       */
      orderBy?: SyncOperationOrderByWithRelationInput | SyncOperationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for SyncOperations.
       */
      cursor?: SyncOperationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncOperations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncOperations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of SyncOperations.
       */
      distinct?: SyncOperationScalarFieldEnum | SyncOperationScalarFieldEnum[];
   };

   /**
    * SyncOperation findMany
    */
   export type SyncOperationFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter, which SyncOperations to fetch.
       */
      where?: SyncOperationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncOperations to fetch.
       */
      orderBy?: SyncOperationOrderByWithRelationInput | SyncOperationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing SyncOperations.
       */
      cursor?: SyncOperationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncOperations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncOperations.
       */
      skip?: number;
      distinct?: SyncOperationScalarFieldEnum | SyncOperationScalarFieldEnum[];
   };

   /**
    * SyncOperation create
    */
   export type SyncOperationCreateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * The data needed to create a SyncOperation.
       */
      data: XOR<SyncOperationCreateInput, SyncOperationUncheckedCreateInput>;
   };

   /**
    * SyncOperation createMany
    */
   export type SyncOperationCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many SyncOperations.
       */
      data: SyncOperationCreateManyInput | SyncOperationCreateManyInput[];
   };

   /**
    * SyncOperation createManyAndReturn
    */
   export type SyncOperationCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * The data used to create many SyncOperations.
       */
      data: SyncOperationCreateManyInput | SyncOperationCreateManyInput[];
   };

   /**
    * SyncOperation update
    */
   export type SyncOperationUpdateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * The data needed to update a SyncOperation.
       */
      data: XOR<SyncOperationUpdateInput, SyncOperationUncheckedUpdateInput>;
      /**
       * Choose, which SyncOperation to update.
       */
      where: SyncOperationWhereUniqueInput;
   };

   /**
    * SyncOperation updateMany
    */
   export type SyncOperationUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update SyncOperations.
       */
      data: XOR<SyncOperationUpdateManyMutationInput, SyncOperationUncheckedUpdateManyInput>;
      /**
       * Filter which SyncOperations to update
       */
      where?: SyncOperationWhereInput;
      /**
       * Limit how many SyncOperations to update.
       */
      limit?: number;
   };

   /**
    * SyncOperation updateManyAndReturn
    */
   export type SyncOperationUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * The data used to update SyncOperations.
       */
      data: XOR<SyncOperationUpdateManyMutationInput, SyncOperationUncheckedUpdateManyInput>;
      /**
       * Filter which SyncOperations to update
       */
      where?: SyncOperationWhereInput;
      /**
       * Limit how many SyncOperations to update.
       */
      limit?: number;
   };

   /**
    * SyncOperation upsert
    */
   export type SyncOperationUpsertArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * The filter to search for the SyncOperation to update in case it exists.
       */
      where: SyncOperationWhereUniqueInput;
      /**
       * In case the SyncOperation found by the `where` argument doesn't exist, create a new SyncOperation with this data.
       */
      create: XOR<SyncOperationCreateInput, SyncOperationUncheckedCreateInput>;
      /**
       * In case the SyncOperation was found with the provided `where` argument, update it with this data.
       */
      update: XOR<SyncOperationUpdateInput, SyncOperationUncheckedUpdateInput>;
   };

   /**
    * SyncOperation delete
    */
   export type SyncOperationDeleteArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
      /**
       * Filter which SyncOperation to delete.
       */
      where: SyncOperationWhereUniqueInput;
   };

   /**
    * SyncOperation deleteMany
    */
   export type SyncOperationDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which SyncOperations to delete
       */
      where?: SyncOperationWhereInput;
      /**
       * Limit how many SyncOperations to delete.
       */
      limit?: number;
   };

   /**
    * SyncOperation without action
    */
   export type SyncOperationDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncOperation
       */
      select?: SyncOperationSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncOperation
       */
      omit?: SyncOperationOmit<ExtArgs> | null;
   };

   /**
    * Model SyncConflict
    */

   export type AggregateSyncConflict = {
      _count: SyncConflictCountAggregateOutputType | null;
      _min: SyncConflictMinAggregateOutputType | null;
      _max: SyncConflictMaxAggregateOutputType | null;
   };

   export type SyncConflictMinAggregateOutputType = {
      id: string | null;
      operationType: string | null;
      taskId: string | null;
      uiVersion: string | null;
      cliVersion: string | null;
      resolved: boolean | null;
      resolution: string | null;
      resolvedAt: Date | null;
      resolvedBy: string | null;
      timestamp: Date | null;
   };

   export type SyncConflictMaxAggregateOutputType = {
      id: string | null;
      operationType: string | null;
      taskId: string | null;
      uiVersion: string | null;
      cliVersion: string | null;
      resolved: boolean | null;
      resolution: string | null;
      resolvedAt: Date | null;
      resolvedBy: string | null;
      timestamp: Date | null;
   };

   export type SyncConflictCountAggregateOutputType = {
      id: number;
      operationType: number;
      taskId: number;
      uiVersion: number;
      cliVersion: number;
      resolved: number;
      resolution: number;
      resolvedAt: number;
      resolvedBy: number;
      timestamp: number;
      _all: number;
   };

   export type SyncConflictMinAggregateInputType = {
      id?: true;
      operationType?: true;
      taskId?: true;
      uiVersion?: true;
      cliVersion?: true;
      resolved?: true;
      resolution?: true;
      resolvedAt?: true;
      resolvedBy?: true;
      timestamp?: true;
   };

   export type SyncConflictMaxAggregateInputType = {
      id?: true;
      operationType?: true;
      taskId?: true;
      uiVersion?: true;
      cliVersion?: true;
      resolved?: true;
      resolution?: true;
      resolvedAt?: true;
      resolvedBy?: true;
      timestamp?: true;
   };

   export type SyncConflictCountAggregateInputType = {
      id?: true;
      operationType?: true;
      taskId?: true;
      uiVersion?: true;
      cliVersion?: true;
      resolved?: true;
      resolution?: true;
      resolvedAt?: true;
      resolvedBy?: true;
      timestamp?: true;
      _all?: true;
   };

   export type SyncConflictAggregateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which SyncConflict to aggregate.
       */
      where?: SyncConflictWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncConflicts to fetch.
       */
      orderBy?: SyncConflictOrderByWithRelationInput | SyncConflictOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: SyncConflictWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncConflicts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncConflicts.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned SyncConflicts
       **/
      _count?: true | SyncConflictCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: SyncConflictMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: SyncConflictMaxAggregateInputType;
   };

   export type GetSyncConflictAggregateType<T extends SyncConflictAggregateArgs> = {
      [P in keyof T & keyof AggregateSyncConflict]: P extends '_count' | 'count'
         ? T[P] extends true
            ? number
            : GetScalarType<T[P], AggregateSyncConflict[P]>
         : GetScalarType<T[P], AggregateSyncConflict[P]>;
   };

   export type SyncConflictGroupByArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      where?: SyncConflictWhereInput;
      orderBy?: SyncConflictOrderByWithAggregationInput | SyncConflictOrderByWithAggregationInput[];
      by: SyncConflictScalarFieldEnum[] | SyncConflictScalarFieldEnum;
      having?: SyncConflictScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: SyncConflictCountAggregateInputType | true;
      _min?: SyncConflictMinAggregateInputType;
      _max?: SyncConflictMaxAggregateInputType;
   };

   export type SyncConflictGroupByOutputType = {
      id: string;
      operationType: string;
      taskId: string;
      uiVersion: string;
      cliVersion: string;
      resolved: boolean;
      resolution: string | null;
      resolvedAt: Date | null;
      resolvedBy: string | null;
      timestamp: Date;
      _count: SyncConflictCountAggregateOutputType | null;
      _min: SyncConflictMinAggregateOutputType | null;
      _max: SyncConflictMaxAggregateOutputType | null;
   };

   type GetSyncConflictGroupByPayload<T extends SyncConflictGroupByArgs> = Prisma.PrismaPromise<
      Array<
         PickEnumerable<SyncConflictGroupByOutputType, T['by']> & {
            [P in keyof T & keyof SyncConflictGroupByOutputType]: P extends '_count'
               ? T[P] extends boolean
                  ? number
                  : GetScalarType<T[P], SyncConflictGroupByOutputType[P]>
               : GetScalarType<T[P], SyncConflictGroupByOutputType[P]>;
         }
      >
   >;

   export type SyncConflictSelect<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         operationType?: boolean;
         taskId?: boolean;
         uiVersion?: boolean;
         cliVersion?: boolean;
         resolved?: boolean;
         resolution?: boolean;
         resolvedAt?: boolean;
         resolvedBy?: boolean;
         timestamp?: boolean;
      },
      ExtArgs['result']['syncConflict']
   >;

   export type SyncConflictSelectCreateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         operationType?: boolean;
         taskId?: boolean;
         uiVersion?: boolean;
         cliVersion?: boolean;
         resolved?: boolean;
         resolution?: boolean;
         resolvedAt?: boolean;
         resolvedBy?: boolean;
         timestamp?: boolean;
      },
      ExtArgs['result']['syncConflict']
   >;

   export type SyncConflictSelectUpdateManyAndReturn<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetSelect<
      {
         id?: boolean;
         operationType?: boolean;
         taskId?: boolean;
         uiVersion?: boolean;
         cliVersion?: boolean;
         resolved?: boolean;
         resolution?: boolean;
         resolvedAt?: boolean;
         resolvedBy?: boolean;
         timestamp?: boolean;
      },
      ExtArgs['result']['syncConflict']
   >;

   export type SyncConflictSelectScalar = {
      id?: boolean;
      operationType?: boolean;
      taskId?: boolean;
      uiVersion?: boolean;
      cliVersion?: boolean;
      resolved?: boolean;
      resolution?: boolean;
      resolvedAt?: boolean;
      resolvedBy?: boolean;
      timestamp?: boolean;
   };

   export type SyncConflictOmit<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = $Extensions.GetOmit<
      | 'id'
      | 'operationType'
      | 'taskId'
      | 'uiVersion'
      | 'cliVersion'
      | 'resolved'
      | 'resolution'
      | 'resolvedAt'
      | 'resolvedBy'
      | 'timestamp',
      ExtArgs['result']['syncConflict']
   >;

   export type $SyncConflictPayload<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      name: 'SyncConflict';
      objects: {};
      scalars: $Extensions.GetPayloadResult<
         {
            id: string;
            operationType: string;
            taskId: string;
            uiVersion: string;
            cliVersion: string;
            resolved: boolean;
            resolution: string | null;
            resolvedAt: Date | null;
            resolvedBy: string | null;
            timestamp: Date;
         },
         ExtArgs['result']['syncConflict']
      >;
      composites: {};
   };

   type SyncConflictGetPayload<S extends boolean | null | undefined | SyncConflictDefaultArgs> =
      $Result.GetResult<Prisma.$SyncConflictPayload, S>;

   type SyncConflictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
      Omit<SyncConflictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
         select?: SyncConflictCountAggregateInputType | true;
      };

   export interface SyncConflictDelegate<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > {
      [K: symbol]: {
         types: Prisma.TypeMap<ExtArgs>['model']['SyncConflict'];
         meta: { name: 'SyncConflict' };
      };
      /**
       * Find zero or one SyncConflict that matches the filter.
       * @param {SyncConflictFindUniqueArgs} args - Arguments to find a SyncConflict
       * @example
       * // Get one SyncConflict
       * const syncConflict = await prisma.syncConflict.findUnique({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUnique<T extends SyncConflictFindUniqueArgs>(
         args: SelectSubset<T, SyncConflictFindUniqueArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'findUnique',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find one SyncConflict that matches the filter or throw an error with `error.code='P2025'`
       * if no matches were found.
       * @param {SyncConflictFindUniqueOrThrowArgs} args - Arguments to find a SyncConflict
       * @example
       * // Get one SyncConflict
       * const syncConflict = await prisma.syncConflict.findUniqueOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findUniqueOrThrow<T extends SyncConflictFindUniqueOrThrowArgs>(
         args: SelectSubset<T, SyncConflictFindUniqueOrThrowArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'findUniqueOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first SyncConflict that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictFindFirstArgs} args - Arguments to find a SyncConflict
       * @example
       * // Get one SyncConflict
       * const syncConflict = await prisma.syncConflict.findFirst({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirst<T extends SyncConflictFindFirstArgs>(
         args?: SelectSubset<T, SyncConflictFindFirstArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'findFirst',
            GlobalOmitOptions
         > | null,
         null,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find the first SyncConflict that matches the filter or
       * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictFindFirstOrThrowArgs} args - Arguments to find a SyncConflict
       * @example
       * // Get one SyncConflict
       * const syncConflict = await prisma.syncConflict.findFirstOrThrow({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       */
      findFirstOrThrow<T extends SyncConflictFindFirstOrThrowArgs>(
         args?: SelectSubset<T, SyncConflictFindFirstOrThrowArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'findFirstOrThrow',
            GlobalOmitOptions
         >,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Find zero or more SyncConflicts that matches the filter.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictFindManyArgs} args - Arguments to filter and select certain fields only.
       * @example
       * // Get all SyncConflicts
       * const syncConflicts = await prisma.syncConflict.findMany()
       *
       * // Get first 10 SyncConflicts
       * const syncConflicts = await prisma.syncConflict.findMany({ take: 10 })
       *
       * // Only select the `id`
       * const syncConflictWithIdOnly = await prisma.syncConflict.findMany({ select: { id: true } })
       *
       */
      findMany<T extends SyncConflictFindManyArgs>(
         args?: SelectSubset<T, SyncConflictFindManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<Prisma.$SyncConflictPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      >;

      /**
       * Create a SyncConflict.
       * @param {SyncConflictCreateArgs} args - Arguments to create a SyncConflict.
       * @example
       * // Create one SyncConflict
       * const SyncConflict = await prisma.syncConflict.create({
       *   data: {
       *     // ... data to create a SyncConflict
       *   }
       * })
       *
       */
      create<T extends SyncConflictCreateArgs>(
         args: SelectSubset<T, SyncConflictCreateArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<Prisma.$SyncConflictPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Create many SyncConflicts.
       * @param {SyncConflictCreateManyArgs} args - Arguments to create many SyncConflicts.
       * @example
       * // Create many SyncConflicts
       * const syncConflict = await prisma.syncConflict.createMany({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       */
      createMany<T extends SyncConflictCreateManyArgs>(
         args?: SelectSubset<T, SyncConflictCreateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Create many SyncConflicts and returns the data saved in the database.
       * @param {SyncConflictCreateManyAndReturnArgs} args - Arguments to create many SyncConflicts.
       * @example
       * // Create many SyncConflicts
       * const syncConflict = await prisma.syncConflict.createManyAndReturn({
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Create many SyncConflicts and only return the `id`
       * const syncConflictWithIdOnly = await prisma.syncConflict.createManyAndReturn({
       *   select: { id: true },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      createManyAndReturn<T extends SyncConflictCreateManyAndReturnArgs>(
         args?: SelectSubset<T, SyncConflictCreateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'createManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Delete a SyncConflict.
       * @param {SyncConflictDeleteArgs} args - Arguments to delete one SyncConflict.
       * @example
       * // Delete one SyncConflict
       * const SyncConflict = await prisma.syncConflict.delete({
       *   where: {
       *     // ... filter to delete one SyncConflict
       *   }
       * })
       *
       */
      delete<T extends SyncConflictDeleteArgs>(
         args: SelectSubset<T, SyncConflictDeleteArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<Prisma.$SyncConflictPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Update one SyncConflict.
       * @param {SyncConflictUpdateArgs} args - Arguments to update one SyncConflict.
       * @example
       * // Update one SyncConflict
       * const syncConflict = await prisma.syncConflict.update({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      update<T extends SyncConflictUpdateArgs>(
         args: SelectSubset<T, SyncConflictUpdateArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<Prisma.$SyncConflictPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Delete zero or more SyncConflicts.
       * @param {SyncConflictDeleteManyArgs} args - Arguments to filter SyncConflicts to delete.
       * @example
       * // Delete a few SyncConflicts
       * const { count } = await prisma.syncConflict.deleteMany({
       *   where: {
       *     // ... provide filter here
       *   }
       * })
       *
       */
      deleteMany<T extends SyncConflictDeleteManyArgs>(
         args?: SelectSubset<T, SyncConflictDeleteManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more SyncConflicts.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictUpdateManyArgs} args - Arguments to update one or more rows.
       * @example
       * // Update many SyncConflicts
       * const syncConflict = await prisma.syncConflict.updateMany({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: {
       *     // ... provide data here
       *   }
       * })
       *
       */
      updateMany<T extends SyncConflictUpdateManyArgs>(
         args: SelectSubset<T, SyncConflictUpdateManyArgs<ExtArgs>>
      ): Prisma.PrismaPromise<BatchPayload>;

      /**
       * Update zero or more SyncConflicts and returns the data updated in the database.
       * @param {SyncConflictUpdateManyAndReturnArgs} args - Arguments to update many SyncConflicts.
       * @example
       * // Update many SyncConflicts
       * const syncConflict = await prisma.syncConflict.updateManyAndReturn({
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       *
       * // Update zero or more SyncConflicts and only return the `id`
       * const syncConflictWithIdOnly = await prisma.syncConflict.updateManyAndReturn({
       *   select: { id: true },
       *   where: {
       *     // ... provide filter here
       *   },
       *   data: [
       *     // ... provide data here
       *   ]
       * })
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       *
       */
      updateManyAndReturn<T extends SyncConflictUpdateManyAndReturnArgs>(
         args: SelectSubset<T, SyncConflictUpdateManyAndReturnArgs<ExtArgs>>
      ): Prisma.PrismaPromise<
         $Result.GetResult<
            Prisma.$SyncConflictPayload<ExtArgs>,
            T,
            'updateManyAndReturn',
            GlobalOmitOptions
         >
      >;

      /**
       * Create or update one SyncConflict.
       * @param {SyncConflictUpsertArgs} args - Arguments to update or create a SyncConflict.
       * @example
       * // Update or create a SyncConflict
       * const syncConflict = await prisma.syncConflict.upsert({
       *   create: {
       *     // ... data to create a SyncConflict
       *   },
       *   update: {
       *     // ... in case it already exists, update
       *   },
       *   where: {
       *     // ... the filter for the SyncConflict we want to update
       *   }
       * })
       */
      upsert<T extends SyncConflictUpsertArgs>(
         args: SelectSubset<T, SyncConflictUpsertArgs<ExtArgs>>
      ): Prisma__SyncConflictClient<
         $Result.GetResult<Prisma.$SyncConflictPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
         never,
         ExtArgs,
         GlobalOmitOptions
      >;

      /**
       * Count the number of SyncConflicts.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictCountArgs} args - Arguments to filter SyncConflicts to count.
       * @example
       * // Count the number of SyncConflicts
       * const count = await prisma.syncConflict.count({
       *   where: {
       *     // ... the filter for the SyncConflicts we want to count
       *   }
       * })
       **/
      count<T extends SyncConflictCountArgs>(
         args?: Subset<T, SyncConflictCountArgs>
      ): Prisma.PrismaPromise<
         T extends $Utils.Record<'select', any>
            ? T['select'] extends true
               ? number
               : GetScalarType<T['select'], SyncConflictCountAggregateOutputType>
            : number
      >;

      /**
       * Allows you to perform aggregations operations on a SyncConflict.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
       * @example
       * // Ordered by age ascending
       * // Where email contains prisma.io
       * // Limited to the 10 users
       * const aggregations = await prisma.user.aggregate({
       *   _avg: {
       *     age: true,
       *   },
       *   where: {
       *     email: {
       *       contains: "prisma.io",
       *     },
       *   },
       *   orderBy: {
       *     age: "asc",
       *   },
       *   take: 10,
       * })
       **/
      aggregate<T extends SyncConflictAggregateArgs>(
         args: Subset<T, SyncConflictAggregateArgs>
      ): Prisma.PrismaPromise<GetSyncConflictAggregateType<T>>;

      /**
       * Group by SyncConflict.
       * Note, that providing `undefined` is treated as the value not being there.
       * Read more here: https://pris.ly/d/null-undefined
       * @param {SyncConflictGroupByArgs} args - Group by arguments.
       * @example
       * // Group by city, order by createdAt, get count
       * const result = await prisma.user.groupBy({
       *   by: ['city', 'createdAt'],
       *   orderBy: {
       *     createdAt: true
       *   },
       *   _count: {
       *     _all: true
       *   },
       * })
       *
       **/
      groupBy<
         T extends SyncConflictGroupByArgs,
         HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
         OrderByArg extends True extends HasSelectOrTake
            ? { orderBy: SyncConflictGroupByArgs['orderBy'] }
            : { orderBy?: SyncConflictGroupByArgs['orderBy'] },
         OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
         ByFields extends MaybeTupleToUnion<T['by']>,
         ByValid extends Has<ByFields, OrderFields>,
         HavingFields extends GetHavingFields<T['having']>,
         HavingValid extends Has<ByFields, HavingFields>,
         ByEmpty extends T['by'] extends never[] ? True : False,
         InputErrors extends ByEmpty extends True
            ? `Error: "by" must not be empty.`
            : HavingValid extends False
              ? {
                   [P in HavingFields]: P extends ByFields
                      ? never
                      : P extends string
                        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
                }[HavingFields]
              : 'take' extends Keys<T>
                ? 'orderBy' extends Keys<T>
                   ? ByValid extends True
                      ? {}
                      : {
                           [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                   : 'Error: If you provide "take", you also need to provide "orderBy"'
                : 'skip' extends Keys<T>
                  ? 'orderBy' extends Keys<T>
                     ? ByValid extends True
                        ? {}
                        : {
                             [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                          }[OrderFields]
                     : 'Error: If you provide "skip", you also need to provide "orderBy"'
                  : ByValid extends True
                    ? {}
                    : {
                         [P in OrderFields]: P extends ByFields
                            ? never
                            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields],
      >(
         args: SubsetIntersection<T, SyncConflictGroupByArgs, OrderByArg> & InputErrors
      ): {} extends InputErrors
         ? GetSyncConflictGroupByPayload<T>
         : Prisma.PrismaPromise<InputErrors>;
      /**
       * Fields of the SyncConflict model
       */
      readonly fields: SyncConflictFieldRefs;
   }

   /**
    * The delegate class that acts as a "Promise-like" for SyncConflict.
    * Why is this prefixed with `Prisma__`?
    * Because we want to prevent naming conflicts as mentioned in
    * https://github.com/prisma/prisma-client-js/issues/707
    */
   export interface Prisma__SyncConflictClient<
      T,
      Null = never,
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
      GlobalOmitOptions = {},
   > extends Prisma.PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(
         onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
         onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
      ): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(
         onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
      ): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
   }

   /**
    * Fields of the SyncConflict model
    */
   interface SyncConflictFieldRefs {
      readonly id: FieldRef<'SyncConflict', 'String'>;
      readonly operationType: FieldRef<'SyncConflict', 'String'>;
      readonly taskId: FieldRef<'SyncConflict', 'String'>;
      readonly uiVersion: FieldRef<'SyncConflict', 'String'>;
      readonly cliVersion: FieldRef<'SyncConflict', 'String'>;
      readonly resolved: FieldRef<'SyncConflict', 'Boolean'>;
      readonly resolution: FieldRef<'SyncConflict', 'String'>;
      readonly resolvedAt: FieldRef<'SyncConflict', 'DateTime'>;
      readonly resolvedBy: FieldRef<'SyncConflict', 'String'>;
      readonly timestamp: FieldRef<'SyncConflict', 'DateTime'>;
   }

   // Custom InputTypes
   /**
    * SyncConflict findUnique
    */
   export type SyncConflictFindUniqueArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter, which SyncConflict to fetch.
       */
      where: SyncConflictWhereUniqueInput;
   };

   /**
    * SyncConflict findUniqueOrThrow
    */
   export type SyncConflictFindUniqueOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter, which SyncConflict to fetch.
       */
      where: SyncConflictWhereUniqueInput;
   };

   /**
    * SyncConflict findFirst
    */
   export type SyncConflictFindFirstArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter, which SyncConflict to fetch.
       */
      where?: SyncConflictWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncConflicts to fetch.
       */
      orderBy?: SyncConflictOrderByWithRelationInput | SyncConflictOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for SyncConflicts.
       */
      cursor?: SyncConflictWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncConflicts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncConflicts.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of SyncConflicts.
       */
      distinct?: SyncConflictScalarFieldEnum | SyncConflictScalarFieldEnum[];
   };

   /**
    * SyncConflict findFirstOrThrow
    */
   export type SyncConflictFindFirstOrThrowArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter, which SyncConflict to fetch.
       */
      where?: SyncConflictWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncConflicts to fetch.
       */
      orderBy?: SyncConflictOrderByWithRelationInput | SyncConflictOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for SyncConflicts.
       */
      cursor?: SyncConflictWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncConflicts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncConflicts.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of SyncConflicts.
       */
      distinct?: SyncConflictScalarFieldEnum | SyncConflictScalarFieldEnum[];
   };

   /**
    * SyncConflict findMany
    */
   export type SyncConflictFindManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter, which SyncConflicts to fetch.
       */
      where?: SyncConflictWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of SyncConflicts to fetch.
       */
      orderBy?: SyncConflictOrderByWithRelationInput | SyncConflictOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing SyncConflicts.
       */
      cursor?: SyncConflictWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` SyncConflicts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` SyncConflicts.
       */
      skip?: number;
      distinct?: SyncConflictScalarFieldEnum | SyncConflictScalarFieldEnum[];
   };

   /**
    * SyncConflict create
    */
   export type SyncConflictCreateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * The data needed to create a SyncConflict.
       */
      data: XOR<SyncConflictCreateInput, SyncConflictUncheckedCreateInput>;
   };

   /**
    * SyncConflict createMany
    */
   export type SyncConflictCreateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to create many SyncConflicts.
       */
      data: SyncConflictCreateManyInput | SyncConflictCreateManyInput[];
   };

   /**
    * SyncConflict createManyAndReturn
    */
   export type SyncConflictCreateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelectCreateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * The data used to create many SyncConflicts.
       */
      data: SyncConflictCreateManyInput | SyncConflictCreateManyInput[];
   };

   /**
    * SyncConflict update
    */
   export type SyncConflictUpdateArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * The data needed to update a SyncConflict.
       */
      data: XOR<SyncConflictUpdateInput, SyncConflictUncheckedUpdateInput>;
      /**
       * Choose, which SyncConflict to update.
       */
      where: SyncConflictWhereUniqueInput;
   };

   /**
    * SyncConflict updateMany
    */
   export type SyncConflictUpdateManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * The data used to update SyncConflicts.
       */
      data: XOR<SyncConflictUpdateManyMutationInput, SyncConflictUncheckedUpdateManyInput>;
      /**
       * Filter which SyncConflicts to update
       */
      where?: SyncConflictWhereInput;
      /**
       * Limit how many SyncConflicts to update.
       */
      limit?: number;
   };

   /**
    * SyncConflict updateManyAndReturn
    */
   export type SyncConflictUpdateManyAndReturnArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelectUpdateManyAndReturn<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * The data used to update SyncConflicts.
       */
      data: XOR<SyncConflictUpdateManyMutationInput, SyncConflictUncheckedUpdateManyInput>;
      /**
       * Filter which SyncConflicts to update
       */
      where?: SyncConflictWhereInput;
      /**
       * Limit how many SyncConflicts to update.
       */
      limit?: number;
   };

   /**
    * SyncConflict upsert
    */
   export type SyncConflictUpsertArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * The filter to search for the SyncConflict to update in case it exists.
       */
      where: SyncConflictWhereUniqueInput;
      /**
       * In case the SyncConflict found by the `where` argument doesn't exist, create a new SyncConflict with this data.
       */
      create: XOR<SyncConflictCreateInput, SyncConflictUncheckedCreateInput>;
      /**
       * In case the SyncConflict was found with the provided `where` argument, update it with this data.
       */
      update: XOR<SyncConflictUpdateInput, SyncConflictUncheckedUpdateInput>;
   };

   /**
    * SyncConflict delete
    */
   export type SyncConflictDeleteArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
      /**
       * Filter which SyncConflict to delete.
       */
      where: SyncConflictWhereUniqueInput;
   };

   /**
    * SyncConflict deleteMany
    */
   export type SyncConflictDeleteManyArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Filter which SyncConflicts to delete
       */
      where?: SyncConflictWhereInput;
      /**
       * Limit how many SyncConflicts to delete.
       */
      limit?: number;
   };

   /**
    * SyncConflict without action
    */
   export type SyncConflictDefaultArgs<
      ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
   > = {
      /**
       * Select specific fields to fetch from the SyncConflict
       */
      select?: SyncConflictSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the SyncConflict
       */
      omit?: SyncConflictOmit<ExtArgs> | null;
   };

   /**
    * Enums
    */

   export const TransactionIsolationLevel: {
      Serializable: 'Serializable';
   };

   export type TransactionIsolationLevel =
      (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

   export const TaskScalarFieldEnum: {
      id: 'id';
      title: 'title';
      description: 'description';
      details: 'details';
      testStrategy: 'testStrategy';
      priority: 'priority';
      status: 'status';
      complexity: 'complexity';
      createdAt: 'createdAt';
      updatedAt: 'updatedAt';
   };

   export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

   export const SubtaskScalarFieldEnum: {
      id: 'id';
      title: 'title';
      description: 'description';
      details: 'details';
      testStrategy: 'testStrategy';
      status: 'status';
      parentId: 'parentId';
      dependencies: 'dependencies';
      createdAt: 'createdAt';
      updatedAt: 'updatedAt';
   };

   export type SubtaskScalarFieldEnum =
      (typeof SubtaskScalarFieldEnum)[keyof typeof SubtaskScalarFieldEnum];

   export const TaskDependencyScalarFieldEnum: {
      id: 'id';
      taskId: 'taskId';
      dependsOnId: 'dependsOnId';
      createdAt: 'createdAt';
   };

   export type TaskDependencyScalarFieldEnum =
      (typeof TaskDependencyScalarFieldEnum)[keyof typeof TaskDependencyScalarFieldEnum];

   export const TaskMasterMetadataScalarFieldEnum: {
      id: 'id';
      created: 'created';
      updated: 'updated';
      description: 'description';
   };

   export type TaskMasterMetadataScalarFieldEnum =
      (typeof TaskMasterMetadataScalarFieldEnum)[keyof typeof TaskMasterMetadataScalarFieldEnum];

   export const SyncOperationScalarFieldEnum: {
      id: 'id';
      type: 'type';
      status: 'status';
      source: 'source';
      timestamp: 'timestamp';
      completedAt: 'completedAt';
      data: 'data';
      rollbackData: 'rollbackData';
      metadata: 'metadata';
      retryCount: 'retryCount';
      maxRetries: 'maxRetries';
      error: 'error';
      taskIds: 'taskIds';
   };

   export type SyncOperationScalarFieldEnum =
      (typeof SyncOperationScalarFieldEnum)[keyof typeof SyncOperationScalarFieldEnum];

   export const SyncConflictScalarFieldEnum: {
      id: 'id';
      operationType: 'operationType';
      taskId: 'taskId';
      uiVersion: 'uiVersion';
      cliVersion: 'cliVersion';
      resolved: 'resolved';
      resolution: 'resolution';
      resolvedAt: 'resolvedAt';
      resolvedBy: 'resolvedBy';
      timestamp: 'timestamp';
   };

   export type SyncConflictScalarFieldEnum =
      (typeof SyncConflictScalarFieldEnum)[keyof typeof SyncConflictScalarFieldEnum];

   export const SortOrder: {
      asc: 'asc';
      desc: 'desc';
   };

   export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

   export const NullsOrder: {
      first: 'first';
      last: 'last';
   };

   export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

   /**
    * Field references
    */

   /**
    * Reference to a field of type 'Int'
    */
   export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

   /**
    * Reference to a field of type 'String'
    */
   export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

   /**
    * Reference to a field of type 'DateTime'
    */
   export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

   /**
    * Reference to a field of type 'Boolean'
    */
   export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

   /**
    * Reference to a field of type 'Float'
    */
   export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

   /**
    * Deep Input Types
    */

   export type TaskWhereInput = {
      AND?: TaskWhereInput | TaskWhereInput[];
      OR?: TaskWhereInput[];
      NOT?: TaskWhereInput | TaskWhereInput[];
      id?: IntFilter<'Task'> | number;
      title?: StringFilter<'Task'> | string;
      description?: StringFilter<'Task'> | string;
      details?: StringNullableFilter<'Task'> | string | null;
      testStrategy?: StringNullableFilter<'Task'> | string | null;
      priority?: StringFilter<'Task'> | string;
      status?: StringFilter<'Task'> | string;
      complexity?: IntNullableFilter<'Task'> | number | null;
      createdAt?: DateTimeFilter<'Task'> | Date | string;
      updatedAt?: DateTimeFilter<'Task'> | Date | string;
      subtasks?: SubtaskListRelationFilter;
      dependencies?: TaskDependencyListRelationFilter;
      dependents?: TaskDependencyListRelationFilter;
   };

   export type TaskOrderByWithRelationInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrderInput | SortOrder;
      testStrategy?: SortOrderInput | SortOrder;
      priority?: SortOrder;
      status?: SortOrder;
      complexity?: SortOrderInput | SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
      subtasks?: SubtaskOrderByRelationAggregateInput;
      dependencies?: TaskDependencyOrderByRelationAggregateInput;
      dependents?: TaskDependencyOrderByRelationAggregateInput;
   };

   export type TaskWhereUniqueInput = Prisma.AtLeast<
      {
         id?: number;
         AND?: TaskWhereInput | TaskWhereInput[];
         OR?: TaskWhereInput[];
         NOT?: TaskWhereInput | TaskWhereInput[];
         title?: StringFilter<'Task'> | string;
         description?: StringFilter<'Task'> | string;
         details?: StringNullableFilter<'Task'> | string | null;
         testStrategy?: StringNullableFilter<'Task'> | string | null;
         priority?: StringFilter<'Task'> | string;
         status?: StringFilter<'Task'> | string;
         complexity?: IntNullableFilter<'Task'> | number | null;
         createdAt?: DateTimeFilter<'Task'> | Date | string;
         updatedAt?: DateTimeFilter<'Task'> | Date | string;
         subtasks?: SubtaskListRelationFilter;
         dependencies?: TaskDependencyListRelationFilter;
         dependents?: TaskDependencyListRelationFilter;
      },
      'id'
   >;

   export type TaskOrderByWithAggregationInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrderInput | SortOrder;
      testStrategy?: SortOrderInput | SortOrder;
      priority?: SortOrder;
      status?: SortOrder;
      complexity?: SortOrderInput | SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
      _count?: TaskCountOrderByAggregateInput;
      _avg?: TaskAvgOrderByAggregateInput;
      _max?: TaskMaxOrderByAggregateInput;
      _min?: TaskMinOrderByAggregateInput;
      _sum?: TaskSumOrderByAggregateInput;
   };

   export type TaskScalarWhereWithAggregatesInput = {
      AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[];
      OR?: TaskScalarWhereWithAggregatesInput[];
      NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[];
      id?: IntWithAggregatesFilter<'Task'> | number;
      title?: StringWithAggregatesFilter<'Task'> | string;
      description?: StringWithAggregatesFilter<'Task'> | string;
      details?: StringNullableWithAggregatesFilter<'Task'> | string | null;
      testStrategy?: StringNullableWithAggregatesFilter<'Task'> | string | null;
      priority?: StringWithAggregatesFilter<'Task'> | string;
      status?: StringWithAggregatesFilter<'Task'> | string;
      complexity?: IntNullableWithAggregatesFilter<'Task'> | number | null;
      createdAt?: DateTimeWithAggregatesFilter<'Task'> | Date | string;
      updatedAt?: DateTimeWithAggregatesFilter<'Task'> | Date | string;
   };

   export type SubtaskWhereInput = {
      AND?: SubtaskWhereInput | SubtaskWhereInput[];
      OR?: SubtaskWhereInput[];
      NOT?: SubtaskWhereInput | SubtaskWhereInput[];
      id?: StringFilter<'Subtask'> | string;
      title?: StringFilter<'Subtask'> | string;
      description?: StringFilter<'Subtask'> | string;
      details?: StringNullableFilter<'Subtask'> | string | null;
      testStrategy?: StringNullableFilter<'Subtask'> | string | null;
      status?: StringFilter<'Subtask'> | string;
      parentId?: IntFilter<'Subtask'> | number;
      dependencies?: StringFilter<'Subtask'> | string;
      createdAt?: DateTimeFilter<'Subtask'> | Date | string;
      updatedAt?: DateTimeFilter<'Subtask'> | Date | string;
      parentTask?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
   };

   export type SubtaskOrderByWithRelationInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrderInput | SortOrder;
      testStrategy?: SortOrderInput | SortOrder;
      status?: SortOrder;
      parentId?: SortOrder;
      dependencies?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
      parentTask?: TaskOrderByWithRelationInput;
   };

   export type SubtaskWhereUniqueInput = Prisma.AtLeast<
      {
         id?: string;
         AND?: SubtaskWhereInput | SubtaskWhereInput[];
         OR?: SubtaskWhereInput[];
         NOT?: SubtaskWhereInput | SubtaskWhereInput[];
         title?: StringFilter<'Subtask'> | string;
         description?: StringFilter<'Subtask'> | string;
         details?: StringNullableFilter<'Subtask'> | string | null;
         testStrategy?: StringNullableFilter<'Subtask'> | string | null;
         status?: StringFilter<'Subtask'> | string;
         parentId?: IntFilter<'Subtask'> | number;
         dependencies?: StringFilter<'Subtask'> | string;
         createdAt?: DateTimeFilter<'Subtask'> | Date | string;
         updatedAt?: DateTimeFilter<'Subtask'> | Date | string;
         parentTask?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
      },
      'id'
   >;

   export type SubtaskOrderByWithAggregationInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrderInput | SortOrder;
      testStrategy?: SortOrderInput | SortOrder;
      status?: SortOrder;
      parentId?: SortOrder;
      dependencies?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
      _count?: SubtaskCountOrderByAggregateInput;
      _avg?: SubtaskAvgOrderByAggregateInput;
      _max?: SubtaskMaxOrderByAggregateInput;
      _min?: SubtaskMinOrderByAggregateInput;
      _sum?: SubtaskSumOrderByAggregateInput;
   };

   export type SubtaskScalarWhereWithAggregatesInput = {
      AND?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[];
      OR?: SubtaskScalarWhereWithAggregatesInput[];
      NOT?: SubtaskScalarWhereWithAggregatesInput | SubtaskScalarWhereWithAggregatesInput[];
      id?: StringWithAggregatesFilter<'Subtask'> | string;
      title?: StringWithAggregatesFilter<'Subtask'> | string;
      description?: StringWithAggregatesFilter<'Subtask'> | string;
      details?: StringNullableWithAggregatesFilter<'Subtask'> | string | null;
      testStrategy?: StringNullableWithAggregatesFilter<'Subtask'> | string | null;
      status?: StringWithAggregatesFilter<'Subtask'> | string;
      parentId?: IntWithAggregatesFilter<'Subtask'> | number;
      dependencies?: StringWithAggregatesFilter<'Subtask'> | string;
      createdAt?: DateTimeWithAggregatesFilter<'Subtask'> | Date | string;
      updatedAt?: DateTimeWithAggregatesFilter<'Subtask'> | Date | string;
   };

   export type TaskDependencyWhereInput = {
      AND?: TaskDependencyWhereInput | TaskDependencyWhereInput[];
      OR?: TaskDependencyWhereInput[];
      NOT?: TaskDependencyWhereInput | TaskDependencyWhereInput[];
      id?: IntFilter<'TaskDependency'> | number;
      taskId?: IntFilter<'TaskDependency'> | number;
      dependsOnId?: IntFilter<'TaskDependency'> | number;
      createdAt?: DateTimeFilter<'TaskDependency'> | Date | string;
      task?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
      dependsOn?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
   };

   export type TaskDependencyOrderByWithRelationInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
      createdAt?: SortOrder;
      task?: TaskOrderByWithRelationInput;
      dependsOn?: TaskOrderByWithRelationInput;
   };

   export type TaskDependencyWhereUniqueInput = Prisma.AtLeast<
      {
         id?: number;
         taskId_dependsOnId?: TaskDependencyTaskIdDependsOnIdCompoundUniqueInput;
         AND?: TaskDependencyWhereInput | TaskDependencyWhereInput[];
         OR?: TaskDependencyWhereInput[];
         NOT?: TaskDependencyWhereInput | TaskDependencyWhereInput[];
         taskId?: IntFilter<'TaskDependency'> | number;
         dependsOnId?: IntFilter<'TaskDependency'> | number;
         createdAt?: DateTimeFilter<'TaskDependency'> | Date | string;
         task?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
         dependsOn?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
      },
      'id' | 'taskId_dependsOnId'
   >;

   export type TaskDependencyOrderByWithAggregationInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
      createdAt?: SortOrder;
      _count?: TaskDependencyCountOrderByAggregateInput;
      _avg?: TaskDependencyAvgOrderByAggregateInput;
      _max?: TaskDependencyMaxOrderByAggregateInput;
      _min?: TaskDependencyMinOrderByAggregateInput;
      _sum?: TaskDependencySumOrderByAggregateInput;
   };

   export type TaskDependencyScalarWhereWithAggregatesInput = {
      AND?:
         | TaskDependencyScalarWhereWithAggregatesInput
         | TaskDependencyScalarWhereWithAggregatesInput[];
      OR?: TaskDependencyScalarWhereWithAggregatesInput[];
      NOT?:
         | TaskDependencyScalarWhereWithAggregatesInput
         | TaskDependencyScalarWhereWithAggregatesInput[];
      id?: IntWithAggregatesFilter<'TaskDependency'> | number;
      taskId?: IntWithAggregatesFilter<'TaskDependency'> | number;
      dependsOnId?: IntWithAggregatesFilter<'TaskDependency'> | number;
      createdAt?: DateTimeWithAggregatesFilter<'TaskDependency'> | Date | string;
   };

   export type TaskMasterMetadataWhereInput = {
      AND?: TaskMasterMetadataWhereInput | TaskMasterMetadataWhereInput[];
      OR?: TaskMasterMetadataWhereInput[];
      NOT?: TaskMasterMetadataWhereInput | TaskMasterMetadataWhereInput[];
      id?: IntFilter<'TaskMasterMetadata'> | number;
      created?: DateTimeFilter<'TaskMasterMetadata'> | Date | string;
      updated?: DateTimeFilter<'TaskMasterMetadata'> | Date | string;
      description?: StringFilter<'TaskMasterMetadata'> | string;
   };

   export type TaskMasterMetadataOrderByWithRelationInput = {
      id?: SortOrder;
      created?: SortOrder;
      updated?: SortOrder;
      description?: SortOrder;
   };

   export type TaskMasterMetadataWhereUniqueInput = Prisma.AtLeast<
      {
         id?: number;
         AND?: TaskMasterMetadataWhereInput | TaskMasterMetadataWhereInput[];
         OR?: TaskMasterMetadataWhereInput[];
         NOT?: TaskMasterMetadataWhereInput | TaskMasterMetadataWhereInput[];
         created?: DateTimeFilter<'TaskMasterMetadata'> | Date | string;
         updated?: DateTimeFilter<'TaskMasterMetadata'> | Date | string;
         description?: StringFilter<'TaskMasterMetadata'> | string;
      },
      'id'
   >;

   export type TaskMasterMetadataOrderByWithAggregationInput = {
      id?: SortOrder;
      created?: SortOrder;
      updated?: SortOrder;
      description?: SortOrder;
      _count?: TaskMasterMetadataCountOrderByAggregateInput;
      _avg?: TaskMasterMetadataAvgOrderByAggregateInput;
      _max?: TaskMasterMetadataMaxOrderByAggregateInput;
      _min?: TaskMasterMetadataMinOrderByAggregateInput;
      _sum?: TaskMasterMetadataSumOrderByAggregateInput;
   };

   export type TaskMasterMetadataScalarWhereWithAggregatesInput = {
      AND?:
         | TaskMasterMetadataScalarWhereWithAggregatesInput
         | TaskMasterMetadataScalarWhereWithAggregatesInput[];
      OR?: TaskMasterMetadataScalarWhereWithAggregatesInput[];
      NOT?:
         | TaskMasterMetadataScalarWhereWithAggregatesInput
         | TaskMasterMetadataScalarWhereWithAggregatesInput[];
      id?: IntWithAggregatesFilter<'TaskMasterMetadata'> | number;
      created?: DateTimeWithAggregatesFilter<'TaskMasterMetadata'> | Date | string;
      updated?: DateTimeWithAggregatesFilter<'TaskMasterMetadata'> | Date | string;
      description?: StringWithAggregatesFilter<'TaskMasterMetadata'> | string;
   };

   export type SyncOperationWhereInput = {
      AND?: SyncOperationWhereInput | SyncOperationWhereInput[];
      OR?: SyncOperationWhereInput[];
      NOT?: SyncOperationWhereInput | SyncOperationWhereInput[];
      id?: StringFilter<'SyncOperation'> | string;
      type?: StringFilter<'SyncOperation'> | string;
      status?: StringFilter<'SyncOperation'> | string;
      source?: StringFilter<'SyncOperation'> | string;
      timestamp?: DateTimeFilter<'SyncOperation'> | Date | string;
      completedAt?: DateTimeNullableFilter<'SyncOperation'> | Date | string | null;
      data?: StringFilter<'SyncOperation'> | string;
      rollbackData?: StringNullableFilter<'SyncOperation'> | string | null;
      metadata?: StringNullableFilter<'SyncOperation'> | string | null;
      retryCount?: IntFilter<'SyncOperation'> | number;
      maxRetries?: IntFilter<'SyncOperation'> | number;
      error?: StringNullableFilter<'SyncOperation'> | string | null;
      taskIds?: StringFilter<'SyncOperation'> | string;
   };

   export type SyncOperationOrderByWithRelationInput = {
      id?: SortOrder;
      type?: SortOrder;
      status?: SortOrder;
      source?: SortOrder;
      timestamp?: SortOrder;
      completedAt?: SortOrderInput | SortOrder;
      data?: SortOrder;
      rollbackData?: SortOrderInput | SortOrder;
      metadata?: SortOrderInput | SortOrder;
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
      error?: SortOrderInput | SortOrder;
      taskIds?: SortOrder;
   };

   export type SyncOperationWhereUniqueInput = Prisma.AtLeast<
      {
         id?: string;
         AND?: SyncOperationWhereInput | SyncOperationWhereInput[];
         OR?: SyncOperationWhereInput[];
         NOT?: SyncOperationWhereInput | SyncOperationWhereInput[];
         type?: StringFilter<'SyncOperation'> | string;
         status?: StringFilter<'SyncOperation'> | string;
         source?: StringFilter<'SyncOperation'> | string;
         timestamp?: DateTimeFilter<'SyncOperation'> | Date | string;
         completedAt?: DateTimeNullableFilter<'SyncOperation'> | Date | string | null;
         data?: StringFilter<'SyncOperation'> | string;
         rollbackData?: StringNullableFilter<'SyncOperation'> | string | null;
         metadata?: StringNullableFilter<'SyncOperation'> | string | null;
         retryCount?: IntFilter<'SyncOperation'> | number;
         maxRetries?: IntFilter<'SyncOperation'> | number;
         error?: StringNullableFilter<'SyncOperation'> | string | null;
         taskIds?: StringFilter<'SyncOperation'> | string;
      },
      'id'
   >;

   export type SyncOperationOrderByWithAggregationInput = {
      id?: SortOrder;
      type?: SortOrder;
      status?: SortOrder;
      source?: SortOrder;
      timestamp?: SortOrder;
      completedAt?: SortOrderInput | SortOrder;
      data?: SortOrder;
      rollbackData?: SortOrderInput | SortOrder;
      metadata?: SortOrderInput | SortOrder;
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
      error?: SortOrderInput | SortOrder;
      taskIds?: SortOrder;
      _count?: SyncOperationCountOrderByAggregateInput;
      _avg?: SyncOperationAvgOrderByAggregateInput;
      _max?: SyncOperationMaxOrderByAggregateInput;
      _min?: SyncOperationMinOrderByAggregateInput;
      _sum?: SyncOperationSumOrderByAggregateInput;
   };

   export type SyncOperationScalarWhereWithAggregatesInput = {
      AND?:
         | SyncOperationScalarWhereWithAggregatesInput
         | SyncOperationScalarWhereWithAggregatesInput[];
      OR?: SyncOperationScalarWhereWithAggregatesInput[];
      NOT?:
         | SyncOperationScalarWhereWithAggregatesInput
         | SyncOperationScalarWhereWithAggregatesInput[];
      id?: StringWithAggregatesFilter<'SyncOperation'> | string;
      type?: StringWithAggregatesFilter<'SyncOperation'> | string;
      status?: StringWithAggregatesFilter<'SyncOperation'> | string;
      source?: StringWithAggregatesFilter<'SyncOperation'> | string;
      timestamp?: DateTimeWithAggregatesFilter<'SyncOperation'> | Date | string;
      completedAt?: DateTimeNullableWithAggregatesFilter<'SyncOperation'> | Date | string | null;
      data?: StringWithAggregatesFilter<'SyncOperation'> | string;
      rollbackData?: StringNullableWithAggregatesFilter<'SyncOperation'> | string | null;
      metadata?: StringNullableWithAggregatesFilter<'SyncOperation'> | string | null;
      retryCount?: IntWithAggregatesFilter<'SyncOperation'> | number;
      maxRetries?: IntWithAggregatesFilter<'SyncOperation'> | number;
      error?: StringNullableWithAggregatesFilter<'SyncOperation'> | string | null;
      taskIds?: StringWithAggregatesFilter<'SyncOperation'> | string;
   };

   export type SyncConflictWhereInput = {
      AND?: SyncConflictWhereInput | SyncConflictWhereInput[];
      OR?: SyncConflictWhereInput[];
      NOT?: SyncConflictWhereInput | SyncConflictWhereInput[];
      id?: StringFilter<'SyncConflict'> | string;
      operationType?: StringFilter<'SyncConflict'> | string;
      taskId?: StringFilter<'SyncConflict'> | string;
      uiVersion?: StringFilter<'SyncConflict'> | string;
      cliVersion?: StringFilter<'SyncConflict'> | string;
      resolved?: BoolFilter<'SyncConflict'> | boolean;
      resolution?: StringNullableFilter<'SyncConflict'> | string | null;
      resolvedAt?: DateTimeNullableFilter<'SyncConflict'> | Date | string | null;
      resolvedBy?: StringNullableFilter<'SyncConflict'> | string | null;
      timestamp?: DateTimeFilter<'SyncConflict'> | Date | string;
   };

   export type SyncConflictOrderByWithRelationInput = {
      id?: SortOrder;
      operationType?: SortOrder;
      taskId?: SortOrder;
      uiVersion?: SortOrder;
      cliVersion?: SortOrder;
      resolved?: SortOrder;
      resolution?: SortOrderInput | SortOrder;
      resolvedAt?: SortOrderInput | SortOrder;
      resolvedBy?: SortOrderInput | SortOrder;
      timestamp?: SortOrder;
   };

   export type SyncConflictWhereUniqueInput = Prisma.AtLeast<
      {
         id?: string;
         AND?: SyncConflictWhereInput | SyncConflictWhereInput[];
         OR?: SyncConflictWhereInput[];
         NOT?: SyncConflictWhereInput | SyncConflictWhereInput[];
         operationType?: StringFilter<'SyncConflict'> | string;
         taskId?: StringFilter<'SyncConflict'> | string;
         uiVersion?: StringFilter<'SyncConflict'> | string;
         cliVersion?: StringFilter<'SyncConflict'> | string;
         resolved?: BoolFilter<'SyncConflict'> | boolean;
         resolution?: StringNullableFilter<'SyncConflict'> | string | null;
         resolvedAt?: DateTimeNullableFilter<'SyncConflict'> | Date | string | null;
         resolvedBy?: StringNullableFilter<'SyncConflict'> | string | null;
         timestamp?: DateTimeFilter<'SyncConflict'> | Date | string;
      },
      'id'
   >;

   export type SyncConflictOrderByWithAggregationInput = {
      id?: SortOrder;
      operationType?: SortOrder;
      taskId?: SortOrder;
      uiVersion?: SortOrder;
      cliVersion?: SortOrder;
      resolved?: SortOrder;
      resolution?: SortOrderInput | SortOrder;
      resolvedAt?: SortOrderInput | SortOrder;
      resolvedBy?: SortOrderInput | SortOrder;
      timestamp?: SortOrder;
      _count?: SyncConflictCountOrderByAggregateInput;
      _max?: SyncConflictMaxOrderByAggregateInput;
      _min?: SyncConflictMinOrderByAggregateInput;
   };

   export type SyncConflictScalarWhereWithAggregatesInput = {
      AND?:
         | SyncConflictScalarWhereWithAggregatesInput
         | SyncConflictScalarWhereWithAggregatesInput[];
      OR?: SyncConflictScalarWhereWithAggregatesInput[];
      NOT?:
         | SyncConflictScalarWhereWithAggregatesInput
         | SyncConflictScalarWhereWithAggregatesInput[];
      id?: StringWithAggregatesFilter<'SyncConflict'> | string;
      operationType?: StringWithAggregatesFilter<'SyncConflict'> | string;
      taskId?: StringWithAggregatesFilter<'SyncConflict'> | string;
      uiVersion?: StringWithAggregatesFilter<'SyncConflict'> | string;
      cliVersion?: StringWithAggregatesFilter<'SyncConflict'> | string;
      resolved?: BoolWithAggregatesFilter<'SyncConflict'> | boolean;
      resolution?: StringNullableWithAggregatesFilter<'SyncConflict'> | string | null;
      resolvedAt?: DateTimeNullableWithAggregatesFilter<'SyncConflict'> | Date | string | null;
      resolvedBy?: StringNullableWithAggregatesFilter<'SyncConflict'> | string | null;
      timestamp?: DateTimeWithAggregatesFilter<'SyncConflict'> | Date | string;
   };

   export type TaskCreateInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskCreateNestedManyWithoutParentTaskInput;
      dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput;
      dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskUncheckedCreateInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskUncheckedCreateNestedManyWithoutParentTaskInput;
      dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput;
      dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUpdateManyWithoutParentTaskNestedInput;
      dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput;
      dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUncheckedUpdateManyWithoutParentTaskNestedInput;
      dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput;
      dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskCreateManyInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type TaskUpdateManyMutationInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SubtaskCreateInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      parentTask: TaskCreateNestedOneWithoutSubtasksInput;
   };

   export type SubtaskUncheckedCreateInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      parentId: number;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type SubtaskUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      parentTask?: TaskUpdateOneRequiredWithoutSubtasksNestedInput;
   };

   export type SubtaskUncheckedUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      parentId?: IntFieldUpdateOperationsInput | number;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SubtaskCreateManyInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      parentId: number;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type SubtaskUpdateManyMutationInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SubtaskUncheckedUpdateManyInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      parentId?: IntFieldUpdateOperationsInput | number;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyCreateInput = {
      createdAt?: Date | string;
      task: TaskCreateNestedOneWithoutDependenciesInput;
      dependsOn: TaskCreateNestedOneWithoutDependentsInput;
   };

   export type TaskDependencyUncheckedCreateInput = {
      id?: number;
      taskId: number;
      dependsOnId: number;
      createdAt?: Date | string;
   };

   export type TaskDependencyUpdateInput = {
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput;
      dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput;
   };

   export type TaskDependencyUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number;
      taskId?: IntFieldUpdateOperationsInput | number;
      dependsOnId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyCreateManyInput = {
      id?: number;
      taskId: number;
      dependsOnId: number;
      createdAt?: Date | string;
   };

   export type TaskDependencyUpdateManyMutationInput = {
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number;
      taskId?: IntFieldUpdateOperationsInput | number;
      dependsOnId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskMasterMetadataCreateInput = {
      created: Date | string;
      updated: Date | string;
      description: string;
   };

   export type TaskMasterMetadataUncheckedCreateInput = {
      id?: number;
      created: Date | string;
      updated: Date | string;
      description: string;
   };

   export type TaskMasterMetadataUpdateInput = {
      created?: DateTimeFieldUpdateOperationsInput | Date | string;
      updated?: DateTimeFieldUpdateOperationsInput | Date | string;
      description?: StringFieldUpdateOperationsInput | string;
   };

   export type TaskMasterMetadataUncheckedUpdateInput = {
      id?: IntFieldUpdateOperationsInput | number;
      created?: DateTimeFieldUpdateOperationsInput | Date | string;
      updated?: DateTimeFieldUpdateOperationsInput | Date | string;
      description?: StringFieldUpdateOperationsInput | string;
   };

   export type TaskMasterMetadataCreateManyInput = {
      id?: number;
      created: Date | string;
      updated: Date | string;
      description: string;
   };

   export type TaskMasterMetadataUpdateManyMutationInput = {
      created?: DateTimeFieldUpdateOperationsInput | Date | string;
      updated?: DateTimeFieldUpdateOperationsInput | Date | string;
      description?: StringFieldUpdateOperationsInput | string;
   };

   export type TaskMasterMetadataUncheckedUpdateManyInput = {
      id?: IntFieldUpdateOperationsInput | number;
      created?: DateTimeFieldUpdateOperationsInput | Date | string;
      updated?: DateTimeFieldUpdateOperationsInput | Date | string;
      description?: StringFieldUpdateOperationsInput | string;
   };

   export type SyncOperationCreateInput = {
      id?: string;
      type: string;
      status: string;
      source: string;
      timestamp?: Date | string;
      completedAt?: Date | string | null;
      data: string;
      rollbackData?: string | null;
      metadata?: string | null;
      retryCount?: number;
      maxRetries?: number;
      error?: string | null;
      taskIds?: string;
   };

   export type SyncOperationUncheckedCreateInput = {
      id?: string;
      type: string;
      status: string;
      source: string;
      timestamp?: Date | string;
      completedAt?: Date | string | null;
      data: string;
      rollbackData?: string | null;
      metadata?: string | null;
      retryCount?: number;
      maxRetries?: number;
      error?: string | null;
      taskIds?: string;
   };

   export type SyncOperationUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      type?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      source?: StringFieldUpdateOperationsInput | string;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
      completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      data?: StringFieldUpdateOperationsInput | string;
      rollbackData?: NullableStringFieldUpdateOperationsInput | string | null;
      metadata?: NullableStringFieldUpdateOperationsInput | string | null;
      retryCount?: IntFieldUpdateOperationsInput | number;
      maxRetries?: IntFieldUpdateOperationsInput | number;
      error?: NullableStringFieldUpdateOperationsInput | string | null;
      taskIds?: StringFieldUpdateOperationsInput | string;
   };

   export type SyncOperationUncheckedUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      type?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      source?: StringFieldUpdateOperationsInput | string;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
      completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      data?: StringFieldUpdateOperationsInput | string;
      rollbackData?: NullableStringFieldUpdateOperationsInput | string | null;
      metadata?: NullableStringFieldUpdateOperationsInput | string | null;
      retryCount?: IntFieldUpdateOperationsInput | number;
      maxRetries?: IntFieldUpdateOperationsInput | number;
      error?: NullableStringFieldUpdateOperationsInput | string | null;
      taskIds?: StringFieldUpdateOperationsInput | string;
   };

   export type SyncOperationCreateManyInput = {
      id?: string;
      type: string;
      status: string;
      source: string;
      timestamp?: Date | string;
      completedAt?: Date | string | null;
      data: string;
      rollbackData?: string | null;
      metadata?: string | null;
      retryCount?: number;
      maxRetries?: number;
      error?: string | null;
      taskIds?: string;
   };

   export type SyncOperationUpdateManyMutationInput = {
      id?: StringFieldUpdateOperationsInput | string;
      type?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      source?: StringFieldUpdateOperationsInput | string;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
      completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      data?: StringFieldUpdateOperationsInput | string;
      rollbackData?: NullableStringFieldUpdateOperationsInput | string | null;
      metadata?: NullableStringFieldUpdateOperationsInput | string | null;
      retryCount?: IntFieldUpdateOperationsInput | number;
      maxRetries?: IntFieldUpdateOperationsInput | number;
      error?: NullableStringFieldUpdateOperationsInput | string | null;
      taskIds?: StringFieldUpdateOperationsInput | string;
   };

   export type SyncOperationUncheckedUpdateManyInput = {
      id?: StringFieldUpdateOperationsInput | string;
      type?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      source?: StringFieldUpdateOperationsInput | string;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
      completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      data?: StringFieldUpdateOperationsInput | string;
      rollbackData?: NullableStringFieldUpdateOperationsInput | string | null;
      metadata?: NullableStringFieldUpdateOperationsInput | string | null;
      retryCount?: IntFieldUpdateOperationsInput | number;
      maxRetries?: IntFieldUpdateOperationsInput | number;
      error?: NullableStringFieldUpdateOperationsInput | string | null;
      taskIds?: StringFieldUpdateOperationsInput | string;
   };

   export type SyncConflictCreateInput = {
      id?: string;
      operationType: string;
      taskId: string;
      uiVersion: string;
      cliVersion: string;
      resolved?: boolean;
      resolution?: string | null;
      resolvedAt?: Date | string | null;
      resolvedBy?: string | null;
      timestamp?: Date | string;
   };

   export type SyncConflictUncheckedCreateInput = {
      id?: string;
      operationType: string;
      taskId: string;
      uiVersion: string;
      cliVersion: string;
      resolved?: boolean;
      resolution?: string | null;
      resolvedAt?: Date | string | null;
      resolvedBy?: string | null;
      timestamp?: Date | string;
   };

   export type SyncConflictUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      operationType?: StringFieldUpdateOperationsInput | string;
      taskId?: StringFieldUpdateOperationsInput | string;
      uiVersion?: StringFieldUpdateOperationsInput | string;
      cliVersion?: StringFieldUpdateOperationsInput | string;
      resolved?: BoolFieldUpdateOperationsInput | boolean;
      resolution?: NullableStringFieldUpdateOperationsInput | string | null;
      resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SyncConflictUncheckedUpdateInput = {
      id?: StringFieldUpdateOperationsInput | string;
      operationType?: StringFieldUpdateOperationsInput | string;
      taskId?: StringFieldUpdateOperationsInput | string;
      uiVersion?: StringFieldUpdateOperationsInput | string;
      cliVersion?: StringFieldUpdateOperationsInput | string;
      resolved?: BoolFieldUpdateOperationsInput | boolean;
      resolution?: NullableStringFieldUpdateOperationsInput | string | null;
      resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SyncConflictCreateManyInput = {
      id?: string;
      operationType: string;
      taskId: string;
      uiVersion: string;
      cliVersion: string;
      resolved?: boolean;
      resolution?: string | null;
      resolvedAt?: Date | string | null;
      resolvedBy?: string | null;
      timestamp?: Date | string;
   };

   export type SyncConflictUpdateManyMutationInput = {
      id?: StringFieldUpdateOperationsInput | string;
      operationType?: StringFieldUpdateOperationsInput | string;
      taskId?: StringFieldUpdateOperationsInput | string;
      uiVersion?: StringFieldUpdateOperationsInput | string;
      cliVersion?: StringFieldUpdateOperationsInput | string;
      resolved?: BoolFieldUpdateOperationsInput | boolean;
      resolution?: NullableStringFieldUpdateOperationsInput | string | null;
      resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SyncConflictUncheckedUpdateManyInput = {
      id?: StringFieldUpdateOperationsInput | string;
      operationType?: StringFieldUpdateOperationsInput | string;
      taskId?: StringFieldUpdateOperationsInput | string;
      uiVersion?: StringFieldUpdateOperationsInput | string;
      cliVersion?: StringFieldUpdateOperationsInput | string;
      resolved?: BoolFieldUpdateOperationsInput | boolean;
      resolution?: NullableStringFieldUpdateOperationsInput | string | null;
      resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
      resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null;
      timestamp?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type IntFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel>;
      in?: number[];
      notIn?: number[];
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntFilter<$PrismaModel> | number;
   };

   export type StringFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel>;
      in?: string[];
      notIn?: string[];
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringFilter<$PrismaModel> | string;
   };

   export type StringNullableFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel> | null;
      in?: string[] | null;
      notIn?: string[] | null;
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringNullableFilter<$PrismaModel> | string | null;
   };

   export type IntNullableFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel> | null;
      in?: number[] | null;
      notIn?: number[] | null;
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntNullableFilter<$PrismaModel> | number | null;
   };

   export type DateTimeFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      in?: Date[] | string[];
      notIn?: Date[] | string[];
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
   };

   export type SubtaskListRelationFilter = {
      every?: SubtaskWhereInput;
      some?: SubtaskWhereInput;
      none?: SubtaskWhereInput;
   };

   export type TaskDependencyListRelationFilter = {
      every?: TaskDependencyWhereInput;
      some?: TaskDependencyWhereInput;
      none?: TaskDependencyWhereInput;
   };

   export type SortOrderInput = {
      sort: SortOrder;
      nulls?: NullsOrder;
   };

   export type SubtaskOrderByRelationAggregateInput = {
      _count?: SortOrder;
   };

   export type TaskDependencyOrderByRelationAggregateInput = {
      _count?: SortOrder;
   };

   export type TaskCountOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      priority?: SortOrder;
      status?: SortOrder;
      complexity?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type TaskAvgOrderByAggregateInput = {
      id?: SortOrder;
      complexity?: SortOrder;
   };

   export type TaskMaxOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      priority?: SortOrder;
      status?: SortOrder;
      complexity?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type TaskMinOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      priority?: SortOrder;
      status?: SortOrder;
      complexity?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type TaskSumOrderByAggregateInput = {
      id?: SortOrder;
      complexity?: SortOrder;
   };

   export type IntWithAggregatesFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel>;
      in?: number[];
      notIn?: number[];
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
      _count?: NestedIntFilter<$PrismaModel>;
      _avg?: NestedFloatFilter<$PrismaModel>;
      _sum?: NestedIntFilter<$PrismaModel>;
      _min?: NestedIntFilter<$PrismaModel>;
      _max?: NestedIntFilter<$PrismaModel>;
   };

   export type StringWithAggregatesFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel>;
      in?: string[];
      notIn?: string[];
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedStringFilter<$PrismaModel>;
      _max?: NestedStringFilter<$PrismaModel>;
   };

   export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel> | null;
      in?: string[] | null;
      notIn?: string[] | null;
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedStringNullableFilter<$PrismaModel>;
      _max?: NestedStringNullableFilter<$PrismaModel>;
   };

   export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel> | null;
      in?: number[] | null;
      notIn?: number[] | null;
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedFloatNullableFilter<$PrismaModel>;
      _sum?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedIntNullableFilter<$PrismaModel>;
      _max?: NestedIntNullableFilter<$PrismaModel>;
   };

   export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      in?: Date[] | string[];
      notIn?: Date[] | string[];
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedDateTimeFilter<$PrismaModel>;
      _max?: NestedDateTimeFilter<$PrismaModel>;
   };

   export type TaskScalarRelationFilter = {
      is?: TaskWhereInput;
      isNot?: TaskWhereInput;
   };

   export type SubtaskCountOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      status?: SortOrder;
      parentId?: SortOrder;
      dependencies?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type SubtaskAvgOrderByAggregateInput = {
      parentId?: SortOrder;
   };

   export type SubtaskMaxOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      status?: SortOrder;
      parentId?: SortOrder;
      dependencies?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type SubtaskMinOrderByAggregateInput = {
      id?: SortOrder;
      title?: SortOrder;
      description?: SortOrder;
      details?: SortOrder;
      testStrategy?: SortOrder;
      status?: SortOrder;
      parentId?: SortOrder;
      dependencies?: SortOrder;
      createdAt?: SortOrder;
      updatedAt?: SortOrder;
   };

   export type SubtaskSumOrderByAggregateInput = {
      parentId?: SortOrder;
   };

   export type TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = {
      taskId: number;
      dependsOnId: number;
   };

   export type TaskDependencyCountOrderByAggregateInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
      createdAt?: SortOrder;
   };

   export type TaskDependencyAvgOrderByAggregateInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
   };

   export type TaskDependencyMaxOrderByAggregateInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
      createdAt?: SortOrder;
   };

   export type TaskDependencyMinOrderByAggregateInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
      createdAt?: SortOrder;
   };

   export type TaskDependencySumOrderByAggregateInput = {
      id?: SortOrder;
      taskId?: SortOrder;
      dependsOnId?: SortOrder;
   };

   export type TaskMasterMetadataCountOrderByAggregateInput = {
      id?: SortOrder;
      created?: SortOrder;
      updated?: SortOrder;
      description?: SortOrder;
   };

   export type TaskMasterMetadataAvgOrderByAggregateInput = {
      id?: SortOrder;
   };

   export type TaskMasterMetadataMaxOrderByAggregateInput = {
      id?: SortOrder;
      created?: SortOrder;
      updated?: SortOrder;
      description?: SortOrder;
   };

   export type TaskMasterMetadataMinOrderByAggregateInput = {
      id?: SortOrder;
      created?: SortOrder;
      updated?: SortOrder;
      description?: SortOrder;
   };

   export type TaskMasterMetadataSumOrderByAggregateInput = {
      id?: SortOrder;
   };

   export type DateTimeNullableFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
   };

   export type SyncOperationCountOrderByAggregateInput = {
      id?: SortOrder;
      type?: SortOrder;
      status?: SortOrder;
      source?: SortOrder;
      timestamp?: SortOrder;
      completedAt?: SortOrder;
      data?: SortOrder;
      rollbackData?: SortOrder;
      metadata?: SortOrder;
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
      error?: SortOrder;
      taskIds?: SortOrder;
   };

   export type SyncOperationAvgOrderByAggregateInput = {
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
   };

   export type SyncOperationMaxOrderByAggregateInput = {
      id?: SortOrder;
      type?: SortOrder;
      status?: SortOrder;
      source?: SortOrder;
      timestamp?: SortOrder;
      completedAt?: SortOrder;
      data?: SortOrder;
      rollbackData?: SortOrder;
      metadata?: SortOrder;
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
      error?: SortOrder;
      taskIds?: SortOrder;
   };

   export type SyncOperationMinOrderByAggregateInput = {
      id?: SortOrder;
      type?: SortOrder;
      status?: SortOrder;
      source?: SortOrder;
      timestamp?: SortOrder;
      completedAt?: SortOrder;
      data?: SortOrder;
      rollbackData?: SortOrder;
      metadata?: SortOrder;
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
      error?: SortOrder;
      taskIds?: SortOrder;
   };

   export type SyncOperationSumOrderByAggregateInput = {
      retryCount?: SortOrder;
      maxRetries?: SortOrder;
   };

   export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
   };

   export type BoolFilter<$PrismaModel = never> = {
      equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
      not?: NestedBoolFilter<$PrismaModel> | boolean;
   };

   export type SyncConflictCountOrderByAggregateInput = {
      id?: SortOrder;
      operationType?: SortOrder;
      taskId?: SortOrder;
      uiVersion?: SortOrder;
      cliVersion?: SortOrder;
      resolved?: SortOrder;
      resolution?: SortOrder;
      resolvedAt?: SortOrder;
      resolvedBy?: SortOrder;
      timestamp?: SortOrder;
   };

   export type SyncConflictMaxOrderByAggregateInput = {
      id?: SortOrder;
      operationType?: SortOrder;
      taskId?: SortOrder;
      uiVersion?: SortOrder;
      cliVersion?: SortOrder;
      resolved?: SortOrder;
      resolution?: SortOrder;
      resolvedAt?: SortOrder;
      resolvedBy?: SortOrder;
      timestamp?: SortOrder;
   };

   export type SyncConflictMinOrderByAggregateInput = {
      id?: SortOrder;
      operationType?: SortOrder;
      taskId?: SortOrder;
      uiVersion?: SortOrder;
      cliVersion?: SortOrder;
      resolved?: SortOrder;
      resolution?: SortOrder;
      resolvedAt?: SortOrder;
      resolvedBy?: SortOrder;
      timestamp?: SortOrder;
   };

   export type BoolWithAggregatesFilter<$PrismaModel = never> = {
      equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
      not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedBoolFilter<$PrismaModel>;
      _max?: NestedBoolFilter<$PrismaModel>;
   };

   export type SubtaskCreateNestedManyWithoutParentTaskInput = {
      create?:
         | XOR<SubtaskCreateWithoutParentTaskInput, SubtaskUncheckedCreateWithoutParentTaskInput>
         | SubtaskCreateWithoutParentTaskInput[]
         | SubtaskUncheckedCreateWithoutParentTaskInput[];
      connectOrCreate?:
         | SubtaskCreateOrConnectWithoutParentTaskInput
         | SubtaskCreateOrConnectWithoutParentTaskInput[];
      createMany?: SubtaskCreateManyParentTaskInputEnvelope;
      connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
   };

   export type TaskDependencyCreateNestedManyWithoutTaskInput = {
      create?:
         | XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
         | TaskDependencyCreateWithoutTaskInput[]
         | TaskDependencyUncheckedCreateWithoutTaskInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutTaskInput
         | TaskDependencyCreateOrConnectWithoutTaskInput[];
      createMany?: TaskDependencyCreateManyTaskInputEnvelope;
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
   };

   export type TaskDependencyCreateNestedManyWithoutDependsOnInput = {
      create?:
         | XOR<
              TaskDependencyCreateWithoutDependsOnInput,
              TaskDependencyUncheckedCreateWithoutDependsOnInput
           >
         | TaskDependencyCreateWithoutDependsOnInput[]
         | TaskDependencyUncheckedCreateWithoutDependsOnInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutDependsOnInput
         | TaskDependencyCreateOrConnectWithoutDependsOnInput[];
      createMany?: TaskDependencyCreateManyDependsOnInputEnvelope;
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
   };

   export type SubtaskUncheckedCreateNestedManyWithoutParentTaskInput = {
      create?:
         | XOR<SubtaskCreateWithoutParentTaskInput, SubtaskUncheckedCreateWithoutParentTaskInput>
         | SubtaskCreateWithoutParentTaskInput[]
         | SubtaskUncheckedCreateWithoutParentTaskInput[];
      connectOrCreate?:
         | SubtaskCreateOrConnectWithoutParentTaskInput
         | SubtaskCreateOrConnectWithoutParentTaskInput[];
      createMany?: SubtaskCreateManyParentTaskInputEnvelope;
      connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
   };

   export type TaskDependencyUncheckedCreateNestedManyWithoutTaskInput = {
      create?:
         | XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
         | TaskDependencyCreateWithoutTaskInput[]
         | TaskDependencyUncheckedCreateWithoutTaskInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutTaskInput
         | TaskDependencyCreateOrConnectWithoutTaskInput[];
      createMany?: TaskDependencyCreateManyTaskInputEnvelope;
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
   };

   export type TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput = {
      create?:
         | XOR<
              TaskDependencyCreateWithoutDependsOnInput,
              TaskDependencyUncheckedCreateWithoutDependsOnInput
           >
         | TaskDependencyCreateWithoutDependsOnInput[]
         | TaskDependencyUncheckedCreateWithoutDependsOnInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutDependsOnInput
         | TaskDependencyCreateOrConnectWithoutDependsOnInput[];
      createMany?: TaskDependencyCreateManyDependsOnInputEnvelope;
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
   };

   export type IntFieldUpdateOperationsInput = {
      set?: number;
      increment?: number;
      decrement?: number;
      multiply?: number;
      divide?: number;
   };

   export type StringFieldUpdateOperationsInput = {
      set?: string;
   };

   export type NullableStringFieldUpdateOperationsInput = {
      set?: string | null;
   };

   export type NullableIntFieldUpdateOperationsInput = {
      set?: number | null;
      increment?: number;
      decrement?: number;
      multiply?: number;
      divide?: number;
   };

   export type DateTimeFieldUpdateOperationsInput = {
      set?: Date | string;
   };

   export type SubtaskUpdateManyWithoutParentTaskNestedInput = {
      create?:
         | XOR<SubtaskCreateWithoutParentTaskInput, SubtaskUncheckedCreateWithoutParentTaskInput>
         | SubtaskCreateWithoutParentTaskInput[]
         | SubtaskUncheckedCreateWithoutParentTaskInput[];
      connectOrCreate?:
         | SubtaskCreateOrConnectWithoutParentTaskInput
         | SubtaskCreateOrConnectWithoutParentTaskInput[];
      upsert?:
         | SubtaskUpsertWithWhereUniqueWithoutParentTaskInput
         | SubtaskUpsertWithWhereUniqueWithoutParentTaskInput[];
      createMany?: SubtaskCreateManyParentTaskInputEnvelope;
      set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      update?:
         | SubtaskUpdateWithWhereUniqueWithoutParentTaskInput
         | SubtaskUpdateWithWhereUniqueWithoutParentTaskInput[];
      updateMany?:
         | SubtaskUpdateManyWithWhereWithoutParentTaskInput
         | SubtaskUpdateManyWithWhereWithoutParentTaskInput[];
      deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[];
   };

   export type TaskDependencyUpdateManyWithoutTaskNestedInput = {
      create?:
         | XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
         | TaskDependencyCreateWithoutTaskInput[]
         | TaskDependencyUncheckedCreateWithoutTaskInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutTaskInput
         | TaskDependencyCreateOrConnectWithoutTaskInput[];
      upsert?:
         | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput
         | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[];
      createMany?: TaskDependencyCreateManyTaskInputEnvelope;
      set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      update?:
         | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput
         | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[];
      updateMany?:
         | TaskDependencyUpdateManyWithWhereWithoutTaskInput
         | TaskDependencyUpdateManyWithWhereWithoutTaskInput[];
      deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
   };

   export type TaskDependencyUpdateManyWithoutDependsOnNestedInput = {
      create?:
         | XOR<
              TaskDependencyCreateWithoutDependsOnInput,
              TaskDependencyUncheckedCreateWithoutDependsOnInput
           >
         | TaskDependencyCreateWithoutDependsOnInput[]
         | TaskDependencyUncheckedCreateWithoutDependsOnInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutDependsOnInput
         | TaskDependencyCreateOrConnectWithoutDependsOnInput[];
      upsert?:
         | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput
         | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[];
      createMany?: TaskDependencyCreateManyDependsOnInputEnvelope;
      set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      update?:
         | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput
         | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[];
      updateMany?:
         | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput
         | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[];
      deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
   };

   export type SubtaskUncheckedUpdateManyWithoutParentTaskNestedInput = {
      create?:
         | XOR<SubtaskCreateWithoutParentTaskInput, SubtaskUncheckedCreateWithoutParentTaskInput>
         | SubtaskCreateWithoutParentTaskInput[]
         | SubtaskUncheckedCreateWithoutParentTaskInput[];
      connectOrCreate?:
         | SubtaskCreateOrConnectWithoutParentTaskInput
         | SubtaskCreateOrConnectWithoutParentTaskInput[];
      upsert?:
         | SubtaskUpsertWithWhereUniqueWithoutParentTaskInput
         | SubtaskUpsertWithWhereUniqueWithoutParentTaskInput[];
      createMany?: SubtaskCreateManyParentTaskInputEnvelope;
      set?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      disconnect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      delete?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      connect?: SubtaskWhereUniqueInput | SubtaskWhereUniqueInput[];
      update?:
         | SubtaskUpdateWithWhereUniqueWithoutParentTaskInput
         | SubtaskUpdateWithWhereUniqueWithoutParentTaskInput[];
      updateMany?:
         | SubtaskUpdateManyWithWhereWithoutParentTaskInput
         | SubtaskUpdateManyWithWhereWithoutParentTaskInput[];
      deleteMany?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[];
   };

   export type TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput = {
      create?:
         | XOR<TaskDependencyCreateWithoutTaskInput, TaskDependencyUncheckedCreateWithoutTaskInput>
         | TaskDependencyCreateWithoutTaskInput[]
         | TaskDependencyUncheckedCreateWithoutTaskInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutTaskInput
         | TaskDependencyCreateOrConnectWithoutTaskInput[];
      upsert?:
         | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput
         | TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[];
      createMany?: TaskDependencyCreateManyTaskInputEnvelope;
      set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      update?:
         | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput
         | TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[];
      updateMany?:
         | TaskDependencyUpdateManyWithWhereWithoutTaskInput
         | TaskDependencyUpdateManyWithWhereWithoutTaskInput[];
      deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
   };

   export type TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput = {
      create?:
         | XOR<
              TaskDependencyCreateWithoutDependsOnInput,
              TaskDependencyUncheckedCreateWithoutDependsOnInput
           >
         | TaskDependencyCreateWithoutDependsOnInput[]
         | TaskDependencyUncheckedCreateWithoutDependsOnInput[];
      connectOrCreate?:
         | TaskDependencyCreateOrConnectWithoutDependsOnInput
         | TaskDependencyCreateOrConnectWithoutDependsOnInput[];
      upsert?:
         | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput
         | TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[];
      createMany?: TaskDependencyCreateManyDependsOnInputEnvelope;
      set?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      disconnect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      delete?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      connect?: TaskDependencyWhereUniqueInput | TaskDependencyWhereUniqueInput[];
      update?:
         | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput
         | TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[];
      updateMany?:
         | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput
         | TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[];
      deleteMany?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
   };

   export type TaskCreateNestedOneWithoutSubtasksInput = {
      create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput;
      connect?: TaskWhereUniqueInput;
   };

   export type TaskUpdateOneRequiredWithoutSubtasksNestedInput = {
      create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput;
      upsert?: TaskUpsertWithoutSubtasksInput;
      connect?: TaskWhereUniqueInput;
      update?: XOR<
         XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>,
         TaskUncheckedUpdateWithoutSubtasksInput
      >;
   };

   export type TaskCreateNestedOneWithoutDependenciesInput = {
      create?: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput;
      connect?: TaskWhereUniqueInput;
   };

   export type TaskCreateNestedOneWithoutDependentsInput = {
      create?: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput;
      connect?: TaskWhereUniqueInput;
   };

   export type TaskUpdateOneRequiredWithoutDependenciesNestedInput = {
      create?: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput;
      upsert?: TaskUpsertWithoutDependenciesInput;
      connect?: TaskWhereUniqueInput;
      update?: XOR<
         XOR<TaskUpdateToOneWithWhereWithoutDependenciesInput, TaskUpdateWithoutDependenciesInput>,
         TaskUncheckedUpdateWithoutDependenciesInput
      >;
   };

   export type TaskUpdateOneRequiredWithoutDependentsNestedInput = {
      create?: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>;
      connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput;
      upsert?: TaskUpsertWithoutDependentsInput;
      connect?: TaskWhereUniqueInput;
      update?: XOR<
         XOR<TaskUpdateToOneWithWhereWithoutDependentsInput, TaskUpdateWithoutDependentsInput>,
         TaskUncheckedUpdateWithoutDependentsInput
      >;
   };

   export type NullableDateTimeFieldUpdateOperationsInput = {
      set?: Date | string | null;
   };

   export type BoolFieldUpdateOperationsInput = {
      set?: boolean;
   };

   export type NestedIntFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel>;
      in?: number[];
      notIn?: number[];
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntFilter<$PrismaModel> | number;
   };

   export type NestedStringFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel>;
      in?: string[];
      notIn?: string[];
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringFilter<$PrismaModel> | string;
   };

   export type NestedStringNullableFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel> | null;
      in?: string[] | null;
      notIn?: string[] | null;
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringNullableFilter<$PrismaModel> | string | null;
   };

   export type NestedIntNullableFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel> | null;
      in?: number[] | null;
      notIn?: number[] | null;
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntNullableFilter<$PrismaModel> | number | null;
   };

   export type NestedDateTimeFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      in?: Date[] | string[];
      notIn?: Date[] | string[];
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
   };

   export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel>;
      in?: number[];
      notIn?: number[];
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
      _count?: NestedIntFilter<$PrismaModel>;
      _avg?: NestedFloatFilter<$PrismaModel>;
      _sum?: NestedIntFilter<$PrismaModel>;
      _min?: NestedIntFilter<$PrismaModel>;
      _max?: NestedIntFilter<$PrismaModel>;
   };

   export type NestedFloatFilter<$PrismaModel = never> = {
      equals?: number | FloatFieldRefInput<$PrismaModel>;
      in?: number[];
      notIn?: number[];
      lt?: number | FloatFieldRefInput<$PrismaModel>;
      lte?: number | FloatFieldRefInput<$PrismaModel>;
      gt?: number | FloatFieldRefInput<$PrismaModel>;
      gte?: number | FloatFieldRefInput<$PrismaModel>;
      not?: NestedFloatFilter<$PrismaModel> | number;
   };

   export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel>;
      in?: string[];
      notIn?: string[];
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedStringFilter<$PrismaModel>;
      _max?: NestedStringFilter<$PrismaModel>;
   };

   export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: string | StringFieldRefInput<$PrismaModel> | null;
      in?: string[] | null;
      notIn?: string[] | null;
      lt?: string | StringFieldRefInput<$PrismaModel>;
      lte?: string | StringFieldRefInput<$PrismaModel>;
      gt?: string | StringFieldRefInput<$PrismaModel>;
      gte?: string | StringFieldRefInput<$PrismaModel>;
      contains?: string | StringFieldRefInput<$PrismaModel>;
      startsWith?: string | StringFieldRefInput<$PrismaModel>;
      endsWith?: string | StringFieldRefInput<$PrismaModel>;
      not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedStringNullableFilter<$PrismaModel>;
      _max?: NestedStringNullableFilter<$PrismaModel>;
   };

   export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: number | IntFieldRefInput<$PrismaModel> | null;
      in?: number[] | null;
      notIn?: number[] | null;
      lt?: number | IntFieldRefInput<$PrismaModel>;
      lte?: number | IntFieldRefInput<$PrismaModel>;
      gt?: number | IntFieldRefInput<$PrismaModel>;
      gte?: number | IntFieldRefInput<$PrismaModel>;
      not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _avg?: NestedFloatNullableFilter<$PrismaModel>;
      _sum?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedIntNullableFilter<$PrismaModel>;
      _max?: NestedIntNullableFilter<$PrismaModel>;
   };

   export type NestedFloatNullableFilter<$PrismaModel = never> = {
      equals?: number | FloatFieldRefInput<$PrismaModel> | null;
      in?: number[] | null;
      notIn?: number[] | null;
      lt?: number | FloatFieldRefInput<$PrismaModel>;
      lte?: number | FloatFieldRefInput<$PrismaModel>;
      gt?: number | FloatFieldRefInput<$PrismaModel>;
      gte?: number | FloatFieldRefInput<$PrismaModel>;
      not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
   };

   export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      in?: Date[] | string[];
      notIn?: Date[] | string[];
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedDateTimeFilter<$PrismaModel>;
      _max?: NestedDateTimeFilter<$PrismaModel>;
   };

   export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
   };

   export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | null;
      notIn?: Date[] | string[] | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
   };

   export type NestedBoolFilter<$PrismaModel = never> = {
      equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
      not?: NestedBoolFilter<$PrismaModel> | boolean;
   };

   export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
      equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
      not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedBoolFilter<$PrismaModel>;
      _max?: NestedBoolFilter<$PrismaModel>;
   };

   export type SubtaskCreateWithoutParentTaskInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type SubtaskUncheckedCreateWithoutParentTaskInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type SubtaskCreateOrConnectWithoutParentTaskInput = {
      where: SubtaskWhereUniqueInput;
      create: XOR<
         SubtaskCreateWithoutParentTaskInput,
         SubtaskUncheckedCreateWithoutParentTaskInput
      >;
   };

   export type SubtaskCreateManyParentTaskInputEnvelope = {
      data: SubtaskCreateManyParentTaskInput | SubtaskCreateManyParentTaskInput[];
   };

   export type TaskDependencyCreateWithoutTaskInput = {
      createdAt?: Date | string;
      dependsOn: TaskCreateNestedOneWithoutDependentsInput;
   };

   export type TaskDependencyUncheckedCreateWithoutTaskInput = {
      id?: number;
      dependsOnId: number;
      createdAt?: Date | string;
   };

   export type TaskDependencyCreateOrConnectWithoutTaskInput = {
      where: TaskDependencyWhereUniqueInput;
      create: XOR<
         TaskDependencyCreateWithoutTaskInput,
         TaskDependencyUncheckedCreateWithoutTaskInput
      >;
   };

   export type TaskDependencyCreateManyTaskInputEnvelope = {
      data: TaskDependencyCreateManyTaskInput | TaskDependencyCreateManyTaskInput[];
   };

   export type TaskDependencyCreateWithoutDependsOnInput = {
      createdAt?: Date | string;
      task: TaskCreateNestedOneWithoutDependenciesInput;
   };

   export type TaskDependencyUncheckedCreateWithoutDependsOnInput = {
      id?: number;
      taskId: number;
      createdAt?: Date | string;
   };

   export type TaskDependencyCreateOrConnectWithoutDependsOnInput = {
      where: TaskDependencyWhereUniqueInput;
      create: XOR<
         TaskDependencyCreateWithoutDependsOnInput,
         TaskDependencyUncheckedCreateWithoutDependsOnInput
      >;
   };

   export type TaskDependencyCreateManyDependsOnInputEnvelope = {
      data: TaskDependencyCreateManyDependsOnInput | TaskDependencyCreateManyDependsOnInput[];
   };

   export type SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = {
      where: SubtaskWhereUniqueInput;
      update: XOR<
         SubtaskUpdateWithoutParentTaskInput,
         SubtaskUncheckedUpdateWithoutParentTaskInput
      >;
      create: XOR<
         SubtaskCreateWithoutParentTaskInput,
         SubtaskUncheckedCreateWithoutParentTaskInput
      >;
   };

   export type SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = {
      where: SubtaskWhereUniqueInput;
      data: XOR<SubtaskUpdateWithoutParentTaskInput, SubtaskUncheckedUpdateWithoutParentTaskInput>;
   };

   export type SubtaskUpdateManyWithWhereWithoutParentTaskInput = {
      where: SubtaskScalarWhereInput;
      data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyWithoutParentTaskInput>;
   };

   export type SubtaskScalarWhereInput = {
      AND?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[];
      OR?: SubtaskScalarWhereInput[];
      NOT?: SubtaskScalarWhereInput | SubtaskScalarWhereInput[];
      id?: StringFilter<'Subtask'> | string;
      title?: StringFilter<'Subtask'> | string;
      description?: StringFilter<'Subtask'> | string;
      details?: StringNullableFilter<'Subtask'> | string | null;
      testStrategy?: StringNullableFilter<'Subtask'> | string | null;
      status?: StringFilter<'Subtask'> | string;
      parentId?: IntFilter<'Subtask'> | number;
      dependencies?: StringFilter<'Subtask'> | string;
      createdAt?: DateTimeFilter<'Subtask'> | Date | string;
      updatedAt?: DateTimeFilter<'Subtask'> | Date | string;
   };

   export type TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = {
      where: TaskDependencyWhereUniqueInput;
      update: XOR<
         TaskDependencyUpdateWithoutTaskInput,
         TaskDependencyUncheckedUpdateWithoutTaskInput
      >;
      create: XOR<
         TaskDependencyCreateWithoutTaskInput,
         TaskDependencyUncheckedCreateWithoutTaskInput
      >;
   };

   export type TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = {
      where: TaskDependencyWhereUniqueInput;
      data: XOR<
         TaskDependencyUpdateWithoutTaskInput,
         TaskDependencyUncheckedUpdateWithoutTaskInput
      >;
   };

   export type TaskDependencyUpdateManyWithWhereWithoutTaskInput = {
      where: TaskDependencyScalarWhereInput;
      data: XOR<
         TaskDependencyUpdateManyMutationInput,
         TaskDependencyUncheckedUpdateManyWithoutTaskInput
      >;
   };

   export type TaskDependencyScalarWhereInput = {
      AND?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
      OR?: TaskDependencyScalarWhereInput[];
      NOT?: TaskDependencyScalarWhereInput | TaskDependencyScalarWhereInput[];
      id?: IntFilter<'TaskDependency'> | number;
      taskId?: IntFilter<'TaskDependency'> | number;
      dependsOnId?: IntFilter<'TaskDependency'> | number;
      createdAt?: DateTimeFilter<'TaskDependency'> | Date | string;
   };

   export type TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = {
      where: TaskDependencyWhereUniqueInput;
      update: XOR<
         TaskDependencyUpdateWithoutDependsOnInput,
         TaskDependencyUncheckedUpdateWithoutDependsOnInput
      >;
      create: XOR<
         TaskDependencyCreateWithoutDependsOnInput,
         TaskDependencyUncheckedCreateWithoutDependsOnInput
      >;
   };

   export type TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = {
      where: TaskDependencyWhereUniqueInput;
      data: XOR<
         TaskDependencyUpdateWithoutDependsOnInput,
         TaskDependencyUncheckedUpdateWithoutDependsOnInput
      >;
   };

   export type TaskDependencyUpdateManyWithWhereWithoutDependsOnInput = {
      where: TaskDependencyScalarWhereInput;
      data: XOR<
         TaskDependencyUpdateManyMutationInput,
         TaskDependencyUncheckedUpdateManyWithoutDependsOnInput
      >;
   };

   export type TaskCreateWithoutSubtasksInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput;
      dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskUncheckedCreateWithoutSubtasksInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput;
      dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskCreateOrConnectWithoutSubtasksInput = {
      where: TaskWhereUniqueInput;
      create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>;
   };

   export type TaskUpsertWithoutSubtasksInput = {
      update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>;
      create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>;
      where?: TaskWhereInput;
   };

   export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
      where?: TaskWhereInput;
      data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>;
   };

   export type TaskUpdateWithoutSubtasksInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput;
      dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskUncheckedUpdateWithoutSubtasksInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput;
      dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskCreateWithoutDependenciesInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskCreateNestedManyWithoutParentTaskInput;
      dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskUncheckedCreateWithoutDependenciesInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskUncheckedCreateNestedManyWithoutParentTaskInput;
      dependents?: TaskDependencyUncheckedCreateNestedManyWithoutDependsOnInput;
   };

   export type TaskCreateOrConnectWithoutDependenciesInput = {
      where: TaskWhereUniqueInput;
      create: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>;
   };

   export type TaskCreateWithoutDependentsInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskCreateNestedManyWithoutParentTaskInput;
      dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput;
   };

   export type TaskUncheckedCreateWithoutDependentsInput = {
      id: number;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      priority: string;
      status: string;
      complexity?: number | null;
      createdAt?: Date | string;
      updatedAt?: Date | string;
      subtasks?: SubtaskUncheckedCreateNestedManyWithoutParentTaskInput;
      dependencies?: TaskDependencyUncheckedCreateNestedManyWithoutTaskInput;
   };

   export type TaskCreateOrConnectWithoutDependentsInput = {
      where: TaskWhereUniqueInput;
      create: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>;
   };

   export type TaskUpsertWithoutDependenciesInput = {
      update: XOR<TaskUpdateWithoutDependenciesInput, TaskUncheckedUpdateWithoutDependenciesInput>;
      create: XOR<TaskCreateWithoutDependenciesInput, TaskUncheckedCreateWithoutDependenciesInput>;
      where?: TaskWhereInput;
   };

   export type TaskUpdateToOneWithWhereWithoutDependenciesInput = {
      where?: TaskWhereInput;
      data: XOR<TaskUpdateWithoutDependenciesInput, TaskUncheckedUpdateWithoutDependenciesInput>;
   };

   export type TaskUpdateWithoutDependenciesInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUpdateManyWithoutParentTaskNestedInput;
      dependents?: TaskDependencyUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskUncheckedUpdateWithoutDependenciesInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUncheckedUpdateManyWithoutParentTaskNestedInput;
      dependents?: TaskDependencyUncheckedUpdateManyWithoutDependsOnNestedInput;
   };

   export type TaskUpsertWithoutDependentsInput = {
      update: XOR<TaskUpdateWithoutDependentsInput, TaskUncheckedUpdateWithoutDependentsInput>;
      create: XOR<TaskCreateWithoutDependentsInput, TaskUncheckedCreateWithoutDependentsInput>;
      where?: TaskWhereInput;
   };

   export type TaskUpdateToOneWithWhereWithoutDependentsInput = {
      where?: TaskWhereInput;
      data: XOR<TaskUpdateWithoutDependentsInput, TaskUncheckedUpdateWithoutDependentsInput>;
   };

   export type TaskUpdateWithoutDependentsInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUpdateManyWithoutParentTaskNestedInput;
      dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput;
   };

   export type TaskUncheckedUpdateWithoutDependentsInput = {
      id?: IntFieldUpdateOperationsInput | number;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      priority?: StringFieldUpdateOperationsInput | string;
      status?: StringFieldUpdateOperationsInput | string;
      complexity?: NullableIntFieldUpdateOperationsInput | number | null;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      subtasks?: SubtaskUncheckedUpdateManyWithoutParentTaskNestedInput;
      dependencies?: TaskDependencyUncheckedUpdateManyWithoutTaskNestedInput;
   };

   export type SubtaskCreateManyParentTaskInput = {
      id: string;
      title: string;
      description: string;
      details?: string | null;
      testStrategy?: string | null;
      status: string;
      dependencies?: string;
      createdAt?: Date | string;
      updatedAt?: Date | string;
   };

   export type TaskDependencyCreateManyTaskInput = {
      id?: number;
      dependsOnId: number;
      createdAt?: Date | string;
   };

   export type TaskDependencyCreateManyDependsOnInput = {
      id?: number;
      taskId: number;
      createdAt?: Date | string;
   };

   export type SubtaskUpdateWithoutParentTaskInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SubtaskUncheckedUpdateWithoutParentTaskInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type SubtaskUncheckedUpdateManyWithoutParentTaskInput = {
      id?: StringFieldUpdateOperationsInput | string;
      title?: StringFieldUpdateOperationsInput | string;
      description?: StringFieldUpdateOperationsInput | string;
      details?: NullableStringFieldUpdateOperationsInput | string | null;
      testStrategy?: NullableStringFieldUpdateOperationsInput | string | null;
      status?: StringFieldUpdateOperationsInput | string;
      dependencies?: StringFieldUpdateOperationsInput | string;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyUpdateWithoutTaskInput = {
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput;
   };

   export type TaskDependencyUncheckedUpdateWithoutTaskInput = {
      id?: IntFieldUpdateOperationsInput | number;
      dependsOnId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyUncheckedUpdateManyWithoutTaskInput = {
      id?: IntFieldUpdateOperationsInput | number;
      dependsOnId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyUpdateWithoutDependsOnInput = {
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput;
   };

   export type TaskDependencyUncheckedUpdateWithoutDependsOnInput = {
      id?: IntFieldUpdateOperationsInput | number;
      taskId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   export type TaskDependencyUncheckedUpdateManyWithoutDependsOnInput = {
      id?: IntFieldUpdateOperationsInput | number;
      taskId?: IntFieldUpdateOperationsInput | number;
      createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
   };

   /**
    * Batch Payload for updateMany & deleteMany & createMany
    */

   export type BatchPayload = {
      count: number;
   };

   /**
    * DMMF
    */
   export const dmmf: runtime.BaseDMMF;
}
