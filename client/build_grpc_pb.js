// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var build_pb = require('./build_pb.js');

function serialize_chromatic_capture_proto_BuildRequest(arg) {
  if (!(arg instanceof build_pb.BuildRequest)) {
    throw new Error('Expected argument of type chromatic_capture_proto.BuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chromatic_capture_proto_BuildRequest(buffer_arg) {
  return build_pb.BuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chromatic_capture_proto_BuildResponse(arg) {
  if (!(arg instanceof build_pb.BuildResponse)) {
    throw new Error('Expected argument of type chromatic_capture_proto.BuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chromatic_capture_proto_BuildResponse(buffer_arg) {
  return build_pb.BuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BuildServiceService = exports.BuildServiceService = {
  createBuild: {
    path: '/chromatic_capture_proto.BuildService/CreateBuild',
    requestStream: false,
    responseStream: false,
    requestType: build_pb.BuildRequest,
    responseType: build_pb.BuildResponse,
    requestSerialize: serialize_chromatic_capture_proto_BuildRequest,
    requestDeserialize: deserialize_chromatic_capture_proto_BuildRequest,
    responseSerialize: serialize_chromatic_capture_proto_BuildResponse,
    responseDeserialize: deserialize_chromatic_capture_proto_BuildResponse,
  },
};

exports.BuildServiceClient = grpc.makeGenericClientConstructor(BuildServiceService);
