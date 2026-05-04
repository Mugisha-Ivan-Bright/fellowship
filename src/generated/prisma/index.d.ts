
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Igihande
 * 
 */
export type Igihande = $Result.DefaultSelection<Prisma.$IgihandePayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Dedication
 * 
 */
export type Dedication = $Result.DefaultSelection<Prisma.$DedicationPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SECRETARY: 'SECRETARY',
  IGIHANDE_LEADER: 'IGIHANDE_LEADER',
  COMMITTEE: 'COMMITTEE',
  PASTOR: 'PASTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const MaritalStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  WIDOWED: 'WIDOWED',
  DIVORCED: 'DIVORCED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const MemberStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus]


export const ServiceType: {
  SUNDAY: 'SUNDAY',
  MIDWEEK: 'MIDWEEK',
  SPECIAL: 'SPECIAL'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const DedicationType: {
  TITHE: 'TITHE',
  OFFERING: 'OFFERING',
  VOLUNTEERING: 'VOLUNTEERING',
  SERVICE_ROLE: 'SERVICE_ROLE',
  OTHER: 'OTHER'
};

export type DedicationType = (typeof DedicationType)[keyof typeof DedicationType]


export const TaskStage: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  ON_HOLD: 'ON_HOLD'
};

export type TaskStage = (typeof TaskStage)[keyof typeof TaskStage]


export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type MemberStatus = $Enums.MemberStatus

export const MemberStatus: typeof $Enums.MemberStatus

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type DedicationType = $Enums.DedicationType

export const DedicationType: typeof $Enums.DedicationType

export type TaskStage = $Enums.TaskStage

