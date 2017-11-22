// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');

function serialize_accounts_Account(arg) {
  if (!(arg instanceof accounts_accounts_pb.Account)) {
    throw new Error('Expected argument of type accounts.Account');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_Account(buffer_arg) {
  return accounts_accounts_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_AccountID(arg) {
  if (!(arg instanceof accounts_accounts_pb.AccountID)) {
    throw new Error('Expected argument of type accounts.AccountID');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_AccountID(buffer_arg) {
  return accounts_accounts_pb.AccountID.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_AccountUsername(arg) {
  if (!(arg instanceof accounts_accounts_pb.AccountUsername)) {
    throw new Error('Expected argument of type accounts.AccountUsername');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_AccountUsername(buffer_arg) {
  return accounts_accounts_pb.AccountUsername.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_GetAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountResponse)) {
    throw new Error('Expected argument of type accounts.GetAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_GetAccountResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_StatusResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.StatusResponse)) {
    throw new Error('Expected argument of type accounts.StatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_accounts_StatusResponse(buffer_arg) {
  return accounts_accounts_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Accounts service definition.
var AccountServiceService = exports.AccountServiceService = {
  // Retrieve account by username
  getAccountByID: {
    path: '/accounts.AccountService/GetAccountByID',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.AccountID,
    responseType: accounts_accounts_pb.GetAccountResponse,
    requestSerialize: serialize_accounts_AccountID,
    requestDeserialize: deserialize_accounts_AccountID,
    responseSerialize: serialize_accounts_GetAccountResponse,
    responseDeserialize: deserialize_accounts_GetAccountResponse,
  },
  // Retrieve account by username
  getAccountByUsername: {
    path: '/accounts.AccountService/GetAccountByUsername',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.AccountUsername,
    responseType: accounts_accounts_pb.GetAccountResponse,
    requestSerialize: serialize_accounts_AccountUsername,
    requestDeserialize: deserialize_accounts_AccountUsername,
    responseSerialize: serialize_accounts_GetAccountResponse,
    responseDeserialize: deserialize_accounts_GetAccountResponse,
  },
  // Creates new account. Id must be empty.
  createAccount: {
    path: '/accounts.AccountService/CreateAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.Account,
    responseType: accounts_accounts_pb.StatusResponse,
    requestSerialize: serialize_accounts_Account,
    requestDeserialize: deserialize_accounts_Account,
    responseSerialize: serialize_accounts_StatusResponse,
    responseDeserialize: deserialize_accounts_StatusResponse,
  },
  // Updates all fields in the given account. Id must be set.
  updateAccount: {
    path: '/accounts.AccountService/UpdateAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.Account,
    responseType: accounts_accounts_pb.StatusResponse,
    requestSerialize: serialize_accounts_Account,
    requestDeserialize: deserialize_accounts_Account,
    responseSerialize: serialize_accounts_StatusResponse,
    responseDeserialize: deserialize_accounts_StatusResponse,
  },
  // Deletes the accounts given its id.
  deleteAccount: {
    path: '/accounts.AccountService/DeleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.AccountID,
    responseType: accounts_accounts_pb.StatusResponse,
    requestSerialize: serialize_accounts_AccountID,
    requestDeserialize: deserialize_accounts_AccountID,
    responseSerialize: serialize_accounts_StatusResponse,
    responseDeserialize: deserialize_accounts_StatusResponse,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
