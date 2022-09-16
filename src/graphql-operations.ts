import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddRoleDto = {
  /** Идентификатор пользователя */
  userId: Scalars['Float'];
  /** Роль */
  value: Scalars['String'];
};

export type BanUserDto = {
  /** Причина бана */
  banReason: Scalars['String'];
  /** Идентификатор пользователя */
  userId: Scalars['Float'];
};

export type CreateRoleDto = {
  /** Описание роли */
  description: Scalars['String'];
  /** Роль */
  value: Scalars['String'];
};

export type CreateUserDto = {
  /** Email */
  email: Scalars['String'];
  /** Пароль */
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Выдать роль пользователю */
  addRole: User;
  /** Забанить пользователя */
  banUser: User;
  /** Добавление роли */
  createRole: Role;
  /** Добавление юзера */
  createUser: User;
  /** Удалить роль пользователю */
  deleteRole: User;
  /** Вход */
  login: User;
  /** Регистрация */
  registration: User;
};


export type MutationAddRoleArgs = {
  dto: AddRoleDto;
};


export type MutationBanUserArgs = {
  dto: BanUserDto;
};


export type MutationCreateRoleArgs = {
  dto: CreateRoleDto;
};


export type MutationCreateUserArgs = {
  dto: CreateUserDto;
};


export type MutationDeleteRoleArgs = {
  dto: AddRoleDto;
};


export type MutationLoginArgs = {
  userDto: CreateUserDto;
};


export type MutationRegistrationArgs = {
  userDto: CreateUserDto;
};

export type Query = {
  __typename?: 'Query';
  /** Получение всех пользователей */
  getAllUsers: Array<User>;
  /** Запрос роли по значению */
  getRoleByValue: Role;
  /** Получение пользователя по email */
  getUserByEmail: User;
};


export type QueryGetRoleByValueArgs = {
  value: Scalars['String'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String'];
};

/** Роли */
export type Role = {
  __typename?: 'Role';
  /** Описание роли */
  description: Scalars['String'];
  /** Идентификатор */
  id: Scalars['ID'];
  /** Роль */
  value: Scalars['String'];
};

/** Пользователи */
export type User = {
  __typename?: 'User';
  /** Причина блокировки */
  banReason?: Maybe<Scalars['String']>;
  /** Блокировка */
  banned: Scalars['Boolean'];
  /** Email */
  email: Scalars['String'];
  /** Идентификатор */
  id: Scalars['ID'];
  /** Роли */
  roles: Array<Role>;
  /** Статус */
  status?: Maybe<Scalars['String']>;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: string, banned: boolean, banReason?: string | null, status?: string | null, email: string, roles: Array<{ __typename?: 'Role', description: string, id: string, value: string }> }> };


export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"banReason"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;