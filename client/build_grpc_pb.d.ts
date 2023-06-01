// package: chromatic_capture_proto
// file: build.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as build_pb from "./build_pb";

interface IBuildServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBuild: IBuildServiceService_ICreateBuild;
}

interface IBuildServiceService_ICreateBuild extends grpc.MethodDefinition<build_pb.BuildRequest, build_pb.BuildResponse> {
    path: "/chromatic_capture_proto.BuildService/CreateBuild";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<build_pb.BuildRequest>;
    requestDeserialize: grpc.deserialize<build_pb.BuildRequest>;
    responseSerialize: grpc.serialize<build_pb.BuildResponse>;
    responseDeserialize: grpc.deserialize<build_pb.BuildResponse>;
}

export const BuildServiceService: IBuildServiceService;

export interface IBuildServiceServer extends grpc.UntypedServiceImplementation {
    createBuild: grpc.handleUnaryCall<build_pb.BuildRequest, build_pb.BuildResponse>;
}

export interface IBuildServiceClient {
    createBuild(request: build_pb.BuildRequest, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
    createBuild(request: build_pb.BuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
    createBuild(request: build_pb.BuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
}

export class BuildServiceClient extends grpc.Client implements IBuildServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createBuild(request: build_pb.BuildRequest, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
    public createBuild(request: build_pb.BuildRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
    public createBuild(request: build_pb.BuildRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: build_pb.BuildResponse) => void): grpc.ClientUnaryCall;
}