export const TaskStage: typeof $Enums.TaskStage

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.igihande`: Exposes CRUD operations for the **Igihande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Igihandes
    * const igihandes = await prisma.igihande.findMany()
    * ```
    */
  get igihande(): Prisma.IgihandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dedication`: Exposes CRUD operations for the **Dedication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dedications
    * const dedications = await prisma.dedication.findMany()
    * ```
    */
  get dedication(): Prisma.DedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Member: 'Member',
    Igihande: 'Igihande',
    Service: 'Service',
    Attendance: 'Attendance',
    Dedication: 'Dedication',
    Task: 'Task'
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
      modelProps: "user" | "member" | "igihande" | "service" | "attendance" | "dedication" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Igihande: {
        payload: Prisma.$IgihandePayload<ExtArgs>
        fields: Prisma.IgihandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IgihandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IgihandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          findFirst: {
            args: Prisma.IgihandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IgihandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          findMany: {
            args: Prisma.IgihandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>[]
          }
          create: {
            args: Prisma.IgihandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          createMany: {
            args: Prisma.IgihandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IgihandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>[]
          }
          delete: {
            args: Prisma.IgihandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          update: {
            args: Prisma.IgihandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          deleteMany: {
            args: Prisma.IgihandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IgihandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IgihandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>[]
          }
          upsert: {
            args: Prisma.IgihandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IgihandePayload>
          }
          aggregate: {
            args: Prisma.IgihandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIgihande>
          }
          groupBy: {
            args: Prisma.IgihandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IgihandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IgihandeCountArgs<ExtArgs>
            result: $Utils.Optional<IgihandeCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Dedication: {
        payload: Prisma.$DedicationPayload<ExtArgs>
        fields: Prisma.DedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          findFirst: {
            args: Prisma.DedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          findMany: {
            args: Prisma.DedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>[]
          }
          create: {
            args: Prisma.DedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          createMany: {
            args: Prisma.DedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>[]
          }
          delete: {
            args: Prisma.DedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          update: {
            args: Prisma.DedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          deleteMany: {
            args: Prisma.DedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>[]
          }
          upsert: {
            args: Prisma.DedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DedicationPayload>
          }
          aggregate: {
            args: Prisma.DedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDedication>
          }
          groupBy: {
            args: Prisma.DedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DedicationCountArgs<ExtArgs>
            result: $Utils.Optional<DedicationCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    member?: MemberOmit
    igihande?: IgihandeOmit
    service?: ServiceOmit
    attendance?: AttendanceOmit
    dedication?: DedicationOmit
    task?: TaskOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasksCreated: number
    tasksAssigned: number
    attendanceRecorded: number
    dedicationsRecorded: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasksCreated?: boolean | UserCountOutputTypeCountTasksCreatedArgs
    tasksAssigned?: boolean | UserCountOutputTypeCountTasksAssignedArgs
    attendanceRecorded?: boolean | UserCountOutputTypeCountAttendanceRecordedArgs
    dedicationsRecorded?: boolean | UserCountOutputTypeCountDedicationsRecordedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceRecordedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDedicationsRecordedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DedicationWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    attendances: number
    dedications: number
    relatedTasks: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | MemberCountOutputTypeCountAttendancesArgs
    dedications?: boolean | MemberCountOutputTypeCountDedicationsArgs
    relatedTasks?: boolean | MemberCountOutputTypeCountRelatedTasksArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountDedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DedicationWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountRelatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type IgihandeCountOutputType
   */

  export type IgihandeCountOutputType = {
    members: number
  }

  export type IgihandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | IgihandeCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * IgihandeCountOutputType without action
   */
  export type IgihandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IgihandeCountOutputType
     */
    select?: IgihandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IgihandeCountOutputType without action
   */
  export type IgihandeCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    attendances: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ServiceCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    igihandeId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    igihandeId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    role: number
    igihandeId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    role?: true
    igihandeId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    role?: true
    igihandeId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    role?: true
    igihandeId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    name: string | null
    role: $Enums.Role
    igihandeId: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    igihandeId?: boolean
    createdAt?: boolean
    igihande?: boolean | User$igihandeArgs<ExtArgs>
    tasksCreated?: boolean | User$tasksCreatedArgs<ExtArgs>
    tasksAssigned?: boolean | User$tasksAssignedArgs<ExtArgs>
    attendanceRecorded?: boolean | User$attendanceRecordedArgs<ExtArgs>
    dedicationsRecorded?: boolean | User$dedicationsRecordedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    igihandeId?: boolean
    createdAt?: boolean
    igihande?: boolean | User$igihandeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    igihandeId?: boolean
    createdAt?: boolean
    igihande?: boolean | User$igihandeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    igihandeId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "role" | "igihandeId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | User$igihandeArgs<ExtArgs>
    tasksCreated?: boolean | User$tasksCreatedArgs<ExtArgs>
    tasksAssigned?: boolean | User$tasksAssignedArgs<ExtArgs>
    attendanceRecorded?: boolean | User$attendanceRecordedArgs<ExtArgs>
    dedicationsRecorded?: boolean | User$dedicationsRecordedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | User$igihandeArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | User$igihandeArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      igihande: Prisma.$IgihandePayload<ExtArgs> | null
      tasksCreated: Prisma.$TaskPayload<ExtArgs>[]
      tasksAssigned: Prisma.$TaskPayload<ExtArgs>[]
      attendanceRecorded: Prisma.$AttendancePayload<ExtArgs>[]
      dedicationsRecorded: Prisma.$DedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string | null
      role: $Enums.Role
      igihandeId: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    igihande<T extends User$igihandeArgs<ExtArgs> = {}>(args?: Subset<T, User$igihandeArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasksCreated<T extends User$tasksCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksAssigned<T extends User$tasksAssignedArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendanceRecorded<T extends User$attendanceRecordedArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceRecordedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dedicationsRecorded<T extends User$dedicationsRecordedArgs<ExtArgs> = {}>(args?: Subset<T, User$dedicationsRecordedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly igihandeId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.igihande
   */
  export type User$igihandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    where?: IgihandeWhereInput
  }

  /**
   * User.tasksCreated
   */
  export type User$tasksCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.tasksAssigned
   */
  export type User$tasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.attendanceRecorded
   */
  export type User$attendanceRecordedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.dedicationsRecorded
   */
  export type User$dedicationsRecordedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    where?: DedicationWhereInput
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    cursor?: DedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DedicationScalarFieldEnum | DedicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    membershipNo: string | null
    firstName: string | null
    lastName: string | null
    nationalId: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    maritalStatus: $Enums.MaritalStatus | null
    baptismDate: Date | null
    photoUrl: string | null
    province: string | null
    district: string | null
    sector: string | null
    cell: string | null
    village: string | null
    igihandeId: string | null
    status: $Enums.MemberStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    membershipNo: string | null
    firstName: string | null
    lastName: string | null
    nationalId: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    maritalStatus: $Enums.MaritalStatus | null
    baptismDate: Date | null
    photoUrl: string | null
    province: string | null
    district: string | null
    sector: string | null
    cell: string | null
    village: string | null
    igihandeId: string | null
    status: $Enums.MemberStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    membershipNo: number
    firstName: number
    lastName: number
    nationalId: number
    phone: number
    dateOfBirth: number
    gender: number
    maritalStatus: number
    baptismDate: number
    photoUrl: number
    province: number
    district: number
    sector: number
    cell: number
    village: number
    igihandeId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    membershipNo?: true
    firstName?: true
    lastName?: true
    nationalId?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    maritalStatus?: true
    baptismDate?: true
    photoUrl?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    igihandeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    membershipNo?: true
    firstName?: true
    lastName?: true
    nationalId?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    maritalStatus?: true
    baptismDate?: true
    photoUrl?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    igihandeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    membershipNo?: true
    firstName?: true
    lastName?: true
    nationalId?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    maritalStatus?: true
    baptismDate?: true
    photoUrl?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    igihandeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth: Date | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate: Date | null
    photoUrl: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status: $Enums.MemberStatus
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membershipNo?: boolean
    firstName?: boolean
    lastName?: boolean
    nationalId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    maritalStatus?: boolean
    baptismDate?: boolean
    photoUrl?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    igihandeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
    attendances?: boolean | Member$attendancesArgs<ExtArgs>
    dedications?: boolean | Member$dedicationsArgs<ExtArgs>
    relatedTasks?: boolean | Member$relatedTasksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membershipNo?: boolean
    firstName?: boolean
    lastName?: boolean
    nationalId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    maritalStatus?: boolean
    baptismDate?: boolean
    photoUrl?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    igihandeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    membershipNo?: boolean
    firstName?: boolean
    lastName?: boolean
    nationalId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    maritalStatus?: boolean
    baptismDate?: boolean
    photoUrl?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    igihandeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    membershipNo?: boolean
    firstName?: boolean
    lastName?: boolean
    nationalId?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    maritalStatus?: boolean
    baptismDate?: boolean
    photoUrl?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    igihandeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "membershipNo" | "firstName" | "lastName" | "nationalId" | "phone" | "dateOfBirth" | "gender" | "maritalStatus" | "baptismDate" | "photoUrl" | "province" | "district" | "sector" | "cell" | "village" | "igihandeId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
    attendances?: boolean | Member$attendancesArgs<ExtArgs>
    dedications?: boolean | Member$dedicationsArgs<ExtArgs>
    relatedTasks?: boolean | Member$relatedTasksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    igihande?: boolean | IgihandeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      igihande: Prisma.$IgihandePayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      dedications: Prisma.$DedicationPayload<ExtArgs>[]
      relatedTasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      membershipNo: string
      firstName: string
      lastName: string
      nationalId: string
      phone: string
      dateOfBirth: Date | null
      gender: $Enums.Gender
      maritalStatus: $Enums.MaritalStatus
      baptismDate: Date | null
      photoUrl: string | null
      province: string
      district: string
      sector: string
      cell: string
      village: string
      igihandeId: string
      status: $Enums.MemberStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    igihande<T extends IgihandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IgihandeDefaultArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Member$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Member$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dedications<T extends Member$dedicationsArgs<ExtArgs> = {}>(args?: Subset<T, Member$dedicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedTasks<T extends Member$relatedTasksArgs<ExtArgs> = {}>(args?: Subset<T, Member$relatedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly membershipNo: FieldRef<"Member", 'String'>
    readonly firstName: FieldRef<"Member", 'String'>
    readonly lastName: FieldRef<"Member", 'String'>
    readonly nationalId: FieldRef<"Member", 'String'>
    readonly phone: FieldRef<"Member", 'String'>
    readonly dateOfBirth: FieldRef<"Member", 'DateTime'>
    readonly gender: FieldRef<"Member", 'Gender'>
    readonly maritalStatus: FieldRef<"Member", 'MaritalStatus'>
    readonly baptismDate: FieldRef<"Member", 'DateTime'>
    readonly photoUrl: FieldRef<"Member", 'String'>
    readonly province: FieldRef<"Member", 'String'>
    readonly district: FieldRef<"Member", 'String'>
    readonly sector: FieldRef<"Member", 'String'>
    readonly cell: FieldRef<"Member", 'String'>
    readonly village: FieldRef<"Member", 'String'>
    readonly igihandeId: FieldRef<"Member", 'String'>
    readonly status: FieldRef<"Member", 'MemberStatus'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.attendances
   */
  export type Member$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Member.dedications
   */
  export type Member$dedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    where?: DedicationWhereInput
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    cursor?: DedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DedicationScalarFieldEnum | DedicationScalarFieldEnum[]
  }

  /**
   * Member.relatedTasks
   */
  export type Member$relatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Igihande
   */

  export type AggregateIgihande = {
    _count: IgihandeCountAggregateOutputType | null
    _min: IgihandeMinAggregateOutputType | null
    _max: IgihandeMaxAggregateOutputType | null
  }

  export type IgihandeMinAggregateOutputType = {
    id: string | null
    name: string | null
    leaderId: string | null
    createdAt: Date | null
  }

  export type IgihandeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    leaderId: string | null
    createdAt: Date | null
  }

  export type IgihandeCountAggregateOutputType = {
    id: number
    name: number
    leaderId: number
    createdAt: number
    _all: number
  }


  export type IgihandeMinAggregateInputType = {
    id?: true
    name?: true
    leaderId?: true
    createdAt?: true
  }

  export type IgihandeMaxAggregateInputType = {
    id?: true
    name?: true
    leaderId?: true
    createdAt?: true
  }

  export type IgihandeCountAggregateInputType = {
    id?: true
    name?: true
    leaderId?: true
    createdAt?: true
    _all?: true
  }

  export type IgihandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Igihande to aggregate.
     */
    where?: IgihandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igihandes to fetch.
     */
    orderBy?: IgihandeOrderByWithRelationInput | IgihandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IgihandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igihandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igihandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Igihandes
    **/
    _count?: true | IgihandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IgihandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IgihandeMaxAggregateInputType
  }

  export type GetIgihandeAggregateType<T extends IgihandeAggregateArgs> = {
        [P in keyof T & keyof AggregateIgihande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIgihande[P]>
      : GetScalarType<T[P], AggregateIgihande[P]>
  }




  export type IgihandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IgihandeWhereInput
    orderBy?: IgihandeOrderByWithAggregationInput | IgihandeOrderByWithAggregationInput[]
    by: IgihandeScalarFieldEnum[] | IgihandeScalarFieldEnum
    having?: IgihandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IgihandeCountAggregateInputType | true
    _min?: IgihandeMinAggregateInputType
    _max?: IgihandeMaxAggregateInputType
  }

  export type IgihandeGroupByOutputType = {
    id: string
    name: string
    leaderId: string | null
    createdAt: Date
    _count: IgihandeCountAggregateOutputType | null
    _min: IgihandeMinAggregateOutputType | null
    _max: IgihandeMaxAggregateOutputType | null
  }

  type GetIgihandeGroupByPayload<T extends IgihandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IgihandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IgihandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IgihandeGroupByOutputType[P]>
            : GetScalarType<T[P], IgihandeGroupByOutputType[P]>
        }
      >
    >


  export type IgihandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leaderId?: boolean
    createdAt?: boolean
    leader?: boolean | Igihande$leaderArgs<ExtArgs>
    members?: boolean | Igihande$membersArgs<ExtArgs>
    _count?: boolean | IgihandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["igihande"]>

  export type IgihandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leaderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["igihande"]>

  export type IgihandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    leaderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["igihande"]>

  export type IgihandeSelectScalar = {
    id?: boolean
    name?: boolean
    leaderId?: boolean
    createdAt?: boolean
  }

  export type IgihandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "leaderId" | "createdAt", ExtArgs["result"]["igihande"]>
  export type IgihandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | Igihande$leaderArgs<ExtArgs>
    members?: boolean | Igihande$membersArgs<ExtArgs>
    _count?: boolean | IgihandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IgihandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IgihandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IgihandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Igihande"
    objects: {
      leader: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      leaderId: string | null
      createdAt: Date
    }, ExtArgs["result"]["igihande"]>
    composites: {}
  }

  type IgihandeGetPayload<S extends boolean | null | undefined | IgihandeDefaultArgs> = $Result.GetResult<Prisma.$IgihandePayload, S>

  type IgihandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IgihandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IgihandeCountAggregateInputType | true
    }

  export interface IgihandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Igihande'], meta: { name: 'Igihande' } }
    /**
     * Find zero or one Igihande that matches the filter.
     * @param {IgihandeFindUniqueArgs} args - Arguments to find a Igihande
     * @example
     * // Get one Igihande
     * const igihande = await prisma.igihande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IgihandeFindUniqueArgs>(args: SelectSubset<T, IgihandeFindUniqueArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Igihande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IgihandeFindUniqueOrThrowArgs} args - Arguments to find a Igihande
     * @example
     * // Get one Igihande
     * const igihande = await prisma.igihande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IgihandeFindUniqueOrThrowArgs>(args: SelectSubset<T, IgihandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Igihande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeFindFirstArgs} args - Arguments to find a Igihande
     * @example
     * // Get one Igihande
     * const igihande = await prisma.igihande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IgihandeFindFirstArgs>(args?: SelectSubset<T, IgihandeFindFirstArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Igihande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeFindFirstOrThrowArgs} args - Arguments to find a Igihande
     * @example
     * // Get one Igihande
     * const igihande = await prisma.igihande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IgihandeFindFirstOrThrowArgs>(args?: SelectSubset<T, IgihandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Igihandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Igihandes
     * const igihandes = await prisma.igihande.findMany()
     * 
     * // Get first 10 Igihandes
     * const igihandes = await prisma.igihande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const igihandeWithIdOnly = await prisma.igihande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IgihandeFindManyArgs>(args?: SelectSubset<T, IgihandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Igihande.
     * @param {IgihandeCreateArgs} args - Arguments to create a Igihande.
     * @example
     * // Create one Igihande
     * const Igihande = await prisma.igihande.create({
     *   data: {
     *     // ... data to create a Igihande
     *   }
     * })
     * 
     */
    create<T extends IgihandeCreateArgs>(args: SelectSubset<T, IgihandeCreateArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Igihandes.
     * @param {IgihandeCreateManyArgs} args - Arguments to create many Igihandes.
     * @example
     * // Create many Igihandes
     * const igihande = await prisma.igihande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IgihandeCreateManyArgs>(args?: SelectSubset<T, IgihandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Igihandes and returns the data saved in the database.
     * @param {IgihandeCreateManyAndReturnArgs} args - Arguments to create many Igihandes.
     * @example
     * // Create many Igihandes
     * const igihande = await prisma.igihande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Igihandes and only return the `id`
     * const igihandeWithIdOnly = await prisma.igihande.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IgihandeCreateManyAndReturnArgs>(args?: SelectSubset<T, IgihandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Igihande.
     * @param {IgihandeDeleteArgs} args - Arguments to delete one Igihande.
     * @example
     * // Delete one Igihande
     * const Igihande = await prisma.igihande.delete({
     *   where: {
     *     // ... filter to delete one Igihande
     *   }
     * })
     * 
     */
    delete<T extends IgihandeDeleteArgs>(args: SelectSubset<T, IgihandeDeleteArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Igihande.
     * @param {IgihandeUpdateArgs} args - Arguments to update one Igihande.
     * @example
     * // Update one Igihande
     * const igihande = await prisma.igihande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IgihandeUpdateArgs>(args: SelectSubset<T, IgihandeUpdateArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Igihandes.
     * @param {IgihandeDeleteManyArgs} args - Arguments to filter Igihandes to delete.
     * @example
     * // Delete a few Igihandes
     * const { count } = await prisma.igihande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IgihandeDeleteManyArgs>(args?: SelectSubset<T, IgihandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Igihandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Igihandes
     * const igihande = await prisma.igihande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IgihandeUpdateManyArgs>(args: SelectSubset<T, IgihandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Igihandes and returns the data updated in the database.
     * @param {IgihandeUpdateManyAndReturnArgs} args - Arguments to update many Igihandes.
     * @example
     * // Update many Igihandes
     * const igihande = await prisma.igihande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Igihandes and only return the `id`
     * const igihandeWithIdOnly = await prisma.igihande.updateManyAndReturn({
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
    updateManyAndReturn<T extends IgihandeUpdateManyAndReturnArgs>(args: SelectSubset<T, IgihandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Igihande.
     * @param {IgihandeUpsertArgs} args - Arguments to update or create a Igihande.
     * @example
     * // Update or create a Igihande
     * const igihande = await prisma.igihande.upsert({
     *   create: {
     *     // ... data to create a Igihande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Igihande we want to update
     *   }
     * })
     */
    upsert<T extends IgihandeUpsertArgs>(args: SelectSubset<T, IgihandeUpsertArgs<ExtArgs>>): Prisma__IgihandeClient<$Result.GetResult<Prisma.$IgihandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Igihandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeCountArgs} args - Arguments to filter Igihandes to count.
     * @example
     * // Count the number of Igihandes
     * const count = await prisma.igihande.count({
     *   where: {
     *     // ... the filter for the Igihandes we want to count
     *   }
     * })
    **/
    count<T extends IgihandeCountArgs>(
      args?: Subset<T, IgihandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IgihandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Igihande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IgihandeAggregateArgs>(args: Subset<T, IgihandeAggregateArgs>): Prisma.PrismaPromise<GetIgihandeAggregateType<T>>

    /**
     * Group by Igihande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IgihandeGroupByArgs} args - Group by arguments.
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
      T extends IgihandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IgihandeGroupByArgs['orderBy'] }
        : { orderBy?: IgihandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IgihandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIgihandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Igihande model
   */
  readonly fields: IgihandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Igihande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IgihandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends Igihande$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Igihande$leaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Igihande$membersArgs<ExtArgs> = {}>(args?: Subset<T, Igihande$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Igihande model
   */
  interface IgihandeFieldRefs {
    readonly id: FieldRef<"Igihande", 'String'>
    readonly name: FieldRef<"Igihande", 'String'>
    readonly leaderId: FieldRef<"Igihande", 'String'>
    readonly createdAt: FieldRef<"Igihande", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Igihande findUnique
   */
  export type IgihandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter, which Igihande to fetch.
     */
    where: IgihandeWhereUniqueInput
  }

  /**
   * Igihande findUniqueOrThrow
   */
  export type IgihandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter, which Igihande to fetch.
     */
    where: IgihandeWhereUniqueInput
  }

  /**
   * Igihande findFirst
   */
  export type IgihandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter, which Igihande to fetch.
     */
    where?: IgihandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igihandes to fetch.
     */
    orderBy?: IgihandeOrderByWithRelationInput | IgihandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Igihandes.
     */
    cursor?: IgihandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igihandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igihandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Igihandes.
     */
    distinct?: IgihandeScalarFieldEnum | IgihandeScalarFieldEnum[]
  }

  /**
   * Igihande findFirstOrThrow
   */
  export type IgihandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter, which Igihande to fetch.
     */
    where?: IgihandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igihandes to fetch.
     */
    orderBy?: IgihandeOrderByWithRelationInput | IgihandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Igihandes.
     */
    cursor?: IgihandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igihandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igihandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Igihandes.
     */
    distinct?: IgihandeScalarFieldEnum | IgihandeScalarFieldEnum[]
  }

  /**
   * Igihande findMany
   */
  export type IgihandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter, which Igihandes to fetch.
     */
    where?: IgihandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Igihandes to fetch.
     */
    orderBy?: IgihandeOrderByWithRelationInput | IgihandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Igihandes.
     */
    cursor?: IgihandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Igihandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Igihandes.
     */
    skip?: number
    distinct?: IgihandeScalarFieldEnum | IgihandeScalarFieldEnum[]
  }

  /**
   * Igihande create
   */
  export type IgihandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Igihande.
     */
    data: XOR<IgihandeCreateInput, IgihandeUncheckedCreateInput>
  }

  /**
   * Igihande createMany
   */
  export type IgihandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Igihandes.
     */
    data: IgihandeCreateManyInput | IgihandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Igihande createManyAndReturn
   */
  export type IgihandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * The data used to create many Igihandes.
     */
    data: IgihandeCreateManyInput | IgihandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Igihande update
   */
  export type IgihandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Igihande.
     */
    data: XOR<IgihandeUpdateInput, IgihandeUncheckedUpdateInput>
    /**
     * Choose, which Igihande to update.
     */
    where: IgihandeWhereUniqueInput
  }

  /**
   * Igihande updateMany
   */
  export type IgihandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Igihandes.
     */
    data: XOR<IgihandeUpdateManyMutationInput, IgihandeUncheckedUpdateManyInput>
    /**
     * Filter which Igihandes to update
     */
    where?: IgihandeWhereInput
    /**
     * Limit how many Igihandes to update.
     */
    limit?: number
  }

  /**
   * Igihande updateManyAndReturn
   */
  export type IgihandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * The data used to update Igihandes.
     */
    data: XOR<IgihandeUpdateManyMutationInput, IgihandeUncheckedUpdateManyInput>
    /**
     * Filter which Igihandes to update
     */
    where?: IgihandeWhereInput
    /**
     * Limit how many Igihandes to update.
     */
    limit?: number
  }

  /**
   * Igihande upsert
   */
  export type IgihandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Igihande to update in case it exists.
     */
    where: IgihandeWhereUniqueInput
    /**
     * In case the Igihande found by the `where` argument doesn't exist, create a new Igihande with this data.
     */
    create: XOR<IgihandeCreateInput, IgihandeUncheckedCreateInput>
    /**
     * In case the Igihande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IgihandeUpdateInput, IgihandeUncheckedUpdateInput>
  }

  /**
   * Igihande delete
   */
  export type IgihandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
    /**
     * Filter which Igihande to delete.
     */
    where: IgihandeWhereUniqueInput
  }

  /**
   * Igihande deleteMany
   */
  export type IgihandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Igihandes to delete
     */
    where?: IgihandeWhereInput
    /**
     * Limit how many Igihandes to delete.
     */
    limit?: number
  }

  /**
   * Igihande.leader
   */
  export type Igihande$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Igihande.members
   */
  export type Igihande$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Igihande without action
   */
  export type IgihandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Igihande
     */
    select?: IgihandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Igihande
     */
    omit?: IgihandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IgihandeInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    type: $Enums.ServiceType | null
    title: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ServiceType | null
    title: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    type: number
    title: number
    date: number
    createdAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    date?: true
    createdAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    date?: true
    createdAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    type: $Enums.ServiceType
    title: string | null
    date: Date
    createdAt: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    date?: boolean
    createdAt?: boolean
    attendances?: boolean | Service$attendancesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "date" | "createdAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | Service$attendancesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ServiceType
      title: string | null
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends Service$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Service$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly type: FieldRef<"Service", 'ServiceType'>
    readonly title: FieldRef<"Service", 'String'>
    readonly date: FieldRef<"Service", 'DateTime'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.attendances
   */
  export type Service$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    serviceId: string | null
    present: boolean | null
    notes: string | null
    recordedById: string | null
    createdAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    serviceId: string | null
    present: boolean | null
    notes: string | null
    recordedById: string | null
    createdAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    memberId: number
    serviceId: number
    present: number
    notes: number
    recordedById: number
    createdAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    memberId?: true
    serviceId?: true
    present?: true
    notes?: true
    recordedById?: true
    createdAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    memberId?: true
    serviceId?: true
    present?: true
    notes?: true
    recordedById?: true
    createdAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    memberId?: true
    serviceId?: true
    present?: true
    notes?: true
    recordedById?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    memberId: string
    serviceId: string
    present: boolean
    notes: string | null
    recordedById: string
    createdAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    serviceId?: boolean
    present?: boolean
    notes?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    serviceId?: boolean
    present?: boolean
    notes?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    serviceId?: boolean
    present?: boolean
    notes?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    memberId?: boolean
    serviceId?: boolean
    present?: boolean
    notes?: boolean
    recordedById?: boolean
    createdAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "serviceId" | "present" | "notes" | "recordedById" | "createdAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      recordedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      serviceId: string
      present: boolean
      notes: string | null
      recordedById: string
      createdAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recordedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly memberId: FieldRef<"Attendance", 'String'>
    readonly serviceId: FieldRef<"Attendance", 'String'>
    readonly present: FieldRef<"Attendance", 'Boolean'>
    readonly notes: FieldRef<"Attendance", 'String'>
    readonly recordedById: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Dedication
   */

  export type AggregateDedication = {
    _count: DedicationCountAggregateOutputType | null
    _min: DedicationMinAggregateOutputType | null
    _max: DedicationMaxAggregateOutputType | null
  }

  export type DedicationMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    type: $Enums.DedicationType | null
    description: string | null
    date: Date | null
    recordedById: string | null
    createdAt: Date | null
  }

  export type DedicationMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    type: $Enums.DedicationType | null
    description: string | null
    date: Date | null
    recordedById: string | null
    createdAt: Date | null
  }

  export type DedicationCountAggregateOutputType = {
    id: number
    memberId: number
    type: number
    description: number
    date: number
    recordedById: number
    createdAt: number
    _all: number
  }


  export type DedicationMinAggregateInputType = {
    id?: true
    memberId?: true
    type?: true
    description?: true
    date?: true
    recordedById?: true
    createdAt?: true
  }

  export type DedicationMaxAggregateInputType = {
    id?: true
    memberId?: true
    type?: true
    description?: true
    date?: true
    recordedById?: true
    createdAt?: true
  }

  export type DedicationCountAggregateInputType = {
    id?: true
    memberId?: true
    type?: true
    description?: true
    date?: true
    recordedById?: true
    createdAt?: true
    _all?: true
  }

  export type DedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dedication to aggregate.
     */
    where?: DedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dedications to fetch.
     */
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dedications
    **/
    _count?: true | DedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DedicationMaxAggregateInputType
  }

  export type GetDedicationAggregateType<T extends DedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateDedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDedication[P]>
      : GetScalarType<T[P], AggregateDedication[P]>
  }




  export type DedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DedicationWhereInput
    orderBy?: DedicationOrderByWithAggregationInput | DedicationOrderByWithAggregationInput[]
    by: DedicationScalarFieldEnum[] | DedicationScalarFieldEnum
    having?: DedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DedicationCountAggregateInputType | true
    _min?: DedicationMinAggregateInputType
    _max?: DedicationMaxAggregateInputType
  }

  export type DedicationGroupByOutputType = {
    id: string
    memberId: string
    type: $Enums.DedicationType
    description: string | null
    date: Date
    recordedById: string
    createdAt: Date
    _count: DedicationCountAggregateOutputType | null
    _min: DedicationMinAggregateOutputType | null
    _max: DedicationMaxAggregateOutputType | null
  }

  type GetDedicationGroupByPayload<T extends DedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DedicationGroupByOutputType[P]>
            : GetScalarType<T[P], DedicationGroupByOutputType[P]>
        }
      >
    >


  export type DedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dedication"]>

  export type DedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dedication"]>

  export type DedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    recordedById?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dedication"]>

  export type DedicationSelectScalar = {
    id?: boolean
    memberId?: boolean
    type?: boolean
    description?: boolean
    date?: boolean
    recordedById?: boolean
    createdAt?: boolean
  }

  export type DedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "type" | "description" | "date" | "recordedById" | "createdAt", ExtArgs["result"]["dedication"]>
  export type DedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    recordedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dedication"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      recordedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      type: $Enums.DedicationType
      description: string | null
      date: Date
      recordedById: string
      createdAt: Date
    }, ExtArgs["result"]["dedication"]>
    composites: {}
  }

  type DedicationGetPayload<S extends boolean | null | undefined | DedicationDefaultArgs> = $Result.GetResult<Prisma.$DedicationPayload, S>

  type DedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DedicationCountAggregateInputType | true
    }

  export interface DedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dedication'], meta: { name: 'Dedication' } }
    /**
     * Find zero or one Dedication that matches the filter.
     * @param {DedicationFindUniqueArgs} args - Arguments to find a Dedication
     * @example
     * // Get one Dedication
     * const dedication = await prisma.dedication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DedicationFindUniqueArgs>(args: SelectSubset<T, DedicationFindUniqueArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dedication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DedicationFindUniqueOrThrowArgs} args - Arguments to find a Dedication
     * @example
     * // Get one Dedication
     * const dedication = await prisma.dedication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, DedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dedication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationFindFirstArgs} args - Arguments to find a Dedication
     * @example
     * // Get one Dedication
     * const dedication = await prisma.dedication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DedicationFindFirstArgs>(args?: SelectSubset<T, DedicationFindFirstArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dedication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationFindFirstOrThrowArgs} args - Arguments to find a Dedication
     * @example
     * // Get one Dedication
     * const dedication = await prisma.dedication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, DedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dedications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dedications
     * const dedications = await prisma.dedication.findMany()
     * 
     * // Get first 10 Dedications
     * const dedications = await prisma.dedication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dedicationWithIdOnly = await prisma.dedication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DedicationFindManyArgs>(args?: SelectSubset<T, DedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dedication.
     * @param {DedicationCreateArgs} args - Arguments to create a Dedication.
     * @example
     * // Create one Dedication
     * const Dedication = await prisma.dedication.create({
     *   data: {
     *     // ... data to create a Dedication
     *   }
     * })
     * 
     */
    create<T extends DedicationCreateArgs>(args: SelectSubset<T, DedicationCreateArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dedications.
     * @param {DedicationCreateManyArgs} args - Arguments to create many Dedications.
     * @example
     * // Create many Dedications
     * const dedication = await prisma.dedication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DedicationCreateManyArgs>(args?: SelectSubset<T, DedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dedications and returns the data saved in the database.
     * @param {DedicationCreateManyAndReturnArgs} args - Arguments to create many Dedications.
     * @example
     * // Create many Dedications
     * const dedication = await prisma.dedication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dedications and only return the `id`
     * const dedicationWithIdOnly = await prisma.dedication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, DedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dedication.
     * @param {DedicationDeleteArgs} args - Arguments to delete one Dedication.
     * @example
     * // Delete one Dedication
     * const Dedication = await prisma.dedication.delete({
     *   where: {
     *     // ... filter to delete one Dedication
     *   }
     * })
     * 
     */
    delete<T extends DedicationDeleteArgs>(args: SelectSubset<T, DedicationDeleteArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dedication.
     * @param {DedicationUpdateArgs} args - Arguments to update one Dedication.
     * @example
     * // Update one Dedication
     * const dedication = await prisma.dedication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DedicationUpdateArgs>(args: SelectSubset<T, DedicationUpdateArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dedications.
     * @param {DedicationDeleteManyArgs} args - Arguments to filter Dedications to delete.
     * @example
     * // Delete a few Dedications
     * const { count } = await prisma.dedication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DedicationDeleteManyArgs>(args?: SelectSubset<T, DedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dedications
     * const dedication = await prisma.dedication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DedicationUpdateManyArgs>(args: SelectSubset<T, DedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dedications and returns the data updated in the database.
     * @param {DedicationUpdateManyAndReturnArgs} args - Arguments to update many Dedications.
     * @example
     * // Update many Dedications
     * const dedication = await prisma.dedication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dedications and only return the `id`
     * const dedicationWithIdOnly = await prisma.dedication.updateManyAndReturn({
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
    updateManyAndReturn<T extends DedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, DedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dedication.
     * @param {DedicationUpsertArgs} args - Arguments to update or create a Dedication.
     * @example
     * // Update or create a Dedication
     * const dedication = await prisma.dedication.upsert({
     *   create: {
     *     // ... data to create a Dedication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dedication we want to update
     *   }
     * })
     */
    upsert<T extends DedicationUpsertArgs>(args: SelectSubset<T, DedicationUpsertArgs<ExtArgs>>): Prisma__DedicationClient<$Result.GetResult<Prisma.$DedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationCountArgs} args - Arguments to filter Dedications to count.
     * @example
     * // Count the number of Dedications
     * const count = await prisma.dedication.count({
     *   where: {
     *     // ... the filter for the Dedications we want to count
     *   }
     * })
    **/
    count<T extends DedicationCountArgs>(
      args?: Subset<T, DedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DedicationAggregateArgs>(args: Subset<T, DedicationAggregateArgs>): Prisma.PrismaPromise<GetDedicationAggregateType<T>>

    /**
     * Group by Dedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DedicationGroupByArgs} args - Group by arguments.
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
      T extends DedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DedicationGroupByArgs['orderBy'] }
        : { orderBy?: DedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dedication model
   */
  readonly fields: DedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dedication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recordedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dedication model
   */
  interface DedicationFieldRefs {
    readonly id: FieldRef<"Dedication", 'String'>
    readonly memberId: FieldRef<"Dedication", 'String'>
    readonly type: FieldRef<"Dedication", 'DedicationType'>
    readonly description: FieldRef<"Dedication", 'String'>
    readonly date: FieldRef<"Dedication", 'DateTime'>
    readonly recordedById: FieldRef<"Dedication", 'String'>
    readonly createdAt: FieldRef<"Dedication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dedication findUnique
   */
  export type DedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter, which Dedication to fetch.
     */
    where: DedicationWhereUniqueInput
  }

  /**
   * Dedication findUniqueOrThrow
   */
  export type DedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter, which Dedication to fetch.
     */
    where: DedicationWhereUniqueInput
  }

  /**
   * Dedication findFirst
   */
  export type DedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter, which Dedication to fetch.
     */
    where?: DedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dedications to fetch.
     */
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dedications.
     */
    cursor?: DedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dedications.
     */
    distinct?: DedicationScalarFieldEnum | DedicationScalarFieldEnum[]
  }

  /**
   * Dedication findFirstOrThrow
   */
  export type DedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter, which Dedication to fetch.
     */
    where?: DedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dedications to fetch.
     */
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dedications.
     */
    cursor?: DedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dedications.
     */
    distinct?: DedicationScalarFieldEnum | DedicationScalarFieldEnum[]
  }

  /**
   * Dedication findMany
   */
  export type DedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter, which Dedications to fetch.
     */
    where?: DedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dedications to fetch.
     */
    orderBy?: DedicationOrderByWithRelationInput | DedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dedications.
     */
    cursor?: DedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dedications.
     */
    skip?: number
    distinct?: DedicationScalarFieldEnum | DedicationScalarFieldEnum[]
  }

  /**
   * Dedication create
   */
  export type DedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Dedication.
     */
    data: XOR<DedicationCreateInput, DedicationUncheckedCreateInput>
  }

  /**
   * Dedication createMany
   */
  export type DedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dedications.
     */
    data: DedicationCreateManyInput | DedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dedication createManyAndReturn
   */
  export type DedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Dedications.
     */
    data: DedicationCreateManyInput | DedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dedication update
   */
  export type DedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Dedication.
     */
    data: XOR<DedicationUpdateInput, DedicationUncheckedUpdateInput>
    /**
     * Choose, which Dedication to update.
     */
    where: DedicationWhereUniqueInput
  }

  /**
   * Dedication updateMany
   */
  export type DedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dedications.
     */
    data: XOR<DedicationUpdateManyMutationInput, DedicationUncheckedUpdateManyInput>
    /**
     * Filter which Dedications to update
     */
    where?: DedicationWhereInput
    /**
     * Limit how many Dedications to update.
     */
    limit?: number
  }

  /**
   * Dedication updateManyAndReturn
   */
  export type DedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * The data used to update Dedications.
     */
    data: XOR<DedicationUpdateManyMutationInput, DedicationUncheckedUpdateManyInput>
    /**
     * Filter which Dedications to update
     */
    where?: DedicationWhereInput
    /**
     * Limit how many Dedications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dedication upsert
   */
  export type DedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Dedication to update in case it exists.
     */
    where: DedicationWhereUniqueInput
    /**
     * In case the Dedication found by the `where` argument doesn't exist, create a new Dedication with this data.
     */
    create: XOR<DedicationCreateInput, DedicationUncheckedCreateInput>
    /**
     * In case the Dedication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DedicationUpdateInput, DedicationUncheckedUpdateInput>
  }

  /**
   * Dedication delete
   */
  export type DedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
    /**
     * Filter which Dedication to delete.
     */
    where: DedicationWhereUniqueInput
  }

  /**
   * Dedication deleteMany
   */
  export type DedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dedications to delete
     */
    where?: DedicationWhereInput
    /**
     * Limit how many Dedications to delete.
     */
    limit?: number
  }

  /**
   * Dedication without action
   */
  export type DedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dedication
     */
    select?: DedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dedication
     */
    omit?: DedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DedicationInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    stage: $Enums.TaskStage | null
    priority: $Enums.TaskPriority | null
    dueDate: Date | null
    assignedToId: string | null
    relatedMemberId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    stage: $Enums.TaskStage | null
    priority: $Enums.TaskPriority | null
    dueDate: Date | null
    assignedToId: string | null
    relatedMemberId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    stage: number
    priority: number
    dueDate: number
    assignedToId: number
    relatedMemberId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    stage?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    relatedMemberId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    stage?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    relatedMemberId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    stage?: true
    priority?: true
    dueDate?: true
    assignedToId?: true
    relatedMemberId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    stage: $Enums.TaskStage
    priority: $Enums.TaskPriority
    dueDate: Date | null
    assignedToId: string | null
    relatedMemberId: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    stage?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    relatedMemberId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    stage?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    relatedMemberId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    stage?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    relatedMemberId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    stage?: boolean
    priority?: boolean
    dueDate?: boolean
    assignedToId?: boolean
    relatedMemberId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "stage" | "priority" | "dueDate" | "assignedToId" | "relatedMemberId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Task$assignedToArgs<ExtArgs>
    relatedMember?: boolean | Task$relatedMemberArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      relatedMember: Prisma.$MemberPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      stage: $Enums.TaskStage
      priority: $Enums.TaskPriority
      dueDate: Date | null
      assignedToId: string | null
      relatedMemberId: string | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
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
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedTo<T extends Task$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    relatedMember<T extends Task$relatedMemberArgs<ExtArgs> = {}>(args?: Subset<T, Task$relatedMemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly stage: FieldRef<"Task", 'TaskStage'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly assignedToId: FieldRef<"Task", 'String'>
    readonly relatedMemberId: FieldRef<"Task", 'String'>
    readonly createdById: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignedTo
   */
  export type Task$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.relatedMember
   */
  export type Task$relatedMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    role: 'role',
    igihandeId: 'igihandeId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    membershipNo: 'membershipNo',
    firstName: 'firstName',
    lastName: 'lastName',
    nationalId: 'nationalId',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    maritalStatus: 'maritalStatus',
    baptismDate: 'baptismDate',
    photoUrl: 'photoUrl',
    province: 'province',
    district: 'district',
    sector: 'sector',
    cell: 'cell',
    village: 'village',
    igihandeId: 'igihandeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const IgihandeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    leaderId: 'leaderId',
    createdAt: 'createdAt'
  };

  export type IgihandeScalarFieldEnum = (typeof IgihandeScalarFieldEnum)[keyof typeof IgihandeScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    serviceId: 'serviceId',
    present: 'present',
    notes: 'notes',
    recordedById: 'recordedById',
    createdAt: 'createdAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const DedicationScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    type: 'type',
    description: 'description',
    date: 'date',
    recordedById: 'recordedById',
    createdAt: 'createdAt'
  };

  export type DedicationScalarFieldEnum = (typeof DedicationScalarFieldEnum)[keyof typeof DedicationScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    stage: 'stage',
    priority: 'priority',
    dueDate: 'dueDate',
    assignedToId: 'assignedToId',
    relatedMemberId: 'relatedMemberId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'MemberStatus'
   */
  export type EnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus'>
    


  /**
   * Reference to a field of type 'MemberStatus[]'
   */
  export type ListEnumMemberStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberStatus[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DedicationType'
   */
  export type EnumDedicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DedicationType'>
    


  /**
   * Reference to a field of type 'DedicationType[]'
   */
  export type ListEnumDedicationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DedicationType[]'>
    


  /**
   * Reference to a field of type 'TaskStage'
   */
  export type EnumTaskStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStage'>
    


  /**
   * Reference to a field of type 'TaskStage[]'
   */
  export type ListEnumTaskStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStage[]'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    igihandeId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    igihande?: XOR<IgihandeNullableScalarRelationFilter, IgihandeWhereInput> | null
    tasksCreated?: TaskListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    attendanceRecorded?: AttendanceListRelationFilter
    dedicationsRecorded?: DedicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    igihandeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    igihande?: IgihandeOrderByWithRelationInput
    tasksCreated?: TaskOrderByRelationAggregateInput
    tasksAssigned?: TaskOrderByRelationAggregateInput
    attendanceRecorded?: AttendanceOrderByRelationAggregateInput
    dedicationsRecorded?: DedicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    igihandeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    igihande?: XOR<IgihandeNullableScalarRelationFilter, IgihandeWhereInput> | null
    tasksCreated?: TaskListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    attendanceRecorded?: AttendanceListRelationFilter
    dedicationsRecorded?: DedicationListRelationFilter
  }, "id" | "clerkId" | "email" | "igihandeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    igihandeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    igihandeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    membershipNo?: StringFilter<"Member"> | string
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    nationalId?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFilter<"Member"> | $Enums.MaritalStatus
    baptismDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    province?: StringFilter<"Member"> | string
    district?: StringFilter<"Member"> | string
    sector?: StringFilter<"Member"> | string
    cell?: StringFilter<"Member"> | string
    village?: StringFilter<"Member"> | string
    igihandeId?: StringFilter<"Member"> | string
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    igihande?: XOR<IgihandeScalarRelationFilter, IgihandeWhereInput>
    attendances?: AttendanceListRelationFilter
    dedications?: DedicationListRelationFilter
    relatedTasks?: TaskListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    membershipNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nationalId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    baptismDate?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    igihandeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    igihande?: IgihandeOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    dedications?: DedicationOrderByRelationAggregateInput
    relatedTasks?: TaskOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    membershipNo?: string
    nationalId?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFilter<"Member"> | $Enums.MaritalStatus
    baptismDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    province?: StringFilter<"Member"> | string
    district?: StringFilter<"Member"> | string
    sector?: StringFilter<"Member"> | string
    cell?: StringFilter<"Member"> | string
    village?: StringFilter<"Member"> | string
    igihandeId?: StringFilter<"Member"> | string
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    igihande?: XOR<IgihandeScalarRelationFilter, IgihandeWhereInput>
    attendances?: AttendanceListRelationFilter
    dedications?: DedicationListRelationFilter
    relatedTasks?: TaskListRelationFilter
  }, "id" | "membershipNo" | "nationalId">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    membershipNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nationalId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    baptismDate?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    igihandeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    membershipNo?: StringWithAggregatesFilter<"Member"> | string
    firstName?: StringWithAggregatesFilter<"Member"> | string
    lastName?: StringWithAggregatesFilter<"Member"> | string
    nationalId?: StringWithAggregatesFilter<"Member"> | string
    phone?: StringWithAggregatesFilter<"Member"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    gender?: EnumGenderWithAggregatesFilter<"Member"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"Member"> | $Enums.MaritalStatus
    baptismDate?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Member"> | string | null
    province?: StringWithAggregatesFilter<"Member"> | string
    district?: StringWithAggregatesFilter<"Member"> | string
    sector?: StringWithAggregatesFilter<"Member"> | string
    cell?: StringWithAggregatesFilter<"Member"> | string
    village?: StringWithAggregatesFilter<"Member"> | string
    igihandeId?: StringWithAggregatesFilter<"Member"> | string
    status?: EnumMemberStatusWithAggregatesFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type IgihandeWhereInput = {
    AND?: IgihandeWhereInput | IgihandeWhereInput[]
    OR?: IgihandeWhereInput[]
    NOT?: IgihandeWhereInput | IgihandeWhereInput[]
    id?: StringFilter<"Igihande"> | string
    name?: StringFilter<"Igihande"> | string
    leaderId?: StringNullableFilter<"Igihande"> | string | null
    createdAt?: DateTimeFilter<"Igihande"> | Date | string
    leader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: MemberListRelationFilter
  }

  export type IgihandeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    leaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    leader?: UserOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
  }

  export type IgihandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IgihandeWhereInput | IgihandeWhereInput[]
    OR?: IgihandeWhereInput[]
    NOT?: IgihandeWhereInput | IgihandeWhereInput[]
    name?: StringFilter<"Igihande"> | string
    leaderId?: StringNullableFilter<"Igihande"> | string | null
    createdAt?: DateTimeFilter<"Igihande"> | Date | string
    leader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: MemberListRelationFilter
  }, "id">

  export type IgihandeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    leaderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IgihandeCountOrderByAggregateInput
    _max?: IgihandeMaxOrderByAggregateInput
    _min?: IgihandeMinOrderByAggregateInput
  }

  export type IgihandeScalarWhereWithAggregatesInput = {
    AND?: IgihandeScalarWhereWithAggregatesInput | IgihandeScalarWhereWithAggregatesInput[]
    OR?: IgihandeScalarWhereWithAggregatesInput[]
    NOT?: IgihandeScalarWhereWithAggregatesInput | IgihandeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Igihande"> | string
    name?: StringWithAggregatesFilter<"Igihande"> | string
    leaderId?: StringNullableWithAggregatesFilter<"Igihande"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Igihande"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    title?: StringNullableFilter<"Service"> | string | null
    date?: DateTimeFilter<"Service"> | Date | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    attendances?: AttendanceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    title?: StringNullableFilter<"Service"> | string | null
    date?: DateTimeFilter<"Service"> | Date | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    type?: EnumServiceTypeWithAggregatesFilter<"Service"> | $Enums.ServiceType
    title?: StringNullableWithAggregatesFilter<"Service"> | string | null
    date?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    memberId?: StringFilter<"Attendance"> | string
    serviceId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    notes?: StringNullableFilter<"Attendance"> | string | null
    recordedById?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    serviceId?: SortOrder
    present?: SortOrder
    notes?: SortOrderInput | SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    recordedBy?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId_serviceId?: AttendanceMemberIdServiceIdCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    memberId?: StringFilter<"Attendance"> | string
    serviceId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    notes?: StringNullableFilter<"Attendance"> | string | null
    recordedById?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "memberId_serviceId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    serviceId?: SortOrder
    present?: SortOrder
    notes?: SortOrderInput | SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    memberId?: StringWithAggregatesFilter<"Attendance"> | string
    serviceId?: StringWithAggregatesFilter<"Attendance"> | string
    present?: BoolWithAggregatesFilter<"Attendance"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    recordedById?: StringWithAggregatesFilter<"Attendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type DedicationWhereInput = {
    AND?: DedicationWhereInput | DedicationWhereInput[]
    OR?: DedicationWhereInput[]
    NOT?: DedicationWhereInput | DedicationWhereInput[]
    id?: StringFilter<"Dedication"> | string
    memberId?: StringFilter<"Dedication"> | string
    type?: EnumDedicationTypeFilter<"Dedication"> | $Enums.DedicationType
    description?: StringNullableFilter<"Dedication"> | string | null
    date?: DateTimeFilter<"Dedication"> | Date | string
    recordedById?: StringFilter<"Dedication"> | string
    createdAt?: DateTimeFilter<"Dedication"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DedicationOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    recordedBy?: UserOrderByWithRelationInput
  }

  export type DedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DedicationWhereInput | DedicationWhereInput[]
    OR?: DedicationWhereInput[]
    NOT?: DedicationWhereInput | DedicationWhereInput[]
    memberId?: StringFilter<"Dedication"> | string
    type?: EnumDedicationTypeFilter<"Dedication"> | $Enums.DedicationType
    description?: StringNullableFilter<"Dedication"> | string | null
    date?: DateTimeFilter<"Dedication"> | Date | string
    recordedById?: StringFilter<"Dedication"> | string
    createdAt?: DateTimeFilter<"Dedication"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    recordedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DedicationOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
    _count?: DedicationCountOrderByAggregateInput
    _max?: DedicationMaxOrderByAggregateInput
    _min?: DedicationMinOrderByAggregateInput
  }

  export type DedicationScalarWhereWithAggregatesInput = {
    AND?: DedicationScalarWhereWithAggregatesInput | DedicationScalarWhereWithAggregatesInput[]
    OR?: DedicationScalarWhereWithAggregatesInput[]
    NOT?: DedicationScalarWhereWithAggregatesInput | DedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dedication"> | string
    memberId?: StringWithAggregatesFilter<"Dedication"> | string
    type?: EnumDedicationTypeWithAggregatesFilter<"Dedication"> | $Enums.DedicationType
    description?: StringNullableWithAggregatesFilter<"Dedication"> | string | null
    date?: DateTimeWithAggregatesFilter<"Dedication"> | Date | string
    recordedById?: StringWithAggregatesFilter<"Dedication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dedication"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    stage?: EnumTaskStageFilter<"Task"> | $Enums.TaskStage
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    relatedMemberId?: StringNullableFilter<"Task"> | string | null
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    relatedMember?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    stage?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    relatedMemberId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTo?: UserOrderByWithRelationInput
    relatedMember?: MemberOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    stage?: EnumTaskStageFilter<"Task"> | $Enums.TaskStage
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    relatedMemberId?: StringNullableFilter<"Task"> | string | null
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    relatedMember?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    stage?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    relatedMemberId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    stage?: EnumTaskStageWithAggregatesFilter<"Task"> | $Enums.TaskStage
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    relatedMemberId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdById?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    igihande?: IgihandeCreateNestedOneWithoutLeaderInput
    tasksCreated?: TaskCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
    tasksCreated?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceUncheckedCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneWithoutLeaderNestedInput
    tasksCreated?: TaskUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    igihande: IgihandeCreateNestedOneWithoutMembersInput
    attendances?: AttendanceCreateNestedManyWithoutMemberInput
    dedications?: DedicationCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutMemberInput
    dedications?: DedicationUncheckedCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskUncheckedCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneRequiredWithoutMembersNestedInput
    attendances?: AttendanceUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    igihandeId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUncheckedUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUncheckedUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    igihandeId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IgihandeCreateInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    leader?: UserCreateNestedOneWithoutIgihandeInput
    members?: MemberCreateNestedManyWithoutIgihandeInput
  }

  export type IgihandeUncheckedCreateInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    leader?: UserUncheckedCreateNestedOneWithoutIgihandeInput
    members?: MemberUncheckedCreateNestedManyWithoutIgihandeInput
  }

  export type IgihandeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneWithoutIgihandeNestedInput
    members?: MemberUpdateManyWithoutIgihandeNestedInput
  }

  export type IgihandeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUncheckedUpdateOneWithoutIgihandeNestedInput
    members?: MemberUncheckedUpdateManyWithoutIgihandeNestedInput
  }

  export type IgihandeCreateManyInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
  }

  export type IgihandeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IgihandeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    type: $Enums.ServiceType
    title?: string | null
    date: Date | string
    createdAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    type: $Enums.ServiceType
    title?: string | null
    date: Date | string
    createdAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    type: $Enums.ServiceType
    title?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutAttendancesInput
    service: ServiceCreateNestedOneWithoutAttendancesInput
    recordedBy: UserCreateNestedOneWithoutAttendanceRecordedInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    memberId: string
    serviceId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutAttendancesNestedInput
    service?: ServiceUpdateOneRequiredWithoutAttendancesNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutAttendanceRecordedNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    memberId: string
    serviceId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationCreateInput = {
    id?: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutDedicationsInput
    recordedBy: UserCreateNestedOneWithoutDedicationsRecordedInput
  }

  export type DedicationUncheckedCreateInput = {
    id?: string
    memberId: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    recordedById: string
    createdAt?: Date | string
  }

  export type DedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutDedicationsNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutDedicationsRecordedNestedInput
  }

  export type DedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationCreateManyInput = {
    id?: string
    memberId: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    recordedById: string
    createdAt?: Date | string
  }

  export type DedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutTasksAssignedInput
    relatedMember?: MemberCreateNestedOneWithoutRelatedTasksInput
    createdBy: UserCreateNestedOneWithoutTasksCreatedInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    relatedMemberId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutTasksAssignedNestedInput
    relatedMember?: MemberUpdateOneWithoutRelatedTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksCreatedNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    relatedMemberId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type IgihandeNullableScalarRelationFilter = {
    is?: IgihandeWhereInput | null
    isNot?: IgihandeWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type DedicationListRelationFilter = {
    every?: DedicationWhereInput
    some?: DedicationWhereInput
    none?: DedicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    igihandeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    igihandeId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    igihandeId?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type EnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
  }

  export type IgihandeScalarRelationFilter = {
    is?: IgihandeWhereInput
    isNot?: IgihandeWhereInput
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    membershipNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nationalId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    baptismDate?: SortOrder
    photoUrl?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    igihandeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    membershipNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nationalId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    baptismDate?: SortOrder
    photoUrl?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    igihandeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    membershipNo?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nationalId?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    baptismDate?: SortOrder
    photoUrl?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    igihandeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type EnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IgihandeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type IgihandeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type IgihandeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttendanceMemberIdServiceIdCompoundUniqueInput = {
    memberId: string
    serviceId: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    serviceId?: SortOrder
    present?: SortOrder
    notes?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    serviceId?: SortOrder
    present?: SortOrder
    notes?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    serviceId?: SortOrder
    present?: SortOrder
    notes?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDedicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DedicationType | EnumDedicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDedicationTypeFilter<$PrismaModel> | $Enums.DedicationType
  }

  export type DedicationCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type DedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type DedicationMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    date?: SortOrder
    recordedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDedicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DedicationType | EnumDedicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDedicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DedicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDedicationTypeFilter<$PrismaModel>
    _max?: NestedEnumDedicationTypeFilter<$PrismaModel>
  }

  export type EnumTaskStageFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStage | EnumTaskStageFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStageFilter<$PrismaModel> | $Enums.TaskStage
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    relatedMemberId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    relatedMemberId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    stage?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    assignedToId?: SortOrder
    relatedMemberId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStage | EnumTaskStageFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStageWithAggregatesFilter<$PrismaModel> | $Enums.TaskStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStageFilter<$PrismaModel>
    _max?: NestedEnumTaskStageFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type IgihandeCreateNestedOneWithoutLeaderInput = {
    create?: XOR<IgihandeCreateWithoutLeaderInput, IgihandeUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: IgihandeCreateOrConnectWithoutLeaderInput
    connect?: IgihandeWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput> | AttendanceCreateWithoutRecordedByInput[] | AttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRecordedByInput | AttendanceCreateOrConnectWithoutRecordedByInput[]
    createMany?: AttendanceCreateManyRecordedByInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DedicationCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput> | DedicationCreateWithoutRecordedByInput[] | DedicationUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutRecordedByInput | DedicationCreateOrConnectWithoutRecordedByInput[]
    createMany?: DedicationCreateManyRecordedByInputEnvelope
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput> | AttendanceCreateWithoutRecordedByInput[] | AttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRecordedByInput | AttendanceCreateOrConnectWithoutRecordedByInput[]
    createMany?: AttendanceCreateManyRecordedByInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DedicationUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput> | DedicationCreateWithoutRecordedByInput[] | DedicationUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutRecordedByInput | DedicationCreateOrConnectWithoutRecordedByInput[]
    createMany?: DedicationCreateManyRecordedByInputEnvelope
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IgihandeUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<IgihandeCreateWithoutLeaderInput, IgihandeUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: IgihandeCreateOrConnectWithoutLeaderInput
    upsert?: IgihandeUpsertWithoutLeaderInput
    disconnect?: IgihandeWhereInput | boolean
    delete?: IgihandeWhereInput | boolean
    connect?: IgihandeWhereUniqueInput
    update?: XOR<XOR<IgihandeUpdateToOneWithWhereWithoutLeaderInput, IgihandeUpdateWithoutLeaderInput>, IgihandeUncheckedUpdateWithoutLeaderInput>
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput> | AttendanceCreateWithoutRecordedByInput[] | AttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRecordedByInput | AttendanceCreateOrConnectWithoutRecordedByInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRecordedByInput | AttendanceUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: AttendanceCreateManyRecordedByInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRecordedByInput | AttendanceUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRecordedByInput | AttendanceUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DedicationUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput> | DedicationCreateWithoutRecordedByInput[] | DedicationUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutRecordedByInput | DedicationCreateOrConnectWithoutRecordedByInput[]
    upsert?: DedicationUpsertWithWhereUniqueWithoutRecordedByInput | DedicationUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: DedicationCreateManyRecordedByInputEnvelope
    set?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    disconnect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    delete?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    update?: DedicationUpdateWithWhereUniqueWithoutRecordedByInput | DedicationUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: DedicationUpdateManyWithWhereWithoutRecordedByInput | DedicationUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput> | AttendanceCreateWithoutRecordedByInput[] | AttendanceUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutRecordedByInput | AttendanceCreateOrConnectWithoutRecordedByInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutRecordedByInput | AttendanceUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: AttendanceCreateManyRecordedByInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutRecordedByInput | AttendanceUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutRecordedByInput | AttendanceUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DedicationUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput> | DedicationCreateWithoutRecordedByInput[] | DedicationUncheckedCreateWithoutRecordedByInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutRecordedByInput | DedicationCreateOrConnectWithoutRecordedByInput[]
    upsert?: DedicationUpsertWithWhereUniqueWithoutRecordedByInput | DedicationUpsertWithWhereUniqueWithoutRecordedByInput[]
    createMany?: DedicationCreateManyRecordedByInputEnvelope
    set?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    disconnect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    delete?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    update?: DedicationUpdateWithWhereUniqueWithoutRecordedByInput | DedicationUpdateWithWhereUniqueWithoutRecordedByInput[]
    updateMany?: DedicationUpdateManyWithWhereWithoutRecordedByInput | DedicationUpdateManyWithWhereWithoutRecordedByInput[]
    deleteMany?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
  }

  export type IgihandeCreateNestedOneWithoutMembersInput = {
    create?: XOR<IgihandeCreateWithoutMembersInput, IgihandeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: IgihandeCreateOrConnectWithoutMembersInput
    connect?: IgihandeWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutMemberInput = {
    create?: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput> | AttendanceCreateWithoutMemberInput[] | AttendanceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMemberInput | AttendanceCreateOrConnectWithoutMemberInput[]
    createMany?: AttendanceCreateManyMemberInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DedicationCreateNestedManyWithoutMemberInput = {
    create?: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput> | DedicationCreateWithoutMemberInput[] | DedicationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutMemberInput | DedicationCreateOrConnectWithoutMemberInput[]
    createMany?: DedicationCreateManyMemberInputEnvelope
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutRelatedMemberInput = {
    create?: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput> | TaskCreateWithoutRelatedMemberInput[] | TaskUncheckedCreateWithoutRelatedMemberInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRelatedMemberInput | TaskCreateOrConnectWithoutRelatedMemberInput[]
    createMany?: TaskCreateManyRelatedMemberInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput> | AttendanceCreateWithoutMemberInput[] | AttendanceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMemberInput | AttendanceCreateOrConnectWithoutMemberInput[]
    createMany?: AttendanceCreateManyMemberInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type DedicationUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput> | DedicationCreateWithoutMemberInput[] | DedicationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutMemberInput | DedicationCreateOrConnectWithoutMemberInput[]
    createMany?: DedicationCreateManyMemberInputEnvelope
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutRelatedMemberInput = {
    create?: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput> | TaskCreateWithoutRelatedMemberInput[] | TaskUncheckedCreateWithoutRelatedMemberInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRelatedMemberInput | TaskCreateOrConnectWithoutRelatedMemberInput[]
    createMany?: TaskCreateManyRelatedMemberInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type EnumMemberStatusFieldUpdateOperationsInput = {
    set?: $Enums.MemberStatus
  }

  export type IgihandeUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<IgihandeCreateWithoutMembersInput, IgihandeUncheckedCreateWithoutMembersInput>
    connectOrCreate?: IgihandeCreateOrConnectWithoutMembersInput
    upsert?: IgihandeUpsertWithoutMembersInput
    connect?: IgihandeWhereUniqueInput
    update?: XOR<XOR<IgihandeUpdateToOneWithWhereWithoutMembersInput, IgihandeUpdateWithoutMembersInput>, IgihandeUncheckedUpdateWithoutMembersInput>
  }

  export type AttendanceUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput> | AttendanceCreateWithoutMemberInput[] | AttendanceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMemberInput | AttendanceCreateOrConnectWithoutMemberInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMemberInput | AttendanceUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AttendanceCreateManyMemberInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMemberInput | AttendanceUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMemberInput | AttendanceUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DedicationUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput> | DedicationCreateWithoutMemberInput[] | DedicationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutMemberInput | DedicationCreateOrConnectWithoutMemberInput[]
    upsert?: DedicationUpsertWithWhereUniqueWithoutMemberInput | DedicationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DedicationCreateManyMemberInputEnvelope
    set?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    disconnect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    delete?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    update?: DedicationUpdateWithWhereUniqueWithoutMemberInput | DedicationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DedicationUpdateManyWithWhereWithoutMemberInput | DedicationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutRelatedMemberNestedInput = {
    create?: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput> | TaskCreateWithoutRelatedMemberInput[] | TaskUncheckedCreateWithoutRelatedMemberInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRelatedMemberInput | TaskCreateOrConnectWithoutRelatedMemberInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRelatedMemberInput | TaskUpsertWithWhereUniqueWithoutRelatedMemberInput[]
    createMany?: TaskCreateManyRelatedMemberInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRelatedMemberInput | TaskUpdateWithWhereUniqueWithoutRelatedMemberInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRelatedMemberInput | TaskUpdateManyWithWhereWithoutRelatedMemberInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput> | AttendanceCreateWithoutMemberInput[] | AttendanceUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutMemberInput | AttendanceCreateOrConnectWithoutMemberInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutMemberInput | AttendanceUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AttendanceCreateManyMemberInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutMemberInput | AttendanceUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutMemberInput | AttendanceUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type DedicationUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput> | DedicationCreateWithoutMemberInput[] | DedicationUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DedicationCreateOrConnectWithoutMemberInput | DedicationCreateOrConnectWithoutMemberInput[]
    upsert?: DedicationUpsertWithWhereUniqueWithoutMemberInput | DedicationUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DedicationCreateManyMemberInputEnvelope
    set?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    disconnect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    delete?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    connect?: DedicationWhereUniqueInput | DedicationWhereUniqueInput[]
    update?: DedicationUpdateWithWhereUniqueWithoutMemberInput | DedicationUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DedicationUpdateManyWithWhereWithoutMemberInput | DedicationUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutRelatedMemberNestedInput = {
    create?: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput> | TaskCreateWithoutRelatedMemberInput[] | TaskUncheckedCreateWithoutRelatedMemberInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRelatedMemberInput | TaskCreateOrConnectWithoutRelatedMemberInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRelatedMemberInput | TaskUpsertWithWhereUniqueWithoutRelatedMemberInput[]
    createMany?: TaskCreateManyRelatedMemberInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRelatedMemberInput | TaskUpdateWithWhereUniqueWithoutRelatedMemberInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRelatedMemberInput | TaskUpdateManyWithWhereWithoutRelatedMemberInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIgihandeInput = {
    create?: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
    connectOrCreate?: UserCreateOrConnectWithoutIgihandeInput
    connect?: UserWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutIgihandeInput = {
    create?: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput> | MemberCreateWithoutIgihandeInput[] | MemberUncheckedCreateWithoutIgihandeInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutIgihandeInput | MemberCreateOrConnectWithoutIgihandeInput[]
    createMany?: MemberCreateManyIgihandeInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutIgihandeInput = {
    create?: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
    connectOrCreate?: UserCreateOrConnectWithoutIgihandeInput
    connect?: UserWhereUniqueInput
  }

  export type MemberUncheckedCreateNestedManyWithoutIgihandeInput = {
    create?: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput> | MemberCreateWithoutIgihandeInput[] | MemberUncheckedCreateWithoutIgihandeInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutIgihandeInput | MemberCreateOrConnectWithoutIgihandeInput[]
    createMany?: MemberCreateManyIgihandeInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutIgihandeNestedInput = {
    create?: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
    connectOrCreate?: UserCreateOrConnectWithoutIgihandeInput
    upsert?: UserUpsertWithoutIgihandeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIgihandeInput, UserUpdateWithoutIgihandeInput>, UserUncheckedUpdateWithoutIgihandeInput>
  }

  export type MemberUpdateManyWithoutIgihandeNestedInput = {
    create?: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput> | MemberCreateWithoutIgihandeInput[] | MemberUncheckedCreateWithoutIgihandeInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutIgihandeInput | MemberCreateOrConnectWithoutIgihandeInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutIgihandeInput | MemberUpsertWithWhereUniqueWithoutIgihandeInput[]
    createMany?: MemberCreateManyIgihandeInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutIgihandeInput | MemberUpdateWithWhereUniqueWithoutIgihandeInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutIgihandeInput | MemberUpdateManyWithWhereWithoutIgihandeInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutIgihandeNestedInput = {
    create?: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
    connectOrCreate?: UserCreateOrConnectWithoutIgihandeInput
    upsert?: UserUpsertWithoutIgihandeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIgihandeInput, UserUpdateWithoutIgihandeInput>, UserUncheckedUpdateWithoutIgihandeInput>
  }

  export type MemberUncheckedUpdateManyWithoutIgihandeNestedInput = {
    create?: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput> | MemberCreateWithoutIgihandeInput[] | MemberUncheckedCreateWithoutIgihandeInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutIgihandeInput | MemberCreateOrConnectWithoutIgihandeInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutIgihandeInput | MemberUpsertWithWhereUniqueWithoutIgihandeInput[]
    createMany?: MemberCreateManyIgihandeInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutIgihandeInput | MemberUpdateWithWhereUniqueWithoutIgihandeInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutIgihandeInput | MemberUpdateManyWithWhereWithoutIgihandeInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type AttendanceCreateNestedManyWithoutServiceInput = {
    create?: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput> | AttendanceCreateWithoutServiceInput[] | AttendanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutServiceInput | AttendanceCreateOrConnectWithoutServiceInput[]
    createMany?: AttendanceCreateManyServiceInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput> | AttendanceCreateWithoutServiceInput[] | AttendanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutServiceInput | AttendanceCreateOrConnectWithoutServiceInput[]
    createMany?: AttendanceCreateManyServiceInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type AttendanceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput> | AttendanceCreateWithoutServiceInput[] | AttendanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutServiceInput | AttendanceCreateOrConnectWithoutServiceInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutServiceInput | AttendanceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AttendanceCreateManyServiceInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutServiceInput | AttendanceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutServiceInput | AttendanceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput> | AttendanceCreateWithoutServiceInput[] | AttendanceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutServiceInput | AttendanceCreateOrConnectWithoutServiceInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutServiceInput | AttendanceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AttendanceCreateManyServiceInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutServiceInput | AttendanceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutServiceInput | AttendanceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<MemberCreateWithoutAttendancesInput, MemberUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendancesInput
    connect?: MemberWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ServiceCreateWithoutAttendancesInput, ServiceUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAttendancesInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendanceRecordedInput = {
    create?: XOR<UserCreateWithoutAttendanceRecordedInput, UserUncheckedCreateWithoutAttendanceRecordedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceRecordedInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MemberUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<MemberCreateWithoutAttendancesInput, MemberUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendancesInput
    upsert?: MemberUpsertWithoutAttendancesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAttendancesInput, MemberUpdateWithoutAttendancesInput>, MemberUncheckedUpdateWithoutAttendancesInput>
  }

  export type ServiceUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ServiceCreateWithoutAttendancesInput, ServiceUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAttendancesInput
    upsert?: ServiceUpsertWithoutAttendancesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAttendancesInput, ServiceUpdateWithoutAttendancesInput>, ServiceUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateOneRequiredWithoutAttendanceRecordedNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceRecordedInput, UserUncheckedCreateWithoutAttendanceRecordedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceRecordedInput
    upsert?: UserUpsertWithoutAttendanceRecordedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceRecordedInput, UserUpdateWithoutAttendanceRecordedInput>, UserUncheckedUpdateWithoutAttendanceRecordedInput>
  }

  export type MemberCreateNestedOneWithoutDedicationsInput = {
    create?: XOR<MemberCreateWithoutDedicationsInput, MemberUncheckedCreateWithoutDedicationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutDedicationsInput
    connect?: MemberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDedicationsRecordedInput = {
    create?: XOR<UserCreateWithoutDedicationsRecordedInput, UserUncheckedCreateWithoutDedicationsRecordedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDedicationsRecordedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDedicationTypeFieldUpdateOperationsInput = {
    set?: $Enums.DedicationType
  }

  export type MemberUpdateOneRequiredWithoutDedicationsNestedInput = {
    create?: XOR<MemberCreateWithoutDedicationsInput, MemberUncheckedCreateWithoutDedicationsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutDedicationsInput
    upsert?: MemberUpsertWithoutDedicationsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutDedicationsInput, MemberUpdateWithoutDedicationsInput>, MemberUncheckedUpdateWithoutDedicationsInput>
  }

  export type UserUpdateOneRequiredWithoutDedicationsRecordedNestedInput = {
    create?: XOR<UserCreateWithoutDedicationsRecordedInput, UserUncheckedCreateWithoutDedicationsRecordedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDedicationsRecordedInput
    upsert?: UserUpsertWithoutDedicationsRecordedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDedicationsRecordedInput, UserUpdateWithoutDedicationsRecordedInput>, UserUncheckedUpdateWithoutDedicationsRecordedInput>
  }

  export type UserCreateNestedOneWithoutTasksAssignedInput = {
    create?: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAssignedInput
    connect?: UserWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutRelatedTasksInput = {
    create?: XOR<MemberCreateWithoutRelatedTasksInput, MemberUncheckedCreateWithoutRelatedTasksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutRelatedTasksInput
    connect?: MemberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksCreatedInput = {
    create?: XOR<UserCreateWithoutTasksCreatedInput, UserUncheckedCreateWithoutTasksCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStageFieldUpdateOperationsInput = {
    set?: $Enums.TaskStage
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type UserUpdateOneWithoutTasksAssignedNestedInput = {
    create?: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAssignedInput
    upsert?: UserUpsertWithoutTasksAssignedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksAssignedInput, UserUpdateWithoutTasksAssignedInput>, UserUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type MemberUpdateOneWithoutRelatedTasksNestedInput = {
    create?: XOR<MemberCreateWithoutRelatedTasksInput, MemberUncheckedCreateWithoutRelatedTasksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutRelatedTasksInput
    upsert?: MemberUpsertWithoutRelatedTasksInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutRelatedTasksInput, MemberUpdateWithoutRelatedTasksInput>, MemberUncheckedUpdateWithoutRelatedTasksInput>
  }

  export type UserUpdateOneRequiredWithoutTasksCreatedNestedInput = {
    create?: XOR<UserCreateWithoutTasksCreatedInput, UserUncheckedCreateWithoutTasksCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksCreatedInput
    upsert?: UserUpsertWithoutTasksCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksCreatedInput, UserUpdateWithoutTasksCreatedInput>, UserUncheckedUpdateWithoutTasksCreatedInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumMemberStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusFilter<$PrismaModel> | $Enums.MemberStatus
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberStatus | EnumMemberStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberStatus[] | ListEnumMemberStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberStatusWithAggregatesFilter<$PrismaModel> | $Enums.MemberStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberStatusFilter<$PrismaModel>
    _max?: NestedEnumMemberStatusFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDedicationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DedicationType | EnumDedicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDedicationTypeFilter<$PrismaModel> | $Enums.DedicationType
  }

  export type NestedEnumDedicationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DedicationType | EnumDedicationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DedicationType[] | ListEnumDedicationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDedicationTypeWithAggregatesFilter<$PrismaModel> | $Enums.DedicationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDedicationTypeFilter<$PrismaModel>
    _max?: NestedEnumDedicationTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStageFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStage | EnumTaskStageFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStageFilter<$PrismaModel> | $Enums.TaskStage
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStage | EnumTaskStageFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStage[] | ListEnumTaskStageFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStageWithAggregatesFilter<$PrismaModel> | $Enums.TaskStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStageFilter<$PrismaModel>
    _max?: NestedEnumTaskStageFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type IgihandeCreateWithoutLeaderInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    members?: MemberCreateNestedManyWithoutIgihandeInput
  }

  export type IgihandeUncheckedCreateWithoutLeaderInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutIgihandeInput
  }

  export type IgihandeCreateOrConnectWithoutLeaderInput = {
    where: IgihandeWhereUniqueInput
    create: XOR<IgihandeCreateWithoutLeaderInput, IgihandeUncheckedCreateWithoutLeaderInput>
  }

  export type TaskCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutTasksAssignedInput
    relatedMember?: MemberCreateNestedOneWithoutRelatedTasksInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    relatedMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedMember?: MemberCreateNestedOneWithoutRelatedTasksInput
    createdBy: UserCreateNestedOneWithoutTasksCreatedInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    relatedMemberId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutRecordedByInput = {
    id?: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutAttendancesInput
    service: ServiceCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutRecordedByInput = {
    id?: string
    memberId: string
    serviceId: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutRecordedByInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput>
  }

  export type AttendanceCreateManyRecordedByInputEnvelope = {
    data: AttendanceCreateManyRecordedByInput | AttendanceCreateManyRecordedByInput[]
    skipDuplicates?: boolean
  }

  export type DedicationCreateWithoutRecordedByInput = {
    id?: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutDedicationsInput
  }

  export type DedicationUncheckedCreateWithoutRecordedByInput = {
    id?: string
    memberId: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type DedicationCreateOrConnectWithoutRecordedByInput = {
    where: DedicationWhereUniqueInput
    create: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput>
  }

  export type DedicationCreateManyRecordedByInputEnvelope = {
    data: DedicationCreateManyRecordedByInput | DedicationCreateManyRecordedByInput[]
    skipDuplicates?: boolean
  }

  export type IgihandeUpsertWithoutLeaderInput = {
    update: XOR<IgihandeUpdateWithoutLeaderInput, IgihandeUncheckedUpdateWithoutLeaderInput>
    create: XOR<IgihandeCreateWithoutLeaderInput, IgihandeUncheckedCreateWithoutLeaderInput>
    where?: IgihandeWhereInput
  }

  export type IgihandeUpdateToOneWithWhereWithoutLeaderInput = {
    where?: IgihandeWhereInput
    data: XOR<IgihandeUpdateWithoutLeaderInput, IgihandeUncheckedUpdateWithoutLeaderInput>
  }

  export type IgihandeUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutIgihandeNestedInput
  }

  export type IgihandeUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutIgihandeNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    stage?: EnumTaskStageFilter<"Task"> | $Enums.TaskStage
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    assignedToId?: StringNullableFilter<"Task"> | string | null
    relatedMemberId?: StringNullableFilter<"Task"> | string | null
    createdById?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutRecordedByInput, AttendanceUncheckedUpdateWithoutRecordedByInput>
    create: XOR<AttendanceCreateWithoutRecordedByInput, AttendanceUncheckedCreateWithoutRecordedByInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutRecordedByInput, AttendanceUncheckedUpdateWithoutRecordedByInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutRecordedByInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutRecordedByInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    memberId?: StringFilter<"Attendance"> | string
    serviceId?: StringFilter<"Attendance"> | string
    present?: BoolFilter<"Attendance"> | boolean
    notes?: StringNullableFilter<"Attendance"> | string | null
    recordedById?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type DedicationUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: DedicationWhereUniqueInput
    update: XOR<DedicationUpdateWithoutRecordedByInput, DedicationUncheckedUpdateWithoutRecordedByInput>
    create: XOR<DedicationCreateWithoutRecordedByInput, DedicationUncheckedCreateWithoutRecordedByInput>
  }

  export type DedicationUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: DedicationWhereUniqueInput
    data: XOR<DedicationUpdateWithoutRecordedByInput, DedicationUncheckedUpdateWithoutRecordedByInput>
  }

  export type DedicationUpdateManyWithWhereWithoutRecordedByInput = {
    where: DedicationScalarWhereInput
    data: XOR<DedicationUpdateManyMutationInput, DedicationUncheckedUpdateManyWithoutRecordedByInput>
  }

  export type DedicationScalarWhereInput = {
    AND?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
    OR?: DedicationScalarWhereInput[]
    NOT?: DedicationScalarWhereInput | DedicationScalarWhereInput[]
    id?: StringFilter<"Dedication"> | string
    memberId?: StringFilter<"Dedication"> | string
    type?: EnumDedicationTypeFilter<"Dedication"> | $Enums.DedicationType
    description?: StringNullableFilter<"Dedication"> | string | null
    date?: DateTimeFilter<"Dedication"> | Date | string
    recordedById?: StringFilter<"Dedication"> | string
    createdAt?: DateTimeFilter<"Dedication"> | Date | string
  }

  export type IgihandeCreateWithoutMembersInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    leader?: UserCreateNestedOneWithoutIgihandeInput
  }

  export type IgihandeUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    leaderId?: string | null
    createdAt?: Date | string
    leader?: UserUncheckedCreateNestedOneWithoutIgihandeInput
  }

  export type IgihandeCreateOrConnectWithoutMembersInput = {
    where: IgihandeWhereUniqueInput
    create: XOR<IgihandeCreateWithoutMembersInput, IgihandeUncheckedCreateWithoutMembersInput>
  }

  export type AttendanceCreateWithoutMemberInput = {
    id?: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutAttendancesInput
    recordedBy: UserCreateNestedOneWithoutAttendanceRecordedInput
  }

  export type AttendanceUncheckedCreateWithoutMemberInput = {
    id?: string
    serviceId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutMemberInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput>
  }

  export type AttendanceCreateManyMemberInputEnvelope = {
    data: AttendanceCreateManyMemberInput | AttendanceCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type DedicationCreateWithoutMemberInput = {
    id?: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    createdAt?: Date | string
    recordedBy: UserCreateNestedOneWithoutDedicationsRecordedInput
  }

  export type DedicationUncheckedCreateWithoutMemberInput = {
    id?: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    recordedById: string
    createdAt?: Date | string
  }

  export type DedicationCreateOrConnectWithoutMemberInput = {
    where: DedicationWhereUniqueInput
    create: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput>
  }

  export type DedicationCreateManyMemberInputEnvelope = {
    data: DedicationCreateManyMemberInput | DedicationCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutRelatedMemberInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutTasksAssignedInput
    createdBy: UserCreateNestedOneWithoutTasksCreatedInput
  }

  export type TaskUncheckedCreateWithoutRelatedMemberInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutRelatedMemberInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput>
  }

  export type TaskCreateManyRelatedMemberInputEnvelope = {
    data: TaskCreateManyRelatedMemberInput | TaskCreateManyRelatedMemberInput[]
    skipDuplicates?: boolean
  }

  export type IgihandeUpsertWithoutMembersInput = {
    update: XOR<IgihandeUpdateWithoutMembersInput, IgihandeUncheckedUpdateWithoutMembersInput>
    create: XOR<IgihandeCreateWithoutMembersInput, IgihandeUncheckedCreateWithoutMembersInput>
    where?: IgihandeWhereInput
  }

  export type IgihandeUpdateToOneWithWhereWithoutMembersInput = {
    where?: IgihandeWhereInput
    data: XOR<IgihandeUpdateWithoutMembersInput, IgihandeUncheckedUpdateWithoutMembersInput>
  }

  export type IgihandeUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneWithoutIgihandeNestedInput
  }

  export type IgihandeUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUncheckedUpdateOneWithoutIgihandeNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutMemberInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutMemberInput, AttendanceUncheckedUpdateWithoutMemberInput>
    create: XOR<AttendanceCreateWithoutMemberInput, AttendanceUncheckedCreateWithoutMemberInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutMemberInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutMemberInput, AttendanceUncheckedUpdateWithoutMemberInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutMemberInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutMemberInput>
  }

  export type DedicationUpsertWithWhereUniqueWithoutMemberInput = {
    where: DedicationWhereUniqueInput
    update: XOR<DedicationUpdateWithoutMemberInput, DedicationUncheckedUpdateWithoutMemberInput>
    create: XOR<DedicationCreateWithoutMemberInput, DedicationUncheckedCreateWithoutMemberInput>
  }

  export type DedicationUpdateWithWhereUniqueWithoutMemberInput = {
    where: DedicationWhereUniqueInput
    data: XOR<DedicationUpdateWithoutMemberInput, DedicationUncheckedUpdateWithoutMemberInput>
  }

  export type DedicationUpdateManyWithWhereWithoutMemberInput = {
    where: DedicationScalarWhereInput
    data: XOR<DedicationUpdateManyMutationInput, DedicationUncheckedUpdateManyWithoutMemberInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutRelatedMemberInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutRelatedMemberInput, TaskUncheckedUpdateWithoutRelatedMemberInput>
    create: XOR<TaskCreateWithoutRelatedMemberInput, TaskUncheckedCreateWithoutRelatedMemberInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutRelatedMemberInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutRelatedMemberInput, TaskUncheckedUpdateWithoutRelatedMemberInput>
  }

  export type TaskUpdateManyWithWhereWithoutRelatedMemberInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutRelatedMemberInput>
  }

  export type UserCreateWithoutIgihandeInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    tasksCreated?: TaskCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutIgihandeInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    tasksCreated?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceUncheckedCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutIgihandeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
  }

  export type MemberCreateWithoutIgihandeInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceCreateNestedManyWithoutMemberInput
    dedications?: DedicationCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberUncheckedCreateWithoutIgihandeInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutMemberInput
    dedications?: DedicationUncheckedCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskUncheckedCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberCreateOrConnectWithoutIgihandeInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput>
  }

  export type MemberCreateManyIgihandeInputEnvelope = {
    data: MemberCreateManyIgihandeInput | MemberCreateManyIgihandeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIgihandeInput = {
    update: XOR<UserUpdateWithoutIgihandeInput, UserUncheckedUpdateWithoutIgihandeInput>
    create: XOR<UserCreateWithoutIgihandeInput, UserUncheckedCreateWithoutIgihandeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIgihandeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIgihandeInput, UserUncheckedUpdateWithoutIgihandeInput>
  }

  export type UserUpdateWithoutIgihandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutIgihandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutIgihandeInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutIgihandeInput, MemberUncheckedUpdateWithoutIgihandeInput>
    create: XOR<MemberCreateWithoutIgihandeInput, MemberUncheckedCreateWithoutIgihandeInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutIgihandeInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutIgihandeInput, MemberUncheckedUpdateWithoutIgihandeInput>
  }

  export type MemberUpdateManyWithWhereWithoutIgihandeInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutIgihandeInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    membershipNo?: StringFilter<"Member"> | string
    firstName?: StringFilter<"Member"> | string
    lastName?: StringFilter<"Member"> | string
    nationalId?: StringFilter<"Member"> | string
    phone?: StringFilter<"Member"> | string
    dateOfBirth?: DateTimeNullableFilter<"Member"> | Date | string | null
    gender?: EnumGenderFilter<"Member"> | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFilter<"Member"> | $Enums.MaritalStatus
    baptismDate?: DateTimeNullableFilter<"Member"> | Date | string | null
    photoUrl?: StringNullableFilter<"Member"> | string | null
    province?: StringFilter<"Member"> | string
    district?: StringFilter<"Member"> | string
    sector?: StringFilter<"Member"> | string
    cell?: StringFilter<"Member"> | string
    village?: StringFilter<"Member"> | string
    igihandeId?: StringFilter<"Member"> | string
    status?: EnumMemberStatusFilter<"Member"> | $Enums.MemberStatus
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type AttendanceCreateWithoutServiceInput = {
    id?: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutAttendancesInput
    recordedBy: UserCreateNestedOneWithoutAttendanceRecordedInput
  }

  export type AttendanceUncheckedCreateWithoutServiceInput = {
    id?: string
    memberId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutServiceInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput>
  }

  export type AttendanceCreateManyServiceInputEnvelope = {
    data: AttendanceCreateManyServiceInput | AttendanceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutServiceInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutServiceInput, AttendanceUncheckedUpdateWithoutServiceInput>
    create: XOR<AttendanceCreateWithoutServiceInput, AttendanceUncheckedCreateWithoutServiceInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutServiceInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutServiceInput, AttendanceUncheckedUpdateWithoutServiceInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutServiceInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutServiceInput>
  }

  export type MemberCreateWithoutAttendancesInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    igihande: IgihandeCreateNestedOneWithoutMembersInput
    dedications?: DedicationCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberUncheckedCreateWithoutAttendancesInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    dedications?: DedicationUncheckedCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskUncheckedCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberCreateOrConnectWithoutAttendancesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAttendancesInput, MemberUncheckedCreateWithoutAttendancesInput>
  }

  export type ServiceCreateWithoutAttendancesInput = {
    id?: string
    type: $Enums.ServiceType
    title?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type ServiceUncheckedCreateWithoutAttendancesInput = {
    id?: string
    type: $Enums.ServiceType
    title?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutAttendancesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAttendancesInput, ServiceUncheckedCreateWithoutAttendancesInput>
  }

  export type UserCreateWithoutAttendanceRecordedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    igihande?: IgihandeCreateNestedOneWithoutLeaderInput
    tasksCreated?: TaskCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedToInput
    dedicationsRecorded?: DedicationCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutAttendanceRecordedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
    tasksCreated?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    dedicationsRecorded?: DedicationUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutAttendanceRecordedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceRecordedInput, UserUncheckedCreateWithoutAttendanceRecordedInput>
  }

  export type MemberUpsertWithoutAttendancesInput = {
    update: XOR<MemberUpdateWithoutAttendancesInput, MemberUncheckedUpdateWithoutAttendancesInput>
    create: XOR<MemberCreateWithoutAttendancesInput, MemberUncheckedCreateWithoutAttendancesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutAttendancesInput, MemberUncheckedUpdateWithoutAttendancesInput>
  }

  export type MemberUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneRequiredWithoutMembersNestedInput
    dedications?: DedicationUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    igihandeId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dedications?: DedicationUncheckedUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUncheckedUpdateManyWithoutRelatedMemberNestedInput
  }

  export type ServiceUpsertWithoutAttendancesInput = {
    update: XOR<ServiceUpdateWithoutAttendancesInput, ServiceUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ServiceCreateWithoutAttendancesInput, ServiceUncheckedCreateWithoutAttendancesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAttendancesInput, ServiceUncheckedUpdateWithoutAttendancesInput>
  }

  export type ServiceUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAttendanceRecordedInput = {
    update: XOR<UserUpdateWithoutAttendanceRecordedInput, UserUncheckedUpdateWithoutAttendanceRecordedInput>
    create: XOR<UserCreateWithoutAttendanceRecordedInput, UserUncheckedCreateWithoutAttendanceRecordedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceRecordedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceRecordedInput, UserUncheckedUpdateWithoutAttendanceRecordedInput>
  }

  export type UserUpdateWithoutAttendanceRecordedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneWithoutLeaderNestedInput
    tasksCreated?: TaskUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedToNestedInput
    dedicationsRecorded?: DedicationUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceRecordedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    dedicationsRecorded?: DedicationUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type MemberCreateWithoutDedicationsInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    igihande: IgihandeCreateNestedOneWithoutMembersInput
    attendances?: AttendanceCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberUncheckedCreateWithoutDedicationsInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutMemberInput
    relatedTasks?: TaskUncheckedCreateNestedManyWithoutRelatedMemberInput
  }

  export type MemberCreateOrConnectWithoutDedicationsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutDedicationsInput, MemberUncheckedCreateWithoutDedicationsInput>
  }

  export type UserCreateWithoutDedicationsRecordedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    igihande?: IgihandeCreateNestedOneWithoutLeaderInput
    tasksCreated?: TaskCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutDedicationsRecordedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
    tasksCreated?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutDedicationsRecordedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDedicationsRecordedInput, UserUncheckedCreateWithoutDedicationsRecordedInput>
  }

  export type MemberUpsertWithoutDedicationsInput = {
    update: XOR<MemberUpdateWithoutDedicationsInput, MemberUncheckedUpdateWithoutDedicationsInput>
    create: XOR<MemberCreateWithoutDedicationsInput, MemberUncheckedCreateWithoutDedicationsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutDedicationsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutDedicationsInput, MemberUncheckedUpdateWithoutDedicationsInput>
  }

  export type MemberUpdateWithoutDedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneRequiredWithoutMembersNestedInput
    attendances?: AttendanceUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutDedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    igihandeId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUncheckedUpdateManyWithoutRelatedMemberNestedInput
  }

  export type UserUpsertWithoutDedicationsRecordedInput = {
    update: XOR<UserUpdateWithoutDedicationsRecordedInput, UserUncheckedUpdateWithoutDedicationsRecordedInput>
    create: XOR<UserCreateWithoutDedicationsRecordedInput, UserUncheckedCreateWithoutDedicationsRecordedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDedicationsRecordedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDedicationsRecordedInput, UserUncheckedUpdateWithoutDedicationsRecordedInput>
  }

  export type UserUpdateWithoutDedicationsRecordedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneWithoutLeaderNestedInput
    tasksCreated?: TaskUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDedicationsRecordedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type UserCreateWithoutTasksAssignedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    igihande?: IgihandeCreateNestedOneWithoutLeaderInput
    tasksCreated?: TaskCreateNestedManyWithoutCreatedByInput
    attendanceRecorded?: AttendanceCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutTasksAssignedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
    tasksCreated?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    attendanceRecorded?: AttendanceUncheckedCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutTasksAssignedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
  }

  export type MemberCreateWithoutRelatedTasksInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    igihande: IgihandeCreateNestedOneWithoutMembersInput
    attendances?: AttendanceCreateNestedManyWithoutMemberInput
    dedications?: DedicationCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutRelatedTasksInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    igihandeId: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutMemberInput
    dedications?: DedicationUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutRelatedTasksInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutRelatedTasksInput, MemberUncheckedCreateWithoutRelatedTasksInput>
  }

  export type UserCreateWithoutTasksCreatedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    igihande?: IgihandeCreateNestedOneWithoutLeaderInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationCreateNestedManyWithoutRecordedByInput
  }

  export type UserUncheckedCreateWithoutTasksCreatedInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    role?: $Enums.Role
    igihandeId?: string | null
    createdAt?: Date | string
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    attendanceRecorded?: AttendanceUncheckedCreateNestedManyWithoutRecordedByInput
    dedicationsRecorded?: DedicationUncheckedCreateNestedManyWithoutRecordedByInput
  }

  export type UserCreateOrConnectWithoutTasksCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksCreatedInput, UserUncheckedCreateWithoutTasksCreatedInput>
  }

  export type UserUpsertWithoutTasksAssignedInput = {
    update: XOR<UserUpdateWithoutTasksAssignedInput, UserUncheckedUpdateWithoutTasksAssignedInput>
    create: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksAssignedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksAssignedInput, UserUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type UserUpdateWithoutTasksAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneWithoutLeaderNestedInput
    tasksCreated?: TaskUpdateManyWithoutCreatedByNestedInput
    attendanceRecorded?: AttendanceUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksCreated?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    attendanceRecorded?: AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type MemberUpsertWithoutRelatedTasksInput = {
    update: XOR<MemberUpdateWithoutRelatedTasksInput, MemberUncheckedUpdateWithoutRelatedTasksInput>
    create: XOR<MemberCreateWithoutRelatedTasksInput, MemberUncheckedCreateWithoutRelatedTasksInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutRelatedTasksInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutRelatedTasksInput, MemberUncheckedUpdateWithoutRelatedTasksInput>
  }

  export type MemberUpdateWithoutRelatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneRequiredWithoutMembersNestedInput
    attendances?: AttendanceUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutRelatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    igihandeId?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type UserUpsertWithoutTasksCreatedInput = {
    update: XOR<UserUpdateWithoutTasksCreatedInput, UserUncheckedUpdateWithoutTasksCreatedInput>
    create: XOR<UserCreateWithoutTasksCreatedInput, UserUncheckedCreateWithoutTasksCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksCreatedInput, UserUncheckedUpdateWithoutTasksCreatedInput>
  }

  export type UserUpdateWithoutTasksCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    igihande?: IgihandeUpdateOneWithoutLeaderNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUpdateManyWithoutRecordedByNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    igihandeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    attendanceRecorded?: AttendanceUncheckedUpdateManyWithoutRecordedByNestedInput
    dedicationsRecorded?: DedicationUncheckedUpdateManyWithoutRecordedByNestedInput
  }

  export type TaskCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    relatedMemberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyAssignedToInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    relatedMemberId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateManyRecordedByInput = {
    id?: string
    memberId: string
    serviceId: string
    present?: boolean
    notes?: string | null
    createdAt?: Date | string
  }

  export type DedicationCreateManyRecordedByInput = {
    id?: string
    memberId: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutTasksAssignedNestedInput
    relatedMember?: MemberUpdateOneWithoutRelatedTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedMember?: MemberUpdateOneWithoutRelatedTasksNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksCreatedNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relatedMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUpdateWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutAttendancesNestedInput
    service?: ServiceUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationUpdateWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutDedicationsNestedInput
  }

  export type DedicationUncheckedUpdateWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationUncheckedUpdateManyWithoutRecordedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyMemberInput = {
    id?: string
    serviceId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type DedicationCreateManyMemberInput = {
    id?: string
    type: $Enums.DedicationType
    description?: string | null
    date: Date | string
    recordedById: string
    createdAt?: Date | string
  }

  export type TaskCreateManyRelatedMemberInput = {
    id?: string
    title: string
    description?: string | null
    stage?: $Enums.TaskStage
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    assignedToId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutAttendancesNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutAttendanceRecordedNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedBy?: UserUpdateOneRequiredWithoutDedicationsRecordedNestedInput
  }

  export type DedicationUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DedicationUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDedicationTypeFieldUpdateOperationsInput | $Enums.DedicationType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutRelatedMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutTasksAssignedNestedInput
    createdBy?: UserUpdateOneRequiredWithoutTasksCreatedNestedInput
  }

  export type TaskUncheckedUpdateWithoutRelatedMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutRelatedMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stage?: EnumTaskStageFieldUpdateOperationsInput | $Enums.TaskStage
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyIgihandeInput = {
    id?: string
    membershipNo: string
    firstName: string
    lastName: string
    nationalId: string
    phone: string
    dateOfBirth?: Date | string | null
    gender: $Enums.Gender
    maritalStatus: $Enums.MaritalStatus
    baptismDate?: Date | string | null
    photoUrl?: string | null
    province: string
    district: string
    sector: string
    cell: string
    village: string
    status?: $Enums.MemberStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutIgihandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutIgihandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: AttendanceUncheckedUpdateManyWithoutMemberNestedInput
    dedications?: DedicationUncheckedUpdateManyWithoutMemberNestedInput
    relatedTasks?: TaskUncheckedUpdateManyWithoutRelatedMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutIgihandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipNo?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    baptismDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    status?: EnumMemberStatusFieldUpdateOperationsInput | $Enums.MemberStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyServiceInput = {
    id?: string
    memberId: string
    present?: boolean
    notes?: string | null
    recordedById: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutAttendancesNestedInput
    recordedBy?: UserUpdateOneRequiredWithoutAttendanceRecordedNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    present?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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