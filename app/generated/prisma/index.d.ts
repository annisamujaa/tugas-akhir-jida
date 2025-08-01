
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model otps
 * 
 */
export type otps = $Result.DefaultSelection<Prisma.$otpsPayload>
/**
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model keranjang
 * 
 */
export type keranjang = $Result.DefaultSelection<Prisma.$keranjangPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model orderItems
 * 
 */
export type orderItems = $Result.DefaultSelection<Prisma.$orderItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otps`: Exposes CRUD operations for the **otps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otps.findMany()
    * ```
    */
  get otps(): Prisma.otpsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keranjang`: Exposes CRUD operations for the **keranjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keranjangs
    * const keranjangs = await prisma.keranjang.findMany()
    * ```
    */
  get keranjang(): Prisma.keranjangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **orderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.orderItemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    otps: 'otps',
    menu: 'menu',
    keranjang: 'keranjang',
    order: 'order',
    orderItems: 'orderItems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "otps" | "menu" | "keranjang" | "order" | "orderItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      otps: {
        payload: Prisma.$otpsPayload<ExtArgs>
        fields: Prisma.otpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          findFirst: {
            args: Prisma.otpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          findMany: {
            args: Prisma.otpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>[]
          }
          create: {
            args: Prisma.otpsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          createMany: {
            args: Prisma.otpsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otpsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>[]
          }
          delete: {
            args: Prisma.otpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          update: {
            args: Prisma.otpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          deleteMany: {
            args: Prisma.otpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>[]
          }
          upsert: {
            args: Prisma.otpsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpsPayload>
          }
          aggregate: {
            args: Prisma.OtpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtps>
          }
          groupBy: {
            args: Prisma.otpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpsCountArgs<ExtArgs>
            result: $Utils.Optional<OtpsCountAggregateOutputType> | number
          }
        }
      }
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      keranjang: {
        payload: Prisma.$keranjangPayload<ExtArgs>
        fields: Prisma.keranjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.keranjangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.keranjangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findFirst: {
            args: Prisma.keranjangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.keranjangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findMany: {
            args: Prisma.keranjangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>[]
          }
          create: {
            args: Prisma.keranjangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          createMany: {
            args: Prisma.keranjangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.keranjangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>[]
          }
          delete: {
            args: Prisma.keranjangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          update: {
            args: Prisma.keranjangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          deleteMany: {
            args: Prisma.keranjangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.keranjangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.keranjangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>[]
          }
          upsert: {
            args: Prisma.keranjangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          aggregate: {
            args: Prisma.KeranjangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeranjang>
          }
          groupBy: {
            args: Prisma.keranjangGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeranjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.keranjangCountArgs<ExtArgs>
            result: $Utils.Optional<KeranjangCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      orderItems: {
        payload: Prisma.$orderItemsPayload<ExtArgs>
        fields: Prisma.orderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          findFirst: {
            args: Prisma.orderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          findMany: {
            args: Prisma.orderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>[]
          }
          create: {
            args: Prisma.orderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          createMany: {
            args: Prisma.orderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>[]
          }
          delete: {
            args: Prisma.orderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          update: {
            args: Prisma.orderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          deleteMany: {
            args: Prisma.orderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>[]
          }
          upsert: {
            args: Prisma.orderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.orderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    otps?: otpsOmit
    menu?: menuOmit
    keranjang?: keranjangOmit
    order?: orderOmit
    orderItems?: orderItemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    otps: number
    keranjang: number
    order: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | UsersCountOutputTypeCountOtpsArgs
    keranjang?: boolean | UsersCountOutputTypeCountKeranjangArgs
    order?: boolean | UsersCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    keranjang: number
    orderItems: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | MenuCountOutputTypeCountKeranjangArgs
    orderItems?: boolean | MenuCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: string
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otps?: boolean | users$otpsArgs<ExtArgs>
    keranjang?: boolean | users$keranjangArgs<ExtArgs>
    order?: boolean | users$orderArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | users$otpsArgs<ExtArgs>
    keranjang?: boolean | users$keranjangArgs<ExtArgs>
    order?: boolean | users$orderArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      otps: Prisma.$otpsPayload<ExtArgs>[]
      keranjang: Prisma.$keranjangPayload<ExtArgs>[]
      order: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: string
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    otps<T extends users$otpsArgs<ExtArgs> = {}>(args?: Subset<T, users$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keranjang<T extends users$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, users$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends users$orderArgs<ExtArgs> = {}>(args?: Subset<T, users$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly verifiedAt: FieldRef<"users", 'DateTime'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.otps
   */
  export type users$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    where?: otpsWhereInput
    orderBy?: otpsOrderByWithRelationInput | otpsOrderByWithRelationInput[]
    cursor?: otpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpsScalarFieldEnum | OtpsScalarFieldEnum[]
  }

  /**
   * users.keranjang
   */
  export type users$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    cursor?: keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * users.order
   */
  export type users$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model otps
   */

  export type AggregateOtps = {
    _count: OtpsCountAggregateOutputType | null
    _min: OtpsMinAggregateOutputType | null
    _max: OtpsMaxAggregateOutputType | null
  }

  export type OtpsMinAggregateOutputType = {
    id: string | null
    code: string | null
    expiry: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    expiry: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpsCountAggregateOutputType = {
    id: number
    code: number
    expiry: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtpsMinAggregateInputType = {
    id?: true
    code?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpsMaxAggregateInputType = {
    id?: true
    code?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpsCountAggregateInputType = {
    id?: true
    code?: true
    expiry?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to aggregate.
     */
    where?: otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpsOrderByWithRelationInput | otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otps
    **/
    _count?: true | OtpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpsMaxAggregateInputType
  }

  export type GetOtpsAggregateType<T extends OtpsAggregateArgs> = {
        [P in keyof T & keyof AggregateOtps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtps[P]>
      : GetScalarType<T[P], AggregateOtps[P]>
  }




  export type otpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpsWhereInput
    orderBy?: otpsOrderByWithAggregationInput | otpsOrderByWithAggregationInput[]
    by: OtpsScalarFieldEnum[] | OtpsScalarFieldEnum
    having?: otpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpsCountAggregateInputType | true
    _min?: OtpsMinAggregateInputType
    _max?: OtpsMaxAggregateInputType
  }

  export type OtpsGroupByOutputType = {
    id: string
    code: string
    expiry: Date
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: OtpsCountAggregateOutputType | null
    _min: OtpsMinAggregateOutputType | null
    _max: OtpsMaxAggregateOutputType | null
  }

  type GetOtpsGroupByPayload<T extends otpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpsGroupByOutputType[P]>
            : GetScalarType<T[P], OtpsGroupByOutputType[P]>
        }
      >
    >


  export type otpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otps"]>

  export type otpsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otps"]>

  export type otpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otps"]>

  export type otpsSelectScalar = {
    id?: boolean
    code?: boolean
    expiry?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type otpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiry" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["otps"]>
  export type otpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type otpsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type otpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $otpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otps"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      expiry: Date
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otps"]>
    composites: {}
  }

  type otpsGetPayload<S extends boolean | null | undefined | otpsDefaultArgs> = $Result.GetResult<Prisma.$otpsPayload, S>

  type otpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpsCountAggregateInputType | true
    }

  export interface otpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otps'], meta: { name: 'otps' } }
    /**
     * Find zero or one Otps that matches the filter.
     * @param {otpsFindUniqueArgs} args - Arguments to find a Otps
     * @example
     * // Get one Otps
     * const otps = await prisma.otps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpsFindUniqueArgs>(args: SelectSubset<T, otpsFindUniqueArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otpsFindUniqueOrThrowArgs} args - Arguments to find a Otps
     * @example
     * // Get one Otps
     * const otps = await prisma.otps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpsFindUniqueOrThrowArgs>(args: SelectSubset<T, otpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsFindFirstArgs} args - Arguments to find a Otps
     * @example
     * // Get one Otps
     * const otps = await prisma.otps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpsFindFirstArgs>(args?: SelectSubset<T, otpsFindFirstArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsFindFirstOrThrowArgs} args - Arguments to find a Otps
     * @example
     * // Get one Otps
     * const otps = await prisma.otps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpsFindFirstOrThrowArgs>(args?: SelectSubset<T, otpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otps.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpsWithIdOnly = await prisma.otps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otpsFindManyArgs>(args?: SelectSubset<T, otpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otps.
     * @param {otpsCreateArgs} args - Arguments to create a Otps.
     * @example
     * // Create one Otps
     * const Otps = await prisma.otps.create({
     *   data: {
     *     // ... data to create a Otps
     *   }
     * })
     * 
     */
    create<T extends otpsCreateArgs>(args: SelectSubset<T, otpsCreateArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {otpsCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otps = await prisma.otps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpsCreateManyArgs>(args?: SelectSubset<T, otpsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {otpsCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otps = await prisma.otps.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpsWithIdOnly = await prisma.otps.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otpsCreateManyAndReturnArgs>(args?: SelectSubset<T, otpsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otps.
     * @param {otpsDeleteArgs} args - Arguments to delete one Otps.
     * @example
     * // Delete one Otps
     * const Otps = await prisma.otps.delete({
     *   where: {
     *     // ... filter to delete one Otps
     *   }
     * })
     * 
     */
    delete<T extends otpsDeleteArgs>(args: SelectSubset<T, otpsDeleteArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otps.
     * @param {otpsUpdateArgs} args - Arguments to update one Otps.
     * @example
     * // Update one Otps
     * const otps = await prisma.otps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpsUpdateArgs>(args: SelectSubset<T, otpsUpdateArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {otpsDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpsDeleteManyArgs>(args?: SelectSubset<T, otpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otps = await prisma.otps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpsUpdateManyArgs>(args: SelectSubset<T, otpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {otpsUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otps = await prisma.otps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpsWithIdOnly = await prisma.otps.updateManyAndReturn({
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
    updateManyAndReturn<T extends otpsUpdateManyAndReturnArgs>(args: SelectSubset<T, otpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otps.
     * @param {otpsUpsertArgs} args - Arguments to update or create a Otps.
     * @example
     * // Update or create a Otps
     * const otps = await prisma.otps.upsert({
     *   create: {
     *     // ... data to create a Otps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otps we want to update
     *   }
     * })
     */
    upsert<T extends otpsUpsertArgs>(args: SelectSubset<T, otpsUpsertArgs<ExtArgs>>): Prisma__otpsClient<$Result.GetResult<Prisma.$otpsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otps.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends otpsCountArgs>(
      args?: Subset<T, otpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpsAggregateArgs>(args: Subset<T, OtpsAggregateArgs>): Prisma.PrismaPromise<GetOtpsAggregateType<T>>

    /**
     * Group by Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpsGroupByArgs} args - Group by arguments.
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
      T extends otpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpsGroupByArgs['orderBy'] }
        : { orderBy?: otpsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otps model
   */
  readonly fields: otpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otps model
   */
  interface otpsFieldRefs {
    readonly id: FieldRef<"otps", 'String'>
    readonly code: FieldRef<"otps", 'String'>
    readonly expiry: FieldRef<"otps", 'DateTime'>
    readonly userId: FieldRef<"otps", 'String'>
    readonly createdAt: FieldRef<"otps", 'DateTime'>
    readonly updatedAt: FieldRef<"otps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * otps findUnique
   */
  export type otpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where: otpsWhereUniqueInput
  }

  /**
   * otps findUniqueOrThrow
   */
  export type otpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where: otpsWhereUniqueInput
  }

  /**
   * otps findFirst
   */
  export type otpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpsOrderByWithRelationInput | otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpsScalarFieldEnum | OtpsScalarFieldEnum[]
  }

  /**
   * otps findFirstOrThrow
   */
  export type otpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpsOrderByWithRelationInput | otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpsScalarFieldEnum | OtpsScalarFieldEnum[]
  }

  /**
   * otps findMany
   */
  export type otpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpsOrderByWithRelationInput | otpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otps.
     */
    cursor?: otpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    distinct?: OtpsScalarFieldEnum | OtpsScalarFieldEnum[]
  }

  /**
   * otps create
   */
  export type otpsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * The data needed to create a otps.
     */
    data: XOR<otpsCreateInput, otpsUncheckedCreateInput>
  }

  /**
   * otps createMany
   */
  export type otpsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otps.
     */
    data: otpsCreateManyInput | otpsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otps createManyAndReturn
   */
  export type otpsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * The data used to create many otps.
     */
    data: otpsCreateManyInput | otpsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * otps update
   */
  export type otpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * The data needed to update a otps.
     */
    data: XOR<otpsUpdateInput, otpsUncheckedUpdateInput>
    /**
     * Choose, which otps to update.
     */
    where: otpsWhereUniqueInput
  }

  /**
   * otps updateMany
   */
  export type otpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otps.
     */
    data: XOR<otpsUpdateManyMutationInput, otpsUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpsWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otps updateManyAndReturn
   */
  export type otpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * The data used to update otps.
     */
    data: XOR<otpsUpdateManyMutationInput, otpsUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpsWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * otps upsert
   */
  export type otpsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * The filter to search for the otps to update in case it exists.
     */
    where: otpsWhereUniqueInput
    /**
     * In case the otps found by the `where` argument doesn't exist, create a new otps with this data.
     */
    create: XOR<otpsCreateInput, otpsUncheckedCreateInput>
    /**
     * In case the otps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpsUpdateInput, otpsUncheckedUpdateInput>
  }

  /**
   * otps delete
   */
  export type otpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
    /**
     * Filter which otps to delete.
     */
    where: otpsWhereUniqueInput
  }

  /**
   * otps deleteMany
   */
  export type otpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to delete
     */
    where?: otpsWhereInput
    /**
     * Limit how many otps to delete.
     */
    limit?: number
  }

  /**
   * otps without action
   */
  export type otpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otps
     */
    select?: otpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otps
     */
    omit?: otpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpsInclude<ExtArgs> | null
  }


  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    price: number | null
  }

  export type MenuSumAggregateOutputType = {
    price: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    category: string | null
    image: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    category: string | null
    image: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    category: number
    image: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    price?: true
  }

  export type MenuSumAggregateInputType = {
    price?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    image?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    image?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    category?: true
    image?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: string
    name: string
    price: number
    description: string
    category: string
    image: string
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    keranjang?: boolean | menu$keranjangArgs<ExtArgs>
    orderItems?: boolean | menu$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
  }, ExtArgs["result"]["menu"]>

  export type menuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
  }, ExtArgs["result"]["menu"]>

  export type menuSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "category" | "image", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | menu$keranjangArgs<ExtArgs>
    orderItems?: boolean | menu$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type menuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      keranjang: Prisma.$keranjangPayload<ExtArgs>[]
      orderItems: Prisma.$orderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      description: string
      category: string
      image: string
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {menuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menuCreateManyAndReturnArgs>(args?: SelectSubset<T, menuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {menuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
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
    updateManyAndReturn<T extends menuUpdateManyAndReturnArgs>(args: SelectSubset<T, menuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
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
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends menu$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, menu$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends menu$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, menu$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'String'>
    readonly name: FieldRef<"menu", 'String'>
    readonly price: FieldRef<"menu", 'Float'>
    readonly description: FieldRef<"menu", 'String'>
    readonly category: FieldRef<"menu", 'String'>
    readonly image: FieldRef<"menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu createManyAndReturn
   */
  export type menuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu updateManyAndReturn
   */
  export type menuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.keranjang
   */
  export type menu$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    cursor?: keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * menu.orderItems
   */
  export type menu$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model keranjang
   */

  export type AggregateKeranjang = {
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  export type KeranjangAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type KeranjangSumAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type KeranjangMinAggregateOutputType = {
    id: string | null
    userId: string | null
    menuId: string | null
    size: string | null
    quantity: number | null
    extraCheese: boolean | null
    totalPrice: number | null
  }

  export type KeranjangMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    menuId: string | null
    size: string | null
    quantity: number | null
    extraCheese: boolean | null
    totalPrice: number | null
  }

  export type KeranjangCountAggregateOutputType = {
    id: number
    userId: number
    menuId: number
    size: number
    quantity: number
    extraCheese: number
    totalPrice: number
    _all: number
  }


  export type KeranjangAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type KeranjangSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type KeranjangMinAggregateInputType = {
    id?: true
    userId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    totalPrice?: true
  }

  export type KeranjangMaxAggregateInputType = {
    id?: true
    userId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    totalPrice?: true
  }

  export type KeranjangCountAggregateInputType = {
    id?: true
    userId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    totalPrice?: true
    _all?: true
  }

  export type KeranjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjang to aggregate.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned keranjangs
    **/
    _count?: true | KeranjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeranjangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeranjangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeranjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeranjangMaxAggregateInputType
  }

  export type GetKeranjangAggregateType<T extends KeranjangAggregateArgs> = {
        [P in keyof T & keyof AggregateKeranjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeranjang[P]>
      : GetScalarType<T[P], AggregateKeranjang[P]>
  }




  export type keranjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithAggregationInput | keranjangOrderByWithAggregationInput[]
    by: KeranjangScalarFieldEnum[] | KeranjangScalarFieldEnum
    having?: keranjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeranjangCountAggregateInputType | true
    _avg?: KeranjangAvgAggregateInputType
    _sum?: KeranjangSumAggregateInputType
    _min?: KeranjangMinAggregateInputType
    _max?: KeranjangMaxAggregateInputType
  }

  export type KeranjangGroupByOutputType = {
    id: string
    userId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  type GetKeranjangGroupByPayload<T extends keranjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeranjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeranjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
            : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
        }
      >
    >


  export type keranjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    totalPrice?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>

  export type keranjangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    totalPrice?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>

  export type keranjangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    totalPrice?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>

  export type keranjangSelectScalar = {
    id?: boolean
    userId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    totalPrice?: boolean
  }

  export type keranjangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "menuId" | "size" | "quantity" | "extraCheese" | "totalPrice", ExtArgs["result"]["keranjang"]>
  export type keranjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type keranjangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type keranjangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $keranjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "keranjang"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      menuId: string
      size: string
      quantity: number
      extraCheese: boolean
      totalPrice: number
    }, ExtArgs["result"]["keranjang"]>
    composites: {}
  }

  type keranjangGetPayload<S extends boolean | null | undefined | keranjangDefaultArgs> = $Result.GetResult<Prisma.$keranjangPayload, S>

  type keranjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<keranjangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeranjangCountAggregateInputType | true
    }

  export interface keranjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['keranjang'], meta: { name: 'keranjang' } }
    /**
     * Find zero or one Keranjang that matches the filter.
     * @param {keranjangFindUniqueArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends keranjangFindUniqueArgs>(args: SelectSubset<T, keranjangFindUniqueArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keranjang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {keranjangFindUniqueOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends keranjangFindUniqueOrThrowArgs>(args: SelectSubset<T, keranjangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends keranjangFindFirstArgs>(args?: SelectSubset<T, keranjangFindFirstArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends keranjangFindFirstOrThrowArgs>(args?: SelectSubset<T, keranjangFindFirstOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keranjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keranjangs
     * const keranjangs = await prisma.keranjang.findMany()
     * 
     * // Get first 10 Keranjangs
     * const keranjangs = await prisma.keranjang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keranjangWithIdOnly = await prisma.keranjang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends keranjangFindManyArgs>(args?: SelectSubset<T, keranjangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keranjang.
     * @param {keranjangCreateArgs} args - Arguments to create a Keranjang.
     * @example
     * // Create one Keranjang
     * const Keranjang = await prisma.keranjang.create({
     *   data: {
     *     // ... data to create a Keranjang
     *   }
     * })
     * 
     */
    create<T extends keranjangCreateArgs>(args: SelectSubset<T, keranjangCreateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keranjangs.
     * @param {keranjangCreateManyArgs} args - Arguments to create many Keranjangs.
     * @example
     * // Create many Keranjangs
     * const keranjang = await prisma.keranjang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends keranjangCreateManyArgs>(args?: SelectSubset<T, keranjangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keranjangs and returns the data saved in the database.
     * @param {keranjangCreateManyAndReturnArgs} args - Arguments to create many Keranjangs.
     * @example
     * // Create many Keranjangs
     * const keranjang = await prisma.keranjang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keranjangs and only return the `id`
     * const keranjangWithIdOnly = await prisma.keranjang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends keranjangCreateManyAndReturnArgs>(args?: SelectSubset<T, keranjangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keranjang.
     * @param {keranjangDeleteArgs} args - Arguments to delete one Keranjang.
     * @example
     * // Delete one Keranjang
     * const Keranjang = await prisma.keranjang.delete({
     *   where: {
     *     // ... filter to delete one Keranjang
     *   }
     * })
     * 
     */
    delete<T extends keranjangDeleteArgs>(args: SelectSubset<T, keranjangDeleteArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keranjang.
     * @param {keranjangUpdateArgs} args - Arguments to update one Keranjang.
     * @example
     * // Update one Keranjang
     * const keranjang = await prisma.keranjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends keranjangUpdateArgs>(args: SelectSubset<T, keranjangUpdateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keranjangs.
     * @param {keranjangDeleteManyArgs} args - Arguments to filter Keranjangs to delete.
     * @example
     * // Delete a few Keranjangs
     * const { count } = await prisma.keranjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends keranjangDeleteManyArgs>(args?: SelectSubset<T, keranjangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keranjangs
     * const keranjang = await prisma.keranjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends keranjangUpdateManyArgs>(args: SelectSubset<T, keranjangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keranjangs and returns the data updated in the database.
     * @param {keranjangUpdateManyAndReturnArgs} args - Arguments to update many Keranjangs.
     * @example
     * // Update many Keranjangs
     * const keranjang = await prisma.keranjang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keranjangs and only return the `id`
     * const keranjangWithIdOnly = await prisma.keranjang.updateManyAndReturn({
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
    updateManyAndReturn<T extends keranjangUpdateManyAndReturnArgs>(args: SelectSubset<T, keranjangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keranjang.
     * @param {keranjangUpsertArgs} args - Arguments to update or create a Keranjang.
     * @example
     * // Update or create a Keranjang
     * const keranjang = await prisma.keranjang.upsert({
     *   create: {
     *     // ... data to create a Keranjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keranjang we want to update
     *   }
     * })
     */
    upsert<T extends keranjangUpsertArgs>(args: SelectSubset<T, keranjangUpsertArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangCountArgs} args - Arguments to filter Keranjangs to count.
     * @example
     * // Count the number of Keranjangs
     * const count = await prisma.keranjang.count({
     *   where: {
     *     // ... the filter for the Keranjangs we want to count
     *   }
     * })
    **/
    count<T extends keranjangCountArgs>(
      args?: Subset<T, keranjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeranjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeranjangAggregateArgs>(args: Subset<T, KeranjangAggregateArgs>): Prisma.PrismaPromise<GetKeranjangAggregateType<T>>

    /**
     * Group by Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangGroupByArgs} args - Group by arguments.
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
      T extends keranjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: keranjangGroupByArgs['orderBy'] }
        : { orderBy?: keranjangGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, keranjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeranjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the keranjang model
   */
  readonly fields: keranjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for keranjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__keranjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the keranjang model
   */
  interface keranjangFieldRefs {
    readonly id: FieldRef<"keranjang", 'String'>
    readonly userId: FieldRef<"keranjang", 'String'>
    readonly menuId: FieldRef<"keranjang", 'String'>
    readonly size: FieldRef<"keranjang", 'String'>
    readonly quantity: FieldRef<"keranjang", 'Int'>
    readonly extraCheese: FieldRef<"keranjang", 'Boolean'>
    readonly totalPrice: FieldRef<"keranjang", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * keranjang findUnique
   */
  export type keranjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findUniqueOrThrow
   */
  export type keranjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findFirst
   */
  export type keranjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findFirstOrThrow
   */
  export type keranjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findMany
   */
  export type keranjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjangs to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang create
   */
  export type keranjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to create a keranjang.
     */
    data: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
  }

  /**
   * keranjang createMany
   */
  export type keranjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many keranjangs.
     */
    data: keranjangCreateManyInput | keranjangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * keranjang createManyAndReturn
   */
  export type keranjangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * The data used to create many keranjangs.
     */
    data: keranjangCreateManyInput | keranjangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * keranjang update
   */
  export type keranjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to update a keranjang.
     */
    data: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
    /**
     * Choose, which keranjang to update.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang updateMany
   */
  export type keranjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update keranjangs.
     */
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyInput>
    /**
     * Filter which keranjangs to update
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to update.
     */
    limit?: number
  }

  /**
   * keranjang updateManyAndReturn
   */
  export type keranjangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * The data used to update keranjangs.
     */
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyInput>
    /**
     * Filter which keranjangs to update
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * keranjang upsert
   */
  export type keranjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The filter to search for the keranjang to update in case it exists.
     */
    where: keranjangWhereUniqueInput
    /**
     * In case the keranjang found by the `where` argument doesn't exist, create a new keranjang with this data.
     */
    create: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
    /**
     * In case the keranjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
  }

  /**
   * keranjang delete
   */
  export type keranjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter which keranjang to delete.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang deleteMany
   */
  export type keranjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjangs to delete
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to delete.
     */
    limit?: number
  }

  /**
   * keranjang without action
   */
  export type keranjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nama: string | null
    email: string | null
    noHp: string | null
    alamat: string | null
    metode: string | null
    paymentMethod: string | null
    paymentDetail: string | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nama: string | null
    email: string | null
    noHp: string | null
    alamat: string | null
    metode: string | null
    paymentMethod: string | null
    paymentDetail: string | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    nama: number
    email: number
    noHp: number
    alamat: number
    metode: number
    paymentMethod: number
    paymentDetail: number
    total: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    email?: true
    noHp?: true
    alamat?: true
    metode?: true
    paymentMethod?: true
    paymentDetail?: true
    total?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    email?: true
    noHp?: true
    alamat?: true
    metode?: true
    paymentMethod?: true
    paymentDetail?: true
    total?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    email?: true
    noHp?: true
    alamat?: true
    metode?: true
    paymentMethod?: true
    paymentDetail?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod: string | null
    paymentDetail: string | null
    total: number | null
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    alamat?: boolean
    metode?: boolean
    paymentMethod?: boolean
    paymentDetail?: boolean
    total?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    alamat?: boolean
    metode?: boolean
    paymentMethod?: boolean
    paymentDetail?: boolean
    total?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    alamat?: boolean
    metode?: boolean
    paymentMethod?: boolean
    paymentDetail?: boolean
    total?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
    userId?: boolean
    nama?: boolean
    email?: boolean
    noHp?: boolean
    alamat?: boolean
    metode?: boolean
    paymentMethod?: boolean
    paymentDetail?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nama" | "email" | "noHp" | "alamat" | "metode" | "paymentMethod" | "paymentDetail" | "total" | "createdAt", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    items?: boolean | order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      items: Prisma.$orderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nama: string
      email: string
      noHp: string
      alamat: string
      metode: string
      paymentMethod: string | null
      paymentDetail: string | null
      total: number | null
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
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
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
    readonly userId: FieldRef<"order", 'String'>
    readonly nama: FieldRef<"order", 'String'>
    readonly email: FieldRef<"order", 'String'>
    readonly noHp: FieldRef<"order", 'String'>
    readonly alamat: FieldRef<"order", 'String'>
    readonly metode: FieldRef<"order", 'String'>
    readonly paymentMethod: FieldRef<"order", 'String'>
    readonly paymentDetail: FieldRef<"order", 'String'>
    readonly total: FieldRef<"order", 'Float'>
    readonly createdAt: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.items
   */
  export type order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model orderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuId: string | null
    size: string | null
    quantity: number | null
    extraCheese: boolean | null
    subtotal: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuId: string | null
    size: string | null
    quantity: number | null
    extraCheese: boolean | null
    subtotal: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    orderId: number
    menuId: number
    size: number
    quantity: number
    extraCheese: number
    subtotal: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    quantity?: true
    subtotal?: true
  }

  export type OrderItemsSumAggregateInputType = {
    quantity?: true
    subtotal?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    subtotal?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    subtotal?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    size?: true
    quantity?: true
    extraCheese?: true
    subtotal?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to aggregate.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type orderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemsWhereInput
    orderBy?: orderItemsOrderByWithAggregationInput | orderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: orderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: string
    orderId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends orderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type orderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    subtotal?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type orderItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    subtotal?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type orderItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    subtotal?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>

  export type orderItemsSelectScalar = {
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    size?: boolean
    quantity?: boolean
    extraCheese?: boolean
    subtotal?: boolean
  }

  export type orderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "menuId" | "size" | "quantity" | "extraCheese" | "subtotal", ExtArgs["result"]["orderItems"]>
  export type orderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type orderItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type orderItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $orderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderItems"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      menuId: string
      size: string
      quantity: number
      extraCheese: boolean
      subtotal: number
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type orderItemsGetPayload<S extends boolean | null | undefined | orderItemsDefaultArgs> = $Result.GetResult<Prisma.$orderItemsPayload, S>

  type orderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface orderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderItems'], meta: { name: 'orderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {orderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderItemsFindUniqueArgs>(args: SelectSubset<T, orderItemsFindUniqueArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, orderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderItemsFindFirstArgs>(args?: SelectSubset<T, orderItemsFindFirstArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, orderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderItemsFindManyArgs>(args?: SelectSubset<T, orderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {orderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends orderItemsCreateArgs>(args: SelectSubset<T, orderItemsCreateArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {orderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderItemsCreateManyArgs>(args?: SelectSubset<T, orderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {orderItemsCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, orderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItems.
     * @param {orderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends orderItemsDeleteArgs>(args: SelectSubset<T, orderItemsDeleteArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {orderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderItemsUpdateArgs>(args: SelectSubset<T, orderItemsUpdateArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderItemsDeleteManyArgs>(args?: SelectSubset<T, orderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderItemsUpdateManyArgs>(args: SelectSubset<T, orderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {orderItemsUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.updateManyAndReturn({
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
    updateManyAndReturn<T extends orderItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, orderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItems.
     * @param {orderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends orderItemsUpsertArgs>(args: SelectSubset<T, orderItemsUpsertArgs<ExtArgs>>): Prisma__orderItemsClient<$Result.GetResult<Prisma.$orderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemsCountArgs>(
      args?: Subset<T, orderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsGroupByArgs} args - Group by arguments.
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
      T extends orderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderItemsGroupByArgs['orderBy'] }
        : { orderBy?: orderItemsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderItems model
   */
  readonly fields: orderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderItems model
   */
  interface orderItemsFieldRefs {
    readonly id: FieldRef<"orderItems", 'String'>
    readonly orderId: FieldRef<"orderItems", 'String'>
    readonly menuId: FieldRef<"orderItems", 'String'>
    readonly size: FieldRef<"orderItems", 'String'>
    readonly quantity: FieldRef<"orderItems", 'Int'>
    readonly extraCheese: FieldRef<"orderItems", 'Boolean'>
    readonly subtotal: FieldRef<"orderItems", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * orderItems findUnique
   */
  export type orderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }

  /**
   * orderItems findUniqueOrThrow
   */
  export type orderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }

  /**
   * orderItems findFirst
   */
  export type orderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * orderItems findFirstOrThrow
   */
  export type orderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * orderItems findMany
   */
  export type orderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemsOrderByWithRelationInput | orderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * orderItems create
   */
  export type orderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a orderItems.
     */
    data: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
  }

  /**
   * orderItems createMany
   */
  export type orderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderItems.
     */
    data: orderItemsCreateManyInput | orderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderItems createManyAndReturn
   */
  export type orderItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * The data used to create many orderItems.
     */
    data: orderItemsCreateManyInput | orderItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItems update
   */
  export type orderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a orderItems.
     */
    data: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
    /**
     * Choose, which orderItems to update.
     */
    where: orderItemsWhereUniqueInput
  }

  /**
   * orderItems updateMany
   */
  export type orderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemsWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
  }

  /**
   * orderItems updateManyAndReturn
   */
  export type orderItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemsWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItems upsert
   */
  export type orderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the orderItems to update in case it exists.
     */
    where: orderItemsWhereUniqueInput
    /**
     * In case the orderItems found by the `where` argument doesn't exist, create a new orderItems with this data.
     */
    create: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
    /**
     * In case the orderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
  }

  /**
   * orderItems delete
   */
  export type orderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
    /**
     * Filter which orderItems to delete.
     */
    where: orderItemsWhereUniqueInput
  }

  /**
   * orderItems deleteMany
   */
  export type orderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemsWhereInput
    /**
     * Limit how many orderItems to delete.
     */
    limit?: number
  }

  /**
   * orderItems without action
   */
  export type orderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItems
     */
    omit?: orderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OtpsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiry: 'expiry',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtpsScalarFieldEnum = (typeof OtpsScalarFieldEnum)[keyof typeof OtpsScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    category: 'category',
    image: 'image'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const KeranjangScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    menuId: 'menuId',
    size: 'size',
    quantity: 'quantity',
    extraCheese: 'extraCheese',
    totalPrice: 'totalPrice'
  };

  export type KeranjangScalarFieldEnum = (typeof KeranjangScalarFieldEnum)[keyof typeof KeranjangScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nama: 'nama',
    email: 'email',
    noHp: 'noHp',
    alamat: 'alamat',
    metode: 'metode',
    paymentMethod: 'paymentMethod',
    paymentDetail: 'paymentDetail',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    menuId: 'menuId',
    size: 'size',
    quantity: 'quantity',
    extraCheese: 'extraCheese',
    subtotal: 'subtotal'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    verifiedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    otps?: OtpsListRelationFilter
    keranjang?: KeranjangListRelationFilter
    order?: OrderListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otps?: otpsOrderByRelationAggregateInput
    keranjang?: keranjangOrderByRelationAggregateInput
    order?: orderOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    verifiedAt?: DateTimeNullableFilter<"users"> | Date | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    otps?: OtpsListRelationFilter
    keranjang?: KeranjangListRelationFilter
    order?: OrderListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type otpsWhereInput = {
    AND?: otpsWhereInput | otpsWhereInput[]
    OR?: otpsWhereInput[]
    NOT?: otpsWhereInput | otpsWhereInput[]
    id?: StringFilter<"otps"> | string
    code?: StringFilter<"otps"> | string
    expiry?: DateTimeFilter<"otps"> | Date | string
    userId?: StringFilter<"otps"> | string
    createdAt?: DateTimeFilter<"otps"> | Date | string
    updatedAt?: DateTimeFilter<"otps"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type otpsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type otpsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: otpsWhereInput | otpsWhereInput[]
    OR?: otpsWhereInput[]
    NOT?: otpsWhereInput | otpsWhereInput[]
    code?: StringFilter<"otps"> | string
    expiry?: DateTimeFilter<"otps"> | Date | string
    userId?: StringFilter<"otps"> | string
    createdAt?: DateTimeFilter<"otps"> | Date | string
    updatedAt?: DateTimeFilter<"otps"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type otpsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: otpsCountOrderByAggregateInput
    _max?: otpsMaxOrderByAggregateInput
    _min?: otpsMinOrderByAggregateInput
  }

  export type otpsScalarWhereWithAggregatesInput = {
    AND?: otpsScalarWhereWithAggregatesInput | otpsScalarWhereWithAggregatesInput[]
    OR?: otpsScalarWhereWithAggregatesInput[]
    NOT?: otpsScalarWhereWithAggregatesInput | otpsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"otps"> | string
    code?: StringWithAggregatesFilter<"otps"> | string
    expiry?: DateTimeWithAggregatesFilter<"otps"> | Date | string
    userId?: StringWithAggregatesFilter<"otps"> | string
    createdAt?: DateTimeWithAggregatesFilter<"otps"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"otps"> | Date | string
  }

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: StringFilter<"menu"> | string
    name?: StringFilter<"menu"> | string
    price?: FloatFilter<"menu"> | number
    description?: StringFilter<"menu"> | string
    category?: StringFilter<"menu"> | string
    image?: StringFilter<"menu"> | string
    keranjang?: KeranjangListRelationFilter
    orderItems?: OrderItemsListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    keranjang?: keranjangOrderByRelationAggregateInput
    orderItems?: orderItemsOrderByRelationAggregateInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    name?: StringFilter<"menu"> | string
    price?: FloatFilter<"menu"> | number
    description?: StringFilter<"menu"> | string
    category?: StringFilter<"menu"> | string
    image?: StringFilter<"menu"> | string
    keranjang?: KeranjangListRelationFilter
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"menu"> | string
    name?: StringWithAggregatesFilter<"menu"> | string
    price?: FloatWithAggregatesFilter<"menu"> | number
    description?: StringWithAggregatesFilter<"menu"> | string
    category?: StringWithAggregatesFilter<"menu"> | string
    image?: StringWithAggregatesFilter<"menu"> | string
  }

  export type keranjangWhereInput = {
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    id?: StringFilter<"keranjang"> | string
    userId?: StringFilter<"keranjang"> | string
    menuId?: StringFilter<"keranjang"> | string
    size?: StringFilter<"keranjang"> | string
    quantity?: IntFilter<"keranjang"> | number
    extraCheese?: BoolFilter<"keranjang"> | boolean
    totalPrice?: FloatFilter<"keranjang"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type keranjangOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    totalPrice?: SortOrder
    user?: usersOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type keranjangWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    userId?: StringFilter<"keranjang"> | string
    menuId?: StringFilter<"keranjang"> | string
    size?: StringFilter<"keranjang"> | string
    quantity?: IntFilter<"keranjang"> | number
    extraCheese?: BoolFilter<"keranjang"> | boolean
    totalPrice?: FloatFilter<"keranjang"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type keranjangOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    totalPrice?: SortOrder
    _count?: keranjangCountOrderByAggregateInput
    _avg?: keranjangAvgOrderByAggregateInput
    _max?: keranjangMaxOrderByAggregateInput
    _min?: keranjangMinOrderByAggregateInput
    _sum?: keranjangSumOrderByAggregateInput
  }

  export type keranjangScalarWhereWithAggregatesInput = {
    AND?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    OR?: keranjangScalarWhereWithAggregatesInput[]
    NOT?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"keranjang"> | string
    userId?: StringWithAggregatesFilter<"keranjang"> | string
    menuId?: StringWithAggregatesFilter<"keranjang"> | string
    size?: StringWithAggregatesFilter<"keranjang"> | string
    quantity?: IntWithAggregatesFilter<"keranjang"> | number
    extraCheese?: BoolWithAggregatesFilter<"keranjang"> | boolean
    totalPrice?: FloatWithAggregatesFilter<"keranjang"> | number
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringFilter<"order"> | string
    nama?: StringFilter<"order"> | string
    email?: StringFilter<"order"> | string
    noHp?: StringFilter<"order"> | string
    alamat?: StringFilter<"order"> | string
    metode?: StringFilter<"order"> | string
    paymentMethod?: StringNullableFilter<"order"> | string | null
    paymentDetail?: StringNullableFilter<"order"> | string | null
    total?: FloatNullableFilter<"order"> | number | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: OrderItemsListRelationFilter
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    metode?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentDetail?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
    items?: orderItemsOrderByRelationAggregateInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    userId?: StringFilter<"order"> | string
    nama?: StringFilter<"order"> | string
    email?: StringFilter<"order"> | string
    noHp?: StringFilter<"order"> | string
    alamat?: StringFilter<"order"> | string
    metode?: StringFilter<"order"> | string
    paymentMethod?: StringNullableFilter<"order"> | string | null
    paymentDetail?: StringNullableFilter<"order"> | string | null
    total?: FloatNullableFilter<"order"> | number | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    items?: OrderItemsListRelationFilter
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    metode?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentDetail?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
    userId?: StringWithAggregatesFilter<"order"> | string
    nama?: StringWithAggregatesFilter<"order"> | string
    email?: StringWithAggregatesFilter<"order"> | string
    noHp?: StringWithAggregatesFilter<"order"> | string
    alamat?: StringWithAggregatesFilter<"order"> | string
    metode?: StringWithAggregatesFilter<"order"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"order"> | string | null
    paymentDetail?: StringNullableWithAggregatesFilter<"order"> | string | null
    total?: FloatNullableWithAggregatesFilter<"order"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type orderItemsWhereInput = {
    AND?: orderItemsWhereInput | orderItemsWhereInput[]
    OR?: orderItemsWhereInput[]
    NOT?: orderItemsWhereInput | orderItemsWhereInput[]
    id?: StringFilter<"orderItems"> | string
    orderId?: StringFilter<"orderItems"> | string
    menuId?: StringFilter<"orderItems"> | string
    size?: StringFilter<"orderItems"> | string
    quantity?: IntFilter<"orderItems"> | number
    extraCheese?: BoolFilter<"orderItems"> | boolean
    subtotal?: FloatFilter<"orderItems"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type orderItemsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    subtotal?: SortOrder
    order?: orderOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type orderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderItemsWhereInput | orderItemsWhereInput[]
    OR?: orderItemsWhereInput[]
    NOT?: orderItemsWhereInput | orderItemsWhereInput[]
    orderId?: StringFilter<"orderItems"> | string
    menuId?: StringFilter<"orderItems"> | string
    size?: StringFilter<"orderItems"> | string
    quantity?: IntFilter<"orderItems"> | number
    extraCheese?: BoolFilter<"orderItems"> | boolean
    subtotal?: FloatFilter<"orderItems"> | number
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type orderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    subtotal?: SortOrder
    _count?: orderItemsCountOrderByAggregateInput
    _avg?: orderItemsAvgOrderByAggregateInput
    _max?: orderItemsMaxOrderByAggregateInput
    _min?: orderItemsMinOrderByAggregateInput
    _sum?: orderItemsSumOrderByAggregateInput
  }

  export type orderItemsScalarWhereWithAggregatesInput = {
    AND?: orderItemsScalarWhereWithAggregatesInput | orderItemsScalarWhereWithAggregatesInput[]
    OR?: orderItemsScalarWhereWithAggregatesInput[]
    NOT?: orderItemsScalarWhereWithAggregatesInput | orderItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orderItems"> | string
    orderId?: StringWithAggregatesFilter<"orderItems"> | string
    menuId?: StringWithAggregatesFilter<"orderItems"> | string
    size?: StringWithAggregatesFilter<"orderItems"> | string
    quantity?: IntWithAggregatesFilter<"orderItems"> | number
    extraCheese?: BoolWithAggregatesFilter<"orderItems"> | boolean
    subtotal?: FloatWithAggregatesFilter<"orderItems"> | number
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsCreateNestedManyWithoutUserInput
    keranjang?: keranjangCreateNestedManyWithoutUserInput
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsUncheckedCreateNestedManyWithoutUserInput
    keranjang?: keranjangUncheckedCreateNestedManyWithoutUserInput
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUpdateManyWithoutUserNestedInput
    keranjang?: keranjangUpdateManyWithoutUserNestedInput
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUncheckedUpdateManyWithoutUserNestedInput
    keranjang?: keranjangUncheckedUpdateManyWithoutUserNestedInput
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpsCreateInput = {
    id?: string
    code: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutOtpsInput
  }

  export type otpsUncheckedCreateInput = {
    id?: string
    code: string
    expiry: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type otpsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type otpsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpsCreateManyInput = {
    id?: string
    code: string
    expiry: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type otpsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    keranjang?: keranjangCreateNestedManyWithoutMenuInput
    orderItems?: orderItemsCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    keranjang?: keranjangUncheckedCreateNestedManyWithoutMenuInput
    orderItems?: orderItemsUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    keranjang?: keranjangUpdateManyWithoutMenuNestedInput
    orderItems?: orderItemsUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    keranjang?: keranjangUncheckedUpdateManyWithoutMenuNestedInput
    orderItems?: orderItemsUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateManyInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
  }

  export type menuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type menuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type keranjangCreateInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
    user: usersCreateNestedOneWithoutKeranjangInput
    menu: menuCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateInput = {
    id?: string
    userId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type keranjangUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutKeranjangNestedInput
    menu?: menuUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type keranjangCreateManyInput = {
    id?: string
    userId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type keranjangUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type orderCreateInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutOrderInput
    items?: orderItemsCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: string
    userId: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
    items?: orderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOrderNestedInput
    items?: orderItemsUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: string
    userId: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
    order: orderCreateNestedOneWithoutItemsInput
    menu: menuCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemsUncheckedCreateInput = {
    id?: string
    orderId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type orderItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutItemsNestedInput
    menu?: menuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsCreateManyInput = {
    id?: string
    orderId: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type orderItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OtpsListRelationFilter = {
    every?: otpsWhereInput
    some?: otpsWhereInput
    none?: otpsWhereInput
  }

  export type KeranjangListRelationFilter = {
    every?: keranjangWhereInput
    some?: keranjangWhereInput
    none?: keranjangWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type otpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type keranjangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type otpsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type otpsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type otpsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiry?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrderItemsListRelationFilter = {
    every?: orderItemsWhereInput
    some?: orderItemsWhereInput
    none?: orderItemsWhereInput
  }

  export type orderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MenuScalarRelationFilter = {
    is?: menuWhereInput
    isNot?: menuWhereInput
  }

  export type keranjangCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    totalPrice?: SortOrder
  }

  export type keranjangAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type keranjangMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    totalPrice?: SortOrder
  }

  export type keranjangMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    totalPrice?: SortOrder
  }

  export type keranjangSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    metode?: SortOrder
    paymentMethod?: SortOrder
    paymentDetail?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    metode?: SortOrder
    paymentMethod?: SortOrder
    paymentDetail?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    metode?: SortOrder
    paymentMethod?: SortOrder
    paymentDetail?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type orderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    subtotal?: SortOrder
  }

  export type orderItemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type orderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    subtotal?: SortOrder
  }

  export type orderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    extraCheese?: SortOrder
    subtotal?: SortOrder
  }

  export type orderItemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
  }

  export type otpsCreateNestedManyWithoutUserInput = {
    create?: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput> | otpsCreateWithoutUserInput[] | otpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpsCreateOrConnectWithoutUserInput | otpsCreateOrConnectWithoutUserInput[]
    createMany?: otpsCreateManyUserInputEnvelope
    connect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
  }

  export type keranjangCreateNestedManyWithoutUserInput = {
    create?: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput> | keranjangCreateWithoutUserInput[] | keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUserInput | keranjangCreateOrConnectWithoutUserInput[]
    createMany?: keranjangCreateManyUserInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type otpsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput> | otpsCreateWithoutUserInput[] | otpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpsCreateOrConnectWithoutUserInput | otpsCreateOrConnectWithoutUserInput[]
    createMany?: otpsCreateManyUserInputEnvelope
    connect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
  }

  export type keranjangUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput> | keranjangCreateWithoutUserInput[] | keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUserInput | keranjangCreateOrConnectWithoutUserInput[]
    createMany?: keranjangCreateManyUserInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type otpsUpdateManyWithoutUserNestedInput = {
    create?: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput> | otpsCreateWithoutUserInput[] | otpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpsCreateOrConnectWithoutUserInput | otpsCreateOrConnectWithoutUserInput[]
    upsert?: otpsUpsertWithWhereUniqueWithoutUserInput | otpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: otpsCreateManyUserInputEnvelope
    set?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    disconnect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    delete?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    connect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    update?: otpsUpdateWithWhereUniqueWithoutUserInput | otpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: otpsUpdateManyWithWhereWithoutUserInput | otpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: otpsScalarWhereInput | otpsScalarWhereInput[]
  }

  export type keranjangUpdateManyWithoutUserNestedInput = {
    create?: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput> | keranjangCreateWithoutUserInput[] | keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUserInput | keranjangCreateOrConnectWithoutUserInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutUserInput | keranjangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: keranjangCreateManyUserInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutUserInput | keranjangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutUserInput | keranjangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type otpsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput> | otpsCreateWithoutUserInput[] | otpsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpsCreateOrConnectWithoutUserInput | otpsCreateOrConnectWithoutUserInput[]
    upsert?: otpsUpsertWithWhereUniqueWithoutUserInput | otpsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: otpsCreateManyUserInputEnvelope
    set?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    disconnect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    delete?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    connect?: otpsWhereUniqueInput | otpsWhereUniqueInput[]
    update?: otpsUpdateWithWhereUniqueWithoutUserInput | otpsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: otpsUpdateManyWithWhereWithoutUserInput | otpsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: otpsScalarWhereInput | otpsScalarWhereInput[]
  }

  export type keranjangUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput> | keranjangCreateWithoutUserInput[] | keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUserInput | keranjangCreateOrConnectWithoutUserInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutUserInput | keranjangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: keranjangCreateManyUserInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutUserInput | keranjangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutUserInput | keranjangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOtpsInput = {
    create?: XOR<usersCreateWithoutOtpsInput, usersUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<usersCreateWithoutOtpsInput, usersUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpsInput
    upsert?: usersUpsertWithoutOtpsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOtpsInput, usersUpdateWithoutOtpsInput>, usersUncheckedUpdateWithoutOtpsInput>
  }

  export type keranjangCreateNestedManyWithoutMenuInput = {
    create?: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput> | keranjangCreateWithoutMenuInput[] | keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutMenuInput | keranjangCreateOrConnectWithoutMenuInput[]
    createMany?: keranjangCreateManyMenuInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type orderItemsCreateNestedManyWithoutMenuInput = {
    create?: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput> | orderItemsCreateWithoutMenuInput[] | orderItemsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutMenuInput | orderItemsCreateOrConnectWithoutMenuInput[]
    createMany?: orderItemsCreateManyMenuInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type keranjangUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput> | keranjangCreateWithoutMenuInput[] | keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutMenuInput | keranjangCreateOrConnectWithoutMenuInput[]
    createMany?: keranjangCreateManyMenuInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type orderItemsUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput> | orderItemsCreateWithoutMenuInput[] | orderItemsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutMenuInput | orderItemsCreateOrConnectWithoutMenuInput[]
    createMany?: orderItemsCreateManyMenuInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type keranjangUpdateManyWithoutMenuNestedInput = {
    create?: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput> | keranjangCreateWithoutMenuInput[] | keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutMenuInput | keranjangCreateOrConnectWithoutMenuInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutMenuInput | keranjangUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: keranjangCreateManyMenuInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutMenuInput | keranjangUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutMenuInput | keranjangUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type orderItemsUpdateManyWithoutMenuNestedInput = {
    create?: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput> | orderItemsCreateWithoutMenuInput[] | orderItemsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutMenuInput | orderItemsCreateOrConnectWithoutMenuInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutMenuInput | orderItemsUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: orderItemsCreateManyMenuInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutMenuInput | orderItemsUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutMenuInput | orderItemsUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type keranjangUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput> | keranjangCreateWithoutMenuInput[] | keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutMenuInput | keranjangCreateOrConnectWithoutMenuInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutMenuInput | keranjangUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: keranjangCreateManyMenuInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutMenuInput | keranjangUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutMenuInput | keranjangUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type orderItemsUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput> | orderItemsCreateWithoutMenuInput[] | orderItemsUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutMenuInput | orderItemsCreateOrConnectWithoutMenuInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutMenuInput | orderItemsUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: orderItemsCreateManyMenuInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutMenuInput | orderItemsUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutMenuInput | orderItemsUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: usersCreateOrConnectWithoutKeranjangInput
    connect?: usersWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<menuCreateWithoutKeranjangInput, menuUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: menuCreateOrConnectWithoutKeranjangInput
    connect?: menuWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: usersCreateOrConnectWithoutKeranjangInput
    upsert?: usersUpsertWithoutKeranjangInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutKeranjangInput, usersUpdateWithoutKeranjangInput>, usersUncheckedUpdateWithoutKeranjangInput>
  }

  export type menuUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<menuCreateWithoutKeranjangInput, menuUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: menuCreateOrConnectWithoutKeranjangInput
    upsert?: menuUpsertWithoutKeranjangInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutKeranjangInput, menuUpdateWithoutKeranjangInput>, menuUncheckedUpdateWithoutKeranjangInput>
  }

  export type usersCreateNestedOneWithoutOrderInput = {
    create?: XOR<usersCreateWithoutOrderInput, usersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrderInput
    connect?: usersWhereUniqueInput
  }

  export type orderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type orderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<usersCreateWithoutOrderInput, usersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrderInput
    upsert?: usersUpsertWithoutOrderInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrderInput, usersUpdateWithoutOrderInput>, usersUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutOrderInput | orderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutOrderInput | orderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutOrderInput | orderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type orderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput> | orderItemsCreateWithoutOrderInput[] | orderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemsCreateOrConnectWithoutOrderInput | orderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemsUpsertWithWhereUniqueWithoutOrderInput | orderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemsCreateManyOrderInputEnvelope
    set?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    disconnect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    delete?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    connect?: orderItemsWhereUniqueInput | orderItemsWhereUniqueInput[]
    update?: orderItemsUpdateWithWhereUniqueWithoutOrderInput | orderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemsUpdateManyWithWhereWithoutOrderInput | orderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
  }

  export type orderCreateNestedOneWithoutItemsInput = {
    create?: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutItemsInput
    connect?: orderWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<menuCreateWithoutOrderItemsInput, menuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: menuCreateOrConnectWithoutOrderItemsInput
    connect?: menuWhereUniqueInput
  }

  export type orderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutItemsInput
    upsert?: orderUpsertWithoutItemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutItemsInput, orderUpdateWithoutItemsInput>, orderUncheckedUpdateWithoutItemsInput>
  }

  export type menuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<menuCreateWithoutOrderItemsInput, menuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: menuCreateOrConnectWithoutOrderItemsInput
    upsert?: menuUpsertWithoutOrderItemsInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutOrderItemsInput, menuUpdateWithoutOrderItemsInput>, menuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type otpsCreateWithoutUserInput = {
    id?: string
    code: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type otpsUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type otpsCreateOrConnectWithoutUserInput = {
    where: otpsWhereUniqueInput
    create: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput>
  }

  export type otpsCreateManyUserInputEnvelope = {
    data: otpsCreateManyUserInput | otpsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type keranjangCreateWithoutUserInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
    menu: menuCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateWithoutUserInput = {
    id?: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type keranjangCreateOrConnectWithoutUserInput = {
    where: keranjangWhereUniqueInput
    create: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput>
  }

  export type keranjangCreateManyUserInputEnvelope = {
    data: keranjangCreateManyUserInput | keranjangCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
    items?: orderItemsCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
    items?: orderItemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type otpsUpsertWithWhereUniqueWithoutUserInput = {
    where: otpsWhereUniqueInput
    update: XOR<otpsUpdateWithoutUserInput, otpsUncheckedUpdateWithoutUserInput>
    create: XOR<otpsCreateWithoutUserInput, otpsUncheckedCreateWithoutUserInput>
  }

  export type otpsUpdateWithWhereUniqueWithoutUserInput = {
    where: otpsWhereUniqueInput
    data: XOR<otpsUpdateWithoutUserInput, otpsUncheckedUpdateWithoutUserInput>
  }

  export type otpsUpdateManyWithWhereWithoutUserInput = {
    where: otpsScalarWhereInput
    data: XOR<otpsUpdateManyMutationInput, otpsUncheckedUpdateManyWithoutUserInput>
  }

  export type otpsScalarWhereInput = {
    AND?: otpsScalarWhereInput | otpsScalarWhereInput[]
    OR?: otpsScalarWhereInput[]
    NOT?: otpsScalarWhereInput | otpsScalarWhereInput[]
    id?: StringFilter<"otps"> | string
    code?: StringFilter<"otps"> | string
    expiry?: DateTimeFilter<"otps"> | Date | string
    userId?: StringFilter<"otps"> | string
    createdAt?: DateTimeFilter<"otps"> | Date | string
    updatedAt?: DateTimeFilter<"otps"> | Date | string
  }

  export type keranjangUpsertWithWhereUniqueWithoutUserInput = {
    where: keranjangWhereUniqueInput
    update: XOR<keranjangUpdateWithoutUserInput, keranjangUncheckedUpdateWithoutUserInput>
    create: XOR<keranjangCreateWithoutUserInput, keranjangUncheckedCreateWithoutUserInput>
  }

  export type keranjangUpdateWithWhereUniqueWithoutUserInput = {
    where: keranjangWhereUniqueInput
    data: XOR<keranjangUpdateWithoutUserInput, keranjangUncheckedUpdateWithoutUserInput>
  }

  export type keranjangUpdateManyWithWhereWithoutUserInput = {
    where: keranjangScalarWhereInput
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyWithoutUserInput>
  }

  export type keranjangScalarWhereInput = {
    AND?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    OR?: keranjangScalarWhereInput[]
    NOT?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    id?: StringFilter<"keranjang"> | string
    userId?: StringFilter<"keranjang"> | string
    menuId?: StringFilter<"keranjang"> | string
    size?: StringFilter<"keranjang"> | string
    quantity?: IntFilter<"keranjang"> | number
    extraCheese?: BoolFilter<"keranjang"> | boolean
    totalPrice?: FloatFilter<"keranjang"> | number
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: StringFilter<"order"> | string
    nama?: StringFilter<"order"> | string
    email?: StringFilter<"order"> | string
    noHp?: StringFilter<"order"> | string
    alamat?: StringFilter<"order"> | string
    metode?: StringFilter<"order"> | string
    paymentMethod?: StringNullableFilter<"order"> | string | null
    paymentDetail?: StringNullableFilter<"order"> | string | null
    total?: FloatNullableFilter<"order"> | number | null
    createdAt?: DateTimeFilter<"order"> | Date | string
  }

  export type usersCreateWithoutOtpsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    keranjang?: keranjangCreateNestedManyWithoutUserInput
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOtpsInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    keranjang?: keranjangUncheckedCreateNestedManyWithoutUserInput
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOtpsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOtpsInput, usersUncheckedCreateWithoutOtpsInput>
  }

  export type usersUpsertWithoutOtpsInput = {
    update: XOR<usersUpdateWithoutOtpsInput, usersUncheckedUpdateWithoutOtpsInput>
    create: XOR<usersCreateWithoutOtpsInput, usersUncheckedCreateWithoutOtpsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOtpsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOtpsInput, usersUncheckedUpdateWithoutOtpsInput>
  }

  export type usersUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keranjang?: keranjangUpdateManyWithoutUserNestedInput
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keranjang?: keranjangUncheckedUpdateManyWithoutUserNestedInput
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type keranjangCreateWithoutMenuInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
    user: usersCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateWithoutMenuInput = {
    id?: string
    userId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type keranjangCreateOrConnectWithoutMenuInput = {
    where: keranjangWhereUniqueInput
    create: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput>
  }

  export type keranjangCreateManyMenuInputEnvelope = {
    data: keranjangCreateManyMenuInput | keranjangCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type orderItemsCreateWithoutMenuInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
    order: orderCreateNestedOneWithoutItemsInput
  }

  export type orderItemsUncheckedCreateWithoutMenuInput = {
    id?: string
    orderId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type orderItemsCreateOrConnectWithoutMenuInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput>
  }

  export type orderItemsCreateManyMenuInputEnvelope = {
    data: orderItemsCreateManyMenuInput | orderItemsCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type keranjangUpsertWithWhereUniqueWithoutMenuInput = {
    where: keranjangWhereUniqueInput
    update: XOR<keranjangUpdateWithoutMenuInput, keranjangUncheckedUpdateWithoutMenuInput>
    create: XOR<keranjangCreateWithoutMenuInput, keranjangUncheckedCreateWithoutMenuInput>
  }

  export type keranjangUpdateWithWhereUniqueWithoutMenuInput = {
    where: keranjangWhereUniqueInput
    data: XOR<keranjangUpdateWithoutMenuInput, keranjangUncheckedUpdateWithoutMenuInput>
  }

  export type keranjangUpdateManyWithWhereWithoutMenuInput = {
    where: keranjangScalarWhereInput
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyWithoutMenuInput>
  }

  export type orderItemsUpsertWithWhereUniqueWithoutMenuInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutMenuInput, orderItemsUncheckedUpdateWithoutMenuInput>
    create: XOR<orderItemsCreateWithoutMenuInput, orderItemsUncheckedCreateWithoutMenuInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutMenuInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutMenuInput, orderItemsUncheckedUpdateWithoutMenuInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutMenuInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutMenuInput>
  }

  export type orderItemsScalarWhereInput = {
    AND?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
    OR?: orderItemsScalarWhereInput[]
    NOT?: orderItemsScalarWhereInput | orderItemsScalarWhereInput[]
    id?: StringFilter<"orderItems"> | string
    orderId?: StringFilter<"orderItems"> | string
    menuId?: StringFilter<"orderItems"> | string
    size?: StringFilter<"orderItems"> | string
    quantity?: IntFilter<"orderItems"> | number
    extraCheese?: BoolFilter<"orderItems"> | boolean
    subtotal?: FloatFilter<"orderItems"> | number
  }

  export type usersCreateWithoutKeranjangInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsCreateNestedManyWithoutUserInput
    order?: orderCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutKeranjangInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsUncheckedCreateNestedManyWithoutUserInput
    order?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutKeranjangInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
  }

  export type menuCreateWithoutKeranjangInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    orderItems?: orderItemsCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutKeranjangInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    orderItems?: orderItemsUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutKeranjangInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutKeranjangInput, menuUncheckedCreateWithoutKeranjangInput>
  }

  export type usersUpsertWithoutKeranjangInput = {
    update: XOR<usersUpdateWithoutKeranjangInput, usersUncheckedUpdateWithoutKeranjangInput>
    create: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutKeranjangInput, usersUncheckedUpdateWithoutKeranjangInput>
  }

  export type usersUpdateWithoutKeranjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUpdateManyWithoutUserNestedInput
    order?: orderUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutKeranjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUncheckedUpdateManyWithoutUserNestedInput
    order?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type menuUpsertWithoutKeranjangInput = {
    update: XOR<menuUpdateWithoutKeranjangInput, menuUncheckedUpdateWithoutKeranjangInput>
    create: XOR<menuCreateWithoutKeranjangInput, menuUncheckedCreateWithoutKeranjangInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutKeranjangInput, menuUncheckedUpdateWithoutKeranjangInput>
  }

  export type menuUpdateWithoutKeranjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    orderItems?: orderItemsUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutKeranjangInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    orderItems?: orderItemsUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type usersCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsCreateNestedManyWithoutUserInput
    keranjang?: keranjangCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: otpsUncheckedCreateNestedManyWithoutUserInput
    keranjang?: keranjangUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrderInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrderInput, usersUncheckedCreateWithoutOrderInput>
  }

  export type orderItemsCreateWithoutOrderInput = {
    id?: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
    menu: menuCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemsUncheckedCreateWithoutOrderInput = {
    id?: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type orderItemsCreateOrConnectWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput>
  }

  export type orderItemsCreateManyOrderInputEnvelope = {
    data: orderItemsCreateManyOrderInput | orderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutOrderInput = {
    update: XOR<usersUpdateWithoutOrderInput, usersUncheckedUpdateWithoutOrderInput>
    create: XOR<usersCreateWithoutOrderInput, usersUncheckedCreateWithoutOrderInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrderInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrderInput, usersUncheckedUpdateWithoutOrderInput>
  }

  export type usersUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUpdateManyWithoutUserNestedInput
    keranjang?: keranjangUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: otpsUncheckedUpdateManyWithoutUserNestedInput
    keranjang?: keranjangUncheckedUpdateManyWithoutUserNestedInput
  }

  export type orderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutOrderInput, orderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<orderItemsCreateWithoutOrderInput, orderItemsUncheckedCreateWithoutOrderInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutOrderInput, orderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type orderCreateWithoutItemsInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
  }

  export type orderCreateOrConnectWithoutItemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
  }

  export type menuCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    keranjang?: keranjangCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: number
    description: string
    category: string
    image: string
    keranjang?: keranjangUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutOrderItemsInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutOrderItemsInput, menuUncheckedCreateWithoutOrderItemsInput>
  }

  export type orderUpsertWithoutItemsInput = {
    update: XOR<orderUpdateWithoutItemsInput, orderUncheckedUpdateWithoutItemsInput>
    create: XOR<orderCreateWithoutItemsInput, orderUncheckedCreateWithoutItemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutItemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutItemsInput, orderUncheckedUpdateWithoutItemsInput>
  }

  export type orderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUpsertWithoutOrderItemsInput = {
    update: XOR<menuUpdateWithoutOrderItemsInput, menuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<menuCreateWithoutOrderItemsInput, menuUncheckedCreateWithoutOrderItemsInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutOrderItemsInput, menuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type menuUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    keranjang?: keranjangUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    keranjang?: keranjangUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type otpsCreateManyUserInput = {
    id?: string
    code: string
    expiry: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type keranjangCreateManyUserInput = {
    id?: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type orderCreateManyUserInput = {
    id?: string
    nama: string
    email: string
    noHp: string
    alamat: string
    metode: string
    paymentMethod?: string | null
    paymentDetail?: string | null
    total?: number | null
    createdAt?: Date | string
  }

  export type otpsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiry?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
    menu?: menuUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type orderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDetail?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type keranjangCreateManyMenuInput = {
    id?: string
    userId: string
    size: string
    quantity: number
    extraCheese: boolean
    totalPrice: number
  }

  export type orderItemsCreateManyMenuInput = {
    id?: string
    orderId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type keranjangUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
    user?: usersUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type orderItemsUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsCreateManyOrderInput = {
    id?: string
    menuId: string
    size: string
    quantity: number
    extraCheese: boolean
    subtotal: number
  }

  export type orderItemsUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
    menu?: menuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemsUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    extraCheese?: BoolFieldUpdateOperationsInput | boolean
    subtotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}