import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createShow: Show;
  editShow: Show;
  removeOrder: Array<Scalars['String']>;
  removeShow: Scalars['String'];
  removeUser: Scalars['String'];
  signin: UserSession;
  signout: Scalars['Boolean'];
  signup: User;
  updateUser: User;
};


export type MutationCreateOrderArgs = {
  ticketId: Scalars['String'];
};


export type MutationCreateShowArgs = {
  dateAndTIme: Scalars['Date'];
  imdbApiId: Scalars['String'];
  price: Scalars['Int'];
  ticketAmount: Scalars['Int'];
};


export type MutationEditShowArgs = {
  dateAndTIme: Scalars['Date'];
  imdbApiId: Scalars['String'];
  price: Scalars['Int'];
  ticketAmount: Scalars['Int'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String'];
};


export type MutationRemoveShowArgs = {
  id: Scalars['ID'];
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  password?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  status: Scalars['String'];
  ticket: Ticket;
  ticketId: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Show?: Maybe<Show>;
  Shows: Array<Show>;
  Ticket?: Maybe<Ticket>;
  Tickets: Array<Ticket>;
  currentUser?: Maybe<UserSession>;
  order: Order;
  orders: Array<Order>;
};


export type QueryShowArgs = {
  id: Scalars['ID'];
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryTicketsArgs = {
  showId: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type Show = {
  __typename?: 'Show';
  dateAndTIme: Scalars['Date'];
  id: Scalars['ID'];
  imdbApiId: Scalars['String'];
  isSoldOut?: Maybe<Scalars['Boolean']>;
  price: Scalars['Int'];
  ticketAmount: Scalars['Int'];
};

export type Ticket = {
  __typename?: 'Ticket';
  id: Scalars['ID'];
  isTaken: Scalars['Boolean'];
  seatId: Scalars['Int'];
  showId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
};

export type UserSession = {
  __typename?: 'UserSession';
  user: User;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  Query: ResolverTypeWrapper<{}>;
  Show: ResolverTypeWrapper<Show>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  User: ResolverTypeWrapper<User>;
  UserSession: ResolverTypeWrapper<UserSession>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Order: Order;
  Query: {};
  Show: Show;
  String: Scalars['String'];
  Ticket: Ticket;
  User: User;
  UserSession: UserSession;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'ticketId'>>;
  createShow?: Resolver<ResolversTypes['Show'], ParentType, ContextType, RequireFields<MutationCreateShowArgs, 'dateAndTIme' | 'imdbApiId' | 'price' | 'ticketAmount'>>;
  editShow?: Resolver<ResolversTypes['Show'], ParentType, ContextType, RequireFields<MutationEditShowArgs, 'dateAndTIme' | 'imdbApiId' | 'price' | 'ticketAmount'>>;
  removeOrder?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationRemoveOrderArgs, 'id'>>;
  removeShow?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationRemoveShowArgs, 'id'>>;
  removeUser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signin?: Resolver<ResolversTypes['UserSession'], ParentType, ContextType, RequireFields<MutationSigninArgs, 'email' | 'password'>>;
  signout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  signup?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'password'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'email' | 'isAdmin'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticket?: Resolver<ResolversTypes['Ticket'], ParentType, ContextType>;
  ticketId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  Show?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<QueryShowArgs, 'id'>>;
  Shows?: Resolver<Array<ResolversTypes['Show']>, ParentType, ContextType>;
  Ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<QueryTicketArgs, 'id'>>;
  Tickets?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<QueryTicketsArgs, 'showId'>>;
  currentUser?: Resolver<Maybe<ResolversTypes['UserSession']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
};

export type ShowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']> = {
  dateAndTIme?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imdbApiId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isSoldOut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticketAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isTaken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seatId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  showId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSession'] = ResolversParentTypes['UserSession']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Show?: ShowResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserSession?: UserSessionResolvers<ContextType>;
};

